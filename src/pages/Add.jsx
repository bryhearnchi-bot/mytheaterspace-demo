import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, MapPin, ArrowLeft, Check, Camera } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { shows } from '../data/mockData'
import { StarRating, getShowImage } from '../components/ShowCard'

function Add() {
  const [step, setStep] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedShow, setSelectedShow] = useState(null)
  const [rating, setRating] = useState(0)
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  const filteredShows = searchQuery
    ? shows.filter(show =>
        show.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const handleSelectShow = (show) => {
    setSelectedShow(show)
    setStep(2)
  }

  const handleSubmit = () => {
    setStep(3)
  }

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Header */}
      <div className="px-5 py-4 max-w-lg mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-[#5A5A5A] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Cancel
        </Link>
      </div>

      <div className="px-5 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {/* Step 1: Search */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C41E3A] to-[#9B1830] flex items-center justify-center shadow-lg shadow-[#C41E3A]/20">
                  <Camera size={24} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h1 className="font-display text-[24px] font-semibold text-white mb-2 text-center">
                Log a Show
              </h1>
              <p className="text-[#5A5A5A] text-center text-[13px] mb-8">
                Search for a show you've seen
              </p>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A5A5A]" />
                <input
                  type="text"
                  placeholder="Search for a show..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#131313] border border-white/10 rounded-full text-white placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C41E3A]/50 transition-colors"
                  autoFocus
                />
              </div>

              {/* Results */}
              {searchQuery && (
                <div className="space-y-2">
                  {filteredShows.length > 0 ? (
                    filteredShows.map((show) => (
                      <motion.button
                        key={show.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => handleSelectShow(show)}
                        className="w-full card p-3 flex items-center gap-3 hover:border-[#C41E3A]/20 transition-all duration-300 text-left"
                      >
                        <div className="w-11 h-[60px] rounded-lg overflow-hidden bg-[#1A1A1A] flex-shrink-0">
                          <img
                            src={getShowImage(show.id)}
                            alt={show.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-[14px] font-semibold text-white">{show.title}</h3>
                          <p className="text-[11px] text-[#5A5A5A]">{show.type} • {show.venue}</p>
                        </div>
                      </motion.button>
                    ))
                  ) : (
                    <div className="text-center py-8 text-[#5A5A5A] text-[13px]">
                      No shows found. Try a different search.
                    </div>
                  )}
                </div>
              )}

              {/* Can't find */}
              <div className="text-center mt-8 pt-8 border-t border-white/5">
                <p className="text-[12px] text-[#5A5A5A] mb-2">Can't find what you're looking for?</p>
                <button className="text-[#C41E3A] text-[11px] font-bold uppercase tracking-[0.12em] hover:text-white transition-colors">
                  Add a new show manually
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Details */}
          {step === 2 && selectedShow && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="font-display text-[24px] font-semibold text-white mb-6 text-center">
                Log Your Experience
              </h1>

              {/* Selected Show */}
              <div className="card p-4 flex items-center gap-4 mb-8">
                <div className="w-14 h-20 rounded-lg overflow-hidden bg-[#1A1A1A] flex-shrink-0">
                  <img
                    src={getShowImage(selectedShow.id)}
                    alt={selectedShow.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-white">{selectedShow.title}</h3>
                  <p className="text-[12px] text-[#5A5A5A]">{selectedShow.type}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-[11px] font-semibold text-[#5A5A5A] uppercase tracking-[0.12em] mb-3">
                  Your Rating
                </label>
                <div className="flex justify-center">
                  <StarRating rating={rating} size="lg" interactive onChange={setRating} />
                </div>
              </div>

              {/* Date */}
              <div className="mb-6">
                <label className="block text-[11px] font-semibold text-[#5A5A5A] uppercase tracking-[0.12em] mb-2">
                  <Calendar className="w-3 h-3 inline mr-2" />
                  When did you see it?
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#131313] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C41E3A]/50 transition-colors"
                />
              </div>

              {/* Venue */}
              <div className="mb-6">
                <label className="block text-[11px] font-semibold text-[#5A5A5A] uppercase tracking-[0.12em] mb-2">
                  <MapPin className="w-3 h-3 inline mr-2" />
                  Venue
                </label>
                <input
                  type="text"
                  defaultValue={selectedShow.venue}
                  className="w-full px-4 py-3 bg-[#131313] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C41E3A]/50 transition-colors"
                />
              </div>

              {/* Notes */}
              <div className="mb-8">
                <label className="block text-[11px] font-semibold text-[#5A5A5A] uppercase tracking-[0.12em] mb-2">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What did you think? Any memorable moments?"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#131313] border border-white/10 rounded-xl text-white placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C41E3A]/50 transition-colors resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(1)}
                  className="btn-ghost flex-1"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="btn-primary flex-1"
                >
                  Save Entry
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#9B1830] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#C41E3A]/30"
              >
                <Check className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="font-display text-[24px] font-semibold text-white mb-2">
                Added to Your Diary!
              </h1>
              <p className="text-[#5A5A5A] text-[13px] mb-8">
                {selectedShow?.title} has been logged.
              </p>
              <div className="flex gap-3 justify-center">
                <Link to="/diary">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                  >
                    View Diary
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setStep(1)
                    setSelectedShow(null)
                    setSearchQuery('')
                    setRating(0)
                    setDate('')
                    setNotes('')
                  }}
                  className="btn-ghost"
                >
                  Add Another
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Add
