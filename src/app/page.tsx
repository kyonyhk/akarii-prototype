import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Overview from '@/components/sections/Overview';
import ValueProposition from '@/components/sections/ValueProposition';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Overview />
      <Features />
      <Footer />
    </main>
  );
}
