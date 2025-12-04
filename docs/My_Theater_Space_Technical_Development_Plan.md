# My Theater Space Technical Development Plan

## *From Concept to Launch: A Phased Approach*

**Version 1.0 | November 2025**

---

# Overview

This document outlines a phased development approach for My Theater Space, organized into three major stages:

1. **Stage 1: Brand Identity** — Name finalization and logo creation
2. **Stage 2: UI/UX Design** — Interface design for all platforms
3. **Stage 3: Application Development** — Building the actual application

Each stage contains multiple phases designed for incremental progress using AI coding tools (Claude, Cursor, etc.).

---

# Stage 1: Brand Identity

**Goal:** Finalize the application name and create a professional logo/brand assets

**Duration:** 1-2 weeks

---

## Phase 1.1: Name Finalization

### Objective
Select a final name that is memorable, available (domain + app stores), and evokes the theater experience.

### Current Candidates

| Name | Pros | Cons |
|------|------|------|
| **My Theater Space** | Clear purpose, professional, "log" implies tracking | Generic, not particularly exciting |
| **Curtain Call** | Theatrical, evocative, memorable | May be taken, implies endings |
| **Playbill** | Instant recognition | Trademarked by Playbill Inc. ❌ |
| **Ovation** | Positive, theatrical, short | Common word, may be taken |
| **Encore** | Theatrical, implies returning | Very common, likely taken |
| **TheaterDiary** | Descriptive, clear | Long, not catchy |
| **Marquee** | Theatrical, visual | May be taken |
| **Standing O** | Fun, theatrical (standing ovation) | Informal, unclear purpose |
| **Showlog** | Simple, clear | Very similar to My Theater Space |
| **Bravo** | Short, theatrical exclamation | Likely taken |
| **Intermission** | Theatrical, unique | Implies pause/break |
| **The Playbill Tracker** | Descriptive | Long, uses "Playbill" |
| **CurtainUp** | Theatrical, energetic | Two words |
| **Spotlight** | Theatrical, visual | Very common |
| **BoxSeat** | Premium feel, theatrical | May imply ticketing |

### Tasks

- [ ] **1.1.1** Research domain availability for top 5 candidates
  - Check: [name].com, [name].app, [name].io
  - Use: namecheap.com, godaddy.com, or instantdomainsearch.com

- [ ] **1.1.2** Check App Store availability
  - Search iOS App Store for each name
  - Search Google Play Store for each name
  - Document any conflicts or similar apps

- [ ] **1.1.3** Check trademark status
  - Search USPTO TESS database (tess2.uspto.gov)
  - Focus on Class 9 (software) and Class 41 (entertainment)
  - Document any potential conflicts

- [ ] **1.1.4** Check social media handle availability
  - Twitter/X: @[name]
  - Instagram: @[name]
  - TikTok: @[name]
  - Threads: @[name]

- [ ] **1.1.5** Create decision matrix
  - Score each name 1-5 on: Memorability, Availability, Relevance, Uniqueness
  - Make final selection

### Deliverables
- [ ] Final name selected
- [ ] Domain purchased
- [ ] Social handles secured (at least primary platforms)

---

## Phase 1.2: Logo Concept Development

### Objective
Develop logo concepts that work across all platforms and sizes.

### Brand Direction

**Visual Themes to Explore:**
1. **Theatrical Curtains** — Classic red velvet curtains, elegant
2. **Playbill/Program** — Book/document with theatrical element
3. **Stage/Spotlight** — Circular spotlight, stage boards
4. **Mask** — Comedy/tragedy masks (classic but common)
5. **Ticket Stub** — Nostalgic, recognizable
6. **Abstract Mark** — Letter-based (S, SL) with theatrical flair

**Color Palette Options:**

