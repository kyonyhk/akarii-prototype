'use client';

import InfoSection from '../molecules/InfoSection';

export default function Features() {
  return (
    <section className="min-h-screen flex flex-row">
      <div className="flex flex-1 flex-col justify-center items-center p-30">
        <div className="h-full w-full bg-white/10 border backdrop-blur-sm border-white/20 rounded-3xl" />
      </div>
      <div className="bg-black/80 backdrop-blur-sm flex flex-1 flex-col justify-center items-center gap-10 p-10">
        <InfoSection
          heading="Collaborate with AI as a team"
          subheading="Humans and AI, side by side"
          description="A single conversation space where teammates and AI interact together, making collaboration faster and more transparent."
        />
        <InfoSection
          heading="Keep every discussion tied to goals"
          subheading="Every word with purpose"
          description="Link conversations to objectives so the AI can help keep your team on-track and call out drift when it happens."
        />
        <InfoSection
          heading="Instant decision memory"
          subheading="Decisions, remembered"
          description="Capture and recall every key decision with context-aware search. No more lost conclusions or “what did we agree on?” moments."
        />
        <InfoSection
          heading="Intelligence that speaks when it matters"
          subheading="Silent until it counts"
          description="Stay focused while AI listens in the background, stepping in only to flag risks, surface clarity, or point out what’s missing."
        />
      </div>
    </section>
  );
}
