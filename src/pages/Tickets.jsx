import { Link } from 'react-router-dom'
import { Star, Calendar, MapPin, ExternalLink, Clock, TrendingUp } from 'lucide-react'
import { shows, upcomingShows } from '../data/mockData'

function Tickets() {
  // Mock ticket listings
  const ticketListings = [
    {
      id: 't1',
      showId: '1',
      showTitle: 'Sunset Boulevard',
      venue: 'St. James Theatre',
      dates: 'Now - Mar 2025',
      priceRange: '$79 - $299',
      availability: 'Limited',
      hot: true,
    },
    {
      id: 't2',
      showId: '7',
      showTitle: 'Cabaret',
      venue: 'August Wilson Theatre',
      dates: 'Now - Jul 2025',
      priceRange: '$99 - $399',
      availability: 'Selling Fast',
      hot: true,
    },
    {
      id: 't3',
      showId: '3',
      showTitle: 'Hadestown',
      venue: 'Walter Kerr Theatre',
      dates: 'Now Playing',
      priceRange: '$69 - $249',
      availability: 'Good',
      hot: false,
    },
    {
      id: 't4',
      showId: '5',
      showTitle: 'The Outsiders',
      venue: 'Bernard B. Jacobs Theatre',
      dates: 'Now Playing',
      priceRange: '$59 - $199',
      availability: 'Good',
      hot: false,
    },
    {
      id: 't5',
      showId: '2',
      showTitle: 'Hamilton',
      venue: 'Richard Rodgers Theatre',
      dates: 'Now Playing',
      priceRange: '$99 - $549',
      availability: 'Available',
      hot: false,
    },
  ]

  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="font-serif text-2xl mb-2">Get Tickets</h1>
          <p className="text-sm text-white/70">Find tickets to Broadway and beyond</p>
        </div>
      </section>

      {/* Your Upcoming */}
      {upcomingShows.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-6 border-b border-gray-pale">
          <h2 className="font-serif text-lg text-black mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-coral" />
            Your Upcoming Shows
          </h2>
          <div className="space-y-3">
            {upcomingShows.map((upcoming) => {
              const date = new Date(upcoming.date)
              return (
                <div
                  key={upcoming.id}
                  className="bg-paper p-4 flex items-center gap-4"
                >
                  <div className="text-center flex-shrink-0 w-12">
                    <div className="text-xs text-coral font-medium uppercase">
                      {date.toLocaleString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-xl font-semibold text-black">
                      {date.getDate()}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-base text-black">{upcoming.title}</h3>
                    <p className="text-xs text-gray">{upcoming.venue} • {upcoming.time}</p>
                  </div>
                  <button className="text-xs text-coral hover:underline">
                    View Ticket
                  </button>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Hot Tickets */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="font-serif text-lg text-black mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-coral" />
          Hot Tickets
        </h2>
        <div className="space-y-3">
          {ticketListings.filter(t => t.hot).map((listing) => (
            <article
              key={listing.id}
              className="bg-white border border-gray-pale p-4 hover:border-coral transition-colors"
            >
              <div className="flex gap-4">
                {/* Poster */}
                <div className="w-16 h-24 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center flex-shrink-0 relative">
                  <Star className="w-5 h-5 fill-coral text-coral" />
                  <span className="absolute top-0 right-0 bg-coral text-white text-[8px] px-1 py-0.5 font-medium">
                    HOT
                  </span>
                </div>
                {/* Info */}
                <div className="flex-1">
                  <Link to={`/show/${listing.showId}`} className="font-serif text-lg text-black hover:text-coral transition-colors">
                    {listing.showTitle}
                  </Link>
                  <div className="flex items-center gap-1 text-sm text-gray mt-1">
                    <MapPin className="w-3 h-3" />
                    {listing.venue}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray">
                    <Clock className="w-3 h-3" />
                    {listing.dates}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="font-medium text-black">{listing.priceRange}</span>
                      <span className={`ml-2 text-xs ${listing.availability === 'Limited' || listing.availability === 'Selling Fast' ? 'text-coral' : 'text-gray'}`}>
                        {listing.availability}
                      </span>
                    </div>
                    <button className="bg-coral text-white px-4 py-1.5 text-sm font-medium hover:bg-coral-dark transition-colors flex items-center gap-1">
                      Get Tickets <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Shows */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="font-serif text-lg text-black mb-4">Browse All Shows</h2>
        <div className="space-y-3">
          {ticketListings.filter(t => !t.hot).map((listing) => (
            <article
              key={listing.id}
              className="bg-white border border-gray-pale p-4 hover:border-coral transition-colors"
            >
              <div className="flex gap-4">
                {/* Poster */}
                <div className="w-12 h-16 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 fill-coral text-coral" />
                </div>
                {/* Info */}
                <div className="flex-1">
                  <Link to={`/show/${listing.showId}`} className="font-serif text-base text-black hover:text-coral transition-colors">
                    {listing.showTitle}
                  </Link>
                  <div className="text-xs text-gray">{listing.venue}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-black">{listing.priceRange}</span>
                    <button className="text-coral text-sm font-medium hover:underline flex items-center gap-1">
                      Get Tickets <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lottery & Rush */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <div className="bg-paper p-6">
          <h2 className="font-serif text-lg text-black mb-2">Looking for deals?</h2>
          <p className="text-sm text-gray mb-4">
            Check out lottery and rush ticket options for discounted seats.
          </p>
          <button className="text-coral text-sm font-medium hover:underline">
            View Lottery & Rush Options
          </button>
        </div>
      </section>
    </div>
  )
}

export default Tickets
