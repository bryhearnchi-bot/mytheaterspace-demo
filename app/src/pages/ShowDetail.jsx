import { useParams, Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Heart, Share2, ArrowLeft, Bookmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { shows } from '../data/mockData'
import { StarRating, getShowImage } from '../components/ShowCard'

function ShowDetail() {
  const { id } = useParams()
  const show = shows.find(s => s.id === id)

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-[24px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Show not found</h1>
          <Link to="/" className="text-[#C41E3A] transition-colors text-[13px]">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  const userRank = shows.findIndex(s => s.id === id) + 1
  const image = getShowImage(show.id)

  return (
    <div className="min-h-screen pb-28">
      {/* Hero Image */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src={image}
            alt={show.title}
            className="w-full h-full object-cover"
          />
          {/* Always dark gradients for cinematic hero effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-20 left-5 z-10 w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
        </Link>

        {/* Share Button */}
        <button className="absolute top-20 right-5 z-10 w-10 h-10 rounded-xl glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <Share2 size={18} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-lg mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-3">
              {userRank <= 10 && (
                <span className="badge badge-crimson">
                  #{userRank} Ranked
                </span>
              )}
              <span className="badge badge-glass">
                {show.type}
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] leading-[1.05] font-bold mb-2 text-white text-shadow-strong tracking-tight">
              {show.title}
            </h1>

            <div className="flex items-center gap-3 text-[13px] text-white/70 mb-4">
              <span className="font-medium">{show.venue}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{show.status}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>Your rating:</span>
              <StarRating rating={show.rating} size="md" interactive />
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 btn-primary h-12"
              >
                <Heart size={16} strokeWidth={2} />
                Favorite
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

      {/* Content */}
      <div className="px-5 max-w-lg mx-auto -mt-4 relative z-10">
        {/* Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-4 mb-6"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[13px]">
              <MapPin className="w-4 h-4 text-[#C41E3A]" />
              <span style={{ color: 'var(--text-secondary)' }}>{show.venue}</span>
            </div>
            <div className="flex items-center gap-3 text-[13px]">
              <Calendar className="w-4 h-4 text-[#C41E3A]" />
              <span style={{ color: 'var(--text-secondary)' }}>Seen on March 10, 2024</span>
            </div>
            <div className="flex items-center gap-3 text-[13px]">
              <Clock className="w-4 h-4 text-[#C41E3A]" />
              <span style={{ color: 'var(--text-secondary)' }}>2h 30m (with intermission)</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        {show.description && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="font-display text-[18px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>About</h2>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{show.description}</p>
          </motion.div>
        )}

        {/* Notes Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-4 mb-6"
        >
          <h2 className="font-display text-[18px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Your Notes</h2>
          <p className="text-[13px] leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
            "An absolutely breathtaking production. The staging was innovative and the performances were top-notch. Would definitely see again."
          </p>
          <button className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] hover:text-white transition-colors">
            Edit notes
          </button>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="font-display text-[18px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Community Stats</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '4.2', label: 'Avg Rating' },
              { value: '1.2k', label: 'Have Seen' },
              { value: '342', label: 'Want to See' },
            ].map((stat) => (
              <div key={stat.label} className="card p-4 text-center">
                <div className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.1em] mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Friends who've seen */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-display text-[18px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Friends Who've Seen This</h2>
          <div className="flex gap-4">
            {['SK', 'MR', 'JD'].map((initials, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#9B1830] rounded-xl flex items-center justify-center text-white font-bold mb-1 shadow-lg shadow-[#C41E3A]/20" style={{ border: '2px solid var(--bg)' }}>
                  {initials}
                </div>
                <StarRating rating={4 + (i % 2)} size="sm" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ShowDetail
