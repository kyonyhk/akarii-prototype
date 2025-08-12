import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akarii - Chat Prototype',
  description: 'Prototype chat animation for recording',
};

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Override root layout background and gradient */}
      <div className="fixed inset-0 " />

      {/* Content container above the override */}
      <div className={`${inter.className} relative z-50 min-h-screen`}>
        {children}
      </div>
    </>
  );
}
