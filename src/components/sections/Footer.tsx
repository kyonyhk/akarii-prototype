'use client';

import { Button, Input, Logo } from '../atoms';
import { ExternalLink } from '../icons';
import { useState } from 'react';

export default function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <footer className="min-h-screen flex flex-col justify-between items-center px-4 md:px-50 pt-20 md:pt-50 pb-4 md:pb-10">
      <div className="flex flex-col justify-center items-center">
        <header className="flex flex-col justify-center items-center">
          <h2 className="heading2 md:heading1 text-white align-center">
            New intelligence
          </h2>
          <h2 className="heading2 md:heading1 text-white align-center">
            requires new standards
          </h2>
        </header>
        <p className="eyebrow2 text-white/50">Be part of the first wave.</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
        <header className="flex flex-col justify-center items-center">
          <h3 className="heading4 text-white">Waitlist is now open.</h3>
          <p className="eyebrow4 text-white/50">
            Help shape the future of team intelligence.
          </p>
        </header>
        <form className="max-w-[640px] w-full md:w-[640px] flex flex-col gap-2 justify-center items-center">
          <Input
            placeholder="example@email.com"
            type="email"
            className="w-full"
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
      </div>
      <div className="flex flex-col md:flex-row items-center gap-1">
        <Logo
          size={40}
          desktopSize={24}
          alt="Akarii company logo"
        />
        <p className="heading5 text-white">AKARII</p>
      </div>
    </footer>
  );
}
