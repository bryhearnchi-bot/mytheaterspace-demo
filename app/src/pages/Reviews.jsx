import { Link } from 'react-router-dom'
import { Star, ThumbsUp, Clock, TrendingUp } from 'lucide-react'
import { shows } from '../data/mockData'
import { StarRating } from '../components/ShowCard'

function Reviews() {
  // Mock reviews data
  const reviews = [
    {
      id: 'r1',
      showId: '1',
      showTitle: 'Sunset Boulevard',
      userName: 'Sarah K.',
      userInitials: 'SK',
      rating: 5,
      title: 'Nicole Scherzinger is a revelation',
      content: 'I was skeptical about a revival, but this production completely won me over. The staging is innovative, the orchestra sounds incredible, and Nicole Scherzinger delivers one of the best performances I\'ve ever seen on Broadway.',
      helpful: 47,
      date: '2 days ago',
      verified: true,
    },
    {
      id: 'r2',
      showId: '3',
      showTitle: 'Hadestown',
      userName: 'Mike R.',
      userInitials: 'MR',
      rating: 5,
      title: 'A modern masterpiece',
      content: 'The music is haunting, the staging is genius, and the story hits differently every time. This is my third time seeing it and I cry every single time.',
      helpful: 32,
      date: '3 days ago',
      verified: true,
    },
    {
      id: 'r3',
      showId: '5',
      showTitle: 'The Outsiders',
      userName: 'Jen D.',
      userInitials: 'JD',
      rating: 4,
      title: 'Emotional and powerful',
      content: 'The ensemble is incredible and the choreography is stunning. Some pacing issues in Act 2 but overall a moving experience. Stay gold!',
      helpful: 18,
      date: '4 days ago',
      verified: true,
    },
    {
      id: 'r4',
      showId: '7',
      showTitle: 'Cabaret',
      userName: 'Alex T.',
      userInitials: 'AT',
      rating: 5,
      title: 'Unforgettable experience',
      content: 'The Kit Kat Club immersive experience is unlike anything else. Eddie Redmayne and Gayle Rankin are phenomenal. Book now - this won\'t last forever.',
      helpful: 56,
      date: '5 days ago',
      verified: true,
    },
  ]

  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-white border-b border-gray-pale">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <h1 className="font-serif text-2xl text-black">Reviews</h1>
          <p className="text-sm text-gray mt-1">Community reviews and ratings</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-pale">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-6">
            <button className="py-3 text-sm font-medium text-coral border-b-2 border-coral">
              <Clock className="w-4 h-4 inline mr-1.5" />
              Recent
            </button>
            <button className="py-3 text-sm text-gray hover:text-coral transition-colors">
              <TrendingUp className="w-4 h-4 inline mr-1.5" />
              Popular
            </button>
            <button className="py-3 text-sm text-gray hover:text-coral transition-colors">
              <Star className="w-4 h-4 inline mr-1.5" />
              Top Rated
            </button>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="space-y-4">
          {reviews.map((review) => {
            const show = shows.find(s => s.id === review.showId)
            return (
              <article
                key={review.id}
                className="bg-white border border-gray-pale p-5"
              >
                {/* Show Info */}
                <Link to={`/show/${review.showId}`} className="flex gap-3 mb-4 pb-4 border-b border-gray-pale">
                  <div className="w-14 h-20 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 fill-coral text-coral" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-black hover:text-coral transition-colors">
                      {review.showTitle}
                    </h3>
                    <p className="text-sm text-gray">{show?.venue}</p>
                    <div className="mt-1">
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                  </div>
                </Link>

                {/* Review Content */}
                <div className="mb-4">
                  <h4 className="font-medium text-black mb-2">{review.title}</h4>
                  <p className="text-sm text-gray-dark leading-relaxed">{review.content}</p>
                </div>

                {/* Review Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-pale">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white text-xs font-medium">
                      {review.userInitials}
                    </div>
                    <div>
                      <span className="text-sm text-black">{review.userName}</span>
                      {review.verified && (
                        <span className="ml-2 text-xs text-coral">Verified</span>
                      )}
                      <div className="text-xs text-gray">{review.date}</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-gray hover:text-coral transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-xs">{review.helpful} helpful</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {/* Write Review CTA */}
        <div className="mt-8 bg-paper p-6 text-center">
          <h3 className="font-serif text-lg text-black mb-2">Share Your Experience</h3>
          <p className="text-sm text-gray mb-4">Help others discover great theater</p>
          <Link
            to="/add"
            className="inline-block bg-coral text-white px-6 py-2 text-sm font-medium hover:bg-coral-dark transition-colors"
          >
            Write a Review
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Reviews
