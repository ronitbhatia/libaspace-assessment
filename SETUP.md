# LibaSpace - Complete Setup Guide

## 🚀 Quick Start

This is the complete implementation of LibaSpace - an AI-powered job board with real-time digital human avatar integration.

### Prerequisites

- Node.js 18+ and pnpm installed
- LiveKit account (for video/audio features)
- Tavus account (for AI avatar)

### Installation Steps

1. **Clone and install dependencies:**

```bash
cd LibaSpace
pnpm install
```

2. **Set up environment variables:**

For the backend server (`apps/server/.env`):
```bash
cp server.env.example apps/server/.env
# Edit apps/server/.env with your credentials
```

For the frontend (`apps/web/.env.local`):
```bash
cp web.env.example apps/web/.env.local
# Edit apps/web/.env.local with your API URL
```

3. **Build shared package:**

```bash
cd packages/shared
pnpm build
cd ../..
```

4. **Start development servers:**

Option 1 - Both servers together:
```bash
pnpm dev
```

Option 2 - Separate terminals:
```bash
# Terminal 1 - Backend
pnpm dev:server

# Terminal 2 - Frontend
pnpm dev:web
```

5. **Access the application:**

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## 📁 Project Structure

```
LibaSpace/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── app/
│   │   │   ├── jobs/          # Job listing pages
│   │   │   ├── avatar/        # AI avatar page
│   │   │   ├── profile/       # User profile
│   │   │   └── settings/      # Settings page
│   │   ├── components/        # React components
│   │   └── lib/              # Utilities and API calls
│   └── server/                # Express backend
│       └── src/
│           ├── routes/        # API routes
│           └── data/          # Mock data
└── packages/
    └── shared/                # Shared TypeScript types
```

## 🎯 Features Implemented

### Job Board Features
✅ Job listing page with filters (Matched, Liked, Applied)
✅ Job detail page with full information
✅ Match score visualization
✅ Save/like/apply functionality
✅ AI recommendation panel
✅ Mobile responsive design
✅ Loading skeletons
✅ Empty states

### AI Avatar Features
✅ Real-time video avatar interface
✅ Text-to-speech integration
✅ LiveKit room connection
✅ Tavus Persona API integration
✅ Chat interface
✅ Audio/video controls
✅ Quick question shortcuts

### UI/UX Features
✅ Sidebar navigation
✅ Mobile bottom nav
✅ Responsive design (mobile H5 + desktop)
✅ Modern Tailwind styling
✅ Loading states
✅ Smooth transitions
✅ Professional color scheme

## 🔧 API Endpoints

### Jobs
- `GET /api/jobs` - List all jobs (with optional status filter)
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs/:id/save` - Save/like a job
- `POST /api/jobs/:id/apply` - Apply to a job

### LiveKit
- `POST /api/livekit/token` - Generate access token

### Avatar
- `POST /api/avatar/speak` - Send text to avatar for speech
- `GET /api/avatar/personas` - List available personas

## 🎨 Design System

### Colors
- Primary: Purple (#8b5cf6)
- Accent: Green (#22c55e)
- Background: Gray (#f9fafb)
- Text: Gray-900 (#111827)

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, various sizes
- Body: Regular, 16px base

## 📱 Mobile Responsiveness

The app is fully responsive with:
- Desktop: Sidebar navigation + multi-column layout
- Tablet: Adapted layouts
- Mobile: Bottom navigation + single column

## 🔑 Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 4000)
- `LIVEKIT_API_KEY` - LiveKit API key
- `LIVEKIT_API_SECRET` - LiveKit API secret
- `LIVEKIT_WS_URL` - LiveKit WebSocket URL
- `TAVUS_API_KEY` - Tavus API key
- `TAVUS_PERSONA_ID` - Tavus persona ID
- `TAVUS_API_URL` - Tavus API endpoint

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_LIVEKIT_URL` - LiveKit WebSocket URL

## 🧪 Testing the Application

1. **Job Board:**
   - Navigate to http://localhost:3000/jobs
   - Browse through job listings
   - Click on a job to see details
   - Use status tabs to filter jobs
   - Try save/like/apply actions

2. **AI Avatar:**
   - Navigate to http://localhost:3000/avatar
   - Wait for connection
   - Type a message or use quick questions
   - Test audio/video controls

## 🛠️ Development

### Adding New Jobs
Edit `apps/server/src/data/mockJobs.ts` to add more job listings.

### Customizing Styles
Edit `apps/web/tailwind.config.ts` for theme customization.

### Adding API Routes
Create new route files in `apps/server/src/routes/`.

## 📦 Building for Production

```bash
pnpm build
```

This will build:
- Shared types package
- Next.js frontend
- Express backend

## 🔄 Monorepo Management

This project uses pnpm workspaces:
- Shared dependencies at root
- Workspace linking with `workspace:*`
- Independent versioning per package

## 🐛 Troubleshooting

**Issue: "Cannot find module @libaspace/shared"**
- Solution: Run `cd packages/shared && pnpm build`

**Issue: "CORS error"**
- Solution: Check `ALLOWED_ORIGINS` in server .env

**Issue: "LiveKit connection failed"**
- Solution: Verify LiveKit credentials in .env

**Issue: Port already in use**
- Solution: Change `PORT` in server .env or kill existing process

## 📄 License

Private - All rights reserved

## 👥 Team

Built with ❤️ for LibaSpace

---

For questions or issues, please refer to the inline code comments or API documentation.

