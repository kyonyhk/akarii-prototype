import InfoSection from '../molecules/InfoSection';

export default function Overview() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-10 px-4 md:px-50 py-10 bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <InfoSection
          heading="Stay aligned with AI-powered context"
          subheading="AI is your new teammate"
          description="Never lose the thread. Akarii tracks decisions, spots drift, and flags what's missing, so your team stays focused on what matters."
        />
        <figure
          className="md:hidden h-[640px] w-full bg-white/5 backdrop-blur-sm rounded-3xl"
          aria-label="Product demo placeholder"
        >
          {/* Placeholder for product demo/screenshot */}
        </figure>
        <InfoSection
          heading="One AI shared by the whole team"
          subheading="AI is your new teammate"
          description="Work with AI the way you work with people. In the same space, seeing the same context. Everyone stays on the same page, instantly."
        />
        <figure
          className="md:hidden h-[640px] w-full bg-white/5 backdrop-blur-sm rounded-3xl"
          aria-label="Product demo placeholder"
        >
          {/* Placeholder for product demo/screenshot */}
        </figure>
      </div>
      <figure
        className="hidden md:flex h-[640px] w-full bg-white/5 backdrop-blur-sm rounded-3xl"
        aria-label="Product demo placeholder"
      >
        {/* Placeholder for product demo/screenshot */}
      </figure>
    </section>
  );
}
