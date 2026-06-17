export interface TarotCard {
  slug: string;
  name: string;
  roman: string;
  arcana: 'major' | 'minor';
  suit?: string;
  number?: number;
  keywords: string[];
  tagline: string;
  upright: {
    meaning: string;
    love: string;
    career: string;
    self: string;
  };
  reversed: {
    meaning: string;
    love: string;
    career: string;
    self: string;
  };
  element?: string;
  planet?: string;
  zodiac?: string;
  faq?: { q: string; a: string }[];
}

// SKELETON — replace with full 78-card data
export const TAROT_CARDS: TarotCard[] = [
  {
    slug: 'the-fool',
    name: 'The Fool',
    roman: '0',
    arcana: 'major',
    keywords: ['beginnings', 'faith', 'leap'],
    tagline: 'A clean slate, a cliff edge, and the courage to step off.',
    upright: {
      meaning: 'The Fool marks the start of a journey. It invites you to trust the unknown and step forward without guarantees. There is freedom in not knowing.',
      love: 'New romance or a fresh chapter in an existing relationship. Let go of past patterns and meet love with open eyes.',
      career: 'A bold pivot — a new role, a startup, a leap of faith. The Fool says the risk is worth it if it feels alive.',
      self: 'Shed the identity you outgrew. The Fool is permission to begin again, lighter.',
    },
    reversed: {
      meaning: 'Recklessness or paralysis. Either you are leaping without looking, or you are standing at the edge refusing to move.',
      love: 'Fear of commitment or repeating old mistakes. Ask whether the hesitation is wisdom or avoidance.',
      career: 'Poor planning disguised as spontaneity. Revisit the foundation before you build.',
      self: 'Ignoring red flags or refusing to learn from past experience.',
    },
    element: 'Air',
    planet: 'Uranus',
    faq: [
      { q: 'What does The Fool mean in a love reading?', a: 'The Fool in love suggests new beginnings — a fresh connection or a willingness to approach an existing relationship with renewed openness and vulnerability.' },
      { q: 'Is The Fool a yes or no card?', a: 'The Fool is generally a "yes" — it encourages taking the leap and trusting the process, especially when the question involves new beginnings.' },
    ],
  },
  {
    slug: 'the-magician',
    name: 'The Magician',
    roman: 'I',
    arcana: 'major',
    keywords: ['willpower', 'skill', 'manifestation'],
    tagline: 'Everything you need is already on the table.',
    upright: {
      meaning: 'The Magician channels raw potential into reality. You have the tools, the talent, and the timing. Now act.',
      love: 'Magnetic attraction and clear communication. You know what you want — say it.',
      career: 'Mastery in motion. A project that showcases your full skill set. Launch it.',
      self: 'Alignment between intention and action. You are more capable than you think.',
    },
    reversed: {
      meaning: 'Manipulation or wasted talent. The tools are there but misused — or not used at all.',
      love: 'Deception or mixed signals. Someone may not be who they appear.',
      career: 'Imposter syndrome or cutting corners. Revisit your methods.',
      self: 'Disconnect between what you say and what you do.',
    },
    element: 'Air',
    planet: 'Mercury',
    faq: [
      { q: 'What does The Magician represent?', a: 'The Magician represents willpower, resourcefulness, and the ability to manifest your goals through focused action and skill.' },
      { q: 'What element is The Magician associated with?', a: 'The Magician is associated with Air and the planet Mercury, representing communication, intellect, and quick thinking.' },
    ],
  },
  {
    slug: 'the-star',
    name: 'The Star',
    roman: 'XVII',
    arcana: 'major',
    keywords: ['hope', 'healing', 'renewal'],
    tagline: 'After the storm, a quiet light returns.',
    upright: {
      meaning: 'The Star arrives after upheaval. It is the calm after the Tower — a gentle, persistent light that says healing is already underway.',
      love: 'Vulnerability that deepens connection. Let someone see you as you are, unguarded.',
      career: 'Inspiration returns. A creative project finds its voice. Trust the slow rebuild.',
      self: 'Spiritual renewal. You are closer to wholeness than you realize.',
    },
    reversed: {
      meaning: 'Disconnection from hope. The light is still there but you have stopped looking for it.',
      love: 'Guarding your heart so tightly that intimacy cannot reach you.',
      career: 'Creative block or burnout. Step away before you push through.',
      self: 'Neglecting self-care or losing faith in your own healing.',
    },
    element: 'Air',
    planet: 'Uranus',
    zodiac: 'Aquarius',
    faq: [
      { q: 'What does The Star mean after a difficult period?', a: 'The Star is one of the most hopeful cards in the deck. After hardship, it signals that healing is underway and a period of renewal and clarity is beginning.' },
      { q: 'Is The Star a good card to receive?', a: 'Yes — The Star is widely considered one of the most positive cards. It represents hope, inspiration, and spiritual connection.' },
    ],
  },
];

export const CARD_BY_SLUG: Record<string, TarotCard> = Object.fromEntries(
  TAROT_CARDS.map((c) => [c.slug, c])
);

export const SUIT_LABELS: Record<string, string> = {
  wands: 'Wands',
  cups: 'Cups',
  swords: 'Swords',
  pentacles: 'Pentacles',
};
