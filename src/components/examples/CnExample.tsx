import { cn } from '@/lib/utils';

export default function CnExample() {
  // This demonstrates how to break up long className strings
  
  // ❌ Hard to read (one long line)
  const badExample = "w-fit flex flex-row px-6 py-4 gap-4 items-center bg-white/5 border border-white/20 backdrop-blur-sm rounded-[40px] hover:bg-white/10 transition-colors cursor-pointer";
  
  // ✅ Much better with cn (organized by purpose)
  const buttonStyles = cn(
    // Layout & Structure
    "w-fit flex flex-row items-center gap-4",
    // Spacing
    "px-6 py-4",
    // Background & Borders
    "bg-white/5 border border-white/20 backdrop-blur-sm",
    "rounded-[40px]",
    // Interactive States
    "hover:bg-white/10 transition-colors cursor-pointer"
  );
  
  // Conditional classes example
  const getVariantStyles = (variant: 'primary' | 'secondary' | 'ghost') => cn(
    // Base styles
    "px-4 py-2 rounded-lg font-medium transition-colors",
    
    // Variants
    variant === 'primary' && "bg-white text-black hover:bg-white/90",
    variant === 'secondary' && "bg-black/50 text-white hover:bg-black/70", 
    variant === 'ghost' && "text-white hover:bg-white/10"
  );
  
  // Responsive classes made readable
  const responsiveStyles = cn(
    // Mobile first (default)
    "flex flex-col gap-4 p-4 text-sm",
    // Tablet
    "sm:flex-row sm:gap-6 sm:p-6 sm:text-base",
    // Desktop  
    "lg:gap-8 lg:p-8 lg:text-lg",
    // Large screens
    "xl:max-w-6xl xl:mx-auto"
  );
  
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-white">CN Utility Examples</h2>
      
      {/* Example 1: Organized button */}
      <button className={buttonStyles}>
        Organized Button
      </button>
      
      {/* Example 2: Variant buttons */}
      <div className="flex gap-4">
        <button className={getVariantStyles('primary')}>
          Primary
        </button>
        <button className={getVariantStyles('secondary')}>
          Secondary  
        </button>
        <button className={getVariantStyles('ghost')}>
          Ghost
        </button>
      </div>
      
      {/* Example 3: Responsive layout */}
      <div className={responsiveStyles}>
        <div className="bg-white/10 p-4 rounded">Item 1</div>
        <div className="bg-white/10 p-4 rounded">Item 2</div>
        <div className="bg-white/10 p-4 rounded">Item 3</div>
      </div>
    </div>
  );
}