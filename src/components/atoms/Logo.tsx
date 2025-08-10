'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export interface LogoProps {
  /** Logo size in pixels */
  size?: number;
  /** Desktop logo size in pixels (for responsive behavior) */
  desktopSize?: number;
  /** Additional CSS classes */
  className?: string;
  /** Alternative text for the logo */
  alt?: string;
  /** Whether logo should take full width of container */
  fullWidth?: boolean;
  /** Logo variant */
  variant?: 'default' | 'white' | 'mono';
}

/**
 * Reusable Logo component with consistent sizing and styling
 * Uses Next.js Image component for optimal performance
 */
export default function Logo({
  size = 32,
  desktopSize,
  className,
  alt = 'Akarii Logo',
  fullWidth = false,
  variant = 'default',
}: LogoProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Determine current size based on breakpoint
  const currentSize = desktopSize && isDesktop ? desktopSize : size;
  
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        fullWidth ? 'w-full' : 'w-fit',
        className
      )}
      style={!fullWidth ? { width: currentSize, height: currentSize } : undefined}
    >
      <Image
        src="/logo.png"
        alt={alt}
        width={currentSize}
        height={currentSize}
        className={cn(
          'object-contain',
          // Variant styles for different contexts
          variant === 'white' && 'brightness-0 invert',
          variant === 'mono' && 'grayscale'
        )}
        priority={currentSize > 48} // Priority load for larger logos
      />
    </div>
  );
}