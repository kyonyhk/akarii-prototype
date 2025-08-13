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
        content: '@akarii summarize our three options and recommend one.',
        pauses: [4, 12, 25, 33, 40, 48],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:49',
        content: `Sure — based on the notes from last week's planning call, here's how the three options compare:

**Option A — Social Media Blitz**  
Focus: Short-term buzz across Instagram, TikTok, and LinkedIn.  
Pros: Wide reach in days, great for awareness.  
Cons: High ad spend, limited depth in engagement.

**Option B — Partner Webinars**  
Focus: Co-host educational sessions with industry partners.  
Pros: Builds credibility and deeper connections.  
Cons: Slower ramp-up, dependent on partner schedules.

**Option C — Targeted Paid Ads**  
Focus: Narrow targeting on high-intent audiences.  
Pros: Controlled spend, measurable ROI, quick turnaround.  
Cons: Smaller audience than A, requires strong creative.

**Recommendation:** Option C balances speed and efficiency while allowing measurable iteration. It's the best fit if our goal is early conversions before year-end.`,
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

**1.** Define and prioritize audience segments (e.g., by region, role, or interest)

**2.** Develop 2–3 ad creative variations per segment

**3.** Launch small-scale A/B tests within 10 days

**4.** Allocate majority of spend to top-performing creatives

**5.** Review metrics weekly and adjust targeting as needed

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

[Expand for Details]`,
        pauses: [18, 28, 38, 58, 78, 98, 118, 138, 158, 178, 198, 218],
        preDelayMs: 300,
      },
      {
        sender: 'Trish',
        role: 'human',
        type: 'text',
        timestamp: '14:14',
        content: "Sounds solid — let's move forward.",
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

**Impact:**

• Delays release of current performance improvements to all users

• May compress QA timelines for v2.2, increasing release risk

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
        content: "Good point — let's stay on target.",
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
          "Their compiler tech could double our code‑gen speed. We can't let someone else grab it.",
        pauses: [6, 14, 20, 26, 33, 39, 46, 52, 58, 65, 72, 77],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '07:44',
        content: `⚠️ **Integration Risk Alert**

This acquisition will absorb ~80% of Windsurf's engineering bandwidth for at least 6 weeks, pausing their roadmap.

**Risks to "Maintain Stability & Core Product Velocity"**

• Core editor feature freeze in Q4 → potential churn among top 10% accounts.
• Infra-role overlap → redundancy cost ≈ **$1.8M** in first 90 days.
• Cultural misalignment: 3/5 Windsurf leads left within 30 days of a prior acquisition.

**Recommendation**

1) Secure retention packages for key engineers.
2) Delay core refactors until integration stabilizes.
3) Set a 14‑day integration checkpoint with velocity metrics.`,
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
        content: `**Structured Plan**

