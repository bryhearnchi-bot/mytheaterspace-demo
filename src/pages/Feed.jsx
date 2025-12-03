import { Link } from 'react-router-dom'
import { Star, Heart, MessageCircle } from 'lucide-react'
import { activityFeed, shows } from '../data/mockData'
import { StarRating } from '../components/ShowCard'

function Feed() {
  // Extended activity feed for the dedicated page
  const feedItems = [
    ...activityFeed,
    {
      id: 'f4',
      userName: 'David Chen',
      userInitials: 'DC',
      action: 'reviewed',
      showTitle: 'Hadestown',
      showId: '3',
      detail: '"Absolutely mesmerizing. The staging alone is worth the ticket price."',
      rating: 5,
      timeAgo: '3 hours ago',
      likes: 12,
      comments: 3,
    },
    {
      id: 'f5',
      userName: 'Emma Wilson',
      userInitials: 'EW',
      action: 'ranked',
      showTitle: 'The Outsiders',
      showId: '5',
      detail: 'moved to #2',
      timeAgo: '5 hours ago',
      likes: 8,
      comments: 1,
    },
    {
      id: 'f6',
      userName: 'Chris Martinez',
      userInitials: 'CM',
      action: 'saw',
      showTitle: 'Cabaret',
      showId: '7',
      detail: 'at the Kit Kat Club',
      rating: 5,
      timeAgo: '6 hours ago',
      likes: 24,
      comments: 7,
    },
  ]

  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-white border-b border-gray-pale">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <h1 className="font-serif text-2xl text-black">Activity Feed</h1>
          <p className="text-sm text-gray mt-1">See what your friends are watching</p>
        </div>
      </section>

      {/* Feed */}
      <section className="max-w-2xl mx-auto px-6 py-4">
        <div className="space-y-4">
          {feedItems.map((item) => {
            const show = shows.find(s => s.id === item.showId)
            return (
              <article
                key={item.id}
                className="bg-white border border-gray-pale p-4"
              >
                {/* User Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {item.userInitials}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-black">{item.userName}</span>
                    <span className="text-gray"> {item.action} </span>
                    <Link to={`/show/${item.showId}`} className="font-medium text-coral hover:underline">
                      {item.showTitle}
                    </Link>
                    <div className="text-xs text-gray mt-0.5">{item.timeAgo}</div>
                  </div>
                </div>

                {/* Show Preview */}
                {show && (
                  <Link to={`/show/${item.showId}`} className="flex gap-3 mb-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 fill-coral text-coral" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-base text-black">{show.title}</h3>
                      <p className="text-xs text-gray">{show.venue}</p>
                      {item.rating && (
                        <div className="mt-1">
                          <StarRating rating={item.rating} size="sm" />
                        </div>
                      )}
                    </div>
                  </Link>
                )}

                {/* Detail/Review Text */}
                {item.detail && item.detail.startsWith('"') && (
                  <p className="text-sm text-gray-dark italic mb-3 pl-3 border-l-2 border-coral">
                    {item.detail}
                  </p>
                )}
                {item.detail && !item.detail.startsWith('"') && (
                  <p className="text-sm text-gray mb-3">{item.detail}</p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-6 pt-3 border-t border-gray-pale">
                  <button className="flex items-center gap-1.5 text-gray hover:text-coral transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{item.likes || 0}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray hover:text-coral transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{item.comments || 0}</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Feed
