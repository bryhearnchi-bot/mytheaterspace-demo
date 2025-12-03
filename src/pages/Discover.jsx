import { useState } from 'react'
import { Search, TrendingUp, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { shows } from '../data/mockData'
import { ShowCard } from '../components/ShowCard'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'musical', label: 'Musicals' },
  { id: 'play', label: 'Plays' },
  { id: 'revival', label: 'Revivals' },
]

function Discover() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredShows = shows.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      show.venue.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || show.type.toLowerCase() === activeCategory
    return matchesSearch && matchesCategory
  })

  const trendingShows = shows.slice(0, 4)
  const recentlyAdded = shows.slice(2, 6)

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Search Header */}
      <section className="px-5 py-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-[24px] font-semibold text-center mb-6" style={{ color: 'var(--text-primary)' }}>
            Discover Theater
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search shows, venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:border-[#C41E3A]/50 transition-colors"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#C41E3A] text-white shadow-lg shadow-[#C41E3A]/20'
                    : ''
                }`}
                style={activeCategory !== cat.id ? {
                  backgroundColor: 'var(--surface-highlight)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)'
                } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-5 max-w-lg mx-auto">
        {searchQuery ? (
          /* Search Results */
          <div>
            <h2 className="font-display text-[18px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Results for "{searchQuery}"
            </h2>
            {filteredShows.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredShows.map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>No shows found matching your search.</p>
              </div>
            )}
          </div>
        ) : (
          /* Browse Sections */
          <div className="space-y-10">
            {/* Trending */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C41E3A]" />
                  <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Trending Now</h2>
                </div>
                <button className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] transition-colors">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {trendingShows.map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>
            </motion.div>

            {/* Recently Added */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C41E3A]" />
                  <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Recently Added</h2>
                </div>
                <button className="text-[11px] text-[#C41E3A] uppercase font-bold tracking-[0.12em] transition-colors">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {recentlyAdded.map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>
            </motion.div>

            {/* Awards Season */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#D4A84B]" />
                <h2 className="font-display text-[18px] font-semibold" style={{ color: 'var(--text-primary)' }}>Awards Season</h2>
              </div>
              <p className="text-[12px] mb-4" style={{ color: 'var(--text-muted)' }}>
                Explore this year's Tony Award nominees and winners.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {shows.slice(0, 4).map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Discover
