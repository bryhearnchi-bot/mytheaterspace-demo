import { Link } from 'react-router-dom'
import { Calendar, Plus, Bookmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { diaryEntries, shows } from '../data/mockData'
import { StarRating, getShowImage } from '../components/ShowCard'

function Diary() {
  // Group entries by month
  const entriesByMonth = diaryEntries.reduce((acc, entry) => {
    const date = new Date(entry.date)
    const monthKey = date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
    if (!acc[monthKey]) acc[monthKey] = []
    const show = shows.find(s => s.id === entry.showId)
    if (show) {
      acc[monthKey].push({ ...entry, show })
    }
    return acc
  }, {})

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Header */}
      <section className="px-5 py-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#C41E3A]">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-[#5A5A5A] uppercase tracking-[0.15em] font-semibold mb-0.5">
                  Theater Diary
                </p>
                <h1 className="font-display text-[24px] font-semibold text-white">
                  Your Journey
                </h1>
              </div>
            </div>
            <Link
              to="/add"
              className="w-10 h-10 rounded-xl bg-[#C41E3A] flex items-center justify-center text-white hover:bg-[#9B1830] transition-colors shadow-lg shadow-[#C41E3A]/20"
            >
              <Plus size={20} strokeWidth={2} />
            </Link>
          </div>
          <p className="text-[#A8A8A8] text-[13px] leading-relaxed mt-4">
            A timeline of every show you've seen. Add notes, ratings, and memories.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="px-5 max-w-lg mx-auto">
        {Object.entries(entriesByMonth).map(([month, entries], monthIndex) => (
          <motion.div
            key={month}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: monthIndex * 0.1 }}
            className="mb-8"
          >
            {/* Month Header */}
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-4 h-4 text-[#C41E3A]" />
              <h2 className="font-display text-[18px] font-semibold text-white">{month}</h2>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[11px] text-[#5A5A5A]">{entries.length} shows</span>
            </div>

            {/* Entries */}
            <div className="space-y-2.5">
              {entries.map((entry, entryIndex) => {
                const date = new Date(entry.date)
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: monthIndex * 0.1 + entryIndex * 0.05 }}
                    className="card p-3.5 hover:border-[#C41E3A]/20 transition-all duration-300"
                  >
                    <div className="flex gap-3">
                      {/* Date */}
                      <div className="text-center flex-shrink-0 w-12">
                        <div className="text-[10px] text-[#C41E3A] font-semibold uppercase">
                          {date.toLocaleString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-xl font-bold text-white">
                          {date.getDate()}
                        </div>
                      </div>

                      {/* Poster */}
                      <div className="w-11 h-[60px] rounded-lg overflow-hidden bg-[#1A1A1A] flex-shrink-0">
                        <img
                          src={getShowImage(entry.show.id)}
                          alt={entry.show.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/show/${entry.show.id}`}
                          className="font-display text-[14px] font-semibold text-white/90 hover:text-white transition-colors block truncate"
                        >
                          {entry.show.title}
                        </Link>
                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#5A5A5A]">
                          <span className="truncate">{entry.show.venue}</span>
                          {entry.isRewatch && (
                            <span className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[#A8A8A8] text-[10px]">
                              Rewatch
                            </span>
                          )}
                        </div>
                        <div className="mt-1.5">
                          <StarRating rating={entry.rating} size="sm" />
                        </div>
                        {entry.review && (
                          <p className="mt-2 text-[12px] text-[#A8A8A8] leading-relaxed line-clamp-2">
                            "{entry.review}"
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Diary
