'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface InfoSectionProps {
  /** Main heading text */
  heading: string;
  /** Small eyebrow text above the heading */
  subheading: string;
  /** Description text below the heading */
  description: string;
  /** Whether the section starts in expanded state */
  defaultExpanded?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export default function InfoSection({
  heading,
  subheading,
  description,
  defaultExpanded = true,
  className,
}: InfoSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        'flex flex-row gap-4 items-start justify-start w-full text-left transition-opacity duration-200',
        'py-6 pl-6 pr-20', // Consistent padding
        !isExpanded && 'opacity-20 hover:opacity-40',
        className
      )}
    >
      {/* Plus Icon */}
      <div className="flex flex-col gap-[13px] items-center justify-center p-0 shrink-0 w-10">
        <div
          className={cn(
            'text-white transition-transform duration-200',
            'text-heading4 md:text-heading4-md', // Responsive text size
            'font-mondwest leading-none',
            !isExpanded && 'rotate-45 scale-75 opacity-50'
          )}
        >
          +
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 grow min-w-0">
        {/* Eyebrow and Heading */}
        <div className="flex flex-col gap-0 w-full">
          <p className="eyebrow4 text-white/50 leading-none">
            {subheading}
          </p>
          <h3 className="heading2 text-white leading-none">{heading}</h3>
        </div>

        {/* Description - only show when expanded */}
        {isExpanded && (
          <div className="w-full">
            <p className="paragraph1 text-white/50 leading-none">
              {description}
            </p>
          </div>
        )}
      </div>
    </button>
  );
}
