import { IconProps } from './types';

export default function CloseIcon({ size = 16, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      className={className}
    >
      <path 
        d="M6 6L18 18M6 18L18 6" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}