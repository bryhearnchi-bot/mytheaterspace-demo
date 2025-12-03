import { useState } from 'react'
import { Newspaper, ExternalLink, Clock, TrendingUp, Award, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { news } from '../data/mockData'

const NEWS_IMAGES = {
  1: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800&auto=format&fit=crop',
  2: 'https://images.unsplash.com/photo-1460881680093-7b7c12025f41?q=80&w=800&auto=format&fit=crop',
  3: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop',
  4: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
  5: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01cd?q=80&w=800&auto=format&fit=crop',
}

const categories = [
  { id: 'all', label: 'All', icon: Newspaper },
  { id: 'broadway', label: 'Broadway', icon: Star },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'trending', label: 'Trending', icon: TrendingUp },
]

function News() {
  const [activeCategory, setActiveCategory] = useState('all')
  const featuredNews = news[0]
  const otherNews = news.slice(1)

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Header */}
      <section className="px-5 py-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#C41E3A]">
              <Newspaper size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] text-[#5A5A5A] uppercase tracking-[0.15em] font-semibold mb-0.5">
                Theater News
              </p>
              <h1 className="font-display text-[24px] font-semibold text-white">
                What's Happening
              </h1>
            </div>
          </div>
          <p className="text-[#A8A8A8] text-[13px] leading-relaxed">
            The latest from Broadway, West End, and theaters around the world.
          </p>

          {/* Categories */}
          <div className="flex gap-2 mt-5 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 flex-shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-[#C41E3A] text-white shadow-lg shadow-[#C41E3A]/20'
                      : 'bg-[#1A1A1A] text-[#5A5A5A] hover:text-white border border-white/5'
                  }`}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="px-5 max-w-lg mx-auto mb-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card overflow-hidden"
        >
          {/* Image */}
          <div className="aspect-video relative overflow-hidden">
            <img
              src={NEWS_IMAGES[1]}
              alt={featuredNews.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
            <span className="absolute top-3 left-3 badge badge-crimson">
              Featured
            </span>
          </div>
          {/* Content */}
          <div className="p-4">
            <h2 className="font-display text-[18px] font-semibold text-white mb-2 leading-tight">
              {featuredNews.title}
            </h2>
            <p className="text-[#A8A8A8] text-[13px] leading-relaxed mb-3 line-clamp-2">
              {featuredNews.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] text-[#5A5A5A]">
                <span className="font-medium text-[#A8A8A8]">{featuredNews.source}</span>
                <span className="w-1 h-1 bg-[#3A3A3A] rounded-full" />
                <Clock size={12} />
                <span>{featuredNews.timeAgo}</span>
              </div>
              <button className="flex items-center gap-1.5 text-[11px] text-[#C41E3A] font-semibold uppercase tracking-[0.1em] hover:text-white transition-colors">
                Read
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </motion.article>
      </section>

      {/* News List */}
      <section className="px-5 max-w-lg mx-auto">
        <div className="space-y-3">
          {otherNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              className="card p-3.5 flex gap-3 hover:border-[#C41E3A]/20 transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#1A1A1A] flex-shrink-0">
                <img
                  src={NEWS_IMAGES[item.id] || NEWS_IMAGES[1]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="font-display text-[14px] font-semibold text-white/90 group-hover:text-white transition-colors leading-snug mb-1.5 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-[#5A5A5A]">
                  <span className="text-[#A8A8A8]">{item.source}</span>
                  <span className="w-1 h-1 bg-[#3A3A3A] rounded-full" />
                  <Clock size={10} />
                  <span>{item.timeAgo}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-ghost"
          >
            Load more news
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default News
