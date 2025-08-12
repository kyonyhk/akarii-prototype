import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import Title from '@/components/sections/Title';
import Overview from '@/components/sections/Overview';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <div
        className="fixed top-0 left-0 w-full h-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #766F61, rgba(118, 111, 97, 0))',
          zIndex: 10,
        }}
      /> */}

      {/* Fixed Background */}
      {/* <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src="/background-image.png"
          alt="Background"
          fill
          className="object-cover object-center"
          // style={{ zIndex: -50 }}
          priority
          quality={85}
        />
      </div> */}

      <Hero />
      <ValueProposition />
      <Title />
      <Overview />
      <Features />
      <Footer />
    </main>
  );
}
