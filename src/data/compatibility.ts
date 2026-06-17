import { SIGN_BY_SLUG } from './signs';

export interface CompatPair {
  slug: string;
  sign1: string;
  sign2: string;
  title: string;
  tagline: string;
  overall: number;
  scores: {
    love: number;
    friendship: number;
    communication: number;
    trust: number;
    intimacy: number;
  };
  body: string[];
  strengths: string[];
  challenges: string[];
  faq?: { q: string; a: string }[];
}

// SKELETON — replace with full 144-pair data
export const COMPAT_PAIRS: CompatPair[] = [
  {
    slug: 'aries-leo',
    sign1: 'aries',
    sign2: 'leo',
    title: 'Aries & Leo',
    tagline: 'Two fires, one stage. The room gets louder when you walk in together.',
    overall: 90,
    scores: { love: 92, friendship: 95, communication: 82, trust: 85, intimacy: 88 },
    body: [
      'Aries and Leo are both fire signs, and their connection burns bright from the first meeting. There is an instant recognition — a sense that you have found someone who matches your energy, your ambition, your appetite for life.',
      'This pairing thrives on mutual admiration. Aries respects Leo\'s confidence; Leo is drawn to Aries\' fearlessness. Together, you amplify each other rather than compete — though the occasional clash of egos is inevitable.',
      'The challenge is sharing the spotlight. Both signs want to lead, and neither backs down easily. The key is learning to take turns — and recognizing that supporting your partner\'s moment doesn\'t diminish your own.',
    ],
    strengths: [
      'Shared passion and enthusiasm that keeps the relationship exciting',
      'Mutual respect and admiration that builds genuine confidence',
      'Natural chemistry that translates across romance, friendship, and collaboration',
    ],
    challenges: [
      'Power struggles when both partners want to lead',
      'Impatience with each other\'s need for attention',
      'Difficulty admitting vulnerability or asking for help',
    ],
    faq: [
      { q: 'Are Aries and Leo a good match?', a: 'Aries and Leo are one of the strongest pairings in the zodiac. Both are fire signs who share passion, energy, and a love of adventure, making this a naturally compatible match.' },
      { q: 'What challenges do Aries and Leo face?', a: 'The main challenge is ego. Both signs are strong-willed and want to lead, which can create power struggles if neither learns to compromise.' },
    ],
  },
  {
    slug: 'leo-libra',
    sign1: 'leo',
    sign2: 'libra',
    title: 'Leo & Libra',
    tagline: 'Fire meets air. The room gets warmer when you walk in together.',
    overall: 85,
    scores: { love: 88, friendship: 92, communication: 75, trust: 67, intimacy: 85 },
    body: [
      'Leo and Libra are drawn to each other like a stage to its audience. Leo brings the fire — bold, expressive, unapologetically present. Libra brings the grace — elegant, diplomatic, effortlessly charming.',
      'This pairing works because you admire in each other what you lack in yourself. Leo teaches Libra to take up space without apologizing. Libra teaches Leo that strength doesn\'t always need to be loud.',
      'The tension comes from Libra\'s indecision meeting Leo\'s impatience. Leo wants answers now; Libra wants to weigh every angle first. Learning to respect each other\'s rhythm is the work of this relationship.',
    ],
    strengths: [
      'Magnetic social chemistry — you light up every room together',
      'Complementary strengths: Leo\'s boldness balances Libra\'s diplomacy',
      'Shared love of beauty, culture, and living well',
    ],
    challenges: [
      'Leo\'s directness can feel harsh to harmony-seeking Libra',
      'Libra\'s people-pleasing may frustrate Leo\'s need for authenticity',
      'Trust requires Leo to be patient and Libra to be honest',
    ],
    faq: [
      { q: 'Are Leo and Libra compatible?', a: 'Yes — Leo and Libra are naturally drawn to each other. Fire and air fuel each other, creating a dynamic and socially vibrant partnership.' },
      { q: 'What is the biggest challenge for Leo and Libra?', a: 'Communication style: Leo is direct and Libra prefers diplomacy. Finding a middle ground between honesty and tact is the key challenge.' },
    ],
  },
];

export const PAIR_BY_SLUG: Record<string, CompatPair> = Object.fromEntries(
  COMPAT_PAIRS.map((p) => [p.slug, p])
);
