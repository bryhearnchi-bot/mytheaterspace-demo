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
        {/* Background gradient */}
        <div className="absolute inset-0 h-48 bg-gradient-to-b from-[#C41E3A]/20 to-transparent" />

        <div className="relative px-5 py-8 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-4"
          >
            {/* Avatar */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#C41E3A] to-[#9B1830] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 border-4 border-[#080808] shadow-xl shadow-[#C41E3A]/20">
              {currentUser.initials}
            </div>
            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="font-display text-[24px] font-semibold text-white">
                    {currentUser.name}
                  </h1>
                  <p className="text-[#5A5A5A] text-[13px]">Theater enthusiast since 2022</p>
                </div>
                <button className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#5A5A5A] hover:text-white transition-colors">
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
                <div className="font-display text-xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] text-[#5A5A5A] uppercase tracking-[0.1em] mt-0.5">{stat.label}</div>
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
            <h2 className="font-display text-[18px] font-semibold text-white">Achievements</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-5 px-5">
            {['First Show', 'Musical Lover', '10 Shows', 'Reviewer', 'Early Adopter'].map((badge) => (
              <div
                key={badge}
                className="flex-shrink-0 card px-4 py-3 text-center min-w-[100px]"
              >
                <Star className="w-5 h-5 fill-[#D4A84B] text-[#D4A84B] mx-auto mb-1" />
                <span className="text-[10px] text-[#A8A8A8] font-medium">{badge}</span>
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
                <h2 className="font-display text-[18px] font-semibold text-white">Favorites</h2>
              </div>
              <Link to="/rankings" className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] hover:text-white transition-colors">
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
              <h2 className="font-display text-[18px] font-semibold text-white">Recently Seen</h2>
            </div>
            <Link to="/diary" className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] hover:text-white transition-colors">
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
            <h2 className="font-display text-[18px] font-semibold text-white">Your Stats</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '73%', label: 'Musicals' },
              { value: '27%', label: 'Plays' },
              { value: '4.2', label: 'Avg Rating' },
              { value: '3', label: 'Rewatches' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1A1A1A] border border-white/5 p-4 rounded-xl text-center">
                <div className="text-xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-[10px] text-[#5A5A5A] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Profile
