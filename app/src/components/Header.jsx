import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react'
import { currentUser } from '../data/mockData'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

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
  const { isDark, toggleTheme } = useTheme()

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
            className="fixed inset-0 z-[60] backdrop-blur-2xl flex flex-col"
            style={{ backgroundColor: 'var(--menu-overlay-bg)' }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-muted)' }}
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
                <h1 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
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
                      className="group flex items-center justify-between py-4 border-b hover:border-[#C41E3A]/30 transition-colors"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <div>
                        <h2 className="font-display text-[28px] font-semibold group-hover:text-[#C41E3A] transition-colors" style={{ color: 'var(--text-primary)' }}>
                          {item.label}
                        </h2>
                        <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                      </div>
                      <ChevronRight size={20} className="group-hover:text-[#C41E3A] group-hover:translate-x-1 transition-all" style={{ color: 'var(--text-muted)' }} />
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
              className="px-8 pb-10 pt-6 border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-8 text-[12px]">
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Settings
                  </Link>
                  <a href="#" className="transition-colors" style={{ color: 'var(--text-muted)' }}>
                    Support
                  </a>
                  <a href="#" className="transition-colors" style={{ color: 'var(--text-muted)' }}>
                    About
                  </a>
                </div>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-2 rounded-full transition-all"
                  style={{
                    backgroundColor: 'var(--surface-highlight)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <Sun size={14} className={`transition-colors ${isDark ? 'text-[#5A5A5A]' : 'text-[#D4A84B]'}`} />
                  <div
                    className="relative w-10 h-5 rounded-full transition-colors"
                    style={{ backgroundColor: isDark ? 'var(--text-muted)' : '#C41E3A' }}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                        isDark ? 'left-0.5' : 'left-[22px]'
                      }`}
                    />
                  </div>
                  <Moon size={14} className={`transition-colors ${isDark ? 'text-[#D4A84B]' : 'text-[#8A8A8A]'}`} />
                </button>
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
