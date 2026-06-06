// ─────────────────────────────────────────────────────────────────
//  CONTENT FILE — edit everything here to personalise the site
// ─────────────────────────────────────────────────────────────────

export const PASSCODE = '1234'   // ← change to your secret code

export const NAME = 'Praveen '

// ── Memory Cards ─────────────────────────────────────────────────
// Replace `photo` with real image URLs or local paths like '/photos/1.jpg'
// The back.note is what shows when the card flips
export const MEMORIES = [
  {
    id: 1,
    photo: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80',
    tag: '2:47 AM',
    title: 'The Night We Didn\'t Sleep',
    back: {
      emoji: '🌙',
      note: 'That one night we said "ok goodnight" like 6 times and kept talking till 3am. Neither of us regrets it.',
    },
    accent: '#38bdf8',
  },
  {
    id: 2,
    photo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    tag: 'daily chaos',
    title: 'The Reel Dump Era',
    back: {
      emoji: '😂',
      note: 'You send me at least 4 reels a day. I watch all of them. I would never admit that out loud though.',
    },
    accent: '#c4b5fd',
  },
  {
    id: 3,
    photo: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&q=80',
    tag: 'the fights',
    title: 'When We Argued About Nothing',
    back: {
      emoji: '🙄',
      note: 'We fought so hard over something so stupid. Then made up in 20 minutes. That\'s just how we work.',
    },
    accent: '#f472b6',
  },
  {
    id: 4,
    photo: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80',
    tag: 'on bad days',
    title: 'You Just Knew',
    back: {
      emoji: '🫂',
      note: 'Some days I didn\'t say anything was wrong. You knew anyway. You always checked. That means more than you realise.',
    },
    accent: '#67e8f9',
  },
  {
    id: 5,
    photo: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80',
    tag: 'voice notes',
    title: 'The Long Voice Notes Era',
    back: {
      emoji: '🎙️',
      note: 'Your 7-minute voice notes are a feature, not a bug. I have never once skipped them.',
    },
    accent: '#a78bfa',
  },
  {
    id: 6,
    photo: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80',
    tag: 'always',
    title: 'When Everything Was Heavy',
    back: {
      emoji: '💙',
      note: 'You showed up for me in ways that mattered. Not with big speeches — just quietly being there. That\'s the whole thing.',
    },
    accent: '#38bdf8',
  },
]

// ── Timeline ─────────────────────────────────────────────────────
export const TIMELINE = [
  {
    label: 'Childhood Days',
    text: 'The beginning of a friendship that would last for years.',
    icon: '🧒',
  },
  {
    label: 'School Memories',
    text: 'Classrooms, lunch breaks, games, and countless unforgettable moments.',
    icon: '🏫',
  },
  {
    label: 'Our Adventures',
    text: 'Every trip, every joke, every crazy plan became a memory worth keeping.',
    icon: '🚲',
  },
  {
    label: 'The Tough Times',
    text: 'When life got difficult, we stood by each other no matter what.',
    icon: '🤝',
  },
  {
    label: 'Growing Up Together',
    text: 'Years passed, but our friendship only became stronger.',
    icon: '🌱',
  },
  {
    label: 'Best Friends Forever',
    text: 'A friendship built on trust, loyalty, and countless memories.',
    icon: '♾️',
  },
]

// ── Birthday Wishes ───────────────────────────────────────────────
export const WISHES = [
  {
    icon: '🌙',
    title: 'Peace',
    text: 'May this year bring you the kind of quiet that actually feels like rest.',
  },
  {
    icon: '✨',
    title: 'Recognition',
    text: 'May the world finally see you the way everyone who knows you already does.',
  },
  {
    icon: '💙',
    title: 'Ease',
    text: 'May things stop being so hard for a while. You\'ve earned some lightness.',
  },
  {
    icon: '🌊',
    title: 'Joy',
    text: 'Not the performative kind — the real kind. The kind that shows up in ordinary moments.',
  },
  {
    icon: '🔮',
    title: 'The Good Stuff',
    text: 'Every single thing you\'ve been quietly hoping for — may it find its way to you.',
  },
]

// ── Letter from the writer ───────────────────────────────────────
export const LETTER = [
  'Praveen,',
  'Happy Birthday to the friend who has been a part of my life for as long as I can remember.',
  'From our childhood days to where we are today, we have shared countless memories, laughs, adventures, and even a few silly fights. Every moment has become a part of a friendship I truly value.',
  'You have always been more than just a friend. You have been a brother, a supporter, and someone I could always count on no matter what.',
  'Thank you for standing by me during good times and difficult times. Your friendship has made life brighter, happier, and filled with unforgettable memories.',
  'As another year begins for you, I hope you achieve everything you dream of and find success, happiness, good health, and endless reasons to smile.',
  'No matter where life takes us, our friendship will always remain special. Some bonds are built to last forever, and ours is one of them.',
  'Thank you for being an amazing friend and for making so many moments of life unforgettable.',
  'Wishing you a birthday filled with happiness, laughter, and everything you love.',
  'Happy Birthday, Best Friend! 🎂🎉💙',
  'Best Friends Forever. ♾️',
]
// ── Truths (small affirmation cards) ───────────────────────────
export const TRUTHS = [
  { icon: '🤝', text: 'You have been one of the most important people in my life since childhood.' },
  { icon: '😂', text: 'Some of my happiest memories exist because of you.' },
  { icon: '🏫', text: 'From school days to today, our friendship has only grown stronger.' },
  { icon: '💪', text: 'You have always stood by the people you care about.' },
  { icon: '🎉', text: 'Every adventure becomes more fun when you are part of it.' },
  { icon: '💙', text: 'A true friend is hard to find, and I am lucky to have found one in you.' },
  { icon: '🌟', text: 'Your kindness, loyalty, and positivity make you special.' },
  { icon: '♾️', text: 'No matter where life takes us, our friendship will always remain strong.' },
]
