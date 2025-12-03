import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rankings from './pages/Rankings'
import Diary from './pages/Diary'
import Discover from './pages/Discover'
import News from './pages/News'
import ShowDetail from './pages/ShowDetail'
import Profile from './pages/Profile'
import Add from './pages/Add'
import Feed from './pages/Feed'
import Reviews from './pages/Reviews'
import Tickets from './pages/Tickets'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rankings" element={<Rankings />} />
        <Route path="diary" element={<Diary />} />
        <Route path="discover" element={<Discover />} />
        <Route path="news" element={<News />} />
        <Route path="show/:id" element={<ShowDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add" element={<Add />} />
        <Route path="feed" element={<Feed />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="tickets" element={<Tickets />} />
      </Route>
    </Routes>
  )
}

export default App
