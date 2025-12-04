# My Theater Space
## *Your Theater Journey, Remembered*

**Product Design Document**

Version 1.2 | November 2025 | DRAFT

---

# Table of Contents

1. [Product Overview](#1-product-overview)
2. [Feature Specifications](#2-feature-specifications)
3. [User Experience](#3-user-experience)
4. [Technical Architecture](#4-technical-architecture)
5. [Business Model](#5-business-model)
6. [Success Metrics](#6-success-metrics)
7. [Risks & Mitigations](#7-risks--mitigations)
8. [Development Timeline](#8-development-timeline)
9. [Open Questions](#9-open-questions)

**Quick Reference Sections:**
- [API Research Summary](#api-research-summary)
- [Copyright & Legal Risk Analysis](#copyright--legal-risk-analysis)

---

# API Research Summary

*Research conducted November 2025*

### Ticketing APIs

| API | Cost | Best For | Recommendation |
|-----|------|----------|----------------|
| **SeatGeek** | Free + 50% revenue share (~$11/sale) | Broadway, touring, all live events | ✅ **Use for MVP** |
| **London Theatre Direct** | Free + ~10% commission | West End shows | ✅ **Use for UK coverage** |
| **TodayTix** | Partnership required (no public API) | Broadway/West End premium | ⏳ Pursue partnership later |
| **Broadway Inbound** | Partnership required (B2B focus) | Travel trade, groups | ❌ Not needed for consumer app |
| **TicketsData** | $499-2,499/month | Aggregated data from all sources | ❌ Too expensive for MVP |

### Theater News (Free RSS Feeds)

- Playbill, Broadway.com, WhatsOnStage, TheaterMania, BroadwayWorld all offer free RSS feeds
- No API costs - just need to build RSS aggregator
- Must respect copyright: headlines + excerpts only, link to original

### Show Database

- **No free theater database API exists** (unlike TMDB for movies)
- IBDB, BroadwayWorld, Playbill have data but no public APIs
- **Recommended:** Manual curation of 500+ shows for MVP, user contributions for growth
- London Theatre Direct API provides current West End show data (free)

---

# Copyright & Legal Risk Analysis

*Research conducted November 2025*

## Risk Summary

| Risk Area | Risk Level | Mitigation Strategy |
|-----------|------------|---------------------|
| Show Poster Images | 🟡 MEDIUM | Use thumbnails, link to sources, DMCA compliance, user-contributed |
| RSS News Aggregation | 🟡 MEDIUM | Headlines + excerpts only, always link back, never full text |
| Show Database Scraping | 🔴 HIGH | Manual curation for MVP, avoid scraping IBDB/Playbill |
| Ticket Affiliate Links | 🟢 LOW | Official APIs with explicit licensing |
| User-Generated Content | 🟢 LOW | Clear ToS, DMCA takedown process |

## Detailed Analysis

### 1. Show Poster Images (MEDIUM RISK)

**The Issue:** Broadway and West End show posters are copyrighted artwork owned by production companies. Unlike movies (where promotional use is often tolerated), theater productions vary in their enforcement.

**What Similar Apps Do:**
- **IMDB** pays for licenses to display movie posters and cannot sublicense them
- **Letterboxd** uses images from The Movie Database (TMDB), which operates in a legal gray area under fair use for identification purposes
- **Wikipedia** uses scaled-down images with explicit fair use rationale for identification and commentary

**Fair Use Analysis:**
1. **Purpose:** Identifying shows in a database/catalog = transformative, favors fair use
2. **Nature:** Creative artwork = weighs against fair use
3. **Amount:** Using thumbnails, not full resolution = favors fair use
4. **Market Effect:** Promotes shows, doesn't replace original = likely neutral/favorable

**Mitigation Strategies:**
- Use low-resolution thumbnails only (under 400px width)
- Allow user-contributed images (users take on liability)
- Implement DMCA takedown process (required for safe harbor protection)
- Provide proper attribution to productions
- Link to official show websites when possible
- Start with user-contributed images to reduce risk
- Consider reaching out to Shubert, Jujamcyn, Nederlander for partnerships

**Precedent:** The *Bill Graham Archives v. Dorling Kindersley* case (2006) found that using thumbnail concert posters for identification alongside commentary was fair use.

### 2. RSS News Aggregation (MEDIUM RISK)

**The Issue:** While RSS feeds are "published" for syndication, they remain copyrighted content. The *MidlevelU v. Newstex* case (2021) found against an aggregator that displayed full RSS content commercially.

**Key Legal Findings:**
- RSS feeds carry an implied license for *personal use* in RSS readers
- Commercial aggregation in a paid product is NOT covered by this implied license
- Displaying full text or iFrame content = likely infringement
- Summaries that are "substantially similar" to originals = also problematic

**Safe Practices:**
- Headlines + first 1-2 sentences only (excerpt)
- ALWAYS link to original article prominently
- Never display full article text
- Never reproduce behind paywall
- Don't strip ads or modify feed content
- Clearly attribute source

**Mitigation Strategies:**
- Show only: Title, source name, publication date, 50-100 word excerpt
- Large, prominent "Read More at [Source]" link
- Open original article in external browser (drive traffic to publisher)
- Consider formal partnerships with Playbill, WhatsOnStage for explicit permission
- Don't gate news behind Pro tier (reduces "commercial aggregation" argument)
- If a publisher complains, immediately remove their content

### 3. Show Database (HIGH RISK if scraping, LOW if manual)

**The Issue:** IBDB, Playbill, and BroadwayWorld have comprehensive databases but no public APIs. Scraping their data violates their Terms of Service and potentially copyright.

**Do NOT:**
- Scrape IBDB, Playbill, or BroadwayWorld
- Use automated tools to extract their data
- Copy their cast lists, synopses, or production details verbatim

**DO:**
- Manually research shows using public domain sources (Wikipedia, Wikidata)
- Write original descriptions and synopses
- Use official press releases and production announcements
- Accept user contributions (Letterboxd model)
- Partner with data providers formally

### 4. Ticket Affiliate Links (LOW RISK)

**The Issue:** Using official APIs with affiliate partnerships is explicitly licensed.

**Why This Is Safe:**
- SeatGeek and London Theatre Direct provide official APIs
- Affiliate programs explicitly grant permission to display ticket info
- Revenue sharing is built into the partnership
- Attribution requirements are typically met with logos/links

**Requirements:**
- Display SeatGeek branding as required by their partner program
- Follow each API's terms of service
- Don't misrepresent ticket availability or pricing
- Don't cache pricing data longer than allowed

### 5. User-Generated Content (LOW RISK with proper setup)

**The Issue:** Users may upload copyrighted images or content.

**Safe Harbor Requirements (DMCA § 512):**
- Register designated DMCA agent with Copyright Office
- Post agent contact information on website
- Implement takedown process and respond "expeditiously" (24-48 hours)
- Have repeat infringer policy and terminate accounts when necessary
- Not have actual knowledge of infringement

**Implementation:**
- Clear Terms of Service stating users must have rights to content they upload
- Easy-to-find DMCA reporting mechanism
- Process to remove content upon valid takedown notice
- Counter-notice process for users who dispute claims

## Recommendation Summary

| Content Type | Recommendation |
|--------------|----------------|
| Show Posters | Start with user-contributed images; use low-res thumbnails; have DMCA process ready |
| News Content | Headlines + short excerpts only; always link to source; consider publisher partnerships |
| Database | Manual curation + user contributions; no scraping; write original descriptions |
| Ticket Info | Use official APIs (SeatGeek, LTD); follow branding requirements |
| User Content | Clear ToS; registered DMCA agent; swift takedown process |

## Legal Action Items Before Launch

1. ☐ Draft Terms of Service with IP acknowledgments
2. ☐ Register DMCA designated agent with US Copyright Office ($6 fee)
3. ☐ Create public DMCA/Copyright Policy page
4. ☐ Build takedown request workflow
5. ☐ Establish repeat infringer termination policy
6. ☐ Add content reporting mechanism to app
7. ☐ Document fair use rationale for any third-party content used
8. ☐ Consider entertainment law consultation before major publisher partnerships

---

# 1. Product Overview

## 1.1 Product Vision

My Theater Space is a cross-platform theater tracking application that allows users to log, rate, review, rank, and share their theater experiences. Think "Letterboxd for theater" - a social cataloging service where theater enthusiasts can document their journeys through Broadway, West End, Off-Broadway, touring productions, regional theater, and local community productions.

## 1.2 Problem Statement

Theater enthusiasts currently have limited options for tracking their show attendance. The primary competitor (Mezzanine) is iOS-only, leaving Android users without any dedicated solution. Many theatergoers resort to spreadsheets, calendar entries, or physical playbill collections - methods that lack social features, statistics, and the visual appeal of a dedicated app.

## 1.3 Product Goals

- **Cross-Platform Access:** Serve iOS, Android, AND web users from day one
- **Comprehensive Tracking:** Support all theater types - Broadway, West End, touring, regional, community
- **AI-Powered Entry:** Reduce friction with playbill scanning and intelligent show lookup
- **Intuitive Ranking:** Help users build definitive favorites lists through simple A/B comparisons
- **Social Community:** Connect theater lovers through reviews, follows, and shared lists
- **Flexible Database:** Allow user contributions for shows not in the main database

## 1.4 Target Audience

### Primary Users

- **Avid Theatergoers:** See 5+ shows per year, want to track history and discover new productions
- **Theater Superfans:** See 15+ shows per year (6% of Broadway audience, 35% of tickets)
- **Android Users:** Currently underserved with no dedicated theater tracking app

### Secondary Users

- **Casual Theatergoers:** See 1-4 shows per year, want to remember experiences
- **Regional/Community Theater Fans:** Track local productions not covered by existing platforms
- **Theater Industry Professionals:** Track shows for research, inspiration, or professional development

---

# 2. Feature Specifications

## 2.1 Core Features (MVP)

### 2.1.1 Show Logging

**Description:** Users can log theater visits with comprehensive details.

| Field | Type | Notes |
|-------|------|-------|
| Show Title | Text (required) | Autocomplete from database |
| Date Attended | Date (required) | Defaults to today |
| Theater/Venue | Text (optional) | Autocomplete from venues |
| Rating | 1-5 stars (0.5 steps) | Optional, separate from ranking |
| Review | Long text | Optional, no min length |
| Seat Location | Text | e.g., "Orch Row G, Seat 101" |
| Ticket Price | Currency | Optional, for personal tracking |
| Photos | Image upload | Max 5 per entry |
| Tags | Multi-select | Custom + predefined tags |

### 2.1.2 User Authentication

- Email/password registration and login
- Social login (Google, Apple)
- Password reset via email
- Session persistence across devices

### 2.1.3 Show Database

- Pre-seeded with 500+ major Broadway/West End shows
- Show metadata: title, type (musical/play), opening date, theater
- Poster/artwork images where available
- Manual entry option for unlisted shows (user-specific)

### 2.1.4 User Profile & Stats

- Profile page with avatar, display name, bio
- Total shows seen count
- Shows by year breakdown
- Average rating given
- Recent activity feed

---

## 2.2 Phase 2 Features

### 2.2.1 AI-Powered Playbill Scanner

**Description:** Users photograph their playbill cover to automatically create a diary entry.

**Flow:**
1. User taps "Scan Playbill" button
2. Camera opens, user photographs playbill cover or title page
3. OCR extracts text (show title, theater name, dates if visible)
4. System searches database for matching show
5. If found: Pre-populates entry form with show data
6. If not found: AI searches web for show info, creates user entry
7. User confirms/edits and saves

### 2.2.2 Comparative Ranking System ⭐ *Key Differentiator*

**Description:** A unique ranking feature that helps users build their definitive "Favorite Shows" list through simple A/B comparisons rather than arbitrary number assignments.

**Key Concept:** Rankings are completely separate from star ratings. A 3-star guilty pleasure can rank above a 5-star prestige show if that's what the user genuinely prefers. Star ratings reflect quality assessment; rankings reflect personal favorites.

#### How It Works - Binary Search Comparison

1. User logs a new show and saves entry
2. System prompts: "Add to your favorites ranking?"
3. If yes, binary comparison begins - two show posters appear side by side
4. User taps which show they prefer (simple "Which do you like better?" choice)
5. System uses binary search algorithm to find correct position
6. Process repeats until exact rank position is determined
7. Show is inserted at the correct position in user's ranking

#### Algorithm Efficiency

The binary search approach minimizes the number of comparisons needed:

| Shows Already Ranked | Max Comparisons to Rank New Show |
|---------------------|----------------------------------|
| 1-2 shows | 1 comparison |
| 3-4 shows | 2 comparisons |
| 5-8 shows | 3 comparisons |
| 9-16 shows | 4 comparisons |
| 17-32 shows | 5 comparisons |
| 33-64 shows | 6 comparisons |
| 65-128 shows | 7 comparisons |
| 129-256 shows | 8 comparisons |

*Example: A user with 50 ranked shows only needs ~6 quick taps to perfectly place a new show.*

#### Comparison UI

```
┌─────────────────────────────────────────┐
│         Which do you prefer?            │
├───────────────────┬─────────────────────┤
│                   │                     │
│   [Show Poster]   │    [Show Poster]    │
│                   │                     │
│    Hamilton       │      Wicked         │
│                   │                     │
│    [ TAP ]        │      [ TAP ]        │
│                   │                     │
├───────────────────┴─────────────────────┤
│           [ Skip for now ]              │
└─────────────────────────────────────────┘
```

#### Manual Adjustments - Drag & Drop

After the algorithmic placement, users have full control:

- **Drag & Drop Reordering:** Users can manually adjust rankings at any time by dragging shows up or down the list
- **Long-press to Drag:** Touch and hold a show to pick it up, then drag to new position
- **Visual Feedback:** Show card lifts and other items shift to show drop zone
- **Instant Save:** Changes save automatically

#### Additional Ranking Features

- **Bulk Re-rank:** Option to re-run comparisons for entire list or selected shows
- **Exclude from Ranking:** Mark shows as "unranked" (saw it but don't want to rank)
- **Ranking History:** See when shows were added/moved in ranking
- **"Re-evaluate" Button:** Trigger comparison flow for a specific show if user changes their mind

#### Public Profile Display

- User's ranked list visible on profile as "[Name]'s Favorite Shows"
- Shows display with rank number (#1, #2, #3...) and poster thumbnail
- Privacy options: Public, Friends Only, or Private
- Shareable link to ranking list
- Option to show/hide star ratings alongside rankings

#### Why This Approach?

1. **Easier than numbers:** "Do I like Hamilton or Wicked better?" is easier than "Is Hamilton my 12th or 13th favorite?"
2. **More accurate:** Forces direct comparisons rather than vague numerical assignments
3. **Scales well:** Logarithmic efficiency means even 100+ shows is manageable
4. **Engaging:** The comparison format is almost game-like
5. **Reflects true preferences:** Separates "this is objectively good" (ratings) from "this is MY favorite" (rankings)

### 2.2.3 Social Features

- **Follow System:** Follow other users to see their activity
- **Activity Feed:** See recent logs/reviews from followed users
- **Like Reviews:** Heart/like other users' reviews
- **Share:** Share entries to social media with preview card

### 2.2.4 Lists & Wishlists

- **Wishlist:** Shows user wants to see
- **Custom Lists:** User-created lists ("Best Musicals of 2024", "Shows to See Before They Close")
- **Favorites:** Mark shows as all-time favorites (distinct from ranking - these are highlights)
- **Import Rankings to Lists:** Create a list from top N of your ranking

---

### 2.2.5 Ticketing Integration ⭐ *Revenue Opportunity*

**Description:** Direct links to purchase tickets for shows from within the app, with affiliate revenue.

**Strategy:** Rather than building a full ticketing system (complex, expensive), we'll use affiliate deep links to official ticket sources, earning commission on referrals.

#### Recommended Approach: Affiliate Deep Links

| Platform | Coverage | Commission | API/Integration Type |
|----------|----------|------------|---------------------|
| **SeatGeek** | Broadway, touring, sports, concerts | ~$11/sale avg (50% revenue share) | Free API + Partner Program |
| **London Theatre Direct** | West End, London shows | ~10% of order value | Free REST API + Commission |
| **TodayTix** | Broadway, West End, regional | Partnership required | No public API - deep links only |
| **Broadway Inbound** | Broadway (B2B/travel trade) | Wholesale margins | API requires partnership |

#### Implementation Flow

1. User views a show in My Theater Space
2. "Get Tickets" button appears for shows currently running
3. Button links to best available ticket source (prioritize official, then secondary market)
4. User completes purchase on ticket site
5. My Theater Space earns affiliate commission

#### Technical Notes

- **SeatGeek API** - Best option for MVP. Free to use, well-documented, returns events/venues/pricing. Partner program pays 50% of SeatGeek's revenue per sale (~$11 average). No minimum traffic threshold.
- **London Theatre Direct API** - Free REST API for West End shows. Commission-based (~10% per sale). Full booking capability if desired.
- **TodayTix** - No public API. Requires business partnership for integration. Can use simple affiliate/deep links initially.
- **TicketsData API** (aggregator) - If we need unified data across multiple sources. **Expensive:** Starter $499/month, Pro $2,499/month. Only consider at scale.

#### Revenue Potential

| Metric | Estimate |
|--------|----------|
| Monthly active users | 2,000 |
| Users clicking "Get Tickets" | 20% (400) |
| Conversion rate | 5% (20 purchases) |
| Average commission | $10 |
| **Monthly affiliate revenue** | **~$200** |

*Note: Revenue scales with user base. At 20,000 MAU, could generate ~$2,000/month.*

---

### 2.2.6 Theater News Feed

**Description:** Aggregated news from major theater publications, displayed in-app to increase engagement and session time.

#### News Sources (RSS Feeds - Free)

| Source | RSS Feed | Content Type |
|--------|----------|--------------|
| **Playbill** | playbill.com/rss | Broadway news, features, casting |
| **Broadway.com** | broadway.com/feeds/buzz/latest | News, reviews, interviews |
| **WhatsOnStage** | whatsonstage.com/news (RSS) | UK/West End news |
| **TheaterMania** | theatermania.com/rss | NYC theater coverage |
| **BroadwayWorld** | broadwayworld.com/rss | International theater news |
| **The Broadway Blog** | Multiple RSS feeds | Industry analysis |

#### Implementation

RSS feeds are **free** to consume. We'll build a simple aggregator that:

1. Fetches RSS feeds every 15-30 minutes
2. Parses and normalizes articles (title, summary, image, source, date)
3. Stores in database with deduplication
4. Displays in "News" tab or home feed
5. Deep links to original article (respects publishers, no content scraping)

#### Cost: $0

RSS feeds are free. Only cost is minimal compute for fetching/parsing (~included in Railway hosting).

#### Legal Considerations

- Display headlines and brief excerpts only (fair use)
- Always link to original source
- Include source attribution
- Don't reproduce full articles
- Consider reaching out to publishers for formal syndication if we grow large

---

## 2.3 Phase 3 Features

- **Advanced Stats:** Hours spent in theater, favorite genres, theater venue map
- **Notifications:** Alerts when followed users log shows, when wishlisted shows announce tours
- **Comments:** Discussion threads on reviews
- **Export:** CSV/PDF export of theater history, including rankings
- **Venue Database:** Theater info with seating charts and accessibility info
- **Ticket Price Comparison:** Show prices across multiple ticket sources
- **Year in Review:** Annual summary with top-ranked shows, stats, shareable graphic

---

# 3. User Experience

## 3.1 Key User Flows

### 3.1.1 New User Onboarding

1. User downloads app / visits website
2. Sees value proposition screen ("Track every show you see")
3. Signs up with email or social login
4. Optional: Import from spreadsheet
5. Prompted to log first show
6. Sees empty profile with encouragement to start tracking

### 3.1.2 Logging a Show (Database Match)

1. User taps "+" or "Log Show" button
2. Starts typing show name
3. Autocomplete suggests matches from database
4. User selects show - poster and metadata auto-populate
5. User adds date, rating, review, optional details
6. User saves entry
7. **NEW:** System asks "Add to your favorites ranking?"
8. If yes, comparison flow begins (see 2.2.2)
9. Entry appears in diary with artwork and rank badge (if ranked)

### 3.1.3 Logging an Unlisted Show

1. User searches for show, no matches found
2. Taps "Add Custom Show"
3. Enters show title and basic info manually
4. Optionally uploads photo of playbill as cover
5. Show is added to user's personal database only
6. If show gets multiple user entries, flagged for admin review to add to main database

### 3.1.4 Adjusting Rankings (Drag & Drop)

1. User navigates to Profile → My Rankings
2. Sees numbered list of all ranked shows with posters
3. Long-presses a show to pick it up
4. Drags to new position - other shows shift to accommodate
5. Releases to drop in new position
6. Rank numbers automatically update
7. Changes save instantly

### 3.1.5 Viewing Someone's Rankings

1. User visits another user's profile
2. Sees "Favorite Shows" section with top 5 displayed
3. Taps "See Full Ranking" to view complete list
4. Can scroll through ranked list with poster thumbnails
5. Tapping a show opens that show's detail page

## 3.2 Information Architecture

**Primary Navigation (Bottom Tab Bar):**

| Tab | Icon | Content |
|-----|------|---------|
| Home | Theater masks | Activity feed, recent entries from followed users |
| Search | Magnifying glass | Search shows, users, venues |
| Add | Plus sign (prominent) | Log new show entry |
| News | Newspaper | Aggregated theater news from Playbill, WhatsOnStage, etc. |
| Profile | Person silhouette | User stats, **rankings**, lists, settings |

*Note: Diary moved to Profile sub-nav to accommodate News tab. Alternative: News as sub-tab within Home.*

**Profile Sub-navigation:**

- Overview (stats summary)
- Diary (chronological log)
- **Rankings** (favorite shows list with drag/drop)
- Lists (wishlists, custom lists)
- Reviews (all written reviews)
- Settings

---

# 4. Technical Architecture

## 4.1 Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | React Native + Expo | Cross-platform (iOS, Android, Web) |
| Language | TypeScript | Type safety, better DX |
| Backend/Database | Supabase | PostgreSQL + Auth + Storage + Realtime |
| Hosting | Railway | Simple deployment, usage-based pricing |
| OCR Service | Google Cloud Vision | Playbill text extraction |
| AI Search | Claude API | Intelligent show lookup for unlisted shows |
| Image Storage | Supabase Storage | User photos, show artwork |
| **Ticketing (US)** | SeatGeek API | Free API, affiliate revenue |
| **Ticketing (UK)** | London Theatre Direct API | Free API, West End coverage |
| **News Aggregation** | RSS Feeds | Playbill, WhatsOnStage, etc. (free) |

## 4.2 Database Schema (Core Tables)

### users
```
id, email, display_name, avatar_url, bio, created_at, updated_at
```

### shows
```
id, title, type (musical/play), poster_url, opening_date, closing_date, 
theater_id, synopsis, is_user_created, created_by_user_id
```

### diary_entries
```
id, user_id, show_id, date_attended, rating, review, seat_location, 
ticket_price, is_public, created_at, updated_at
```

### user_rankings ⭐ *New table for ranking system*
```
id, user_id, show_id, rank_position, added_at, last_moved_at
```
*Note: rank_position is an integer. When user drags/drops, affected positions are recalculated.*

### theaters
```
id, name, city, address, latitude, longitude, capacity
```

### follows
```
follower_id, following_id, created_at
```

### lists
```
id, user_id, name, description, is_public, type (wishlist/custom/favorites), created_at
```

### news_articles ⭐ *New table for news feed*
```
id, title, summary, source (playbill/whatsonstage/etc), source_url, 
image_url, published_at, fetched_at
```
*Note: Store metadata only, link to original articles. Dedupe by source_url.*

## 4.3 Ranking Algorithm Implementation

```typescript
// Binary search to find insertion point
async function findRankPosition(userId: string, newShowId: string): Promise<number> {
  const rankings = await getUserRankings(userId); // sorted by rank_position
  
  if (rankings.length === 0) return 1;
  
  let low = 0;
  let high = rankings.length - 1;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparisonShow = rankings[mid];
    
    // Present comparison to user and await response
    const userPreference = await presentComparison(newShowId, comparisonShow.show_id);
    
    if (userPreference === 'NEW_SHOW') {
      high = mid - 1; // User prefers new show, search upper half
    } else {
      low = mid + 1;  // User prefers existing show, search lower half
    }
  }
  
  return low + 1; // Convert to 1-indexed rank position
}

// Insert and shift other rankings
async function insertAtRank(userId: string, showId: string, position: number) {
  // Shift all shows at position and below down by 1
  await supabase.rpc('shift_rankings_down', { 
    user_id: userId, 
    from_position: position 
  });
  
  // Insert new ranking
  await supabase.from('user_rankings').insert({
    user_id: userId,
    show_id: showId,
    rank_position: position,
    added_at: new Date()
  });
}
```

---

# 5. Business Model

## 5.1 Tiered Subscription Model

Based on market research of successful freemium apps (Letterboxd, Strava, Spotify) and industry conversion rate benchmarks, My Theater Space will use a three-tier model: **Free**, **Pro**, and **Superfan**.

### Tier Comparison

| Feature | Free | Pro ($2.99/mo or $19.99/yr) | Superfan ($4.99/mo or $39.99/yr) |
|---------|------|-----------------------------|---------------------------------|
| **Core Logging** | | | |
| Log unlimited shows | ✅ | ✅ | ✅ |
| Star ratings & written reviews | ✅ | ✅ | ✅ |
| Attach up to 3 photos per entry | ✅ | ✅ (5 photos) | ✅ (10 photos) |
| View your diary & history | ✅ | ✅ | ✅ |
| Basic stats (shows seen, by year) | ✅ | ✅ | ✅ |
| | | | |
| **Ranking & Comparisons** | | | |
| Build ranked favorites list | ✅ (up to 20 shows) | ✅ Unlimited | ✅ Unlimited |
| A/B comparison ranking | ✅ | ✅ | ✅ |
| Re-rank via drag & drop | ❌ | ✅ | ✅ |
| Export rankings as list | ❌ | ✅ | ✅ |
| | | | |
| **Social & Discovery** | | | |
| Follow friends & see activity | ✅ | ✅ | ✅ |
| Like & comment on reviews | ✅ | ✅ | ✅ |
| Create public lists | ✅ (up to 3) | ✅ Unlimited | ✅ Unlimited |
| | | | |
| **Advanced Stats** | | | |
| Year-in-review stats page | ✅ (basic) | ✅ Full | ✅ Full + shareable |
| All-time viewing stats | ❌ | ✅ | ✅ |
| Genre/theater/cast breakdowns | ❌ | ✅ | ✅ |
| Viewing streak tracking | ❌ | ✅ | ✅ |
| | | | |
| **AI & Automation** | | | |
| Playbill scanner (OCR) | 3 scans/month | Unlimited | Unlimited |
| AI show lookup | 3 lookups/month | Unlimited | Unlimited |
| | | | |
| **Ticketing** | | | |
| "Get Tickets" links | ✅ | ✅ | ✅ |
| Watchlist alerts (shows on sale) | ❌ | ❌ | ✅ |
| Price drop notifications | ❌ | ❌ | ✅ |
| | | | |
| **Theater News** ⭐ | | | |
| News feed (headlines + links) | ✅ | ✅ | ✅ |
| Personalized news (your shows) | ❌ | ❌ | ✅ |
| Breaking news push notifications | ❌ | ❌ | ✅ |
| | | | |
| **Customization** | | | |
| Profile backdrop image | ❌ | ✅ | ✅ |
| Custom show poster selection | ❌ | ❌ | ✅ |
| | | | |
| **Support** | | | |
| Standard support | ✅ | ✅ | ✅ |
| Priority support | ❌ | ❌ | ✅ |
| Early access to new features | ❌ | ❌ | ✅ |
| | | | |
| **Ads** | | | |
| Ad-free experience | ❌ | ✅ | ✅ |

### Pricing Strategy Rationale

**Why Three Tiers Instead of Two:**
- Letterboxd's two-tier model (Pro $19/year, Patron $49/year) shows that superfans will pay 2.5x more for minimal additional features
- Having a mid-tier ($19.99) captures casual users who want core premium features
- Top tier ($39.99) captures superfans who want *everything* and to support the app
- Three tiers allow natural upgrade path: Free → Pro → Superfan

**Why News Is Tiered (Personalized in Superfan only):**
- Basic news feed is free (keeps users engaged, drives traffic to publishers)
- Personalized news + push notifications require more server resources
- Creates clear value differentiation between Pro and Superfan
- Reduces "commercial aggregation" copyright concerns (free = non-commercial purpose)

**Comparison to Competitors:**

| App | Free Tier | Mid Tier | Top Tier |
|-----|-----------|----------|----------|
| **Letterboxd** | Basic | Pro $19/yr | Patron $49/yr |
| **Strava** | Basic | Premium $80/yr | (single tier) |
| **Spotify** | Ad-supported | Individual $12/mo | Family $16/mo |
| **Goodreads** | Full (Amazon-owned) | None | None |
| **My Theater Space** | Generous limits | Pro $20/yr | Superfan $40/yr |

### Conversion Rate Projections

Based on industry benchmarks for freemium consumer apps:

| Metric | Conservative | Target | Optimistic |
|--------|--------------|--------|------------|
| Free-to-Paid Conversion | 3% | 5% | 8% |
| Pro vs Superfan Split | 70%/30% | 60%/40% | 50%/50% |
| Annual vs Monthly | 60% annual | 70% annual | 80% annual |

*Industry benchmark: Self-serve freemium apps see 3-5% conversion (source: Lenny's Newsletter 2023). Products with strong community features like Strava and Letterboxd tend toward the higher end.*

### Revenue Model

**Three Revenue Streams:**

1. **Subscriptions** (Primary - 70% of revenue)
   - Pro tier: $2.99/month or $19.99/year
   - Superfan tier: $4.99/month or $39.99/year
   
2. **Ticket Affiliate Commissions** (Secondary - 25% of revenue)
   - SeatGeek: ~$11 per transaction (50% of their fee)
   - London Theatre Direct: ~10% of order value
   - All users can use ticket links (drives conversions)

3. **Optional: Promoted Content** (Future - 5% of revenue)
   - Featured show placements (clearly marked as sponsored)
   - Production company partnerships
   - Theater advertising

**30-Day Free Trial:**
- New users get full Superfan features for 30 days
- Credit card required upfront (higher conversion per industry data)
- Converts to Free tier if not subscribed
- Option to choose Pro or Superfan at end of trial

## 5.2 Cost Projections

| Item | Monthly | Annual | Notes |
|------|---------|--------|-------|
| Supabase Pro | $25 | $300 | Database, auth, storage |
| Railway (hosting) | $20 | $240 | Web app hosting |
| Apple Developer Program | $8.25 | $99 | iOS App Store |
| Google Play (one-time) | - | $25 | Android Play Store |
| Google Cloud Vision (OCR) | $10 | $120 | Playbill scanning |
| Claude API (AI search) | $15 | $180 | Show lookup |
| **SeatGeek API** | $0 | $0 | Free (commission-based) |
| **London Theatre Direct API** | $0 | $0 | Free (commission-based) |
| **RSS News Feeds** | $0 | $0 | Free to consume |
| **TOTAL (Year 1)** | **~$78** | **~$964** | Before affiliate revenue |

### Potential Revenue Offsets (Tiered Model)

| Source | Monthly Est. | Annual Est. | Notes |
|--------|-------------|-------------|-------|
| Pro subscribers (100 @ $1.67 avg) | $167 | $2,000 | 60% of paid on Pro |
| Superfan subscribers (65 @ $3.33 avg) | $217 | $2,600 | 40% of paid on Superfan |
| Ticket Affiliate Commissions | $200 | $2,400 | All users, ~20 sales/mo |
| **Total Revenue** | **$584** | **$7,000** | |
| **Net (Revenue - Costs)** | **+$506** | **+$6,036** | |

**Scenario Analysis:**

| Scenario | Registered Users | Free-to-Paid % | Paid Users | Monthly Rev |
|----------|------------------|----------------|------------|-------------|
| Conservative (3%) | 5,000 | 3% | 150 | $475 |
| Target (5%) | 5,000 | 5% | 250 | $792 |
| Optimistic (8%) | 5,000 | 8% | 400 | $1,267 |

*Note: At 5% conversion with 5,000 users, monthly subscription revenue alone (~$384) exceeds costs (~$78).*

---

## 5.3 Show Database Sources

A major challenge (and opportunity) is building the show database. Unlike movies (which have TMDB with free API), there is **no free, comprehensive theater database API**.

### Available Data Sources

| Source | Coverage | API? | Cost | Notes |
|--------|----------|------|------|-------|
| **IBDB** | Broadway (comprehensive) | ❌ No | Free to view | Web scraping required, ToS unclear |
| **Lortel Archives** | Off-Broadway | ❌ No | Free to view | Historical focus |
| **BroadwayWorld DB** | Broadway + International | ❌ No | Free to view | 335k+ performers, 250k+ productions |
| **iUKTDb** | UK Theatre (comprehensive) | ❌ No | Free to view | West End + regional UK |
| **London Theatre Direct** | West End (current shows) | ✅ Yes | Free | Only shows with tickets available |
| **SeatGeek** | Events with tickets | ✅ Yes | Free | Limited theater-specific metadata |

### Recommended Database Strategy

**Phase 1 (MVP):** Manual curation
- Manually enter 500+ major Broadway/West End shows
- Include: title, type (musical/play), poster, opening date, theater
- Time estimate: 40-60 hours of data entry
- Cost: $0 (sweat equity) or ~$500-1,000 if outsourced

**Phase 2:** User contributions
- Allow users to add shows not in database
- User-added shows are personal until verified
- If 3+ users add same show, flag for admin review
- Community-driven growth model (like Letterboxd)

**Phase 3:** API integration
- Pull current shows from London Theatre Direct API (free)
- Use SeatGeek for show schedules and ticket availability
- Consider partnership with Broadway League for IBDB data access

### Database Seeding Tools

| Tool | Use Case | Cost |
|------|----------|------|
| **Wikipedia** | Public domain show data | Free |
| **Wikidata** | Structured show/cast data | Free |
| **Manual research** | Verify and augment data | Time |

*Note: Do NOT scrape IBDB, Playbill, or BroadwayWorld without permission. Focus on public domain sources and manual curation for MVP.*

---

# 6. Success Metrics

## 6.1 Key Performance Indicators

| Metric | 6-Month Target | 12-Month Target |
|--------|---------------|-----------------|
| Registered Users | 1,000 | 5,000 |
| Monthly Active Users | 400 (40%) | 2,000 (40%) |
| Trial-to-Paid Conversion | 15% | 20% |
| Paid Subscribers | 150 | 1,000 |
| Annual vs Monthly Split | 60% annual | 70% annual |
| Shows Logged | 5,000 | 25,000 |
| **Users with Rankings** | 600 (60%) | 3,500 (70%) |
| **Avg Shows Ranked per User** | 8 | 15 |
| App Store Rating | 4.5+ stars | 4.5+ stars |

## 6.2 Success Criteria for MVP Launch

1. App successfully deployed to iOS App Store, Google Play, and web
2. Users can register, log shows, and view their diary
3. Database contains 500+ searchable shows
4. No critical bugs blocking core user flows
5. Positive initial feedback from beta testers

## 6.3 Phase 2 Success Criteria (Ranking Feature)

1. 60%+ of active users create at least one ranking
2. Average user ranks 5+ shows within first month of using feature
3. Comparison flow completion rate >80% (users don't abandon mid-comparison)
4. Drag/drop interactions work smoothly on all platforms
5. Ranking lists are shared/viewed by other users

---

# 7. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Copyright: Poster Images** | Medium | Medium | Use thumbnails only; DMCA safe harbor; user-contributed images; see [Copyright Analysis](#copyright--legal-risk-analysis) |
| **Copyright: RSS News Content** | Medium | Low | Headlines + excerpts only; always link to source; never display full text; remove content on request |
| **Copyright: Database Scraping** | Low (if avoided) | High | Manual curation only; no scraping IBDB/Playbill; partner for data access |
| Low initial adoption | Medium | Medium | Target Android users specifically, leverage theater community forums |
| Mezzanine launches Android | Low | High | Move fast, differentiate with ranking feature, AI, and cross-platform |
| Database maintenance burden | High | Medium | Community contributions, AI-assisted data entry, London Theatre Direct API |
| OCR accuracy issues | Medium | Low | Manual edit option, user feedback loop, AI fallback |
| Scaling costs exceed revenue | Low | Medium | Usage caps on free tier, rate limiting, tiered feature access |
| Ranking feature too complex | Low | Low | Skip option always available, can rank later, intuitive drag/drop fallback |
| Users abandon comparison flow | Medium | Low | Limit to ~6 comparisons max, show progress indicator, allow "rank later" |
| **Low free-to-paid conversion** | Medium | High | Strong value prop in free tier builds habit; clear upgrade benefits; 30-day trial |
| **Superfan tier doesn't sell** | Medium | Low | Can merge tiers later; Pro tier alone is sustainable |

---

# 8. Development Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1 | Weeks 1-4 | Project setup, Supabase schema, auth, basic UI shell |
| Phase 2 | Weeks 5-8 | Show database (500+ shows), search, logging flow, diary view |
| Phase 3 | Weeks 9-10 | User profiles, stats, settings |
| Phase 4 | Weeks 11-12 | Testing, bug fixes, app store submissions |
| **MVP Launch** | **Week 13** | **Public launch on all platforms** |
| Phase 5 | Weeks 14-18 | **Comparative ranking system**, drag/drop UI |
| Phase 6 | Weeks 19-22 | Social features, playbill scanner, lists |
| Phase 7 | Weeks 23-26 | **Ticketing integration** (SeatGeek/LTD affiliate links) |
| Phase 8 | Weeks 27-30 | **Theater news feed** (RSS aggregation), notifications |
| Phase 9 | Weeks 31-34 | Pro tier launch, advanced stats, monetization |

### API Integration Timeline

| API | Phase | Priority | Complexity |
|-----|-------|----------|------------|
| SeatGeek (ticketing) | 7 | High | Low - Free API, good docs |
| London Theatre Direct | 7 | Medium | Low - Free API |
| RSS Feeds (news) | 8 | Medium | Very Low - Standard RSS parsing |
| TodayTix | Future | Low | High - Requires partnership |
| Broadway Inbound | Future | Low | High - B2B partnership required |

---

# 9. Open Questions

### Product & Naming
- **App Name:** "My Theater Space" is a working title. Other options: Curtain Call, Playbill Tracker, ShowDiary, TheaterLog, Ovation

### Database & Content
- **Artwork Strategy:** How aggressively to pursue show artwork? Start user-contributed only?
- **Database Seeding:** Manual entry vs. scraping vs. partnerships for initial show data?
- **Regional Focus:** Start with US/Broadway only or include West End from day one?

### User Experience
- **Ranking Opt-in:** Should ranking be prompted after every show, or only when user initiates?
- **Comparison Limit:** Cap comparisons at 6-8 even if binary search would require more? (Trade accuracy for speed)
- **Tie Handling:** What if user can't decide between two shows? Allow "tie" option or force choice?

### Ticketing Integration
- **Affiliate Priority:** SeatGeek first (easier API) or TodayTix first (better theater focus)?
- **Ticket Display:** Show all sources or just "best price"?
- **Geographic Handling:** How to handle users outside US/UK where ticket sources differ?

### News Feed
- **Curation:** Show all news or filter by user's logged shows/interests?
- **Publisher Relationships:** Reach out to Playbill/WhatsOnStage for formal content partnership?
- **Sponsored Content:** Allow promoted articles from shows/theaters in the future?

### Launch Strategy
- **Beta Strategy:** Private beta with theater community members before public launch?
- **Market Focus:** Launch in US and UK simultaneously or phase rollout?

---

*— End of Document —*

*Document Version 1.2 | Last Updated: November 2025*

**Changelog:**
- v1.2: Added Copyright & Legal Risk Analysis section; Replaced single-tier subscription with three-tier model (Free/Pro/Superfan); Updated revenue projections for tiered model; Enhanced risk table with copyright-specific mitigations
- v1.1: Added API Research Summary; Added ticketing integration (SeatGeek, London Theatre Direct); Added theater news feed (RSS aggregation); Updated cost projections with affiliate revenue
- v1.0: Initial product design document
