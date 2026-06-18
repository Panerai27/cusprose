#!/usr/bin/env npx tsx
/**
 * Generate horoscope readings using the Anthropic API,
 * then hand off to update_horoscopes.py for validation + splice.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... npx tsx scripts/generate_horoscopes.ts --period daily
 *   npx tsx scripts/generate_horoscopes.ts --period weekly --dry-run
 */

import Anthropic from "@anthropic-ai/sdk";
import { writeFileSync, mkdtempSync } from "fs";
import { execSync } from "child_process";
import { tmpdir } from "os";
import { join } from "path";

const SIGNS = [
  { slug: "aries", name: "Aries", element: "Fire", modality: "Cardinal", ruler: "Mars" },
  { slug: "taurus", name: "Taurus", element: "Earth", modality: "Fixed", ruler: "Venus" },
  { slug: "gemini", name: "Gemini", element: "Air", modality: "Mutable", ruler: "Mercury" },
  { slug: "cancer", name: "Cancer", element: "Water", modality: "Cardinal", ruler: "the Moon" },
  { slug: "leo", name: "Leo", element: "Fire", modality: "Fixed", ruler: "the Sun" },
  { slug: "virgo", name: "Virgo", element: "Earth", modality: "Mutable", ruler: "Mercury" },
  { slug: "libra", name: "Libra", element: "Air", modality: "Cardinal", ruler: "Venus" },
  { slug: "scorpio", name: "Scorpio", element: "Water", modality: "Fixed", ruler: "Pluto" },
  { slug: "sagittarius", name: "Sagittarius", element: "Fire", modality: "Mutable", ruler: "Jupiter" },
  { slug: "capricorn", name: "Capricorn", element: "Earth", modality: "Cardinal", ruler: "Saturn" },
  { slug: "aquarius", name: "Aquarius", element: "Air", modality: "Fixed", ruler: "Uranus" },
  { slug: "pisces", name: "Pisces", element: "Water", modality: "Mutable", ruler: "Neptune" },
];

const PERIODS = ["daily", "weekly", "monthly", "yearly"] as const;
type Period = (typeof PERIODS)[number];

function parseArgs(): { period: Period; dryRun: boolean } {
  const args = process.argv.slice(2);
  let period: Period | undefined;
  let dryRun = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--period" && args[i + 1]) {
      const p = args[++i];
      if (!PERIODS.includes(p as Period)) {
        console.error(`Invalid period: ${p}. Must be one of: ${PERIODS.join(", ")}`);
        process.exit(1);
      }
      period = p as Period;
    }
    if (args[i] === "--dry-run") dryRun = true;
  }

  if (!period) {
    console.error("Usage: generate_horoscopes.ts --period <daily|weekly|monthly|yearly> [--dry-run]");
    process.exit(1);
  }
  return { period, dryRun };
}

function buildPrompt(period: Period): string {
  const today = new Date().toISOString().slice(0, 10);

  const periodGuide: Record<Period, string> = {
    daily: `Today is ${today}. Write a daily horoscope for each sign. Each reading should feel specific to today — reference planetary movements, emotional undercurrents, or situational themes that feel immediate. Two paragraphs of literary-quality prose per sign.`,
    weekly: `The current week starts on ${today}. Write a weekly horoscope for each sign. Each reading should capture the arc of the week — an opening tension, a shift mid-week, and a resolution or question to carry forward. Two paragraphs per sign.`,
    monthly: `The current month starts on ${today}. Write a monthly horoscope for each sign. Broader strokes — themes, opportunities, and warnings that unfold over weeks. Two paragraphs per sign.`,
    yearly: `The year beginning ${today.slice(0, 4)}. Write a yearly horoscope for each sign. Grand arcs — career shifts, relationship seasons, inner growth trajectories. Two to three paragraphs per sign.`,
  };

  const signList = SIGNS.map(
    (s) => `- ${s.name}: ${s.element} sign, ${s.modality}, ruled by ${s.ruler}`
  ).join("\n");

  return `You are the astrologer behind cusprose.com — literary, warm, psychologically precise. Your writing voice: second-person address, present tense, short sentences mixed with longer meditative ones. Never cliché. Never vague. Each sign's reading must feel distinct and specific.

${periodGuide[period]}

Signs:
${signList}

Return ONLY valid JSON (no markdown, no code fences) with this exact structure:
{
  "aries": {
    "quote": "A single evocative sentence — the emotional thesis of the reading.",
    "body": ["First paragraph (80-150 words).", "Second paragraph (80-150 words)."],
    "ratings": { "love": 3, "work": 4, "money": 3, "mood": 4 }
  },
  ... (all 12 signs)
}

Rules:
- "quote" is a standalone sentence, not pulled from the body
- "body" has exactly 2 strings (paragraphs), each 80-150 words of literary prose
- "ratings" are integers 1-5, vary them meaningfully across signs
- Do NOT repeat the sign's name in the quote
- Do NOT use the word "horoscope" or "prediction" in any reading
- Vary sentence structure and metaphor across signs — no two should feel templated`;
}

async function generate(period: Period): Promise<Record<string, unknown>> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY environment variable is required");
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });

  console.log(`Generating ${period} horoscopes...`);

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8192,
    messages: [{ role: "user", content: buildPrompt(period) }],
  });

  const text = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  const parsed = JSON.parse(text);

  const slugs = SIGNS.map((s) => s.slug);
  const missing = slugs.filter((s) => !(s in parsed));
  if (missing.length > 0) {
    throw new Error(`API response missing signs: ${missing.join(", ")}`);
  }

  return parsed;
}

async function main() {
  const { period, dryRun } = parseArgs();
  const result = await generate(period);

  const tmpDir = mkdtempSync(join(tmpdir(), "horoscope-"));
  const tmpFile = join(tmpDir, `${period}.json`);
  writeFileSync(tmpFile, JSON.stringify(result, null, 2));

  console.log(`Generated ${Object.keys(result).length} signs → ${tmpFile}`);

  if (dryRun) {
    console.log("Dry run — skipping splice. Output:");
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log("Splicing into horoscopes.json...");
  try {
    const out = execSync(`python3 scripts/update_horoscopes.py ${period} "${tmpFile}"`, {
      cwd: join(import.meta.dirname!, ".."),
      encoding: "utf-8",
    });
    console.log(out.trim());
  } catch (err: any) {
    console.error("Splice failed:", err.stderr || err.message);
    process.exit(1);
  }
}

main();
