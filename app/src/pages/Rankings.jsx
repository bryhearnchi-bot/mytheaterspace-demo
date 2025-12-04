import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { GripVertical, Trophy, Shuffle, X, Pencil, Check } from 'lucide-react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import { shows } from '../data/mockData'
import { StarRating, getShowImage } from '../components/ShowCard'

function Rankings() {
  const [rankedShows, setRankedShows] = useState(shows)
  const [editMode, setEditMode] = useState(false)
  const [compareMode, setCompareMode] = useState(false)
  const [compareIndex, setCompareIndex] = useState(0)
  const [comparePair, setComparePair] = useState(null)

  // Start comparison mode
  const startComparison = useCallback(() => {
    setCompareMode(true)
    setCompareIndex(0)
    if (rankedShows.length >= 2) {
      setComparePair([rankedShows[0], rankedShows[1]])
    }
  }, [rankedShows])

  // Handle comparison choice
  const handleCompareChoice = useCallback((winner) => {
    const [showA, showB] = comparePair
    const winnerShow = winner === 'A' ? showA : showB
    const loserShow = winner === 'A' ? showB : showA

    setRankedShows(prev => {
      const newList = prev.filter(s => s.id !== winnerShow.id && s.id !== loserShow.id)
      const winnerIndex = prev.findIndex(s => s.id === winnerShow.id)
      const loserIndex = prev.findIndex(s => s.id === loserShow.id)
      const insertIndex = Math.min(winnerIndex, loserIndex)
      newList.splice(insertIndex, 0, winnerShow, loserShow)
      return newList
    })

    const nextIndex = compareIndex + 1
    if (nextIndex < rankedShows.length - 1) {
      setCompareIndex(nextIndex)
      setComparePair([rankedShows[nextIndex], rankedShows[nextIndex + 1]])
    } else {
      setCompareMode(false)
      setComparePair(null)
    }
  }, [comparePair, compareIndex, rankedShows])

  const exitComparison = () => {
    setCompareMode(false)
    setComparePair(null)
    setCompareIndex(0)
  }

  // Ranking list content (shared between edit and view modes)
  const RankingItem = ({ show, index }) => (
    <div className="flex items-center gap-3 flex-1">
      {/* Rank Badge */}
      <div className={`w-8 h-8 text-white text-[12px] font-bold flex items-center justify-center rounded-lg flex-shrink-0 shadow-lg ${
        index === 0
          ? 'bg-gradient-to-br from-[#D4A84B] to-[#B8860B] shadow-[#D4A84B]/20'
          : index === 1
          ? 'bg-gradient-to-br from-[#A8A8A8] to-[#808080] shadow-[#A8A8A8]/20'
          : index === 2
          ? 'bg-gradient-to-br from-[#CD7F32] to-[#8B4513] shadow-[#CD7F32]/20'
          : 'bg-[#C41E3A] shadow-[#C41E3A]/20'
      }`}>
        {index + 1}
      </div>

      {/* Poster Thumbnail */}
      <div className="w-11 h-[60px] rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--surface-highlight)' }}>
        <img
          src={getShowImage(show.id)}
          alt={show.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/show/${show.id}`}
          className="font-display text-[14px] font-semibold transition-colors block truncate"
          style={{ color: 'var(--text-primary)' }}
        >
          {show.title}
        </Link>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{show.type}</span>
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
          <span className="text-[11px] truncate" style={{ color: 'var(--text-muted)' }}>{show.venue}</span>
        </div>
      </div>

      {/* Rating (hidden on mobile) */}
      <div className="hidden sm:block">
        <StarRating rating={show.rating} size="sm" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Header */}
      <section className="px-5 py-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#C41E3A]" style={{ backgroundColor: 'var(--surface-highlight)' }}>
                <Trophy size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>
                  Your Rankings
                </p>
                <h1 className="font-display text-[24px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Ranked by You
                </h1>
              </div>
            </div>
          </div>
          <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {compareMode
              ? `Comparing shows ${compareIndex + 1} of ${rankedShows.length - 1}. Pick your favorite!`
              : editMode
              ? 'Drag shows to reorder your rankings.'
              : 'Your personal theater rankings based on your comparisons.'}
          </p>
        </motion.div>
      </section>

      {/* Compare Mode */}
      <AnimatePresence mode="wait">
        {compareMode && comparePair && (
          <motion.section
            key="compare"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="px-5 max-w-lg mx-auto mb-6"
          >
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Which do you prefer?
                </h3>
                <button
                  onClick={exitComparison}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'var(--surface-highlight)', color: 'var(--text-muted)' }}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {comparePair.map((show, idx) => (
                  <motion.button
                    key={show.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCompareChoice(idx === 0 ? 'A' : 'B')}
                    className="card p-3 text-left hover:border-[#C41E3A]/40 transition-all duration-300 group"
                  >
                    <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: 'var(--surface-highlight)' }}>
                      <img
                        src={getShowImage(show.id)}
                        alt={show.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-display text-[14px] font-semibold mb-1 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                      {show.title}
                    </h4>
                    <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{show.type}</p>
                  </motion.button>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center justify-between text-[11px] mb-2" style={{ color: 'var(--text-muted)' }}>
                  <span>Progress</span>
                  <span>{compareIndex + 1} / {rankedShows.length - 1}</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--surface-highlight)' }}>
                  <motion.div
                    className="h-full bg-[#C41E3A]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((compareIndex + 1) / (rankedShows.length - 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Rankings List */}
      <section className="px-5 max-w-lg mx-auto">
        {editMode ? (
          /* Edit Mode - Draggable */
          <Reorder.Group
            axis="y"
            values={rankedShows}
            onReorder={setRankedShows}
            className="space-y-2.5"
          >
            {rankedShows.map((show, index) => (
              <Reorder.Item
                key={show.id}
                value={show}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <motion.div
                  layout
                  className="card p-3.5 flex items-center gap-3 hover:border-[#C41E3A]/20 transition-all duration-300 cursor-grab active:cursor-grabbing"
                >
                  <RankingItem show={show} index={index} />

                  {/* Drag Handle on right */}
                  <div className="transition-colors pl-2" style={{ color: 'var(--text-muted)' }}>
                    <GripVertical size={18} strokeWidth={1.5} />
                  </div>
                </motion.div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        ) : (
          /* View Mode - Static */
          <div className="space-y-2.5">
            {rankedShows.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="card p-3.5 flex items-center gap-3 hover:border-[#C41E3A]/20 transition-all duration-300"
              >
                <RankingItem show={show} index={index} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {!compareMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex gap-3"
          >
            {editMode ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEditMode(false)}
                className="btn-primary flex-1"
              >
                <Check size={16} />
                Done Editing
              </motion.button>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEditMode(true)}
                  className="btn-ghost flex-1"
                >
                  <Pencil size={14} />
                  Edit Rankings
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={startComparison}
                  className="btn-primary flex-1"
                >
                  <Shuffle size={16} />
                  Compare
                </motion.button>
              </>
            )}
          </motion.div>
        )}

        {/* Compare CTA Card */}
        {!compareMode && !editMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 card p-6 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C41E3A] to-[#9B1830] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#C41E3A]/20">
              <Shuffle size={24} className="text-white" />
            </div>
            <h3 className="font-display text-[18px] font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Refine Your Rankings
            </h3>
            <p className="text-[12px] mb-5 max-w-xs mx-auto" style={{ color: 'var(--text-muted)' }}>
              Not sure about the order? Compare shows head-to-head to let the algorithm perfect your list.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startComparison}
              className="btn-primary"
            >
              <Shuffle size={16} />
              Start Comparing
            </motion.button>
          </motion.div>
        )}
      </section>
    </div>
  )
}

export default Rankings
