# Akarii Prototype - Claude Instructions

## Project Overview
This is the standalone prototype repo for Akarii's interactive chat demonstrations.

## Tech Stack
- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Package Manager**: Bun
- **Animations**: Custom React hooks with typing effects

## Key Components
- `/src/app/page.tsx` - Main prototype page (root route)
- `/src/components/prototype/` - All prototype-specific components
- `/src/data/scenarios.ts` - Chat scenarios data
- `/src/lib/prototype/` - Prototype utilities and hooks

## Development Notes
- Prototype runs on root path `/` (not `/prototype/chat`)
- Clean black background optimized for screen recordings
- 6 different company perspective scenarios
- Real-time typing animations with natural pauses

## Package Manager
- **Use Bun as the package manager** for all operations (install, run, build, etc.)
- Replace `npm` commands with `bun` equivalents:
  - `npm install` → `bun install`
  - `npm run dev` → `bun run dev`
  - `npm run build` → `bun run build`
  - `npx` → `bunx`