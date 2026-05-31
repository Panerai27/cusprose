#!/usr/bin/env /usr/bin/python3
"""
Splice freshly-generated horoscope readings into horoscopes.json.

Usage:
    /usr/bin/python3 scripts/update_horoscopes.py <period> <new_block.json>

<period> is one of: daily weekly monthly yearly
<new_block.json> must be: { "<slug>": { "quote":..., "body":[..,..], "ratings":{love,work,money,mood} }, ... 12 signs }

Validates structure, splices into the named period, stamps meta.generated (Beijing date),
and writes horoscopes.json back. Exits non-zero on any validation failure so a bad
generation never reaches the repo.
"""
import json, sys, os
from datetime import datetime, timezone, timedelta

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET = os.path.join(ROOT, "src", "data", "horoscopes.json")
SLUGS = ["aries","taurus","gemini","cancer","leo","virgo","libra","scorpio",
         "sagittarius","capricorn","aquarius","pisces"]
PERIODS = {"daily","weekly","monthly","yearly"}

def fail(msg):
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)

def validate_block(block):
    missing = [s for s in SLUGS if s not in block]
    if missing:
        fail(f"missing signs: {missing}")
    for s in SLUGS:
        e = block[s]
        if not isinstance(e.get("quote"), str) or not e["quote"].strip():
            fail(f"{s}: empty quote")
        if not (isinstance(e.get("body"), list) and len(e["body"]) == 2
                and all(isinstance(p, str) and len(p) > 40 for p in e["body"])):
            fail(f"{s}: body must be 2 paragraphs of real text")
        r = e.get("ratings", {})
        if set(r) != {"love","work","money","mood"} or not all(
                isinstance(r[k], int) and 1 <= r[k] <= 5 for k in r):
            fail(f"{s}: ratings must be int 1-5 for love/work/money/mood")

def main():
    if len(sys.argv) != 3:
        fail("usage: update_horoscopes.py <period> <new_block.json>")
    period, src = sys.argv[1], sys.argv[2]
    if period not in PERIODS:
        fail(f"period must be one of {PERIODS}")
    with open(src) as f:
        block = json.load(f)
    validate_block(block)

    with open(TARGET) as f:
        data = json.load(f)
    data[period] = block
    beijing = datetime.now(timezone(timedelta(hours=8)))
    data.setdefault("meta", {})
    data["meta"][f"{period}_generated"] = beijing.strftime("%Y-%m-%d")
    data["meta"]["generated"] = beijing.strftime("%Y-%m-%d %H:%M %Z")

    with open(TARGET, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"OK: spliced {period} ({len(block)} signs), stamped {data['meta']['generated']}")

if __name__ == "__main__":
    main()
