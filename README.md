# LibaSpace - AI Job Board + Realtime Digital Human

Full-stack monorepo with Next.js frontend and Express backend featuring:
- AI-powered job matching platform
- Real-time digital human avatar integration
- LiveKit + Tavus Persona API

## Stack

- **Monorepo**: pnpm workspaces
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Real-time**: LiveKit + Tavus Persona API

## Project Structure

```
├── apps/
│   ├── web/          # Next.js frontend
│   └── server/       # Express backend
└── packages/
    └── shared/       # Shared TypeScript types
```

## Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Configure environment variables**:
   
   Copy `.env.example` files:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   cp apps/server/.env.example apps/server/.env
   ```
   
   Fill in required API keys:
   - `LIVEKIT_API_KEY` - Get from LiveKit Cloud
   - `LIVEKIT_API_SECRET` - Get from LiveKit Cloud
   - `LIVEKIT_WS_URL` - Your LiveKit server URL
   - `TAVUS_API_KEY` - Get from Tavus dashboard
   - `TAVUS_PERSONA_ID` - Your Tavus persona ID

3. **Run development servers**:
   ```bash
   # Run both frontend and backend
   pnpm dev
   
   # Or run individually
   pnpm dev:web     # Frontend on http://localhost:3000
   pnpm dev:server  # Backend on http://localhost:4000
   ```

## Features

### Job Board
- **Job List Page** (`/jobs`)
  - Sidebar navigation with upgrade CTA
  - Status tabs (Matched / Liked / Applied)
  - Job cards with AI match scores
  - Real-time recommendation panel
  
- **Job Detail Page** (`/jobs/[id]`)
  - Complete job information
  - Match score visualization
  - AI-powered recommendations
  - Save/apply actions

- **Mobile Responsive**
  - Hamburger navigation
  - Single-column layout
  - Touch-optimized interactions

### Digital Human Avatar
- **Avatar Page** (`/avatar`)
  - Real-time video rendering
  - Text-to-speech with lip-sync
  - LiveKit integration
  - Low-latency audio streaming

## API Endpoints

### Backend (http://localhost:4000)

- `GET /api/jobs` - List all jobs
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs/:id/save` - Save/like a job
- `POST /api/livekit/token` - Generate LiveKit access token
- `POST /api/avatar/speak` - Send text to digital human

## Build for Production

```bash
pnpm build
```

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Express
- LiveKit
- Tavus Persona API
- pnpm workspaces

## Notes

- Mock data is used for job listings (can be replaced with real API)
- LiveKit and Tavus integrations require valid API keys
- Mobile-first responsive design
- Optimized for performance and SEO