Split integration into **Compiler Stream (priority)** and **General Eng Stream (lower urgency)**.
Projected outcome: retain ~**60%** of planned Q4 feature output vs. **20%** under full‑merge.`,
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
          'Cognition moved fast — 72 hours from first call to signed deal. Now we need to align priorities.',
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

**Risks to "Protect Core Tech and Team Stability"**

• Q1 compiler optimizations delayed ≥ **3 months**.
• Roadmap on-time delivery drops from **92% → ~55%**.
• Attrition risk: 4 engineers joined specifically for compiler work.

**Recommendation**

• Negotiate **phased integration**: keep compiler sprints focused for 6 weeks.
• Cross-train **2 bridge engineers** instead of a full pivot.
• Lock a **tech governance doc** before reassigning core members.`,
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
        content: `**Trade-off Model**

A 14-day slip for Cognition preserves ~**3 months** of Windsurf compiler gains.
Net effect on the combined roadmap: **positive** (differentiator retained).`,
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
          "OpenAI's GPT‑5 event is in three days. If we wait, we'll be drowned out.",
        pauses: [8, 15, 20, 26, 30, 35, 40, 47, 52, 57, 65, 72],
      },
      {
        sender: 'Dario Amodei',
        role: 'human',
        type: 'text',
        timestamp: '09:16',
        content:
          'Benchmarks look solid — we should lead the cycle, not trail it.',
        pauses: [10, 15, 22, 27, 34, 39, 44, 49, 54, 60],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'alert',
        timestamp: '09:16',
        content: `⚠️ **Competitive Timing Opportunity**

Launching **today** positions Claude 4.1 Opus ahead of GPT‑5 in the news cycle.

**Upside to "Maximize Claude 4.1 Opus Market Impact"**

• 2–3 days of dominant coverage before GPT‑5 saturation.
• Capture developer attention while influencer focus is diffuse.
• Set benchmark **framing** before GPT‑5 is revealed.

**Recommendation (next 6 hours)**

1) Release window: today, early‑week media slot.
2) Seed benchmark teasers to key AI reporters pre‑press.
3) Align blog + X threads on unique Claude advantages.`,
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
        content: `**Readiness Check**

Assets ready: **95%**. Remaining: minor copy tweaks.

**Ops needs:**
• Final QA on the model card (**~45 min**).
• DevRel sync for post‑launch Q&A sessions.`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188],
        preDelayMs: 350,
      },
      {
        sender: 'Mike Krieger',
        role: 'human',
        type: 'text',
        timestamp: '09:18',
        content:
          'Alright — we drop today. Make sure every channel fires on the same beat.',
        pauses: [8, 12, 17, 23, 30, 35, 40, 46, 53, 58, 65, 72],
      },
    ],
  },
  {
    id: 6,
    name: 'GPT‑5 Launch War Room',
    pov: 'Kevin Weil',
    thread: {
      title: 'GPT‑5 Launch War Room',
      goal: 'Maximize GPT‑5 Launch Impact',
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
        content: 'Our GPT‑5 keynote is in 72 hours. Do we hold or move?',
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

**Risk to "Maximize GPT‑5 Launch Impact"**

• Share‑of‑voice likely down **35–45%** if we wait full 72h.
• Influencers already orienting to Claude's charts.
• Narrative risk: perceived as follow‑on, not first‑move.

**Recommendation**

• **T+24h**: "GPT‑5 Teaser" (2 strong benchmarks + 1 signature demo).
• **T+48h**: Full keynote (quality preserved).
• Seed exclusive briefings to 3 tech reporters **today**.`,
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
        content: `**Teaser Pack**

• Two slices where GPT‑5 leads (code gen, long‑context QA).
• 15‑second live demo clip (reliable take).
• CTA: "Deeper dive in 48 hours."`,
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
          'Yes — teaser demo is green; the full multi‑agent demo needs another day.',
        pauses: [4, 8, 15, 20, 25, 30, 35, 40, 50, 55, 61, 68, 74],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'card',
        timestamp: '09:25',
        content: `**Guardrails**

• Lock teaser scope now; no new features.
• Overnight validation run; publish only passing charts.
• Two dry‑runs in a clean env; record a backup take.`,
        pauses: [18, 35, 52, 69, 86, 103, 120, 137, 154, 171, 188],
        preDelayMs: 350,
      },
      {
        sender: 'Kate Rouch',
        role: 'human',
        type: 'text',
        timestamp: '09:26',
        content:
          "Alright — teaser in 24h, full keynote in 48. I'll start media outreach.",
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
        timestamp: '09:01',
        content: '@Akarii — can you map the steps from *prompt → agent selection → code output*?',
        pauses: [7, 12, 18, 25, 32, 38, 45, 52, 58, 65, 72],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '09:02',
        content: `Sure. Here's a flow tailored to your Claude Code multi‑agent setup, prioritizing clarity:

**Step 1 — Prompt Entry**: user writes the request (e.g., "Build a Node.js script to parse JSON").  
**Step 2 — Agent Selection**: dropdown of Claude agents with one‑line capability tags ("API integration", "Refactor", "Tests").  
**Step 3 — Execution Log**: live stream of reasoning/steps so progress is visible.  
**Step 4 — Output Preview**: syntax‑highlighted code with **Copy · Rerun · Send to Editor**.

Want me to rephrase labels for non‑technical users?`,
        pauses: [
          6, 13, 20, 28, 35, 42, 50, 58, 65, 73, 80, 88, 95, 103, 110, 118, 125, 133, 140, 148, 155, 163, 170, 178, 185, 193, 200, 208, 215, 223, 230, 238, 245, 253, 260, 268, 275, 283, 290, 298, 305, 313, 320, 328, 335, 343, 350, 358,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Jamie',
        role: 'human',
        type: 'text',
        timestamp: '09:03',
        content: 'Yes—friendly without losing clarity. @Akarii can you update those labels?',
        pauses: [4, 12, 20, 28, 34, 42, 49, 55, 62, 70],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '09:03',
        content: `Updated labels:  
1) **Ask** — "Tell me what you'd like to build."  
2) **Choose Agent** — "Pick the helper best suited for your job."  
3) **Watch Work** — "See the AI think and work in real time."  
4) **See Results** — "Review and use the final code."

