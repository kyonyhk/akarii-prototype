interface InfoCardProps {
  heading: string;
  subheading: string;
  description: string;
}

export default function InfoCard({
  heading,
  subheading,
  description,
}: InfoCardProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 p-6">
      <div className="flex flex-col">
        <div className="eyebrow1 text-white/50">+</div>
        <div className="eyebrow4 text-white/80">{subheading}</div>
        <div className="heading3 text-white">{heading}</div>
      </div>
      <div className="paragraph1 text-white/50">{description}</div>
    </div>
  );
}
