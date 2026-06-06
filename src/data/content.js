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
photo: 'https://avatarfiles.alphacoders.com/375/375449.jpeg',
tag: 'childhood',
title: 'Where It All Started',
back: {
emoji: '🧒',
note: 'From our childhood days to today, we have shared countless memories that I will always cherish.',
},
accent: '#38bdf8',
},
{
id: 2,
photo: 'https://wallpapers-clan.com/wp-content/uploads/2023/07/tanjiro-kamado-dance-of-the-fire-god-wallpaper.jpg',
tag: 'school days',
title: 'Classroom Adventures',
back: {
emoji: '🏫',
note: 'From sharing laughs in school to making unforgettable memories, those days will always be special.',
},
accent: '#c4b5fd',
},
{
id: 3,
photo: 'https://tse2.mm.bing.net/th/id/OIP.h2TgkRNZCPG5ztg1NzfzkQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
tag: 'fun times',
title: 'The Endless Laughter',
back: {
emoji: '😂',
note: 'Some of the funniest moments of my life happened because of our friendship.',
},
accent: '#f472b6',
},
{
id: 4,
photo: 'https://i.etsystatic.com/36651991/r/il/8fc321/6868897279/il_1140xN.6868897279_pisl.jpg',
tag: 'support',
title: 'Always There',
back: {
emoji: '🤝',
note: 'No matter what happened, I always knew I had a friend I could count on.',
},
accent: '#67e8f9',
},
{
id: 5,
photo: 'https://th.bing.com/th/id/OIP.wQve--nsiTutx0Am6jGuFQHaNK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
tag: 'adventures',
title: 'Every Journey Together',
back: {
emoji: '🚲',
note: 'Every trip, every game, and every adventure became a memory worth keeping because you were there.',
},
accent: '#a78bfa',
},
{
id: 6,
photo: 'https://tse1.mm.bing.net/th/id/OIP.KVA8fPNAS23la_yYLZVujgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
tag: 'forever',
title: 'Best Friends Forever',
back: {
emoji: '💙',
note: 'Years may pass and life may change, but true friendship like ours lasts forever.',
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
