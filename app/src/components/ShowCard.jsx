import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

// Curated show imagery matching each production's aesthetic
const SHOW_IMAGES = {
  // Hadestown - Official poster
  'show-1': '/art/hadestown.jpg',
  // Hamilton - Official poster
  'show-2': '/art/hamilton.jpg',
  // The Outsiders - Official poster
  'show-3': '/art/outsiders.jpg',
  // Wicked - Official poster
  'show-4': '/art/wicked.jpg',
  // Cabaret - Official poster
  'show-5': '/art/cabaret.jpg',
  // The Lion King - Official poster
  'show-6': '/art/lionking.png',
  // A Few Good Men - Official poster
  'show-7': '/art/afewgoodmen.jpg',
  // The Great Gatsby - Official poster
  'show-8': '/art/greatgatsby.jpg',
  // Merrily We Roll Along - Official poster
  'show-9': '/art/merrily.jpg',
}

export function getShowImage(showId) {
  return SHOW_IMAGES[showId] || SHOW_IMAGES['show-1']
}

export function StarRating({ rating, size = 'sm', interactive = false, onChange }) {
  const sizes = {
    sm: 11,
    md: 14,
    lg: 18,
  }

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onChange?.(star)}
          className={cn(
            interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default',
            'disabled:cursor-default'
          )}
        >
          <Star
            size={sizes[size]}
            fill={star <= rating ? '#D4A84B' : 'transparent'}
            color={star <= rating ? '#D4A84B' : '#3A3A3A'}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  )
}

export function ShowCard({ show, rank, variant = 'default', className }) {
  const image = getShowImage(show.id)

  return (
    <Link
      to={`/show/${show.id}`}
      className={cn('group block', className)}
    >
      <motion.div whileTap={{ scale: 0.97 }}>
        {/* Poster */}
        <div className="relative aspect-poster rounded-xl overflow-hidden mb-3 hover-lift" style={{ backgroundColor: 'var(--surface)' }}>
          <img
            src={image}
            alt={show.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Rank Badge */}
          {rank && (
            <div className="absolute top-2 left-2 min-w-[28px] h-7 px-2 rounded-lg bg-[#C41E3A] flex items-center justify-center shadow-lg">
              <span className="text-[11px] font-bold text-white">#{rank}</span>
            </div>
          )}

          {/* Rating Badge */}
          {show.rating && (
            <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md flex items-center gap-1" style={{ border: '1px solid var(--border)' }}>
              <Star size={9} fill="#D4A84B" color="#D4A84B" />
              <span className="text-[10px] font-bold text-[#D4A84B]">{show.rating}</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h3 className="font-display font-semibold text-[14px] leading-tight mb-1 transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
            {show.title}
          </h3>
          <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{show.venue || show.type}</p>
          {show.rating && variant !== 'compact' && (
            <div className="mt-1.5">
              <StarRating rating={show.rating} />
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}

export function ShowCardCompact({ show, rank }) {
  const image = getShowImage(show.id)

  return (
    <Link
      to={`/show/${show.id}`}
      className="flex items-center gap-3 p-3 card hover:border-[#C41E3A]/20 transition-all duration-300 group"
    >
      {rank && (
        <span className="w-8 h-8 bg-[#C41E3A] text-white text-[12px] font-bold flex items-center justify-center rounded-lg flex-shrink-0">
          {rank}
        </span>
      )}
      <div className="w-11 h-[60px] rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--surface-highlight)' }}>
        <img src={image} alt={show.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-[14px] font-semibold truncate transition-colors" style={{ color: 'var(--text-primary)' }}>
          {show.title}
        </h3>
        <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{show.type}</p>
      </div>
      {show.rating && <StarRating rating={show.rating} size="sm" />}
    </Link>
  )
}

export default ShowCard
