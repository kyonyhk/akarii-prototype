'use client';

import InfoSection from '../molecules/InfoSection';

export default function Features() {
  return (
    <section className="min-h-screen flex flex-row">
      <figure
        className="hidden md:flex flex-1 flex-col justify-center items-center p-30"
        aria-label="Features demonstration"
      >
        <div className="h-full w-full bg-white/10 border backdrop-blur-sm border-white/20 rounded-3xl" />
      </figure>
      <aside className="bg-black/80 backdrop-blur-sm flex flex-1 flex-col justify-center items-center gap-10 py-10 px-4 md:px-10">
        <h2 className="sr-only">Product Features</h2>
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
          description="Capture and recall every key decision with context-aware search. No more lost conclusions or 'what did we agree on?' moments."
        />
        <InfoSection
          heading="Intelligence that speaks when it matters"
          subheading="Silent until it counts"
          description="Stay focused while AI listens in the background, stepping in only to flag risks, surface clarity, or point out what's missing."
        />
      </aside>
    </section>
  );
}
