'use client';

import { useState } from 'react';
import WaitlistForm from '../molecules/WaitlistForm';
import { ExternalLink } from '../icons';
import { Input, Button } from '../atoms';

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <section className="min-h-screen">
      <div className="flex flex-col px-50 pt-50 pb-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-end ">
            <div className="h-fit flex flex-col gap-1">
              <div className="eyebrow1 text-white/80">
                AI Workspace for Teams Who Move Fast
              </div>
              <div className="paragraph1 text-white/50">
                The only team chat that's ready for AI
              </div>
            </div>
            <div className="heading-mega1 text-white">AKARII</div>
          </div>
          <div className="flex flex-row gap-2">
            <Input
              placeholder="example@email.com"
              type="email"
              className="flex-1"
            />

            <Button
              onClick={() => setIsWaitlistOpen(true)}
              icon={<ExternalLink size={16} />}
            >
              Join Waitlist
            </Button>

            <Button icon={<ExternalLink size={16} />}>Talk to Founder</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
