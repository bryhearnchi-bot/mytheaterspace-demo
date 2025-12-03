import { Outlet } from 'react-router-dom'
import Header from './Header'
import MobileNav from './MobileNav'

function Layout() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}

export default Layout
