# Akarii MVP Implementation Plan

## Overview

3-week sprint to build and validate core RAG + memory integration with live chat data. Focus on proving end-to-end retrieval and reasoning capabilities.

## Phase 1: Foundation & Setup (Days 1-2)

- Initialize Task Master project structure with PRD parsing
- Set up Next.js + Convex project scaffold
- Configure Clerk authentication (magic-link with username/avatar setup)
- Design and implement core database schema (users, workspace, channel, messages with vector index)
- Set up OpenAI API integration for client-side embeddings
- Configure Clerk + Convex JWT integration for user verification

## Phase 2: Core Chat Functionality (Days 3-5)

- Build basic chat UI with single "General" channel
- Implement real-time message sending/receiving via Convex
- Add message persistence with automatic embedding generation
- Create context panel showing top-3 similar past messages (MVP validation feature)
- Add typing indicators and basic chat UX polish
- Integrate Clerk user profiles with Convex user records

## Phase 3: RAG & Memory Integration (Days 6-8)

- Implement vector similarity search with Convex queries
- Build context retrieval system (top-3 similar snippets)
- Add latency logging for performance monitoring
- Test embedding quality and search relevance
- Optimize for p95 query latency ≤ 1.5s target

## Phase 4: MVP Testing & Validation (Days 9-10)

- Set up cleanup cron for >30-day old messages
- Add error handling and edge case management
- Deploy to production environment
- Conduct 3-user pilot testing with feedback collection
- Validate success criteria: 1000+ messages without errors, relevance feedback

## Technical Architecture

### Stack

- **Frontend**: Next.js (pages router)
- **Auth**: Clerk (magic-link + profile management)
- **Backend**: Convex with real-time subscriptions
- **Integration**: Clerk JWT → Convex user verification
- **Embeddings**: Client-side OpenAI calls
- **Vector Search**: Convex vector index (768 dimensions)
- **Data Flow**: Single mutation handles message insert + similarity query

### Auth Flow

1. Magic-link email via Clerk
2. Profile setup (username/avatar) in Clerk
3. JWT token verification in Convex
4. Direct entry to General channel

### Database Schema

```typescript
// users table
{
  authId: string,    // Clerk user ID
  name: string,      // Display name
  createdAt: number
}

// workspace table
{
  name: string,
  createdAt: number,
  ownerId: Id<"users">
}

// channel table
{
  workspaceId: Id<"workspace">,
  name: string,      // "General" for MVP
  createdAt: number
}

// messages table with vector index
{
  channelId: Id<"channel">,
  authorId: Id<"users">,
  text: string,
  embedding: number[], // 768 dimensions
  ts: number
}
```

## Success Metrics

- **Reliability**: 100% pass rate for 1000+ messages without errors
- **Performance**: p95 query latency ≤ 1.5s
- **Quality**: ≥2/3 pilot users report retrieval feels "on point"

## MVP Scope Constraints

- Single workspace, single "General" channel
- Context panel visible for validation (will be hidden in Wave 1)
- No goal setting, drift detection, or bot responses
- Magic-link auth only, minimal user management
- Client-side embedding calls to avoid Convex action timeouts

## Post-MVP Evolution

This MVP validates the core RAG pipeline before advancing to:

- **Wave 1**: Goal Cards and drift detection
- **Wave 2**: Bias and contradiction detection
- **Wave 3**: Power metrics and weekly pulse
- **Wave 4**: Multi-workspace and Slack integration

## Key Implementation Notes

- Context panel shows retrieved snippets for MVP validation only
- All AI responses wait for natural conversation pauses (30s)
- Memory persistence uses implicit project timeline detection
- Bot interventions bundle insights to feel natural
- Focus on "one perspective shift per team per week" success metric
