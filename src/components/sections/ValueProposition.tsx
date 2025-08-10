import InfoCard from '../molecules/InfoCard';

export default function ValueProposition() {
  return (
    <section className="flex flex-col px-4 md:px-40 py-30 gap-20">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 order-2 md:order-1">
        <InfoCard
          heading="Kill the copy and paste AI workflow."
          subheading="AI is your new teammate"
          description="Right now, teams talk to AI in silos, then waste time pasting outputs into meetings. Akarii puts humans and AI in one conversation, so ideas move faster and nothing gets lost."
        />
        <InfoCard
          heading="Think beyond human limits."
          subheading="Work like humans and AI were meant to"
          description="In a shared space, AI can surface context, recall decisions, and keep goals aligned. Your team and AI see the same information, work from the same thread, and build shared understanding in real time."
        />
      </div>
      <div className="flex flex-col gap-1 order-1 md:order-2">
        <h2 className="heading-mega2 text-white">AI is here.</h2>
        <h2 className="heading-mega2 text-white">But teams are not ready.</h2>
      </div>
    </section>
  );
}
