import { Link } from 'react-router-dom'
import { Settings, Star, Calendar, Award, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { currentUser, shows } from '../data/mockData'
import { ShowCard } from '../components/ShowCard'

function Profile() {
  const recentShows = shows.slice(0, 4)
  const favoriteShows = shows.filter(s => s.rating === 5).slice(0, 3)

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Header */}
      <section className="relative">
        <div className="px-5 py-8 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-4"
          >
            {/* Avatar */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#C41E3A] to-[#9B1830] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-xl shadow-[#C41E3A]/20" style={{ border: '4px solid var(--bg)' }}>
              {currentUser.initials}
            </div>
            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="font-display text-[24px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {currentUser.name}
                  </h1>
                  <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>Theater enthusiast since 2022</p>
                </div>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'var(--surface-highlight)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  <Settings size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-4 gap-4 mt-6"
          >
            {[
              { value: currentUser.stats.showsSeen, label: 'Shows' },
              { value: currentUser.stats.showsRanked, label: 'Ranked' },
              { value: currentUser.stats.showsThisYear, label: 'This Year' },
              { value: currentUser.stats.avgRating, label: 'Avg Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.1em] mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 max-w-lg mx-auto">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-[#D4A84B]" />
            <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Achievements</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-5 px-5">
            {['First Show', 'Musical Lover', '10 Shows', 'Reviewer', 'Early Adopter'].map((badge) => (
              <div
                key={badge}
                className="flex-shrink-0 card px-4 py-3 text-center min-w-[100px]"
              >
                <Star className="w-5 h-5 fill-[#D4A84B] text-[#D4A84B] mx-auto mb-1" />
                <span className="text-[10px] font-medium" style={{ color: 'var(--text-secondary)' }}>{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Favorites */}
        {favoriteShows.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C41E3A]" />
                <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Favorites</h2>
              </div>
              <Link to="/rankings" className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] transition-colors">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {favoriteShows.map((show, index) => (
                <ShowCard key={show.id} show={show} rank={index + 1} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C41E3A]" />
              <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Recently Seen</h2>
            </div>
            <Link to="/diary" className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] transition-colors">
              View diary
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {recentShows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#C41E3A]" />
            <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Your Stats</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '73%', label: 'Musicals' },
              { value: '27%', label: 'Plays' },
              { value: '4.2', label: 'Avg Rating' },
              { value: '3', label: 'Rewatches' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--surface-highlight)', border: '1px solid var(--border)' }}>
                <div className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Profile
