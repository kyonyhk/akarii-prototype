import { Scenario } from '../lib/prototype/types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    name: 'Multiplayer AI Team Chat',
    pov: 'Trish',
    thread: {
      title: 'Marketing Launch Options',
      channel: 'marketing',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '13:48',
        content: 'Hey Sam, we need to decide on the marketing push for Q4.',
        pauses: [8, 12, 23, 35, 47], // Natural pauses at commas and sentence breaks
      },
      {
        sender: 'Sam',
        role: 'human',
        type: 'text',
        timestamp: '13:48',
        content: "Yeah, we've got a few directions floating around.",
        pauses: [5, 14, 25, 33],
      },
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '13:49',
        content: "Let's ask Akarii to weigh in.",
        pauses: [6, 13, 21],
      },
      {
        sender: 'Sam',
        role: 'human',
        type: 'text',
        timestamp: '13:49',
        content: '@Akarii summarize our three options and recommend one.',
        pauses: [4, 12, 25, 33, 40, 48],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:49',
        content: `Sure — based on the notes from last week's planning call, here's how the three options compare:

## Option A — Social Media Blitz

**Focus:** Short-term buzz across Instagram, TikTok, and LinkedIn

• **Pros:** Wide reach in days, great for awareness
• **Cons:** High ad spend, limited depth in engagement

## Option B — Partner Webinars

**Focus:** Co-host educational sessions with industry partners

• **Pros:** Builds credibility and deeper connections
• **Cons:** Slower ramp-up, dependent on partner schedules

## Option C — Targeted Paid Ads

**Focus:** Narrow targeting on high-intent audiences

• **Pros:** Controlled spend, measurable ROI, quick turnaround
• **Cons:** Smaller audience than A, requires strong creative

## Recommendation

**Option C** balances speed and efficiency while allowing measurable iteration. It's the best fit if our goal is early conversions before year-end.`,
        pauses: [
          6, 13, 25, 36, 49, 65, 78, 89, 102, 115, 128, 145, 162, 178, 195, 208,
          225, 242, 258, 275, 292, 308, 325, 342, 358, 375, 392, 408, 425, 442,
          458, 475, 492, 508, 525,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Trish',
        role: 'human',
        type: 'reaction',
        timestamp: '13:50',
        content: '👍 Makes sense to me.',
        pauses: [2, 8, 14],
        speedOverrideWPM: 120,
      },
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '13:50',
        content: '@Akarii, can you also list key steps for Option C?',
        pauses: [7, 12, 17, 22, 27, 33, 39, 45],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:50',
        content: `Of course. Here's a suggested launch plan for **Option C**:

**1.** Define and prioritize audience segments
   • By region, role, or interest level
   • Focus on high-intent segments first

**2.** Develop 2–3 ad creative variations per segment
   • Test different messaging angles
   • Include both visual and copy variants

**3.** Launch small-scale A/B tests within 10 days
   • Start with limited budget allocation
   • Monitor performance metrics closely

**4.** Allocate majority of spend to top-performing creatives
   • Scale winning combinations
   • Pause underperforming variants

**5.** Review metrics weekly and adjust targeting as needed
   • Optimize for conversion rates
   • Refine audience parameters

If you'd like, I can draft a timeline so each step lines up with our Q4 milestones.`,
        pauses: [
          10, 17, 25, 35, 45, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158,
          168, 178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Sam',
        role: 'human',
        type: 'text',
        timestamp: '13:51',
        content: "Perfect, let's roll with that.",
        pauses: [8, 14, 20],
      },
    ],
  },
  {
    id: 2,
    name: 'Intelligence Layer — AI Model Launch Planning',
    pov: 'Trish',
    thread: {
      title: 'AI Model Launch Plan',
      goal: 'Deploy v2.1 to Production by Sept 30',
      channel: 'release-planning',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '14:12',
        content: "We've got three rollout strategies on the table for v2.1.",
        pauses: [5, 12, 19, 29, 35, 42, 48],
      },
      {
        sender: 'Sam',
        role: 'human',
        type: 'text',
        timestamp: '14:12',
        content: "Let's lock one in so engineering can prep.",
        pauses: [6, 11, 15, 18, 29, 33],
      },
      {
        sender: 'System',
        role: 'system',
        type: 'vote',
        timestamp: '14:13',
        content: `Option A: Gradual rollout by region (1 vote)  
Option B: Full launch to all users (0 votes)  
Option C: Staged rollout by usage tier (3 votes)`,
        pauses: [8, 18, 28, 38, 48, 58, 68, 78],
        preDelayMs: 200,
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '14:13',
        content: `**Outcome Recap**

**Selected:** Option C — Staged rollout by usage tier

**Reasoning:** Balances risk control with faster feedback from high-value segments

**Decision linked to Goal:** "Deploy v2.1 to Production by Sept 30"

**Context:** 5 votes cast, 3 in favor of C, consensus reached in under 4 minutes

View Details`,
        pauses: [18, 28, 38, 58, 78, 98, 118, 138, 158, 178, 198, 218],
        preDelayMs: 300,
      },
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '14:14',
        content: "Sounds solid, let's move forward.",
        pauses: [6, 12, 18, 24, 30],
      },
      {
        sender: 'Sam',
        role: 'human',
        type: 'text',
        timestamp: '14:15',
        content:
          'Actually… what if we push the launch to mid-October so we can bundle it with v2.2 features?',
        pauses: [9, 18, 25, 32, 38, 45, 52, 59, 66, 73, 80, 87],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '14:15',
        content: `⚠️ **Drift Alert**

This change would move the launch beyond the agreed **"Deploy v2.1 by Sept 30"** goal.

## Impact

• **Delays release** of current performance improvements to all users
• **May compress QA timelines** for v2.2, increasing release risk

## Next Steps

Would you like me to prepare a risk/benefit matrix for sticking to the current date vs. delaying?`,
        pauses: [
          18, 28, 38, 58, 78, 98, 118, 138, 158, 178, 198, 218, 238, 258, 278,
          298, 318,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '14:15',
        content: "Good point. Let's stay on target.",
        pauses: [5, 11, 17, 23, 29],
      },
    ],
  },
  {
    id: 3,
    name: 'Emergency Strategy Call',
    pov: 'Scott Wu',
    thread: {
      title: 'Emergency Strategy Call',
      goal: 'Maintain Stability & Core Product Velocity',
      channel: 'exec-war-room',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Scott Wu',
        role: 'human',
        type: 'text',
        timestamp: '07:42',
        content:
          "I know it's sudden, but we have a window to acquire Windsurf. Their core team's on board.",
        pauses: [5, 13, 20, 27, 35, 42, 50, 57, 65, 72],
      },
      {
        sender: 'Walden Yan',
        role: 'human',
        type: 'text',
        timestamp: '07:43',
        content:
          "If we do this, integration starts immediately. We won't get weeks of due diligence.",
        pauses: [8, 15, 25, 32, 39, 45, 52, 58, 65, 72, 80],
      },
      {
        sender: 'Steven Hao',
        role: 'human',
        type: 'text',
        timestamp: '07:43',
        content:
          "Their compiler tech could double our code-gen speed. We can't let someone else grab it.",
        pauses: [6, 14, 20, 26, 33, 39, 46, 52, 58, 65, 72, 77],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '07:44',
        content: `⚠️ **Integration Risk Alert**

This acquisition will absorb ~80% of Windsurf's engineering bandwidth for at least 6 weeks, pausing their roadmap.

## Risks to "Maintain Stability & Core Product Velocity"

• **Core editor feature freeze** in Q4 → potential churn among top 10% accounts
• **Infra-role overlap** → redundancy cost ≈ **$1.8M** in first 90 days
• **Cultural misalignment:** 3/5 Windsurf leads left within 30 days of a prior acquisition

## Recommendation

**1.** **Secure retention packages** for key engineers

**2.** **Delay core refactors** until integration stabilizes

**3.** **Set a 14-day integration checkpoint** with velocity metrics`,
        pauses: [
          18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188, 205, 222, 239, 256,
          273, 290, 307, 324, 341, 358, 375, 392, 409, 426, 443, 460, 477, 494,
          511, 528, 545, 562, 579, 596, 613, 630,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Walden Yan',
        role: 'human',
        type: 'text',
        timestamp: '07:45',
        content:
          "That's a bigger stall than I thought. Can we isolate their compiler team so core work continues?",
        pauses: [7, 15, 23, 30, 38, 45, 52, 58, 66, 73, 80, 87, 95],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '07:45',
        content: `## Structured Plan

Split integration into **Compiler Stream (priority)** and **General Eng Stream (lower urgency)**.

Projected outcome: retain ~**60%** of planned Q4 feature output vs. **20%** under full-merge.`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188, 205],
        preDelayMs: 350,
      },
      {
        sender: 'Steven Hao',
        role: 'human',
        type: 'text',
        timestamp: '07:46',
        content:
          "Okay, that's workable. Let's bake that into the integration plan.",
        pauses: [5, 12, 23, 29, 35, 40, 45, 52, 58, 65],
      },
    ],
  },
  {
    id: 4,
    name: 'Post-Acquisition Internal Strategy',
    pov: 'Jeff Wang',
    thread: {
      title: 'Post-Acquisition Internal Strategy',
      goal: 'Protect Core Tech and Team Stability',
      channel: 'leadership-sync',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Jeff Wang',
        role: 'human',
        type: 'text',
        timestamp: '10:05',
        content:
          'Cognition moved fast. 72 hours from first call to signed deal. Now we need to align priorities.',
        pauses: [9, 16, 22, 29, 36, 42, 49, 55, 62, 68, 75, 82, 89, 95],
      },
      {
        sender: 'Kevin Lu',
        role: 'human',
        type: 'text',
        timestamp: '10:06',
        content:
          "My biggest worry is losing our compiler team's focus during integration. They're the engine behind our performance edge.",
        pauses: [
          8, 16, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120,
        ],
      },
      {
        sender: 'Jeff Wang',
        role: 'human',
        type: 'text',
        timestamp: '10:06',
        content:
          'Cognition wants half the team on their code-gen project immediately.',
        pauses: [9, 15, 20, 25, 30, 35, 40, 50, 57, 64],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '10:07',
        content: `⚠️ **Strategic Drift Alert**

Immediate pivot pulls **6 of 10** compiler engineers into unrelated code-gen work.

## Risks to "Protect Core Tech and Team Stability"

• **Q1 compiler optimizations** delayed ≥ **3 months**
• **Roadmap on-time delivery** drops from **92% → ~55%**
• **Attrition risk:** 4 engineers joined specifically for compiler work

## Recommendation

• **Negotiate phased integration:** keep compiler sprints focused for 6 weeks
• **Cross-train 2 bridge engineers** instead of a full pivot
• **Lock a tech governance doc** before reassigning core members`,
        pauses: [
          18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188, 205, 222, 239, 256,
          273, 290, 307, 324, 341, 358, 375, 392, 409, 426, 443, 460, 477, 494,
          511, 528, 545, 562, 579,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Kevin Lu',
        role: 'human',
        type: 'text',
        timestamp: '10:08',
        content:
          "If we ask for a phased approach, won't that slow Cognition's roadmap?",
        pauses: [8, 15, 22, 29, 36, 42, 48, 53, 59, 66],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '10:08',
        content: `## Trade-off Model

**14-day slip for Cognition** preserves ~**3 months** of Windsurf compiler gains.

**Net effect on combined roadmap:** **positive** (differentiator retained)`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154],
        preDelayMs: 350,
      },
      {
        sender: 'Jeff Wang',
        role: 'human',
        type: 'text',
        timestamp: '10:09',
        content:
          "That's a strong trade-off. Let's take that to the joint planning session.",
        pauses: [6, 14, 26, 32, 37, 42, 47, 54, 61, 68],
      },
    ],
  },
  {
    id: 5,
    name: 'Launch Coordination',
    pov: 'Mike Krieger',
    thread: {
      title: 'Launch Coordination',
      goal: 'Maximize Claude 4.1 Opus Market Impact',
      channel: 'launch-ops',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Mike Krieger',
        role: 'human',
        type: 'text',
        timestamp: '09:15',
        content:
          "We've got Claude 4.1 Opus ready for release. Earliest drop is today.",
        pauses: [6, 12, 17, 21, 26, 32, 38, 45, 52, 59, 65],
      },
      {
        sender: 'Daniela Amodei',
        role: 'human',
        type: 'text',
        timestamp: '09:15',
        content:
          "OpenAI's GPT-5 event is in three days. If we wait, we'll be drowned out.",
        pauses: [8, 15, 20, 26, 30, 35, 40, 47, 52, 57, 65, 72],
      },
      {
        sender: 'Dario Amodei',
        role: 'human',
        type: 'text',
        timestamp: '09:16',
        content:
          'Benchmarks look solid. We should lead the cycle, not trail it.',
        pauses: [10, 15, 22, 27, 34, 39, 44, 49, 54, 60],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '09:16',
        content: `⚠️ **Competitive Timing Opportunity**

Launching **today** positions Claude 4.1 Opus ahead of GPT-5 in the news cycle.

## Upside to "Maximize Claude 4.1 Opus Market Impact"

• **2–3 days of dominant coverage** before GPT-5 saturation
• **Capture developer attention** while influencer focus is diffuse
• **Set benchmark framing** before GPT-5 is revealed

## Recommendation (next 6 hours)

**1.** **Release window:** today, early-week media slot
**2.** **Seed benchmark teasers** to key AI reporters pre-press
**3.** **Align blog + X threads** on unique Claude advantages`,
        pauses: [
          18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188, 205, 222, 239, 256,
          273, 290, 307, 324, 341, 358, 375, 392, 409, 426, 443, 460, 477, 494,
          511, 528, 545, 562,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Daniela Amodei',
        role: 'human',
        type: 'text',
        timestamp: '09:17',
        content: 'If we pull the trigger today, are the assets final?',
        pauses: [8, 15, 20, 27, 34, 39, 44, 50],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '09:17',
        content: `## Readiness Check

**Assets ready:** **95%** — Remaining: minor copy tweaks

## Ops needs:

• **Final QA on the model card** (~45 min)
• **DevRel sync** for post-launch Q&A sessions`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188],
        preDelayMs: 350,
      },
      {
        sender: 'Mike Krieger',
        role: 'human',
        type: 'text',
        timestamp: '09:18',
        content:
          'Alright, we drop today. Make sure every channel fires on the same beat.',
        pauses: [8, 12, 17, 23, 30, 35, 40, 46, 53, 58, 65, 72],
      },
    ],
  },
  {
    id: 6,
    name: 'GPT-5 Launch War Room',
    pov: 'Kevin Weil',
    thread: {
      title: 'GPT-5 Launch War Room',
      goal: 'Maximize GPT-5 Launch Impact',
      channel: 'war-room',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Kevin Weil',
        role: 'human',
        type: 'text',
        timestamp: '09:22',
        content:
          'Anthropic just pushed Claude 4.1 Opus. Press is spinning up already.',
        pauses: [9, 14, 21, 27, 33, 39, 45, 50, 56, 63, 70],
      },
      {
        sender: 'Kate Rouch',
        role: 'human',
        type: 'text',
        timestamp: '09:22',
        content: 'Our GPT-5 keynote is in 72 hours. Do we hold or move?',
        pauses: [7, 14, 22, 25, 30, 36, 42, 45, 50, 55],
      },
      {
        sender: 'Brad Lightcap',
        role: 'human',
        type: 'text',
        timestamp: '09:23',
        content:
          'Demo builds are stable, but some benchmark visuals need polishing.',
        pauses: [5, 12, 16, 23, 27, 32, 37, 47, 54, 59, 66],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '09:23',
        content: `⚠️ **Competitive Timing Risk**

Sticking to the current date cedes **2–3 news cycles** to Claude 4.1.

## Risk to "Maximize GPT-5 Launch Impact"

• **Share-of-voice** likely down **35–45%** if we wait full 72h
• **Influencers already orienting** to Claude's charts
• **Narrative risk:** perceived as follow-on, not first-move

## Recommendation

• **T+24h:** "GPT-5 Teaser" (2 strong benchmarks + 1 signature demo)
• **T+48h:** Full keynote (quality preserved)
• **Seed exclusive briefings** to 3 tech reporters **today**`,
        pauses: [
          18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188, 205, 222, 239, 256,
          273, 290, 307, 324, 341, 358, 375, 392, 409, 426, 443, 460, 477, 494,
          511, 528, 545,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Kate Rouch',
        role: 'human',
        type: 'text',
        timestamp: '09:24',
        content: 'If we tease in 24h, what do we show without overpromising?',
        pauses: [8, 15, 20, 24, 30, 35, 40, 45, 52, 58],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '09:24',
        content: `## Teaser Pack

• **Two slices where GPT-5 leads** (code gen, long-context QA)
• **15-second live demo clip** (reliable take)
• **CTA:** "Deeper dive in 48 hours"`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154, 171],
        preDelayMs: 350,
      },
      {
        sender: 'Kevin Weil',
        role: 'human',
        type: 'text',
        timestamp: '09:25',
        content: 'Can we guarantee demo stability at teaser scale?',
        pauses: [7, 15, 20, 25, 30, 39, 42, 47],
      },
      {
        sender: 'Brad Lightcap',
        role: 'human',
        type: 'text',
        timestamp: '09:25',
        content:
          'Yes — teaser demo is green; the full multi-agent demo needs another day.',
        pauses: [4, 8, 15, 20, 25, 30, 35, 40, 50, 55, 61, 68, 74],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '09:25',
        content: `## Guardrails

• **Lock teaser scope now** — no new features
• **Overnight validation run** — publish only passing charts
• **Two dry-runs in clean env** — record a backup take`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188],
        preDelayMs: 350,
      },
      {
        sender: 'Kate Rouch',
        role: 'human',
        type: 'text',
        timestamp: '09:26',
        content:
          "Alright, teaser in 24h, full keynote in 48. I'll start media outreach.",
        pauses: [8, 12, 19, 22, 27, 33, 37, 45, 48, 54, 60, 66, 73],
      },
    ],
  },
  {
    id: 7,
    name: 'Designing a Claude Code Agent UI',
    pov: 'Alex',
    thread: {
      title: 'Designing a Claude Code Agent UI',
      goal: 'Ship a friendly multi-agent UI',
      channel: 'product-design',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Alex',
        role: 'human',
        type: 'text',
        timestamp: '09:00',
        content:
          'Morning! I sketched a flow: prompt → choose agent → watch logs → code output.',
        pauses: [8, 12, 23, 35, 47, 52, 58, 65, 72],
      },
      {
        sender: 'Maya',
        role: 'human',
        type: 'text',
        timestamp: '09:01',
        content:
          "I like it, but I'd put tests before output so users trust the result.",
        pauses: [5, 13, 20, 28, 35, 42, 50, 57, 65, 72],
      },
      {
        sender: 'Jamie',
        role: 'human',
        type: 'text',
        timestamp: '09:02',
        content:
          'If we surface tests too early we might overwhelm non-technical folks. Maybe optional?',
        pauses: [8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85],
      },
      {
        sender: 'Alex',
        role: 'human',
        type: 'text',
        timestamp: '09:02',
        content:
          "Let's sanity-check labels. @Akarii can you map the steps and propose friendlier labels?",
        pauses: [6, 13, 25, 32, 40, 47, 54, 61, 68, 75, 82, 89],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '09:03',
        content: `## Proposed Multi-Agent Code Flow
*Friendly, minimal cognitive load*

### 1) Ask
• **Guidance:** "Tell me what you'd like to build."
• **Hints:** language, framework, I/O example
• **UX:** large single-line composer; suggestions inline ("Add tests", "Target Node 20")

### 2) Choose Agent

• **Agent cards** with 1-line capability tags: *API*, *Refactor*, *Tests*, *Docs*
• **Quick compare** on hover (strengths / expected outputs / typical runtime)

### 3) Watch Work

• **Live execution log** with step chips (Plan → Fetch → Generate → Test)
• **Controls:** **Pause**, **Edit Plan**, **Retry step**

### 4) See Results

• **Syntax-highlighted diff view**
• **Actions:** **Copy**, **Rerun**, **Send to Editor**, **Create PR**

## Why this works

• **Action verbs front-load control** ("Ask", "Choose", "Watch", "See")
• **Keeps experts fast** while giving newcomers affordances

If useful, I can also provide microcopy + empty states.`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288, 298, 308,
          318, 328, 338, 348, 358, 368, 378, 388, 398, 408, 418, 428, 438, 448,
          458, 468, 478, 488, 498, 508, 518, 528, 538, 548,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Jamie',
        role: 'human',
        type: 'text',
        timestamp: '09:04',
        content:
          "These labels work. I'd still like tests discoverable but not blocking.",
        pauses: [6, 12, 18, 24, 30, 36, 45, 52, 58, 65, 72],
      },
      {
        sender: 'Maya',
        role: 'human',
        type: 'text',
        timestamp: '09:04',
        content: 'Agree—maybe a "Quality checks" drawer under "See Results".',
        pauses: [6, 12, 18, 25, 32, 38, 45, 52, 60],
      },
      {
        sender: 'Alex',
        role: 'human',
        type: 'text',
        timestamp: '09:05',
        content:
          '@Akarii draft tooltips for each step and suggest where that "Quality checks" fits.',
        pauses: [7, 12, 17, 25, 32, 38, 45, 52, 58, 65, 72, 79, 86],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '09:05',
        content: `## Tooltips + Placement

### Ask
*Be specific. Mention language, framework, I/O and any constraints (e.g., Node 20, ESM).*

### Choose Agent
*Hover an agent to see strengths and sample outputs. You can switch agents later.*

### Watch Work
*Follow the steps in real time. Pause to tweak the plan or skip a step if needed.*

### See Results
*Review code and changes. Open **Quality checks** to run tests and linting.*

## Quality checks (drawer in See Results)

• **Header:** **Quality checks** — *Validate before you ship*
• **Buttons:** **Run tests**, **Run lint**, **Open coverage**
• **Empty:** *No checks yet. Run a check to view results here*
• **Results list** shows status chips (✅ Passed / ❌ Failed / ⏱️ Running) with collapsible logs

## Rationale
Keeps "tests" present but non-blocking; discoverable at the moment of decision.`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288, 298, 308,
          318, 328, 338, 348, 358, 368, 378, 388, 398, 408, 418, 428, 438, 448,
          458, 468, 478, 488, 498, 508, 518,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Jamie',
        role: 'human',
        type: 'text',
        timestamp: '09:06',
        content:
          "Perfect. I'll mock the drawer. Maya, can you own the tests view?",
        pauses: [8, 14, 20, 26, 32, 38, 45, 50, 56, 63],
      },
      {
        sender: 'Maya',
        role: 'human',
        type: 'text',
        timestamp: '09:06',
        content: "On it. Alex, I'll need the execution log schema.",
        pauses: [3, 7, 13, 18, 24, 30, 36, 42, 48],
      },
      {
        sender: 'Alex',
        role: 'human',
        type: 'text',
        timestamp: '09:07',
        content:
          '@Akarii microcopy for the Quality checks header + empty state?',
        pauses: [7, 12, 17, 25, 32, 38, 45, 52, 58, 65],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '09:07',
        content: `## Microcopy

**Header:** **Quality checks**

**Subhead:** *Validate before you ship*

**Empty state:** *No checks yet. Run tests or lint to see results here*

**Primary CTA:** **Run checks**

**Secondary CTA:** **Configure** (coverage thresholds, test runner)`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198,
        ],
        preDelayMs: 350,
      },
    ],
  },
  {
    id: 8,
    name: 'Newsletter + Product Launch Sprint',
    pov: 'Dan',
    thread: {
      title: 'Newsletter + Product Launch Sprint',
      goal: "Ship today's newsletter and tool launch",
      channel: 'launch-room',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Dan',
        role: 'human',
        type: 'text',
        timestamp: '13:09',
        content: 'Deadline mode. We need a headline on human-AI collaboration.',
        pauses: [8, 14, 19, 25, 30, 36, 42, 48, 56, 63],
      },
      {
        sender: 'Mira',
        role: 'human',
        type: 'text',
        timestamp: '13:09',
        content: 'Pitch: When AI joins the meeting, work gets smarter.',
        pauses: [6, 12, 18, 24, 30, 36, 42, 48, 54],
      },
      {
        sender: 'Cole',
        role: 'human',
        type: 'text',
        timestamp: '13:10',
        content: 'Good, but feels safe. Our brand can go bolder.',
        pauses: [5, 10, 16, 22, 26, 32, 36, 42],
      },
      {
        sender: 'Dan',
        role: 'human',
        type: 'text',
        timestamp: '13:10',
        content: '@Akarii give us 2 bold alternates, still on-brand.',
        pauses: [7, 12, 17, 22, 27, 34, 41, 48, 55],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:10',
        content: `Here are two bold options with tone notes:

## Option 1: "The Smartest Person in the Room Isn't a Person."

• **Tone:** thought-leadership, slightly provocative
• **Subtext:** AI as amplifier for group clarity, not a replacement

## Option 2: "Your New Favorite Teammate Is Made of Code."

• **Tone:** product-forward, approachable
• **Subtext:** practical partnership; less hype, more utility

## Brand fit
**#1 for essays; #2 for launches.** I can pair either with a pragmatic dek.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240,
          248, 256, 264, 272, 280, 288, 296, 304, 312, 320, 328, 336, 344, 352,
          360, 368,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Mira',
        role: 'human',
        type: 'text',
        timestamp: '13:11',
        content: 'I vote #1. Cole?',
        pauses: [2, 7, 11, 17],
      },
      {
        sender: 'Cole',
        role: 'human',
        type: 'text',
        timestamp: '13:11',
        content: "#1, but let's keep the dek practical.",
        pauses: [3, 8, 14, 19, 23, 27, 35],
      },
      {
        sender: 'Dan',
        role: 'human',
        type: 'text',
        timestamp: '13:12',
        content: '@Akarii 25-word dek that tees up a launch blurb.',
        pauses: [7, 12, 17, 25, 30, 35, 40, 47, 54],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:12',
        content: `## Dek (25 words)

How teams work is changing. We tested where AI helps (and where it doesn't)—and we're launching a tool that turns conversations into shared memory and momentum.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Cole',
        role: 'human',
        type: 'text',
        timestamp: '13:12',
        content: 'Nice. Pull 50-word product description from the launch doc?',
        pauses: [5, 10, 15, 25, 32, 38, 44, 50],
      },
      {
        sender: 'Mira',
        role: 'human',
        type: 'text',
        timestamp: '13:13',
        content:
          'Context: assistant drafts fast, keeps context, shares memory across the team.',
        pauses: [8, 18, 24, 29, 35, 43, 49, 55, 62, 68, 74],
      },
      {
        sender: 'Cole',
        role: 'human',
        type: 'text',
        timestamp: '13:13',
        content: '@Akarii condense that from `/docs/launch-brief` to 50 words.',
        pauses: [7, 12, 17, 25, 30, 35, 50, 53, 58, 65],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:13',
        content: `## Product (50 words)

Our AI writing assistant brings structured creativity to your work—combining instant drafting, context awareness, and team-shared memory so every piece you write stays aligned, consistent, and on-message. Think faster first drafts, clearer edits, and a reusable library of decisions and references your whole team can pull from on demand.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240,
          248, 256, 264, 272, 280, 288, 296, 304, 312, 320, 328, 336, 344, 352,
          360, 368, 376, 384, 392, 400,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Dan',
        role: 'human',
        type: 'text',
        timestamp: '13:14',
        content: 'Ship it. Mira, slot headline #1 + dek. Cole, assets?',
        pauses: [5, 8, 14, 20, 27, 32, 35, 40, 45, 52],
      },
      {
        sender: 'Cole',
        role: 'human',
        type: 'text',
        timestamp: '13:14',
        content:
          '@Akarii — export headline, dek, and 3 social variants to `/launch-assets`, tag "Launch Day".',
        pauses: [7, 12, 17, 26, 31, 36, 38, 42, 47, 55, 67, 72, 76, 82, 89],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:14',
        content: `## Export complete → \`/launch-assets\` (tag: Launch Day)

## Social variants

• **X (post):** The smartest person in the room isn't a person. How we collaborate is changing—and we built for it. New tool that turns conversations into shared memory

• **LinkedIn:** Meetings drift. Decisions get buried. We tested where AI helps (and where it doesn't). Today, we're launching a writing assistant that keeps teams on-message—and on-mission

• **Thread opener:** Why your team's best editor might be an AI—with a memory everyone can reuse

## Also included
Alt text pack + 1200×630 hero`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288, 298, 308,
          318, 328, 338, 348, 358, 368, 378, 388, 398, 408, 418, 428, 438, 448,
          458, 468, 478, 488, 498, 508,
        ],
        preDelayMs: 350,
      },
    ],
  },
  {
    id: 9,
    name: 'Deal Memo Deep Dive',
    pov: 'Priya',
    thread: {
      title: 'Deal Memo Deep Dive',
      goal: 'Decide whether to advance an AI logistics deal',
      channel: 'investment-review',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Priya',
        role: 'human',
        type: 'text',
        timestamp: '16:20',
        content: 'Gut check: is this market big enough in SEA?',
        pauses: [4, 10, 13, 18, 25, 30, 35, 41, 47],
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:20',
        content:
          'Depends. Cross-border e-comm and last-mile are booming, but margins are thin.',
        pauses: [8, 18, 25, 30, 34, 43, 48, 53, 61, 65, 72, 78],
      },
      {
        sender: 'Priya',
        role: 'human',
        type: 'text',
        timestamp: '16:21',
        content: '@Akarii TAM estimate for AI-enabled logistics in SEA?',
        pauses: [7, 12, 17, 25, 32, 36, 46, 54, 59],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '16:21',
        content: `## TAM Analysis (2024)

**Market size:** ≈ **$5.2B**, projected **~17% CAGR** through 2028

## Key drivers

• **Cross-border e-commerce** expansion
• **Last-mile automation** adoption
• **Predictive routing** optimization
• **Customs digitization** initiatives

## Sensitivity factors

• **Risk:** growth slows if cross-border taxes tighten
• **Upside:** acceleration if drone pilots scale

---

I saved sources and a country-level split shell at \`/market-research/SEA-logistics\`.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240,
          248, 256, 264, 272, 280, 288, 296, 304, 312, 320, 328, 336, 344, 352,
          360,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:22',
        content: 'Okay, healthy. Who are the top competitors by stage?',
        pauses: [5, 13, 20, 24, 29, 33, 37, 47, 50, 55],
      },
      {
        sender: 'Priya',
        role: 'human',
        type: 'text',
        timestamp: '16:22',
        content: 'And note any defensible differentiators.',
        pauses: [4, 9, 13, 23, 36, 42],
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:22',
        content: '@Akarii top 5 with stage + differentiator, please.',
        pauses: [7, 12, 17, 21, 24, 29, 35, 49, 56],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '16:22',
        content: `## Competitive Landscape

| Competitor | Stage    | Differentiator                              |
|------------|----------|---------------------------------------------|
| **RouteIQ**    | Series B | Real-time customs clearance API             |
| **LogiBot**    | Series A | Autonomous last-mile drones                 |
| **CargoAI**    | Series C | Multilingual freight marketplace            |
| **SwiftChain** | Seed     | Blockchain-based shipment tracking          |
| **OptiFleet**  | Series B | Route planning latency < 10 ms             |

## Key insight
**Latency and reliability** (missed windows) dominate last-mile unit economics.`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288, 298, 308,
          318, 328, 338, 348, 358, 368, 378, 388, 398, 408, 418, 428,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Priya',
        role: 'human',
        type: 'text',
        timestamp: '16:23',
        content:
          "Our target claims sub-10ms urban routing. If true, that's a wedge.",
        pauses: [4, 11, 18, 26, 32, 39, 46, 49, 55, 60, 64],
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:23',
        content: "Let's frame it as a reliability advantage, not just speed.",
        pauses: [5, 11, 16, 19, 22, 34, 45, 50, 55, 61],
      },
      {
        sender: 'Priya',
        role: 'human',
        type: 'text',
        timestamp: '16:24',
        content:
          '@Akarii draft the moat section emphasizing reliability + cost impact. Save to `/memos/ai-logistics`.',
        pauses: [7, 12, 17, 23, 28, 35, 43, 54, 64, 69, 74, 81, 86, 90, 107],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '16:24',
        content: `## Moat — Real-Time Urban Routing (Sub-10 ms)

### Claim
Adaptive routing at sub-10 ms decision latency across dense SEA metros.

### Why it matters

• **Tighter delivery windows** → higher first-attempt success
• **Fewer redeliveries** → lower last-mile cost per unit
• **Stability under traffic shocks** (rain, roadworks, events)

### Before/After (illustrative)

• **Missed window rate:** 18% → 9%
• **Redelivery attempts/order:** 0.22 → 0.11
• **Last-mile cost/unit:** $3.40 → $2.85

### Defensibility

• **Data flywheel:** metro-specific micro-features (road topology, curb availability)
• **Infrastructure:** low-latency inference + edge caches near rider clusters
• **Switching cost:** retraining penalty for rivals is time- & city-specific

---

Saved draft + slide to \`/memos/ai-logistics\`.`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288, 298, 308,
          318, 328, 338, 348, 358, 368, 378, 388, 398, 408, 418, 428, 438, 448,
          458, 468, 478, 488, 498, 508, 518, 528, 538, 548, 558, 568, 578, 588,
          598, 608, 618, 628,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:25',
        content: "I'll review and plug into the IC deck.",
        pauses: [4, 11, 17, 21, 26, 30, 33, 37, 42],
      },
    ],
  },
  {
    id: 10,
    name: 'Episode Prep: Open-Source vs Proprietary',
    pov: 'Harper',
    thread: {
      title: 'Episode Prep: Open-Source vs Proprietary',
      goal: 'Lock outline, questions, and promo copy',
      channel: 'show-run',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Lenny',
        role: 'human',
        type: 'text',
        timestamp: '18:04',
        content:
          'Thinking opener: "Why do open models still matter?" Too broad?',
        pauses: [8, 16, 24, 30, 34, 39, 45, 51, 56, 61],
      },
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:05',
        content: "Good start. Let's outline before we wordsmith.",
        pauses: [5, 11, 17, 23, 30, 37, 45],
      },
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:05',
        content:
          '@Akarii propose an outline (guest is CEO of a AI startup). Theme: open-source vs proprietary.',
        pauses: [
          7, 12, 17, 26, 33, 40, 47, 50, 57, 62, 69, 79, 89, 94, 104, 107, 117,
        ],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '18:05',
        content: `## Episode Outline
*Balanced approach: narrative → depth*

### 1. Guest intro & context
**Credibility** + how they've shipped on both sides

### 2. State of open-source
**Velocity**, community QA, deployment friction

### 3. Proprietary advantages & limits
**Safety tooling**, eval rigor, vendor lock-in

### 4. Hybrid future
**Open base** + proprietary adapters/guardrails

### 5. Audience Q&A
**Practical focus:** "What should teams do now?"

---

I can seed talking points per segment next.`,
        pauses: [
          18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168,
          178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288, 298, 308,
          318, 328, 338, 348, 358, 368, 378, 388, 398, 408, 418,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Lenny',
        role: 'human',
        type: 'text',
        timestamp: '18:06',
        content: 'Nice. For openers, I want something opinionated.',
        pauses: [5, 10, 17, 19, 24, 34, 45],
      },
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:06',
        content: '@Akarii 3 strong opener questions, punchy.',
        pauses: [7, 12, 17, 19, 25, 31, 41, 49],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '18:06',
        content: `## Strong Openers

**1.** *What's the most misunderstood thing about open-source AI today?*

**2.** *If you had to bet on one model family for 2030, which—and why?*

**3.** *Where's the biggest capability gap in today's AI toolchain (and who fixes it)?*

---

Follow-ups ready for each based on the guest's stance.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240,
          248, 256, 264, 272, 280, 288,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Lenny',
        role: 'human',
        type: 'text',
        timestamp: '18:07',
        content:
          "#1 and #3 for sure. Harper, we'll keep #2 in the back pocket.",
        pauses: [3, 7, 11, 17, 22, 29, 36, 42, 47, 50, 56, 63],
      },
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:07',
        content: "We need a social teaser that doesn't sound like clickbait.",
        pauses: [3, 8, 10, 16, 22, 27, 35, 41, 47, 55],
      },
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:07',
        content: '@Akarii write a teaser line + alt text for a 15s clip.',
        pauses: [7, 12, 17, 23, 25, 31, 36, 40, 44, 50, 52, 58],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '18:07',
        content: `## Social Teaser

**Main copy:**  
*Proprietary vs open-source AI—where each wins, and why the future won't be either/or. New episode with [Guest Name], dropping Friday.*

## Alt text for video

*Host and guest debate trade-offs between open and proprietary models; quick cuts of key quotes with animated waveform overlay; logo end card with release date.*`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
          136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240,
          248, 256, 264, 272, 280, 288, 296, 304, 312, 320, 328, 336, 344,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Lenny',
        role: 'human',
        type: 'text',
        timestamp: '18:08',
        content: "That lands. I'll record a cold open around those lines.",
        pauses: [5, 11, 17, 22, 24, 31, 36, 40, 48],
      },
    ],
  },
];

// Core value messages for reference (not part of animation)
export const SCENARIO_CORE_VALUES = {
  1: 'One AI, one context, one team — shared responses live in-thread for everyone to engage with.',
  2: 'Akarii captures decisions and nudges when threads drift from stated goals — never lose the thread.',
  3: 'Real-time strategic insights during high-stakes decisions — Akarii surfaces risks and trade-offs instantly.',
  4: 'Context-aware alerts protect team priorities — never lose sight of core goals during pivots.',
  5: 'Competitive timing intelligence — Akarii identifies market opportunities and optimal launch windows.',
  6: 'Crisis response coordination — rapid strategic pivots with data-driven recommendations.',
  7: 'User-centered design collaboration — Akarii helps teams create intuitive interfaces through structured feedback.',
  8: 'Content creation at scale — from headlines to social variants, Akarii maintains brand consistency across channels.',
  9: 'Investment research acceleration — comprehensive market analysis and competitive intelligence in real-time.',
  10: 'Content planning optimization — structured episode outlines and engaging social teasers for maximum impact.',
};
