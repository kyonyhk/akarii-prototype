'use client';

import { Button, Input } from '../atoms';
import { ExternalLink } from '../icons';
import { useState } from 'react';

export default function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <footer className="min-h-screen flex flex-col justify-between items-center gap-60 px-50 pt-50 pb-10">
      <section className="flex flex-col justify-center items-center">
        <header className="flex flex-col justify-center items-center">
          <h2 className="heading1 text-white">New intelligence</h2>
          <h2 className="heading1 text-white">requires new standards</h2>
        </header>
        <p className="eyebrow1 text-white/50"> Come build it with us.</p>
      </section>
      <section className="flex flex-col justify-center items-center gap-6">
        <header className="flex flex-col justify-center items-center">
          <h3 className="heading4 text-white">Waitlist is now open.</h3>
          <p className="eyebrow4 text-white/50">
            Be the first to rethink how your team thinks.
          </p>
        </header>
        <form className="w-[640px] flex flex-col gap-2 justify-center items-center">
          <Input
            placeholder="example@email.com"
            type="email"
            className="w-full flex-1"
            aria-label="Email address"
            required
          />
          <Button
            onClick={() => setIsWaitlistOpen(true)}
            icon={<ExternalLink size={16} />}
            className="w-full"
            type="submit"
          >
            Join Waitlist
          </Button>
        </form>
      </section>
      <section className="flex flex-row gap-1">
        <div aria-label="Company logo">LOGO</div>
        <p className="heading5 text-white">AKARII</p>
      </section>
    </footer>
  );
}
