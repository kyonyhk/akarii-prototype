'use client';

import { useState } from 'react';
import WaitlistForm from '../molecules/WaitlistForm';
import { ExternalLink } from '../icons';
import { Input, Button, Logo } from '../atoms';

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <section className="min-h-screen flex flex-col px-4 md:px-50 pt-30 md:pt-50 pb-0 md:pb-20">
      <div className="absolute top-12 md:top-10 left-[50%] transform -translate-x-1/2">
        <Logo
          size={40}
          desktopSize={64}
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-end gap-4 md:gap-0">
          <div className="h-fit flex flex-col gap-0 order-2 md:order-1">
            <p className="eyebrow1 text-white/80">
              AI Workspace for Teams Who Move Fast
            </p>
            <p className="paragraph1 text-white/50">
              The only team chat that's ready for AI
            </p>
          </div>
          <h1 className="heading-mega1 text-white order-1 md:order-2">
            AKARII
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            placeholder="example@email.com"
            type="email"
            className="w-full md:flex-1"
          />

          <Button
            onClick={() => setIsWaitlistOpen(true)}
            icon={<ExternalLink size={16} />}
            className="w-full md:w-auto"
          >
            Join Waitlist
          </Button>

          <Button
            icon={<ExternalLink size={16} />}
            className="w-full md:w-auto"
          >
            Talk to Founder
          </Button>
        </div>
      </div>
    </section>
  );
}
