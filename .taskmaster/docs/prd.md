# Akarii MVP - Product Requirements Document

## Product Overview

Akarii is an AI-native team communication platform that creates "one perspective shift per team per week" through intelligent conversation analysis. The MVP focuses on building a RAG (Retrieval-Augmented Generation) pipeline for live chat data to prove end-to-end retrieval and reasoning capabilities.

### Core Value Proposition
- Silent AI that observes team conversations
- Provides contextual insights without interrupting flow
- Creates meaningful perspective shifts through conversation analysis

## Technical Requirements

### Architecture Stack
- Frontend: Next.js (pages router)
- Backend: Convex with real-time subscriptions
- Authentication: Clerk (magic-link + profile management)
- AI: Client-side OpenAI embeddings (768 dimensions)
- Vector Search: Convex vector index
- Target: Single workspace, single channel MVP

### Database Schema Requirements

#### Users Table
- authId: string (Clerk user ID)
- name: string (display name)
- createdAt: number

#### Workspace Table  
- name: string
- createdAt: number
- ownerId: Id<"users">

#### Channel Table
- workspaceId: Id<"workspace">
- name: string ("General" for MVP)
- createdAt: number

#### Messages Table (with vector index)
- channelId: Id<"channel">
- authorId: Id<"users">
- text: string
- embedding: number[] (768 dimensions)
- ts: number

### Authentication Flow
1. Magic-link email authentication via Clerk
2. Profile setup (username/avatar) in Clerk
3. JWT token verification in Convex
4. Direct entry to General channel

## Feature Requirements

### Phase 1: Foundation & Setup
- Task Master project structure initialization
- Next.js + Convex project scaffold setup
- Clerk authentication configuration
- Core database schema implementation
- OpenAI API integration for client-side embeddings
- Clerk + Convex JWT integration

### Phase 2: Core Chat Functionality
- Basic chat UI with single "General" channel
- Real-time message sending/receiving via Convex
- Message persistence with automatic embedding generation
- Context panel showing top-3 similar past messages (MVP validation)
- Typing indicators and basic chat UX polish
- Clerk user profiles integration with Convex

### Phase 3: RAG & Memory Integration  
- Vector similarity search with Convex queries
- Context retrieval system (top-3 similar snippets)
- Latency logging for performance monitoring
- Embedding quality and search relevance testing
- Performance optimization for p95 query latency ≤ 1.5s

### Phase 4: MVP Testing & Validation
- Cleanup cron for >30-day old messages
- Error handling and edge case management
- Production environment deployment
- 3-user pilot testing with feedback collection
- Success criteria validation

## Success Metrics

### Performance Requirements
- 100% reliability: 1000+ messages without errors
- p95 query latency ≤ 1.5s
- ≥2/3 pilot users report retrieval feels "on point"

### MVP Scope Constraints
- Single workspace, single "General" channel only
- Context panel visible for validation (hidden in Wave 1)
- No goal setting, drift detection, or bot responses
- Magic-link authentication only
- Client-side embedding calls to avoid timeouts

## Technical Implementation Details

### Data Flow
- Single mutation handles message insert + similarity query
- Client-side OpenAI embedding generation
- Real-time message updates via Convex subscriptions
- Context panel updates with similar message retrieval

### Key Features for MVP
- Real-time chat interface
- Message persistence and retrieval
- Vector similarity search
- Context panel for validation
- User authentication and profiles
- Performance monitoring and logging

## Post-MVP Evolution Path
- Wave 1: Goal Cards and drift detection
- Wave 2: Bias and contradiction detection  
- Wave 3: Power metrics and weekly pulse
- Wave 4: Multi-workspace and Slack integration

## Implementation Timeline
- Days 1-2: Foundation & Setup
- Days 3-5: Core Chat Functionality
- Days 6-8: RAG & Memory Integration
- Days 9-10: MVP Testing & Validation

Total: 10-day development sprint focused on proving core RAG capabilities with live chat data.