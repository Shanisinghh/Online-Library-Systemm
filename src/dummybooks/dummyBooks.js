
export const categories = [
  "Sci-Fi",
  "Non-Fiction",
  "Adventure",
  "Classic",
  "Fiction"
];



const books = [
  {
    id: "1",
    title: "Whispers of the Wind",
    author: "Eleanor Stone",
    description: "A poetic journey through love, loss, and the healing power of nature.",
    rating: 4.6,
    coverImage: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    category: "Fiction"
  },
  {
    id: "2",
    title: "Beyond the Stars",
    author: "Liam Carter",
    description: "An epic space odyssey of courage, betrayal, and the human will to survive.",
    rating: 4.8,
    coverImage: "https://wallpapers.com/images/hd/books-on-shelf-art-zaza94g3cam53rd5.webp",
    category: "Sci-Fi"
  },
  {
    id: "3",
    title: "The Timeless Classic",
    author: "Jane Whitmore",
    description: "A reimagined tale of self-discovery set against the backdrop of Victorian England.",
    rating: 4.4,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    category: "Classic"
  },
  {
    id: "4",
    title: "Into the Unknown",
    author: "Rajiv Malhotra",
    description: "A thrilling trek across uncharted territories and inner fears.",
    rating: 4.1,
    coverImage: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
    category: "Adventure"
  },
  {
    id: "5",
    title: "The Science of Habit",
    author: "Dr. Emma Park",
    description: "An evidence-based guide to building better habits and breaking bad ones.",
    rating: 4.9,
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    category: "Non-Fiction"
  },
  {
    id: "6",
    title: "Echoes from Mars",
    author: "Lucien Grey",
    description: "The story of a Martian colony facing mysterious signals and strange disappearances.",
    rating: 4.3,
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Sci-Fi"
  },
  {
    id: "7",
    title: "Tales of the Forgotten Realm",
    author: "Aurelia Rose",
    description: "Magic, dragons, and destiny unfold in this timeless fantasy classic.",
    rating: 4.7,
    coverImage: "https://wallpapers.com/images/thumbnail/subject-for-journalism-w3f0869f7drkyvla.webp",
    category: "Classic"
  },
  {
    id: "8",
    title: "Alone in the Himalayas",
    author: "Siddharth Bose",
    description: "A traveler's solo adventure across icy peaks and spiritual revelations.",
    rating: 4.2,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Adventure"
  },
  {
    id: "9",
    title: "Digital Minimalism",
    author: "Cal Newport",
    description: "How to live better with less technology in a hyper-connected world.",
    rating: 4.6,
    coverImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    category: "Non-Fiction"
  },
  {
    id: "10",
    title: "The Mind's Mirror",
    author: "Natasha Green",
    description: "A philosophical fiction about identity, consciousness, and free will.",
    rating: 4.5,
    coverImage: "https://wallpapers.com/images/hd/mini-leather-bound-books-f0luvpjzatpbeasr.webp",
    category: "Fiction"
  },
  {
    id: "11",
    title: "Galactic Chronicles",
    author: "Zane Anders",
    description: "A ragtag spaceship crew faces an interstellar conspiracy.",
    rating: 4.0,
    coverImage: "https://wallpapers.com/images/high/reading-enthusiasm-word-cloud-03mjd72xzq49b07d.webp",
    category: "Sci-Fi"
  },
  {
    id: "12",
    title: "The Jungle Quest",
    author: "Priya Sharma",
    description: "A perilous hunt for a lost civilization deep in the Amazon.",
    rating: 4.3,
    coverImage: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    category: "Adventure"
  },
  {
    id: "13",
    title: "The Writer's Toolbox",
    author: "Maggie Lawrence",
    description: "Practical strategies for becoming a better writer.",
    rating: 4.6,
    coverImage: "https://wallpapers.com/images/high/enchanted-tome-and-potions-xgjaz67tt32ix5bv.webp",
    category: "Non-Fiction"
  },
  {
    id: "14",
    title: "Of Dreams and Dust",
    author: "Anais Bloom",
    description: "A novel of heartbreak, rediscovery, and second chances.",
    rating: 4.4,
    coverImage: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
    category: "Fiction"
  },
  {
    id: "15",
    title: "The Lighthouse Keeper",
    author: "Henry Morgan",
    description: "One man's isolation turns into an unforgettable journey of hope.",
    rating: 4.7,
    coverImage: "https://wallpapers.com/images/high/library-with-lamp-ctsldsufx08po47c.webp",
    category: "Classic"
  },
  {
    id: "16",
    title: "Code of the Cosmos",
    author: "Tariq El-Hussein",
    description: "Alien algorithms and cosmic secrets revealed.",
    rating: 4.1,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    category: "Sci-Fi"
  },
  {
    id: "17",
    title: "The Edge of Earth",
    author: "Meera Das",
    description: "A solo traveler's journal of danger, culture, and spiritual awakening.",
    rating: 4.5,
    coverImage: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    category: "Adventure"
  },
  {
    id: "18",
    title: "Atomic Focus",
    author: "Dr. Neil Cortez",
    description: "Boosting productivity with neuroscience-backed tools.",
    rating: 4.8,
    coverImage: "https://wallpapers.com/images/hd/books-acting-as-shelves-2tre7ozdowll8dim.webp",
    category: "Non-Fiction"
  },
  {
    id: "19",
    title: "The Piano Room",
    author: "Clara Lewis",
    description: "A tale of music, mystery, and an abandoned mansion.",
    rating: 4.3,
    coverImage: "https://wallpapers.com/images/hd/person-holding-a-book-4ibfq0znewa7wgxb.webp",
    category: "Fiction"
  },
  {
    id: "20",
    title: "Legends of Old",
    author: "Ronald Graham",
    description: "A reprint of ancient fables that shaped civilizations.",
    rating: 4.0,
    coverImage: "https://wallpapers.com/images/high/opened-book-against-black-pc-he3i6cn91vz8k6u1.webp",
    category: "Classic"
  },
  {
    id: "21",
    title: "Robots and the Human Heart",
    author: "Susan Tang",
    description: "Exploring love and ethics in a post-human future.",
    rating: 4.5,
    coverImage: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    category: "Sci-Fi"
  },
  {
    id: "22",
    title: "Hiking Everest",
    author: "Luke Mitchell",
    description: "A life-changing expedition to the world’s highest peak.",
    rating: 4.7,
    coverImage: "https://wallpapers.com/images/thumbnail/opened-book-placed-over-multicolored-books-ftgp253v23c3p6k0.webp",
    category: "Adventure"
  },
  {
    id: "23",
    title: "Thinking Clearly",
    author: "Daniel Fox",
    description: "Cognitive tools to make smarter everyday decisions.",
    rating: 4.6,
    coverImage: "https://wallpapers.com/images/thumbnail/sunset-over-rocky-mountain-landscape-k4a9iu8ltkkwa5mn.webp",
    category: "Non-Fiction"
  },
  {
    id: "24",
    title: "The Memory Maze",
    author: "Isabel Kwan",
    description: "A psychological fiction thriller with a twist at every corner.",
    rating: 4.4,
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Fiction"
  },
  {
    id: "25",
    title: "The Sea Wolf",
    author: "Jack London",
    description: "A classic maritime adventure of survival and rebellion.",
    rating: 4.3,
    coverImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    category: "Classic"
  },
  {
    id: "26",
    title: "Portal Protocol",
    author: "Yara Silva",
    description: "Earth's only hope lies in a wormhole guarded by ancient laws.",
    rating: 4.2,
    coverImage: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    category: "Sci-Fi"
  },
  {
    id: "27",
    title: "Wild Escape",
    author: "Tommy Lane",
    description: "A thrilling jungle rescue with unexpected allies.",
    rating: 4.4,
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    category: "Adventure"
  },
  {
    id: "28",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    rating: 4.8,
    coverImage: "https://wallpapers.com/images/thumbnail/stringent-law-ymbhdqeiqwdvsr8s.webp",
    category: "Non-Fiction"
  },
  {
    id: "29",
    title: "The Silent Storm",
    author: "Amelia Hart",
    description: "A moving novel about love lost and found again after war.",
    rating: 4.3,
    coverImage: "https://wallpapers.com/images/thumbnail/book-glasses-coffee-flowers-q44os8x0poc8jrfa.webp",
    category: "Fiction"
  },
  {
    id: "30",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    description: "The dark passion of Heathcliff and Catherine across generations.",
    rating: 4.2,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    category: "Classic"
  }
];

export default books;