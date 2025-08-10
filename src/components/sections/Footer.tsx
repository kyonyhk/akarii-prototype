'use client';

import { Button, Input } from '../atoms';
import { ExternalLink } from '../icons';
import { useState } from 'react';

export default function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center gap-60 px-50 pt-50 pb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="heading1 text-white">New intelligence</div>
          <div className="heading1 text-white">requires new standards</div>
        </div>
        <div className="eyebrow1 text-white/50"> Come build it with us.</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center">
          <div className="heading4 text-white">Waitlist is now open.</div>
          <div className="eyebrow4 text-white/50">
            Be the first to rethink how your team thinks.
          </div>
        </div>
        <div className="w-[640px] flex flex-col gap-2 justify-center items-center">
          <Input
            placeholder="example@email.com"
            type="email"
            className="w-full flex-1"
          />
          <Button
            onClick={() => setIsWaitlistOpen(true)}
            icon={<ExternalLink size={16} />}
            className="w-full"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <div>LOGO</div>
        <div className="heading5 text-white">AKARII</div>
      </div>
    </div>
  );
}