| Palette | Primary | Secondary | Accent | Mood |
|---------|---------|-----------|--------|------|
| **Classic Theater** | Deep Red (#8B0000) | Gold (#FFD700) | Black | Traditional, elegant |
| **Modern Stage** | Deep Purple (#4A154B) | Warm White (#FFF8F0) | Gold | Contemporary, premium |
| **Broadway Lights** | Black (#1A1A1A) | Electric Yellow (#FFE135) | White | Bold, energetic |
| **West End** | Navy (#1A2744) | Champagne (#F7E7CE) | Rose Gold | Sophisticated, British |
| **Spotlight** | Charcoal (#36454F) | Warm White (#FFFAF0) | Amber (#FFBF00) | Dramatic, focused |

**Typography Direction:**
- Primary: Serif or elegant sans-serif for wordmark
- Consider: Playfair Display, Libre Baskerville, DM Serif, or custom lettering
- App icon: Should work without text (symbol only)

### Tasks

- [ ] **1.2.1** Create mood board
  - Collect 10-15 reference images (theater interiors, vintage playbills, marquees)
  - Define visual direction
  - Tool: Pinterest, Milanote, or Figma

- [ ] **1.2.2** Sketch initial concepts (5-8 directions)
  - Can use AI tools: Midjourney, DALL-E, or manual sketching
  - Focus on symbol/icon that works at small sizes

- [ ] **1.2.3** Refine top 3 concepts
  - Create vector versions
  - Test at multiple sizes (16px, 32px, 64px, 128px, 512px, 1024px)
  - Tool: Figma, Illustrator, or Affinity Designer

- [ ] **1.2.4** Create color variations
  - Full color version
  - Single color (black)
  - Single color (white/reversed)
  - Monochrome

### Deliverables
- [ ] 3 logo concept options ready for review

---

## Phase 1.3: Logo Finalization & Brand Assets

### Objective
Finalize logo and create all necessary brand assets for marketing and app stores.

### Tasks

- [ ] **1.3.1** Select final logo direction
  - Get feedback (personal preference, test with potential users)
  - Make final selection

- [ ] **1.3.2** Create final logo package
  - Primary logo (horizontal with wordmark)
  - Stacked logo (vertical with wordmark)
  - Symbol only (app icon)
  - Favicon (16x16, 32x32)

- [ ] **1.3.3** Create App Store assets
  
  **iOS App Store Requirements:**
  | Asset | Size | Format |
  |-------|------|--------|
  | App Icon | 1024x1024 | PNG (no alpha) |
  | iPhone Screenshots | 1290x2796 or 1284x2778 | PNG/JPEG |
  | iPad Screenshots | 2048x2732 | PNG/JPEG |
  
  **Google Play Requirements:**
  | Asset | Size | Format |
  |-------|------|--------|
  | App Icon | 512x512 | PNG (32-bit with alpha) |
  | Feature Graphic | 1024x500 | PNG/JPEG |
  | Phone Screenshots | 16:9 or 9:16 | PNG/JPEG |
  | Tablet Screenshots | 16:9 or 9:16 | PNG/JPEG |

- [ ] **1.3.4** Create social media assets
  - Profile picture (square, works in circle crop)
  - Cover/banner images for each platform
  - Open Graph image (1200x630) for link previews

- [ ] **1.3.5** Create brand guidelines document
  - Logo usage rules
  - Color specifications (HEX, RGB, CMYK)
  - Typography specifications
  - Spacing/clear space requirements

### Deliverables
- [ ] Final logo files (SVG, PNG at multiple sizes)
- [ ] App Store icon assets
- [ ] Social media profile/cover images
- [ ] Brand guidelines PDF

---

# Stage 2: UI/UX Design

**Goal:** Design complete user interface for web, tablet, and mobile

**Duration:** 3-4 weeks

---

## Phase 2.1: Design System Foundation

### Objective
Establish the foundational design system that will be used across all screens.

### Tasks

- [ ] **2.1.1** Set up Figma project structure
  ```
  My Theater Space Design/
  ├── 🎨 Design System
  │   ├── Colors
  │   ├── Typography
  │   ├── Spacing
  │   ├── Icons
  │   └── Components
  ├── 📱 Mobile (iPhone)
  ├── 📱 Mobile (Android)
  ├── 📱 Tablet (iPad)
  ├── 💻 Desktop (Web)
  └── 🖼️ Marketing Assets
  ```

- [ ] **2.1.2** Define color system
  
  | Token | Light Mode | Dark Mode | Usage |
  |-------|------------|-----------|-------|
  | `--color-primary` | [Brand Color] | [Brand Color] | Buttons, links, accents |
  | `--color-secondary` | [TBD] | [TBD] | Secondary actions |
  | `--color-background` | #FFFFFF | #1A1A1A | Page backgrounds |
  | `--color-surface` | #F5F5F5 | #2A2A2A | Cards, containers |
  | `--color-text-primary` | #1A1A1A | #FFFFFF | Body text |
  | `--color-text-secondary` | #666666 | #A0A0A0 | Secondary text |
  | `--color-border` | #E0E0E0 | #404040 | Borders, dividers |
  | `--color-success` | #22C55E | #22C55E | Success states |
  | `--color-warning` | #F59E0B | #F59E0B | Warning states |
  | `--color-error` | #EF4444 | #EF4444 | Error states |
  | `--color-star` | #FFD700 | #FFD700 | Star ratings |

- [ ] **2.1.3** Define typography scale
  
  | Style | Size | Weight | Line Height | Usage |
  |-------|------|--------|-------------|-------|
  | Display | 36px | Bold | 1.2 | Hero headers |
  | H1 | 28px | Bold | 1.3 | Page titles |
  | H2 | 22px | Semibold | 1.3 | Section headers |
  | H3 | 18px | Semibold | 1.4 | Card titles |
  | Body | 16px | Regular | 1.5 | Body text |
  | Body Small | 14px | Regular | 1.5 | Secondary text |
  | Caption | 12px | Regular | 1.4 | Labels, captions |
  | Button | 16px | Semibold | 1 | Buttons |

- [ ] **2.1.4** Define spacing scale
  
  | Token | Value | Usage |
  |-------|-------|-------|
  | `--space-xs` | 4px | Tight spacing |
  | `--space-sm` | 8px | Small gaps |
  | `--space-md` | 16px | Default spacing |
  | `--space-lg` | 24px | Section spacing |
  | `--space-xl` | 32px | Large gaps |
  | `--space-2xl` | 48px | Major sections |

- [ ] **2.1.5** Create icon set
  - Source from: Lucide, Heroicons, or Phosphor
  - Required icons: home, search, plus, star, heart, bookmark, calendar, user, settings, menu, close, back, share, edit, trash, camera, image, list, grid, filter, sort

- [ ] **2.1.6** Design core components
  - [ ] Buttons (primary, secondary, ghost, icon)
  - [ ] Input fields (text, search, textarea)
  - [ ] Cards (show card, diary entry card, list card)
  - [ ] Navigation (bottom tabs, top bar, side nav)
  - [ ] Star rating input/display
  - [ ] Avatar
  - [ ] Badge/tag
  - [ ] Modal/dialog
  - [ ] Toast/notification
  - [ ] Loading states (skeleton, spinner)
  - [ ] Empty states

### Deliverables
- [ ] Figma design system file with all tokens and components
- [ ] Component documentation

---

## Phase 2.2: Mobile UI Design (iPhone)

### Objective
Design all screens for mobile (iPhone) as the primary platform.

### Screen List

**Authentication:**
- [ ] 2.2.1 Splash/Launch screen
- [ ] 2.2.2 Onboarding (3-4 slides)
- [ ] 2.2.3 Sign up screen
- [ ] 2.2.4 Login screen
- [ ] 2.2.5 Forgot password screen

**Main Navigation (Tab Bar):**
- [ ] 2.2.6 Home/Feed
- [ ] 2.2.7 Search
- [ ] 2.2.8 Add Show (+ button)
- [ ] 2.2.9 News
- [ ] 2.2.10 Profile

**Home/Feed:**
- [ ] 2.2.11 Home feed (activity from followed users)
- [ ] 2.2.12 Empty state (no activity yet)

**Search & Discovery:**
- [ ] 2.2.13 Search screen (initial state)
- [ ] 2.2.14 Search results (shows)
- [ ] 2.2.15 Search results (users)
- [ ] 2.2.16 Show detail page
- [ ] 2.2.17 Theater/venue detail page

**Adding Shows:**
- [ ] 2.2.18 Add show - search/select show
- [ ] 2.2.19 Add show - entry form (date, rating, review, etc.)
- [ ] 2.2.20 Add show - scan playbill option
- [ ] 2.2.21 Add show - camera/scanner view
- [ ] 2.2.22 Add show - confirmation/success
- [ ] 2.2.23 Add show - "Add to rankings?" prompt

**Ranking System:**
- [ ] 2.2.24 Ranking comparison screen (A vs B)
- [ ] 2.2.25 Ranking comparison - progress indicator
- [ ] 2.2.26 Ranking list view (drag/drop)
- [ ] 2.2.27 Ranking - show inserted confirmation

**News:**
- [ ] 2.2.28 News feed (list of articles)
- [ ] 2.2.29 News article detail (or external link)
- [ ] 2.2.30 News - empty state

**Profile & Diary:**
- [ ] 2.2.31 Profile (own) - overview
- [ ] 2.2.32 Profile - diary view
- [ ] 2.2.33 Profile - stats view
- [ ] 2.2.34 Profile - rankings view
- [ ] 2.2.35 Profile - lists view
- [ ] 2.2.36 Profile (other user)
- [ ] 2.2.37 Followers/following list
- [ ] 2.2.38 Diary entry detail (single show log)
- [ ] 2.2.39 Edit diary entry

**Lists:**
- [ ] 2.2.40 Create new list
- [ ] 2.2.41 List detail view
- [ ] 2.2.42 Add shows to list

**Settings:**
- [ ] 2.2.43 Settings main menu
- [ ] 2.2.44 Edit profile
- [ ] 2.2.45 Account settings
- [ ] 2.2.46 Notification settings
- [ ] 2.2.47 Subscription/upgrade screen
- [ ] 2.2.48 Privacy settings
- [ ] 2.2.49 About/legal

**Ticketing:**
- [ ] 2.2.50 "Get Tickets" bottom sheet/modal
- [ ] 2.2.51 Ticket source selection

**Misc:**
- [ ] 2.2.52 Loading states for all major screens
- [ ] 2.2.53 Error states
- [ ] 2.2.54 Offline state

### Deliverables
- [ ] Complete iPhone screen designs in Figma
- [ ] Interactive prototype for key flows

---

## Phase 2.3: Tablet UI Design (iPad)

### Objective
Adapt mobile designs for iPad with optimized layouts.

### Layout Strategy

**iPad Layout Principles:**
1. Use split-view where appropriate (list + detail)
2. Show more content per screen
3. Larger touch targets but efficient space use
4. Support both portrait and landscape

**Key Adaptations:**

| Mobile Screen | iPad Adaptation |
|---------------|-----------------|
| Tab bar | Side navigation rail or persistent sidebar |
| Full-screen modals | Centered dialogs or slide-over panels |
| Single column lists | Multi-column grid where appropriate |
| Show detail | Master-detail split view |
| Profile | Wider layout with side-by-side sections |
| Ranking comparison | Side-by-side with more context |

### Tasks

- [ ] **2.3.1** Design iPad navigation pattern
  - Sidebar navigation vs bottom tabs
  - Consider iPadOS 16+ sidebar conventions

- [ ] **2.3.2** Adapt key screens for iPad
  - [ ] Home feed (wider cards, 2-column option)
  - [ ] Search (split view: results + preview)
  - [ ] Show detail (split view or full width)
  - [ ] Profile (wider, more stats visible)
  - [ ] Add show form (centered, wider)
  - [ ] Ranking comparison (larger posters)
  - [ ] Settings (split view: menu + content)

- [ ] **2.3.3** Design landscape variations
  - Prioritize landscape for frequently used screens

### Deliverables
- [ ] iPad screen designs (portrait + key landscape)
- [ ] Responsive breakpoint documentation

---

## Phase 2.4: Desktop/Web UI Design

### Objective
Design web application for desktop browsers.

### Layout Strategy

**Desktop Layout Principles:**
1. Max content width: 1200-1400px (centered)
2. Persistent navigation (top or side)
3. Multi-column layouts for dense information
4. Hover states for interactive elements
5. Keyboard navigation support

**Breakpoints:**
| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, bottom nav |
| Tablet | 640-1024px | Adapted mobile, sidebar |
| Desktop | 1024-1440px | Full desktop layout |
| Large Desktop | > 1440px | Centered with max-width |

### Tasks

- [ ] **2.4.1** Design desktop navigation
  - Top navigation bar with logo, search, user menu
  - Consider sticky header behavior

- [ ] **2.4.2** Design desktop layouts
  - [ ] Home/Feed (card grid or list view toggle)
  - [ ] Search page (filters sidebar + results)
  - [ ] Show detail page (hero + content sections)
  - [ ] User profile page (header + tabbed content)
  - [ ] Diary view (calendar or list)
  - [ ] Rankings page (drag-drop list)
  - [ ] News page (article grid)
  - [ ] Settings (sidebar + content area)

- [ ] **2.4.3** Design authentication pages
  - Login page
  - Sign up page
  - Password reset

- [ ] **2.4.4** Design landing/marketing page
  - Hero section with app screenshots
  - Feature highlights
  - Pricing section
  - Download/signup CTA

### Deliverables
- [ ] Desktop web designs in Figma
- [ ] Landing page design
- [ ] Responsive behavior documentation

---

## Phase 2.5: Design Handoff Preparation

### Objective
Prepare designs for development with proper documentation and assets.

### Tasks

- [ ] **2.5.1** Finalize and organize Figma files
  - Consistent naming conventions
  - Proper layer organization
  - Remove unused elements

- [ ] **2.5.2** Create component specifications
  - Document all component variants
  - Include interaction states (hover, active, disabled)
  - Add spacing and sizing annotations

- [ ] **2.5.3** Export design tokens
  - Export colors, typography, spacing as JSON/CSS
  - Consider using Figma Tokens plugin

- [ ] **2.5.4** Export static assets
  - Icons (SVG)
  - Illustrations
  - Logo variations
  - Any images needed

- [ ] **2.5.5** Create user flow documentation
  - Document main user journeys
  - Note any animations or transitions
  - Specify loading/error/empty states for each flow

- [ ] **2.5.6** Create clickable prototype
  - Link key screens for demo purposes
  - Useful for testing and stakeholder review

### Deliverables
- [ ] Organized Figma file with dev mode enabled
- [ ] Exported design tokens (JSON/CSS)
- [ ] Exported asset library (SVG icons, images)
- [ ] User flow documentation
- [ ] Interactive prototype

---

# Stage 3: Application Development

**Goal:** Build and deploy the complete application

**Duration:** 12-16 weeks (MVP) + ongoing

---

## Phase 3.0: Development Environment Setup

### Objective
Set up all accounts, services, and local development environment before coding begins.

### 3.0.1 Account Setup Checklist

**Required Accounts:**

| Service | Purpose | Cost | URL |
|---------|---------|------|-----|
| **Supabase** | Database, Auth, Storage | Free tier / $25/mo Pro | supabase.com |
| **Railway** | Web hosting | ~$5-20/mo | railway.app |
| **Apple Developer** | iOS App Store | $99/year | developer.apple.com |
| **Google Play Console** | Android Play Store | $25 one-time | play.google.com/console |
| **GitHub** | Code repository | Free | github.com |
| **Vercel** (alternative) | Web hosting alternative | Free tier | vercel.com |
| **Expo** | React Native builds | Free tier | expo.dev |
| **SeatGeek** | Ticketing API | Free (affiliate) | seatgeek.com/build |
| **Google Cloud** | Vision API (OCR) | Pay per use | cloud.google.com |
| **Anthropic** | Claude API (AI) | Pay per use | console.anthropic.com |

### 3.0.2 Supabase Setup

**Step-by-step:**

1. Go to [supabase.com](https://supabase.com) and create account
2. Create new project:
   - Name: `stagelog` (or your final app name)
   - Database password: Generate strong password, **save it securely**
   - Region: Choose closest to target users (e.g., US East for Broadway focus)
3. Wait for project to provision (~2 minutes)
4. Go to **Project Settings → API**
5. Copy these values (you'll need them for `.env`):

```env
# Supabase Configuration
SUPABASE_URL=https://[your-project-id].supabase.co
SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]  # Keep secret!
```

6. Go to **Authentication → Providers**
   - Enable Email provider
   - Enable Google provider (requires Google Cloud OAuth setup)
   - Enable Apple provider (requires Apple Developer setup)

7. Go to **Storage** and create buckets:
   - `avatars` (public)
   - `show-images` (public)
   - `playbill-scans` (private)

### 3.0.3 Railway Setup

**Step-by-step:**

1. Go to [railway.app](https://railway.app) and create account (GitHub login recommended)
2. Create new project → "Empty Project"
3. You'll deploy from GitHub later, but note your project dashboard URL
4. Environment variables will be added during deployment

### 3.0.4 Apple Developer Setup

**Step-by-step:**

1. Go to [developer.apple.com](https://developer.apple.com)
2. Enroll in Apple Developer Program ($99/year)
3. Complete enrollment (may take 24-48 hours for approval)
4. Once approved, go to **Certificates, Identifiers & Profiles**
5. Create App ID:
   - Description: My Theater Space
   - Bundle ID: `com.yourname.stagelog` (explicit)
   - Enable capabilities: Push Notifications, Sign in with Apple

### 3.0.5 Google Play Setup

**Step-by-step:**

1. Go to [play.google.com/console](https://play.google.com/console)
2. Pay $25 registration fee
3. Complete developer account setup
4. Create new app:
   - App name: My Theater Space
   - Default language: English
   - App or game: App
   - Free or paid: Free (with in-app purchases)

### 3.0.6 API Keys Setup

**SeatGeek:**
1. Go to [seatgeek.com/build](https://seatgeek.com/build)
2. Create developer account
3. Create new application
4. Copy Client ID and Client Secret

```env
SEATGEEK_CLIENT_ID=[your-client-id]
SEATGEEK_CLIENT_SECRET=[your-client-secret]
```

**Google Cloud (for Vision API):**
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project: `stagelog`
3. Enable Cloud Vision API
4. Create service account and download JSON key
5. Or create API key for simpler setup

```env
GOOGLE_CLOUD_API_KEY=[your-api-key]
# OR
GOOGLE_APPLICATION_CREDENTIALS=[path-to-service-account.json]
```

**Anthropic (Claude API):**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create account and add payment method
3. Create API key

```env
ANTHROPIC_API_KEY=[your-api-key]
```

### 3.0.7 Local Development Setup

**Prerequisites:**
- Node.js 18+ (recommend using nvm)
- npm or yarn or pnpm
- Git
- VS Code or preferred editor
- Xcode (for iOS development, Mac only)
- Android Studio (for Android development)

**Create project structure:**

```bash
# Create project directory
mkdir stagelog
cd stagelog

# Initialize git
git init

# Create initial structure
mkdir -p apps/web apps/mobile packages/shared packages/ui
touch .gitignore .env.example README.md
```

**Example `.env.example`:**

```env
# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# APIs
SEATGEEK_CLIENT_ID=
SEATGEEK_CLIENT_SECRET=
GOOGLE_CLOUD_API_KEY=
ANTHROPIC_API_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**`.gitignore`:**

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Environment
.env
.env.local
.env.*.local

# Build outputs
.next/
out/
build/
dist/

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Mobile
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
android/app/debug/
android/app/release/
ios/Pods/
```

### Deliverables
- [ ] All accounts created and verified
- [ ] Supabase project created with API keys
- [ ] Railway project created
- [ ] Apple Developer enrollment complete
- [ ] Google Play Console access
- [ ] All API keys obtained and documented
- [ ] Local development environment ready
- [ ] `.env` file created (not committed to git)

---

## Phase 3.1: Project Scaffolding

### Objective
Set up the monorepo structure and base configuration.

### Technology Stack

| Layer | Technology | Why |
|-------|------------|-----|
| **Web Framework** | Next.js 14 (App Router) | SSR, great DX, Vercel/Railway deploy |
| **Mobile Framework** | React Native + Expo | Cross-platform, shared code with web |
| **UI Components** | Tailwind CSS + shadcn/ui | Rapid development, customizable |
| **Database** | Supabase (PostgreSQL) | Auth, realtime, storage included |
| **State Management** | Zustand or React Query | Simple, performant |
| **Forms** | React Hook Form + Zod | Type-safe validation |
| **Monorepo** | Turborepo | Shared packages, faster builds |

### Tasks

- [ ] **3.1.1** Initialize Turborepo monorepo
- [ ] **3.1.2** Set up Next.js web app (`apps/web`)
- [ ] **3.1.3** Set up Expo React Native app (`apps/mobile`)
- [ ] **3.1.4** Create shared packages:
  - `packages/shared` - Types, utilities, constants
  - `packages/ui` - Shared UI components
  - `packages/supabase` - Database client and types
- [ ] **3.1.5** Configure Tailwind CSS for web
- [ ] **3.1.6** Configure NativeWind for mobile (Tailwind for RN)
- [ ] **3.1.7** Set up ESLint, Prettier, TypeScript configs
- [ ] **3.1.8** Create initial CI/CD pipeline (GitHub Actions)

### Deliverables
- [ ] Working monorepo with web and mobile apps
- [ ] Shared package structure
- [ ] Both apps running locally

---

## Phase 3.2: Database Schema & Authentication

### Objective
Implement the database schema and user authentication.

### Tasks

- [ ] **3.2.1** Create Supabase migrations for core tables:
  - `profiles` (extends auth.users)
  - `shows`
  - `theaters`
  - `diary_entries`
  - `user_rankings`
  - `follows`
  - `lists`
  - `list_items`

- [ ] **3.2.2** Set up Row Level Security (RLS) policies
- [ ] **3.2.3** Create database functions:
  - `shift_rankings_down` (for ranking insertion)
  - `get_user_stats` (aggregate stats)
- [ ] **3.2.4** Implement Supabase client wrapper
- [ ] **3.2.5** Implement authentication flows:
  - Email/password signup
  - Email/password login
  - Social login (Google, Apple)
  - Password reset
  - Session management
- [ ] **3.2.6** Create auth context/provider for React
- [ ] **3.2.7** Build auth screens (web + mobile)
- [ ] **3.2.8** Test auth flows end-to-end

### Deliverables
- [ ] Complete database schema deployed
- [ ] Working authentication on web and mobile
- [ ] Protected routes implemented

---

## Phase 3.3: Core Show Logging (MVP)

### Objective
Build the core show logging functionality.

### Tasks

- [ ] **3.3.1** Seed initial show database (500+ shows)
- [ ] **3.3.2** Build show search API
- [ ] **3.3.3** Build show detail page
- [ ] **3.3.4** Build "Add Show" flow:
  - Show search/selection
  - Entry form (date, rating, review, seat, photos)
  - Save to diary
- [ ] **3.3.5** Build diary view (list of logged shows)
- [ ] **3.3.6** Build diary entry detail view
- [ ] **3.3.7** Implement edit/delete diary entry
- [ ] **3.3.8** Build user profile with basic stats

### Deliverables
- [ ] Users can search and find shows
- [ ] Users can log shows with all fields
- [ ] Users can view their diary
- [ ] Users can edit/delete entries

---

## Phase 3.4: Ranking System

### Objective
Implement the comparative ranking system.

### Tasks

- [ ] **3.4.1** Build binary comparison UI
- [ ] **3.4.2** Implement binary search ranking algorithm
- [ ] **3.4.3** Build ranking list view with drag-drop
- [ ] **3.4.4** Implement rank position updates
- [ ] **3.4.5** Add "Add to rankings?" prompt after logging
- [ ] **3.4.6** Build shareable rankings view

### Deliverables
- [ ] Working comparison-based ranking
- [ ] Drag-drop reordering
- [ ] Public ranking lists

---

## Phase 3.5: Social Features

### Objective
Add social functionality (follows, activity feed).

### Tasks

- [ ] **3.5.1** Implement follow/unfollow
- [ ] **3.5.2** Build followers/following lists
- [ ] **3.5.3** Build activity feed (home)
- [ ] **3.5.4** Add likes on reviews
- [ ] **3.5.5** Build public user profiles
- [ ] **3.5.6** Implement user search

### Deliverables
- [ ] Users can follow each other
- [ ] Activity feed shows followed users' activity
- [ ] Users can discover and view other profiles

---

## Phase 3.6: Advanced Features

### Objective
Add AI features and ticketing integration.

### Tasks

- [ ] **3.6.1** Implement playbill scanner (OCR)
- [ ] **3.6.2** Implement AI show lookup
- [ ] **3.6.3** Integrate SeatGeek API
- [ ] **3.6.4** Build "Get Tickets" UI
- [ ] **3.6.5** Implement RSS news aggregator
- [ ] **3.6.6** Build news feed UI
- [ ] **3.6.7** Build lists feature (create, add shows, share)

### Deliverables
- [ ] Playbill scanning works
- [ ] Ticket links available on show pages
- [ ] News feed populated

---

## Phase 3.7: Subscription & Monetization

### Objective
Implement subscription tiers and payment.

### Tasks

- [ ] **3.7.1** Set up RevenueCat (or similar) for subscription management
- [ ] **3.7.2** Implement iOS in-app purchases
- [ ] **3.7.3** Implement Android in-app purchases
- [ ] **3.7.4** Implement web payments (Stripe)
- [ ] **3.7.5** Build subscription gate logic (feature limits)
- [ ] **3.7.6** Build upgrade/subscription screens
- [ ] **3.7.7** Implement free trial logic

### Deliverables
- [ ] Subscriptions working on all platforms
- [ ] Free tier limits enforced
- [ ] Upgrade flow complete

---

## Phase 3.8: Polish & Launch Prep

### Objective
Final polish, testing, and launch preparation.

### Tasks

- [ ] **3.8.1** Comprehensive testing (unit, integration, e2e)
- [ ] **3.8.2** Performance optimization
- [ ] **3.8.3** Accessibility audit
- [ ] **3.8.4** Security audit
- [ ] **3.8.5** Create App Store screenshots and descriptions
- [ ] **3.8.6** Submit to App Store review
- [ ] **3.8.7** Submit to Google Play review
- [ ] **3.8.8** Deploy web app to production
- [ ] **3.8.9** Set up monitoring and error tracking
- [ ] **3.8.10** Create launch marketing materials

### Deliverables
- [ ] Apps approved and ready for release
- [ ] Web app live
- [ ] Monitoring in place
- [ ] Ready for public launch

---

# Appendix

## A. Environment Variables Reference

```env
# ===================
# SUPABASE
# ===================
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ===================
# TICKETING APIS
# ===================
SEATGEEK_CLIENT_ID=xxxxx
SEATGEEK_CLIENT_SECRET=xxxxx

# London Theatre Direct (if using)
LTD_API_KEY=xxxxx

# ===================
# AI / ML APIS
# ===================
# Google Cloud Vision (OCR)
GOOGLE_CLOUD_API_KEY=xxxxx

# Anthropic Claude (AI search)
ANTHROPIC_API_KEY=sk-ant-xxxxx

# ===================
# PAYMENTS
# ===================
# Stripe (web payments)
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# RevenueCat (mobile subscriptions)
REVENUECAT_API_KEY=xxxxx

# ===================
# APP CONFIG
# ===================
NEXT_PUBLIC_APP_URL=https://stagelog.app
NEXT_PUBLIC_APP_NAME=My Theater Space

# ===================
# ANALYTICS (optional)
# ===================
NEXT_PUBLIC_POSTHOG_KEY=xxxxx
SENTRY_DSN=xxxxx
```

## B. Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Prisma (if using)
- GitLens
- Thunder Client (API testing)
- React Native Tools
- Expo Tools

## C. Useful Commands

```bash
# Install dependencies (from root)
pnpm install

# Run web app
pnpm --filter web dev

# Run mobile app
pnpm --filter mobile start

# Run both
pnpm dev

# Build all
pnpm build

# Lint all
pnpm lint

# Generate Supabase types
pnpm --filter supabase generate-types
```

---

*End of Technical Development Plan*

*Version 1.0 | November 2025*
