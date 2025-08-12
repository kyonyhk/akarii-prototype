import { Scenario } from '../lib/prototype/types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    name: "Multiplayer AI Team Chat",
    pov: "Trish",
    thread: {
      title: "Marketing Launch Options",
      channel: "marketing",
      tz: "+08:00"
    },
    messages: [
      {
        sender: "Trish",
        role: "human",
        type: "text",
        timestamp: "13:48",
        content: "Hey Sam, we need to decide on the marketing push for Q4.",
        pauses: [8, 12, 23, 35, 47], // Natural pauses at commas and sentence breaks
      },
      {
        sender: "Sam",
        role: "human", 
        type: "text",
        timestamp: "13:48",
        content: "Yeah, we've got a few directions floating around.",
        pauses: [5, 14, 25, 33],
      },
      {
        sender: "Trish",
        role: "human",
        type: "text", 
        timestamp: "13:49",
        content: "Let's ask Akarii to weigh in.",
        pauses: [6, 13, 21],
      },
      {
        sender: "Sam",
        role: "human",
        type: "text",
        timestamp: "13:49", 
        content: '@akarii "Summarize our three options and recommend one."',
        pauses: [4, 12, 25, 33, 40, 48],
      },
      {
        sender: "Akarii",
        role: "ai",
        type: "rich",
        timestamp: "13:49",
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
        pauses: [6, 13, 25, 36, 49, 65, 78, 89, 102, 115, 128, 145, 162, 178, 195, 208, 225, 242, 258, 275, 292, 308, 325, 342, 358, 375, 392, 408, 425, 442, 458, 475, 492, 508, 525],
        preDelayMs: 400,
      },
      {
        sender: "Trish",
        role: "human",
        type: "reaction",
        timestamp: "13:50",
        content: "👍 Makes sense to me.",
        pauses: [2, 8, 14],
        speedOverrideWPM: 120,
      },
      {
        sender: "Trish", 
        role: "human",
        type: "text",
        timestamp: "13:50",
        content: "Akarii, can you also list key steps for Option C?",
        pauses: [7, 12, 17, 22, 27, 33, 39, 45],
      },
      {
        sender: "Akarii",
        role: "ai", 
        type: "rich",
        timestamp: "13:50",
        content: `Of course. Here's a suggested launch plan for **Option C**:

**1.** Define and prioritize audience segments (e.g., by region, role, or interest)

**2.** Develop 2–3 ad creative variations per segment

**3.** Launch small-scale A/B tests within 10 days

**4.** Allocate majority of spend to top-performing creatives

**5.** Review metrics weekly and adjust targeting as needed

If you'd like, I can draft a timeline so each step lines up with our Q4 milestones.`,
        pauses: [10, 17, 25, 35, 45, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168, 178, 188, 198, 208, 218, 228, 238, 248, 258, 268, 278, 288],
        preDelayMs: 350,
      },
      {
        sender: "Sam",
        role: "human",
        type: "text", 
        timestamp: "13:51",
        content: "Perfect, let's roll with that.",
        pauses: [8, 14, 20],
      }
    ]
  },
  {
    id: 2,
    name: "Intelligence Layer — AI Model Launch Planning",
    pov: "Trish",
    thread: {
      title: "AI Model Launch Plan",
      goal: "Deploy v2.1 to Production by Sept 30",
      channel: "release-planning", 
      tz: "+08:00"
    },
    messages: [
      {
        sender: "Trish",
        role: "human",
        type: "text",
        timestamp: "14:12",
        content: "We've got three rollout strategies on the table for v2.1.",
        pauses: [5, 12, 19, 29, 35, 42, 48],
      },
      {
        sender: "Sam",
        role: "human",
        type: "text", 
        timestamp: "14:12",
        content: "Let's lock one in so engineering can prep.",
        pauses: [6, 11, 15, 18, 29, 33],
      },
      {
        sender: "System",
        role: "system",
        type: "vote",
        timestamp: "14:13",
        content: `Option A: Gradual rollout by region (1 vote)  
Option B: Full launch to all users (0 votes)  
Option C: Staged rollout by usage tier (3 votes)`,
        pauses: [8, 18, 28, 38, 48, 58, 68, 78],
        preDelayMs: 200,
      },
      {
        sender: "Akarii", 
        role: "ai",
        type: "card",
        timestamp: "14:13",
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
        sender: "Trish",
        role: "human", 
        type: "text",
        timestamp: "14:14",
        content: "Sounds solid — let's move forward.",
        pauses: [6, 12, 18, 24, 30],
      },
      {
        sender: "Sam",
        role: "human",
        type: "text",
        timestamp: "14:15", 
        content: "Actually… what if we push the launch to mid-October so we can bundle it with v2.2 features?",
        pauses: [9, 18, 25, 32, 38, 45, 52, 59, 66, 73, 80, 87],
      },
      {
        sender: "Akarii",
        role: "ai",
        type: "alert",
        timestamp: "14:15",
        content: `⚠️ **Drift Alert**

This change would move the launch beyond the agreed **"Deploy v2.1 by Sept 30"** goal.

**Impact:**

• Delays release of current performance improvements to all users

• May compress QA timelines for v2.2, increasing release risk

Would you like me to prepare a risk/benefit matrix for sticking to the current date vs. delaying?`,
        pauses: [18, 28, 38, 58, 78, 98, 118, 138, 158, 178, 198, 218, 238, 258, 278, 298, 318],
        preDelayMs: 400,
      },
      {
        sender: "Trish",
        role: "human",
        type: "text",
        timestamp: "14:15", 
        content: "Good point — let's stay on target.",
        pauses: [5, 11, 17, 23, 29],
      }
    ]
  }
];

// Core value messages for reference (not part of animation)
export const SCENARIO_CORE_VALUES = {
  1: "One AI, one context, one team — shared responses live in-thread for everyone to engage with.",
  2: "Akarii captures decisions and nudges when threads drift from stated goals — never lose the thread."
};