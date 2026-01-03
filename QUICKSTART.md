# 🚀 Quick Start Guide - LibaSpace

**Get up and running in 5 minutes!**

---

## Prerequisites

✅ Node.js 18+ installed  
✅ pnpm installed (`npm install -g pnpm`)  
✅ Terminal/command line access  

---

## Step 1: Install Dependencies (2 minutes)

```bash
cd /Users/ronitbhatia/Desktop/LibaSpace
pnpm install
```

This installs all dependencies for the monorepo.

---

## Step 2: Build Shared Package (30 seconds)

```bash
cd packages/shared
pnpm build
cd ../..
```

This compiles the shared TypeScript types used across the project.

---

## Step 3: Environment Setup (1 minute)

### Backend Environment

Create `apps/server/.env`:
```bash
cp server.env.example apps/server/.env
```

Edit `apps/server/.env` with your credentials (or leave defaults for testing):
```env
PORT=4000
NODE_ENV=development

# Optional: Add these for full avatar functionality
LIVEKIT_API_KEY=your_key
LIVEKIT_API_SECRET=your_secret
LIVEKIT_WS_URL=wss://your-project.livekit.cloud
TAVUS_API_KEY=your_key
TAVUS_PERSONA_ID=your_persona_id

ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend Environment

Create `apps/web/.env.local`:
```bash
cp web.env.example apps/web/.env.local
```

Content (no changes needed for local dev):
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_LIVEKIT_URL=wss://your-project.livekit.cloud
```

---

## Step 4: Start Development Servers (instant)

### Option A: Both servers at once
```bash
pnpm dev
```

### Option B: Separate terminals
```bash
# Terminal 1 - Backend
pnpm dev:server

# Terminal 2 - Frontend
pnpm dev:web
```

---

## Step 5: Open in Browser

**Frontend:** http://localhost:3000  
**Backend API:** http://localhost:4000

---

## ✨ What You Can Do Right Now

### Without API Keys (Works Immediately)
✅ Browse job listings  
✅ Filter by status (Matched/Liked/Applied)  
✅ View job details  
✅ Save/like/apply to jobs  
✅ Test mobile responsive design  
✅ Navigate all pages  
✅ See AI recommendations  

### With API Keys (Optional)
🔑 Real-time video avatar  
🔑 LiveKit video streaming  
🔑 Tavus text-to-speech  
🔑 Full avatar interaction  

---

## 📱 Test the Features

### 1. Job Board
- Go to http://localhost:3000/jobs
- Click status tabs (Matched, Liked, Applied)
- Click on any job card to see details
- Try save/like/apply buttons
- Check recommendation panel (desktop)

### 2. Mobile View
- Resize browser to mobile size (< 768px)
- Check bottom navigation
- Try hamburger menu
- Scroll through jobs

### 3. Avatar Page
- Go to http://localhost:3000/avatar
- Type a message
- See the interface (video will need API keys)

### 4. Other Pages
- Profile: http://localhost:3000/profile
- Settings: http://localhost:3000/settings

---

## 🐛 Troubleshooting

### "Cannot find module @libaspace/shared"
**Fix:** Build the shared package
```bash
cd packages/shared && pnpm build && cd ../..
```

### "Port 3000 already in use"
**Fix:** Kill existing process or change port
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in Next.js
PORT=3001 pnpm dev:web
```

### "Port 4000 already in use"
**Fix:** Change port in `apps/server/.env`
```env
PORT=4001
```

### "CORS error in browser"
**Fix:** Check `ALLOWED_ORIGINS` in server `.env`
```env
ALLOWED_ORIGINS=http://localhost:3000
```

### Build errors
**Fix:** Clean and reinstall
```bash
pnpm clean
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## 📚 Next Steps

1. **Read Documentation**
   - `README.md` - Project overview
   - `SETUP.md` - Detailed setup
   - `PROJECT_STRUCTURE.md` - Architecture
   - `FILE_INDEX.md` - All files

2. **Get API Keys** (optional)
   - LiveKit: https://cloud.livekit.io
   - Tavus: https://tavus.io

3. **Customize**
   - Add more jobs in `apps/server/src/data/mockJobs.ts`
   - Modify colors in `apps/web/tailwind.config.ts`
   - Add features as needed

4. **Deploy**
   - Build: `pnpm build`
   - Frontend: Deploy to Vercel/Netlify
   - Backend: Deploy to Railway/Render/Heroku

---

## 🎯 Key Commands

```bash
# Install dependencies
pnpm install

# Build shared package
pnpm --filter=shared build

# Start both servers
pnpm dev

# Start frontend only
pnpm dev:web

# Start backend only
pnpm dev:server

# Build for production
pnpm build

# Clean everything
pnpm clean
```

---

## 🎉 You're Ready!

The app should now be running:
- 🌐 Frontend: http://localhost:3000
- 🔌 Backend: http://localhost:4000

**Enjoy exploring LibaSpace! 🚀**

---

## 💡 Tips

- **Hot Reload:** Both servers auto-reload on file changes
- **TypeScript:** Full type safety across the stack
- **Mock Data:** 6 sample jobs included
- **Responsive:** Test on all screen sizes
- **Modern Stack:** Next.js 14 + Express + TypeScript

---

## 🆘 Need Help?

- Check `SETUP.md` for detailed instructions
- See `DELIVERY.md` for complete feature list
- Review `PROJECT_STRUCTURE.md` for architecture
- Read inline code comments

---

**Total Time: ~5 minutes from clone to running** ⚡

Last updated: Jan 3, 2026

