# Akarii Development Roadmap

## Overview

Progressive development from MVP validation to full-featured team insight platform across 5 waves over 6 months.

## Wave 0: MVP Foundation (3 weeks) ✅ Current Focus

### Goal

Prove end-to-end retrieval + reasoning on live chat data with 3-user pilot validation.

### Key Features

- Single workspace, single "General" channel
- Magic-link authentication via Clerk
- Real-time chat with message persistence
- Client-side OpenAI embeddings (768 dimensions)
- Vector similarity search showing top-3 relevant past messages
- Context panel for MVP validation (hidden in later waves)

### Success Criteria

- 1000+ messages processed without errors (100% reliability)
- p95 query latency ≤ 1.5s
- ≥2/3 pilot users report retrieval feels "on point"

### Technical Architecture

- **Frontend**: Next.js with real-time Convex subscriptions
- **Auth**: Clerk magic-link + profile setup
- **Backend**: Convex with vector index support
- **Embeddings**: Client-side OpenAI API calls
- **Memory**: Messages table with embedding vectors

---

## Wave 1: Goal Cards + Drift Detection (2 weeks)

### Goal

Pin conversation objectives and detect when discussions drift off-track.

### New Features

- **Goal Pinning**: Users can set/update conversation objectives mid-chat
- **Drift Detector**: AI monitors alignment between current discussion and pinned goals
- **Bot Interventions**: Subtle inline responses when significant drift detected
- **Private Whisperer**: Button-triggered 1:1 AI consultation mode

### UX Enhancements

- Remove context panel (no longer show retrieved snippets to users)
- Natural pause detection (30s) before AI responses
- Bundle multiple insights to avoid notification fatigue
- Goal tracking from pin moment forward (not retroactive)

### Technical Additions

- `objectives`, `alerts`, `botMessages` tables
- `saveObjective` mutation with regex whisper detection
- `driftDetector` plugin → write alert → insert botMessage
- Goal modal form + pin bar UI components

---

## Wave 2: Bias & Contradiction Detection (3 weeks)

### Goal

Surface unconscious bias and conflicting statements to improve team awareness.

### New Features

- **Bias Detection**: Identify language patterns suggesting hidden agendas
- **Contradiction Tracker**: Compare current statements against historical positions
- **Alert System**: Filter chips for Drift | Bias | Conflict alerts
- **Feedback Loop**: Thumbs up/down on AI insights for continuous improvement

### Memory Enhancements

- `contradictions` table linking current vs past claims
- Enhanced behavioral pattern recognition
- Improved decision tracking with confidence scores

### Technical Implementation

- `biasDetector` plugin (adapted from drift detector template)
- `contradictDetector` using vector search + historical decisions
- Alert filtering UI with user feedback collection
- Parallel processing for multiple detection types

---

## Wave 3: Power Metrics & Weekly Pulse (3 weeks)

### Goal

Track speaking patterns and provide weekly team dynamic insights.

### New Features

- **Power Awareness**: Track dominance, interruptions, speaking time
- **Behavioral Insights**: Identify who influences, supports, or resists decisions
- **Weekly Pulse**: Automated team health reports every Monday
- **#pulse Channel**: Auto-created channel for digest delivery

### Analytics Features

- Nightly `aggregateStats` cron for per-user metrics
- `stats_daily` table for trend tracking
- GPT-powered weekly digest composition
- Spark-line visualizations for dominance trends

### Retrospective Questions

- "What shifted this week?"
- "What tensions are emerging?"
- "What questions remain unresolved?"
- "What commitments went unacknowledged?"

---

## Wave 4: Enterprise Platform & Scale (4 weeks)

### Goal

Multi-tenant SaaS platform that replaces Slack with AI-native communication.

### Platform Features

- **Multi-Company Architecture**: Isolated workspaces for different organizations
- **Advanced Workspace Management**: Admin controls, user permissions, billing
- **Enhanced Channel System**: Multi-channel support, threading, file sharing
- **Pinecone Migration**: Vector store interface for >2M vectors per workspace
- **Enterprise Security**: SSO, audit logs, data retention policies

### Core Communication Features

- Multiple channels per workspace (beyond single "General")
- Message threading and replies
- File uploads and sharing
- User presence indicators
- Notification systems and settings
- Search across conversation history