These keep action verbs upfront so users feel in control.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Maya',
        role: 'human',
        type: 'text',
        timestamp: '09:04',
        content: '@Akarii — draft tooltip copy for each step.',
        pauses: [7, 12, 17, 25, 30, 35, 40, 45],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '09:05',
        content: `Tooltips:  
- **Ask**: *Be specific. Mention language, framework, or an example.*  
- **Choose Agent**: *Hover to see what each agent excels at.*  
- **Watch Work**: *Pause or tweak the process anytime.*  
- **See Results**: *Copy code or send it straight to your editor.*

Saved to \`/ui-content/claude-code\`. Want a 1‑page UX spec export?`,
        pauses: [
          10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106, 114, 122, 130, 138, 146, 154, 162, 170, 178, 186, 194, 202, 210, 218, 226, 234, 242, 250, 258, 266, 274, 282, 290,
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
      goal: 'Ship today\'s newsletter and tool launch',
      channel: 'launch-room',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Dan',
        role: 'human',
        type: 'text',
        timestamp: '13:10',
        content: '@Akarii — headline for today\'s newsletter. Theme: human‑AI collaboration.',
        pauses: [7, 12, 17, 25, 32, 40, 47, 53, 60, 68],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:10',
        content: `Option A: **"When AI Joins the Meeting, Work Gets Smarter."**  
It's clear and ties the benefit to a familiar setting (meetings). Want punchier alternates?`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Mira',
        role: 'human',
        type: 'text',
        timestamp: '13:11',
        content: '@Akarii yes—two bolder options, please.',
        pauses: [7, 13, 17, 22, 30, 38, 45],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:11',
        content: `Bolder options:  
1) **"The Smartest Person in the Room Isn't a Person."**  
2) **"Your New Favorite Teammate Is Made of Code."**

Both are inbox‑grabbing; #1 leans thought‑leadership, #2 leans product.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Cole',
        role: 'human',
        type: 'text',
        timestamp: '13:12',
        content: '@Akarii — pull product description from the latest launch doc and condense to 50 words.',
        pauses: [7, 12, 17, 25, 32, 40, 47, 54, 61, 68, 75, 82, 89, 93],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '13:12',
        content: `Pulled from \`/docs/launch-brief\`:

*Our AI writing assistant brings structured creativity to your work — combining instant drafting, context awareness, and team‑shared memory so every piece you write is aligned and on‑message.*

→ 50 words. Want a tweet‑length version for social too?`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256, 264, 272,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Dan',
        role: 'human',
        type: 'text',
        timestamp: '13:13',
        content: '@Akarii use headline #1. Drop assets in `/launch-assets` and tag "Launch Day".',
        pauses: [7, 13, 17, 22, 29, 35, 40, 45, 55, 60, 65, 70, 76],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'text',
        timestamp: '13:13',
        content: 'Done. Files uploaded and tagged. I also generated an alt text pack for accessibility.',
        pauses: [5, 11, 18, 25, 32, 37, 44, 51, 58, 65, 72, 79, 86],
        preDelayMs: 200,
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
        content: '@Akarii — TAM for AI‑enabled logistics in Southeast Asia?',
        pauses: [7, 12, 17, 22, 32, 40, 47, 54],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '16:21',
        content: `Est. **$5.2B (2024)**, ~**17% CAGR** through 2028. Drivers: cross‑border e‑commerce growth, last‑mile automation, predictive routing.  
Sources linked in \`/market-research/SEA-logistics\`. Want a country breakdown next?`,
        pauses: [
          4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180, 188, 196, 204, 212, 220,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:21',
        content: '@Akarii before that: top 5 competitors with stage + differentiator.',
        pauses: [7, 13, 20, 27, 32, 37, 40, 45, 56, 61, 66, 71, 76],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '16:22',
        content: `**Competitor | Stage | Differentiator**  
RouteIQ | Series B | Real‑time customs clearance API  
LogiBot | Series A | Autonomous last‑mile drones  
CargoAI | Series C | Multilingual freight marketplace  
SwiftChain | Seed | Blockchain‑based shipment tracking  
OptiFleet | Series B | Route planning latency <10ms

Highlight gaps to exploit?`,
        pauses: [
          12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180, 188, 196, 204, 212, 220, 228, 236, 244, 252, 260, 268, 276,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Priya',
        role: 'human',
        type: 'text',
        timestamp: '16:22',
        content: '@Akarii yes—where does our target have an edge?',
        pauses: [7, 13, 17, 21, 28, 33, 40, 47],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '16:23',
        content: `Edge: **sub‑10ms real‑time route optimization** in dense urban traffic across SEA.  
Implication: enables near same‑day reliability; hard for slower systems to match.  
Suggest featuring this in the memo's **Moat** section with a before/after cost model. Want me to draft that section?`,
        pauses: [
          6, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182, 190, 198, 206, 214, 222, 230, 238, 246, 254, 262, 270, 278,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Leo',
        role: 'human',
        type: 'text',
        timestamp: '16:24',
        content: '@Akarii please draft the Moat section and drop into `/memos/ai-logistics`.',
        pauses: [7, 13, 20, 27, 34, 40, 45, 50, 55, 65, 75],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'text',
        timestamp: '16:24',
        content: 'Drafted and saved. Added citations and a one‑slide summary for IC.',
        pauses: [8, 12, 19, 25, 31, 42, 47, 51, 60, 63],
        preDelayMs: 200,
      },
    ],
  },
  {
    id: 10,
    name: 'Episode Prep: Open‑Source vs Proprietary',
    pov: 'Harper',
    thread: {
      title: 'Episode Prep: Open‑Source vs Proprietary',
      goal: 'Lock outline, questions, and promo copy',
      channel: 'show-run',
      tz: '+08:00',
    },
    messages: [
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:05',
        content: '@Akarii — draft an outline for our guest (CEO of [Fictional AI Startup]). Theme: open‑source vs proprietary AI.',
        pauses: [7, 12, 17, 24, 31, 38, 43, 48, 52, 62, 69, 76, 83, 90, 97, 104, 111, 118],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '18:05',
        content: `Proposed flow:  
1) Guest intro & background  
2) State of open‑source models  
3) Proprietary advantages & limitations  
4) Future hybrid approaches  
5) Audience Q&A

Balanced for narrative + depth. Want talking points per section?`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208,
        ],
        preDelayMs: 400,
      },
      {
        sender: 'Lenny',
        role: 'human',
        type: 'text',
        timestamp: '18:06',
        content: '@Akarii yes—also give me 3 strong opener questions.',
        pauses: [7, 13, 17, 21, 26, 31, 36, 44, 51, 58],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '18:06',
        content: `Openers:  
1) "What's the most misunderstood thing about open‑source AI today?"  
2) "If you had to bet on one model family for 2030, which would it be—and why?"  
3) "Where's the biggest capability gap in today's AI toolchain?"

I can tailor these to the guest's background if you share a brief.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256, 264, 272,
        ],
        preDelayMs: 350,
      },
      {
        sender: 'Harper',
        role: 'human',
        type: 'text',
        timestamp: '18:07',
        content: '@Akarii — prep a social teaser for the episode.',
        pauses: [7, 12, 17, 22, 29, 36, 40, 44],
      },
      {
        sender: 'Akarii',
        role: 'ai',
        type: 'rich',
        timestamp: '18:07',
        content: `Teaser copy: *"Proprietary vs open‑source AI — which wins, and why? We're going deep with [Guest Name]. Premieres Friday."*  
I also cut a 15‑sec teaser clip from prior footage and saved it to \`/promo-assets\`.`,
        pauses: [
          8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216,
        ],
        preDelayMs: 350,
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
};
