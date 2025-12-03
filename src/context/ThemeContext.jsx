import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference, default to dark
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    // Default to dark if no preference set
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return false
    return true
  })

  // Apply theme class immediately on mount and when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Also apply immediately on initial render to prevent flash
  if (typeof window !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