### Technical Architecture

- `vectorStore` interface (Convex → Pinecone when threshold reached)
- Multi-tenant database design with complete organization isolation
- Advanced user management and role-based permissions
- Enterprise-grade security, compliance, and data governance

---

## Success Metrics by Wave

### Wave 0 (MVP)

- **Primary**: 3/3 pilot users report valuable context retrieval
- **Performance**: Sub-1.5s query latency at p95
- **Reliability**: Zero errors processing 1000+ messages

### Wave 1 (Goals + Drift)

- **Engagement**: Teams actively pin and update goals
- **Accuracy**: Drift alerts feel timely and relevant (qualitative feedback)
- **Usage**: Private whisperer mode adopted by >50% of users

### Wave 2 (Bias + Contradiction)

- **Precision**: Bias alerts achieve ≥70% relevance rating
- **Learning**: AI insights improve based on thumbs up/down feedback
- **Impact**: Teams report increased awareness of communication patterns

### Wave 3 (Power + Pulse)

- **Adoption**: Weekly Pulse delivered to 3+ active teams
- **Equity**: Measurable improvement in participation balance
- **Insight**: Teams act on power dynamic observations

### Wave 4 (Enterprise Platform)

- **Adoption**: Teams successfully migrate from Slack to Akarii as primary communication tool
- **Scale**: Multi-company deployment with isolated workspaces and enterprise features
- **Performance**: Pinecone migration maintains <2s latency at enterprise scale

---

## Technical Evolution Timeline

### Months 1-2: Foundation + Core Intelligence

- **Month 1**: MVP validation (Wave 0) + Goal system (Wave 1)
- **Month 2**: Bias/contradiction detection (Wave 2)

### Months 3-4: Analytics + Insights

- **Month 3**: Power metrics and weekly pulse (Wave 3)
- **Month 4**: Retrospective systems and trend analysis

### Months 5-6: Enterprise Platform

- **Month 5**: Multi-company architecture and advanced workspace features (Wave 4)
- **Month 6**: Enterprise security, compliance, and full Slack replacement features

---

## Risk Mitigation

### Technical Risks

- **Embedding Costs**: Monitor OpenAI usage, implement batching if needed
- **Latency Creep**: Profile and optimize each detector addition
- **Scale Bottlenecks**: Plan Pinecone migration before hitting limits

### Product Risks

- **Over-Intervention**: Careful tuning of alert thresholds and timing
- **Privacy Concerns**: Clear data policies and user control mechanisms
- **Team Rejection**: Strong onboarding and gradual feature introduction

### Market Risks

- **Slack Dominance**: Position AI intelligence as the primary differentiator vs traditional chat
- **Enterprise Adoption**: Start with small teams, prove value before scaling to large organizations
- **Feature Bloat**: Maintain "one perspective shift per week" focus while building complete platform

---

## Key Decision Points

### After MVP (Wave 0)

- Validate core RAG quality before proceeding
- Decide on embedding model (OpenAI vs alternatives)
- Confirm Convex scalability for target usage

### After Wave 1

- Evaluate drift detection accuracy and user response
- Refine AI intervention timing and style
- Plan multi-goal handling complexity

### After Wave 2

- Assess bias detection precision and team acceptance
- Optimize parallel processing for multiple detectors
- Design feedback loop effectiveness

### After Wave 3

- Validate weekly pulse value and engagement
- Plan enterprise platform features based on team growth
- Design multi-company architecture and billing strategy

---

## Long-Term Vision (Beyond Wave 4)

### Advanced Intelligence

- Cross-team pattern recognition
- Predictive conflict detection
- Multi-modal analysis (video, tone)

### Organizational Impact

- Leadership communication coaching
- Cultural trend identification
- Strategic decision support

### Platform Evolution

- Open API for third-party integrations
- Custom detector development tools
- Industry-specific conversation templates
- Mobile apps for iOS/Android
- Desktop apps for all major platforms

---

**Target Timeline**: 6 months from MVP to enterprise-ready Slack replacement
**Success Definition**: Teams switch from Slack to Akarii saying "the AI insights transformed how we communicate"
**North Star**: One meaningful perspective shift per team per week
