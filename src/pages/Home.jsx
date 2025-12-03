import { Link } from 'react-router-dom'
import { Star, ChevronRight, Trophy, Ticket, Bookmark, Heart, MessageCircle, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { currentUser } from '../data/mockData'

// Curated Broadway show imagery - theater/stage-appropriate visuals
const FEATURED_SHOW = {
  id: 'show-4',
  title: 'Wicked',
  subtitle: 'The Untold Story of the Witches of Oz',
  theater: 'Gershwin Theatre',
  location: 'Broadway, NYC',
  rating: 4.8,
  reviewCount: '42.1k',
  image: '/art/wicked.jpg',
  tags: ['Musical', 'Fantasy', 'Long-Running'],
}

const TRENDING_SHOWS = [
  {
    id: 'show-9',
    title: 'Merrily We Roll Along',
    theater: 'Hudson Theatre',
    rating: 4.9,
    image: '/art/merrily.jpg'
  },
  {
    id: 'show-1',
    title: 'Hadestown',
    theater: 'Walter Kerr Theatre',
    rating: 4.9,
    image: '/art/hadestown.jpg'
  },
  {
    id: 'show-2',
    title: 'Hamilton',
    theater: 'Richard Rodgers',
    rating: 4.9,
    image: '/art/hamilton.jpg'
  },
  {
    id: 'show-5',
    title: 'Cabaret',
    theater: 'August Wilson',
    rating: 4.7,
    image: '/art/cabaret.jpg'
  },
  {
    id: 'show-6',
    title: 'The Lion King',
    theater: 'Minskoff Theatre',
    rating: 4.8,
    image: '/art/lionking.png'
  },
]

const COMMUNITY_REVIEWS = [
  {
    id: 101,
    user: {
      name: 'Alexandra Chen',
      avatar: 'https://i.pravatar.cc/150?u=alexandra',
      verified: true
    },
    show: 'Merrily We Roll Along',
    showId: 'show-9',
    rating: 5,
    text: 'Groff, Radcliffe, and Mendez deliver career-defining performances. The reverse chronology hits differently when you know how it ends. Sobbed through "Not a Day Goes By."',
    likes: 847,
    time: '2h',
  },
  {
    id: 102,
    user: {
      name: 'Marcus Webb',
      avatar: 'https://i.pravatar.cc/150?u=marcus',
      verified: false
    },
    show: 'The Outsiders',
    showId: 'show-3',
    rating: 4,
    text: 'The rumble choreography is jaw-dropping—Sergio Trujillo outdid himself. Book could be tighter but the ensemble work is extraordinary.',
    likes: 234,
    time: '5h',
  },
]

function StarRating({ rating, size = 'sm' }) {
  const sizes = { sm: 11, md: 14, lg: 18 }
  const starSize = sizes[size]

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={starSize}
          fill={star <= rating ? '#D4A84B' : 'transparent'}
          color={star <= rating ? '#D4A84B' : '#3A3A3A'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen w-full pb-28">
      {/* Hero Section */}
      <section className="relative h-[62vh] min-h-[480px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src={FEATURED_SHOW.image}
            alt={FEATURED_SHOW.title}
            className="w-full h-full object-cover"
          />
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 max-w-lg mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              <span className="badge badge-crimson">
                Featured
              </span>
              <span className="badge badge-glass flex items-center gap-1">
                <Star size={9} fill="#D4A84B" color="#D4A84B" />
                <span className="text-[#D4A84B]">{FEATURED_SHOW.rating}</span>
              </span>
              <span className="badge badge-glass">
                {FEATURED_SHOW.reviewCount} reviews
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[2.75rem] leading-[1.05] font-bold mb-1 text-white text-shadow-strong tracking-tight">
              {FEATURED_SHOW.title}
            </h1>
            <p className="font-display text-lg text-white/60 italic mb-4">
              {FEATURED_SHOW.subtitle}
            </p>

            {/* Venue */}
            <div className="flex items-center gap-2 text-[13px] text-white/70 mb-6">
              <span className="font-medium">{FEATURED_SHOW.theater}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{FEATURED_SHOW.location}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 btn-primary h-12"
              >
                <Ticket size={16} strokeWidth={2.5} />
                Get Tickets
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 hover:border-white/20 transition-colors"
              >
                <Bookmark size={18} strokeWidth={1.5} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-5 max-w-lg mx-auto w-full relative z-10">
        {/* User Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-4 -mt-6 mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#C41E3A]">
              <Trophy size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] text-[#5A5A5A] uppercase tracking-[0.15em] font-semibold mb-0.5">
                My Playbill
              </p>
              <p className="text-[15px] font-semibold text-white">
                {currentUser.stats.showsThisYear} Shows this Season
              </p>
            </div>
          </div>
          <Link to="/diary" className="p-2 -mr-2 text-[#5A5A5A] hover:text-white transition-colors">
            <ChevronRight size={18} />
          </Link>
        </motion.div>

        {/* Trending Shows */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-display text-[22px] font-semibold text-white">
              Trending Now
            </h2>
            <Link
              to="/discover"
              className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] hover:text-white transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto hide-scrollbar -mx-5 px-5">
            <div className="flex gap-4">
              {TRENDING_SHOWS.map((show, index) => (
                <motion.div
                  key={show.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex-shrink-0 w-[140px] group"
                >
                  <Link to={`/show/${show.id}`}>
                    <div className="relative aspect-poster rounded-xl overflow-hidden mb-3 bg-[#131313] hover-lift">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Rating badge */}
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-1">
                        <Star size={9} fill="#D4A84B" color="#D4A84B" />
                        <span className="text-[10px] font-bold text-[#D4A84B]">{show.rating}</span>
                      </div>

                      {/* Play indicator on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Play size={20} fill="white" color="white" className="ml-1" />
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-[14px] leading-tight mb-1 text-white/90 group-hover:text-white transition-colors line-clamp-2">
                      {show.title}
                    </h3>
                    <p className="text-[11px] text-[#5A5A5A]">{show.theater}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Reviews */}
        <section>
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-display text-[22px] font-semibold text-white">
              From the Community
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {COMMUNITY_REVIEWS.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="card p-4 hover:border-[#C41E3A]/20 transition-all duration-300"
              >
                <div className="flex gap-3">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-[#1A1A1A] border border-white/10">
                      <img
                        src={review.user.avatar}
                        alt={review.user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {review.user.verified && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#C41E3A] rounded-full flex items-center justify-center border-2 border-[#131313]">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1.5">
                      <div>
                        <h4 className="font-semibold text-[14px] text-white">{review.user.name}</h4>
                        <p className="text-[11px] text-[#5A5A5A]">
                          reviewed{' '}
                          <Link to={`/show/${review.showId}`} className="text-[#C41E3A] hover:text-white transition-colors">
                            {review.show}
                          </Link>
                        </p>
                      </div>
                      <span className="text-[11px] text-[#5A5A5A]">{review.time}</span>
                    </div>

                    <div className="mb-2.5">
                      <StarRating rating={review.rating} />
                    </div>

                    <p className="text-[13px] text-[#A8A8A8] leading-relaxed mb-3.5">
                      "{review.text}"
                    </p>

                    <div className="flex gap-4">
                      <button className="flex items-center gap-1.5 text-[11px] text-[#5A5A5A] hover:text-[#C41E3A] transition-colors group">
                        <Heart size={14} strokeWidth={1.5} className="group-hover:fill-[#C41E3A]" />
                        <span>{review.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[11px] text-[#5A5A5A] hover:text-white transition-colors">
                        <MessageCircle size={14} strokeWidth={1.5} />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
