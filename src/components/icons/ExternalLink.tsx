import { IconProps } from './types';

export default function ExternalLink({ size = 16, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none"
      className={className}
    >
      <path 
        d="M13.3337 2.1665C13.6096 2.16669 13.8336 2.39055 13.8337 2.6665V9.99951C13.8337 10.2755 13.6097 10.4993 13.3337 10.4995C13.0575 10.4995 12.8337 10.2757 12.8337 9.99951V3.87354L3.0202 13.687C2.82498 13.8821 2.50839 13.8821 2.31317 13.687C2.11803 13.4918 2.1181 13.1752 2.31317 12.98L12.1266 3.1665H5.99969C5.7237 3.16633 5.49969 2.94254 5.49969 2.6665C5.49978 2.39054 5.72376 2.16668 5.99969 2.1665H13.3337Z" 
        fill={color}
      />
    </svg>
  );
}