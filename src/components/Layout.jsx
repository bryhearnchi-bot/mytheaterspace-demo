import { Outlet } from 'react-router-dom'
import Header from './Header'
import MobileNav from './MobileNav'

function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}

export default Layout
