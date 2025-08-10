import InfoSection from '../molecules/InfoSection';

export default function Overview() {
  return (
    <section className="min-h-screen flex flex-col gap-10 px-50 py-10">
      <div className="flex flex-row gap-10">
        <InfoSection
          heading="Stay aligned with AI-powered context"
          subheading="AI is your new teammate"
          description="Never lose the thread. Akarii tracks decisions, spots drift, and flags what's missing, so your team stays focused on what matters."
        />
        <InfoSection
          heading="One AI shared by the whole team"
          subheading="AI is your new teammate"
          description="Work with AI the way you work with people. In the same space, seeing the same context. Everyone stays on the same page, instantly."
        />
      </div>
      <figure className="h-[640px] w-full bg-black/20 backdrop-blur-sm rounded-3xl" aria-label="Product demo placeholder">
        {/* Placeholder for product demo/screenshot */}
      </figure>
    </section>
  );
}
