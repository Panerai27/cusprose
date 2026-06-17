export interface Hexagram {
  slug: string;
  number: number;
  name: string;
  chinese: string;
  english: string;
  trigrams: {
    upper: string;
    lower: string;
  };
  lines: ('yang' | 'yin')[];
  keywords: string[];
  judgment: string;
  image: string;
  interpretation: string;
  changingInto?: string;
  faq?: { q: string; a: string }[];
}

// SKELETON — replace with full 64-hexagram data
export const HEXAGRAMS: Hexagram[] = [
  {
    slug: '1-qian',
    number: 1,
    name: 'Qián',
    chinese: '乾',
    english: 'The Creative',
    trigrams: { upper: 'Heaven', lower: 'Heaven' },
    lines: ['yang', 'yang', 'yang', 'yang', 'yang', 'yang'],
    keywords: ['creative force', 'strength', 'heaven', 'initiative'],
    judgment: 'The Creative works sublime success, furthering through perseverance.',
    image: 'Heaven in its motion gives the image of the Creative. Thus the superior man makes himself strong and untiring.',
    interpretation: 'Hexagram 1 is pure yang energy — all six lines unbroken. It represents the primal creative force, the drive that sets things in motion. This is not brute force but purposeful, sustained power.\n\nWhen Qián appears, it signals a time of great potential. You have the energy, the vision, and the momentum. But the hexagram also warns: strength without wisdom becomes destructive. Lead, but listen. Act, but reflect.\n\nThe Creative asks you to align your ambition with something larger than yourself. Personal power is most potent when it serves a purpose beyond ego.',
    changingInto: '2-kun',
    faq: [
      { q: 'What does Hexagram 1 mean?', a: 'Hexagram 1, Qián (The Creative), represents pure creative energy and initiative. It signals a time of great potential and the power to bring ideas into reality through sustained effort.' },
      { q: 'What is the relationship between Hexagram 1 and Hexagram 2?', a: 'Hexagram 1 (The Creative) and Hexagram 2 (The Receptive) are complementary pairs — yang and yin, heaven and earth, initiative and responsiveness. Together they represent the fundamental duality of the I Ching.' },
    ],
  },
  {
    slug: '2-kun',
    number: 2,
    name: 'Kūn',
    chinese: '坤',
    english: 'The Receptive',
    trigrams: { upper: 'Earth', lower: 'Earth' },
    lines: ['yin', 'yin', 'yin', 'yin', 'yin', 'yin'],
    keywords: ['receptivity', 'devotion', 'earth', 'yielding'],
    judgment: 'The Receptive brings about sublime success, furthering through the perseverance of a mare.',
    image: 'The earth\'s condition is receptive devotion. Thus the superior man who has breadth of character carries the outer world.',
    interpretation: 'Hexagram 2 is pure yin — all six lines broken. It represents the receptive, nurturing force that gives form to the Creative\'s impulse. Without the Receptive, creative energy has nowhere to land.\n\nThis hexagram does not mean passivity. It means responsiveness — the wisdom to follow rather than lead, to support rather than initiate. The mare is strong but willing; it moves with the terrain rather than against it.\n\nWhen Kūn appears, it asks you to listen before you act. Receive what is being offered. Let the situation show you the way rather than imposing your will upon it.',
    changingInto: '1-qian',
    faq: [
      { q: 'What does Hexagram 2 mean?', a: 'Hexagram 2, Kūn (The Receptive), represents the power of receptivity, nurturing, and devotion. It signals a time to listen, support, and allow things to unfold naturally rather than forcing outcomes.' },
      { q: 'Is Hexagram 2 passive?', a: 'No — the Receptive is not passive. It is actively responsive. Like the earth that receives rain and produces growth, Kūn represents the strength of yielding with purpose and wisdom.' },
    ],
  },
  {
    slug: '11-tai',
    number: 11,
    name: 'Tài',
    chinese: '泰',
    english: 'Peace',
    trigrams: { upper: 'Earth', lower: 'Heaven' },
    lines: ['yin', 'yin', 'yin', 'yang', 'yang', 'yang'],
    keywords: ['peace', 'harmony', 'prosperity', 'flourishing'],
    judgment: 'The small departs, the great approaches. Good fortune. Success.',
    image: 'Heaven and earth unite: the image of Peace. Thus the ruler divides and completes the course of heaven and earth.',
    interpretation: 'In Hexagram 11, heaven (the creative) sits below and earth (the receptive) above. Their energies move toward each other rather than apart — heaven rises, earth descends, and they meet in the middle. This is peace.\n\nTài signals a season of openness. The right people arrive, the resistance you\'d been bracing for dissolves. Communication flows. Projects find traction. Move with what is already moving.\n\nBut peace is not permanent. The hexagram\'s shadow is complacency — mistaking ease for permanence. Tend what flourishes. The best time to strengthen foundations is when the weather is good.',
    faq: [
      { q: 'What does Hexagram 11 (Peace) mean?', a: 'Hexagram 11 represents a time of harmony, prosperity, and natural flow. Heaven and earth are in communion — a period where things come together with less resistance than usual.' },
      { q: 'How long does the energy of Hexagram 11 last?', a: 'Peace is cyclical, not permanent. The I Ching teaches that all states transform into their opposites. Enjoy and nurture this period, but do not become complacent.' },
    ],
  },
];

export const HEX_BY_SLUG: Record<string, Hexagram> = Object.fromEntries(
  HEXAGRAMS.map((h) => [h.slug, h])
);
