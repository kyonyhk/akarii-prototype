# Akarii Prototype - Claude Instructions

## Project Overview
This is the standalone prototype repository for Akarii's interactive chat demonstrations. The prototype showcases AI-powered team collaboration across different business scenarios through realistic chat simulations.

## Best Practices for Development
- **Always create a new branch from the latest main** before starting any work
- Follow conventional branch naming: `feat/`, `fix/`, `docs/`, `refactor/`
- Never work directly on main branch

## Tech Stack
- **Frontend**: Next.js 15.4.6 with TypeScript
- **Styling**: Tailwind CSS 3.4.17 with custom design system
- **Package Manager**: Bun (required)
- **Animations**: Custom React hooks with realistic typing effects
- **Fonts**: Custom PP fonts (Neue Montreal, Pangaia, Museum, Mondwest)

## Architecture Overview

### Key Directories
```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main prototype page (root route)
├── components/
│   ├── atoms/             # Basic UI components (Logo)
│   ├── icons/             # Icon components with types
│   └── prototype/         # Chat-specific components
├── data/
│   └── scenarios.ts       # 10 demo scenarios with messages
├── lib/
│   ├── prototype/         # Animation hooks and utilities
│   └── utils.ts           # General utilities
└── styles/
    ├── fonts.css          # Custom font definitions
    └── globals.css        # Global styles
```

### Core Components
- `/src/app/page.tsx` - Main prototype page with full chat interface
- `/src/components/prototype/` - Message components (User, Akarii, Participant, System)
- `/src/data/scenarios.ts` - 10 realistic business scenarios with detailed chat flows
- `/src/lib/prototype/` - Animation system (typing effects, message sequencing)

## Demo Scenarios (10 Total)
1. **Marketing Launch Planning** - Team decision making with AI insights
2. **Release Planning** - AI model deployment strategy with drift alerts
3. **Emergency Strategy Call** - High-stakes acquisition decision (Cognition/Windsurf)
4. **Post-Acquisition Planning** - Team integration and retention strategy
5. **Launch Coordination** - Competitive timing for Claude 4.1 vs GPT-5
6. **GPT-5 War Room** - Crisis response and competitive positioning
7. **Product Design** - Multi-agent UI design collaboration
8. **Newsletter Launch** - Content creation and marketing coordination
9. **Investment Analysis** - VC deal evaluation with market research
10. **Podcast Planning** - Episode preparation and content strategy

## Animation System
- **Realistic typing speeds**: Variable WPM with natural pauses
- **Message sequencing**: Coordinated delays and typing indicators
- **Input simulation**: User typing animation with send button effects
- **Context switching**: Smooth transitions between scenarios
- **Auto-replay**: Seamless looping for demonstrations

## Design System
- **Typography**: PP fonts with responsive sizing (mobile-first)
- **Colors**: Custom black (#0a0a0a) background with white (#dbdbdb) text
- **Layout**: Three-column responsive design (sidebar, chat, context panel)
- **Animations**: Smooth transitions with custom easing curves

## Development Commands
- **Development**: `bun run dev` (runs on 0.0.0.0 for local network access)
- **Build**: `bun run build`
- **Lint**: `bun run lint`
- **Type Check**: `bun run type-check`

## Package Manager
- **Use Bun exclusively** for all operations
- Replace `npm` commands with `bun` equivalents:
  - `npm install` → `bun install`
  - `npm run dev` → `bun run dev`
  - `npm run build` → `bun run build`
  - `npx` → `bunx`

## Key Features
- **10 business scenarios** covering different team perspectives and industries
- **Real-time collaboration simulation** with AI-powered insights
- **Mobile-responsive design** with overlay panels for small screens
- **Screen recording optimized** with clean black background
- **Natural typing animations** with realistic pauses and timing
- **Context-aware AI responses** that reference goals and provide strategic guidance
- **Scenario switching** without page reloads for seamless demonstrations

## Demo Usage
- Prototype runs on root path `/` for easy access
- Each scenario represents a different company/team perspective
- Scenarios auto-play with realistic timing for engaging demonstrations
- Context panel shows decision outcomes and strategic recommendations
- Optimized for screen recordings and live presentations