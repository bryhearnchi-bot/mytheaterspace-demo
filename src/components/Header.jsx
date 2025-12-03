import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, ChevronRight } from 'lucide-react'
import { currentUser } from '../data/mockData'
import { motion, AnimatePresence } from 'framer-motion'

const MENU_ITEMS = [
  { label: 'Broadway', to: '/discover', desc: 'Current Broadway shows' },
  { label: 'Off-Broadway', to: '/discover', desc: 'Intimate theater experiences' },
  { label: 'West End', to: '/discover', desc: 'London\'s finest' },
  { label: 'National Tours', to: '/discover', desc: 'Shows on the road' },
  { label: 'Awards', to: '/rankings', desc: 'Tony & more' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#080808]/98 backdrop-blur-2xl flex flex-col"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#5A5A5A] hover:text-white transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </motion.button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="px-8 pt-8"
            >
              <Link to="/" onClick={() => setMenuOpen(false)} className="inline-block">
                <h1 className="font-display font-bold text-xl text-white">
                  My <span className="text-[#C41E3A] italic">Theatre</span>Space
                </h1>
              </Link>
            </motion.div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col justify-center px-8 -mt-16">
              <div className="space-y-1">
                {MENU_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-[#C41E3A]/30 transition-colors"
                    >
                      <div>
                        <h2 className="font-display text-[28px] font-semibold text-white group-hover:text-[#C41E3A] transition-colors">
                          {item.label}
                        </h2>
                        <p className="text-[12px] text-[#5A5A5A] mt-0.5">{item.desc}</p>
                      </div>
                      <ChevronRight size={20} className="text-[#3A3A3A] group-hover:text-[#C41E3A] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10 pt-6 border-t border-white/5"
            >
              <div className="flex gap-8 text-[12px]">
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#5A5A5A] hover:text-white transition-colors"
                >
                  Settings
                </Link>
                <a href="#" className="text-[#5A5A5A] hover:text-white transition-colors">
                  Support
                </a>
                <a href="#" className="text-[#5A5A5A] hover:text-white transition-colors">
                  About
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'glass-header py-3'
            : 'py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="px-5 flex items-center justify-between max-w-lg mx-auto w-full">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-white transition-colors -ml-1"
            >
              <Menu size={22} strokeWidth={1.5} />
            </motion.button>

            <Link to="/" className="flex items-center">
              <h1 className="font-display font-bold text-[18px] leading-none text-white tracking-tight">
                My <span className="text-[#C41E3A] italic">Theatre</span>Space
              </h1>
            </Link>
          </div>

          {/* Right: Search + Profile */}
          <div className="flex items-center gap-3">
            <Link
              to="/discover"
              className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <Link
              to="/profile"
              className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              <img
                src={`https://i.pravatar.cc/150?u=${currentUser.id}`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
