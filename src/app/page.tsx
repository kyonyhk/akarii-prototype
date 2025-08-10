import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Collaboration from '@/components/sections/Collaboration';
import ValueProposition from '@/components/sections/ValueProposition';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <Collaboration />
    </main>
  );
}
