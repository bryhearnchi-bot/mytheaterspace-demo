import { NavLink } from 'react-router-dom'
import { Ticket, Trophy, Bookmark, Newspaper, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex flex-col items-center justify-center gap-1 w-16 py-2 transition-all duration-200',
          isActive ? 'text-[#C41E3A]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
          <span className={cn(
            "text-[9px] font-medium uppercase tracking-wider",
            isActive ? "opacity-100" : "opacity-70"
          )}>
            {label}
          </span>
        </>
      )}
    </NavLink>
  )
}

function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-nav pb-safe z-50">
      <div className="max-w-lg mx-auto w-full flex justify-around items-center px-2">
        <NavItem to="/" icon={Ticket} label="Shows" />
        <NavItem to="/rankings" icon={Trophy} label="Rankings" />

        {/* Center Add Button */}
        <div className="relative -top-4">
          <NavLink to="/add">
            {({ isActive }) => (
              <motion.div
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {/* Glow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl blur-xl transition-opacity duration-300",
                  isActive ? "bg-[#C41E3A]/50 opacity-100" : "bg-[#C41E3A]/30 opacity-0 group-hover:opacity-100"
                )} />

                {/* Button */}
                <div className={cn(
                  "relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300",
                  "bg-gradient-to-br from-[#C41E3A] to-[#9B1830]",
                  "border-4 border-[var(--bg)]",
                  "shadow-[0_4px_20px_rgba(196,30,58,0.4)]",
                  isActive && "shadow-[0_4px_30px_rgba(196,30,58,0.6)]"
                )}>
                  <Plus size={26} strokeWidth={2.5} className="text-white" />
                </div>
              </motion.div>
            )}
          </NavLink>
        </div>

        <NavItem to="/diary" icon={Bookmark} label="Diary" />
        <NavItem to="/news" icon={Newspaper} label="News" />
      </div>
    </nav>
  )
}

export default MobileNav
