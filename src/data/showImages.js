// Broadway Show Cover Art
// Using high-quality promotional images that capture each show's essence

export const SHOW_IMAGES = {
  // Hadestown - Underground/mythological aesthetic with warm amber tones
  'show-1': 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop',

  // Hamilton - Revolutionary era, dramatic lighting
  'show-2': 'https://images.unsplash.com/photo-1604095526299-73ec2e8ba0cd?q=80&w=800&auto=format&fit=crop',

  // The Outsiders - Gritty, urban, 1960s youth
  'show-3': 'https://images.unsplash.com/photo-1489424731084-a5d8b219a6f1?q=80&w=800&auto=format&fit=crop',

  // Wicked - Emerald green, magical, dramatic
  'show-4': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',

  // Cabaret - 1930s Berlin, Kit Kat Club, decadent
  'show-5': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',

  // The Lion King - African savanna, vibrant colors
  'show-6': 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop',

  // A Few Good Men - Military courtroom drama
  'show-7': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',

  // The Great Gatsby - Jazz Age glamour, art deco
  'show-8': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
}

// Featured show with high-res hero image
export const FEATURED_SHOWS = {
  hadestown: {
    id: 'show-1',
    title: 'Hadestown',
    theater: 'Walter Kerr Theatre',
    location: 'New York, NY',
    rating: 4.9,
    reviewCount: '28k',
    // Dark, moody underground railroad aesthetic
    heroImage: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2070&auto=format&fit=crop',
    tags: ['Musical', 'Mythology', 'Tony Winner'],
  },
  merrily: {
    id: 'show-9',
    title: 'Merrily We Roll Along',
    theater: 'Hudson Theatre',
    rating: 4.8,
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
  },
}

// Trending shows carousel
export const TRENDING_SHOWS = [
  {
    id: 'show-9',
    title: 'Merrily We Roll Along',
    theater: 'Hudson Theatre',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'show-4',
    title: 'Wicked',
    theater: 'Gershwin Theatre',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'show-2',
    title: 'Hamilton',
    theater: 'Richard Rodgers',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604095526299-73ec2e8ba0cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'show-5',
    title: 'Cabaret',
    theater: 'Kit Kat Club',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'show-10',
    title: 'The Notebook',
    theater: 'Schoenfeld Theatre',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'
  },
]

// Get image for a show by ID
export function getShowImage(showId) {
  return SHOW_IMAGES[showId] || SHOW_IMAGES['show-1']
}
