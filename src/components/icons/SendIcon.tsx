import { IconProps } from './types';

export default function SendIcon({
  size = 16,
  className = '',
  color = 'currentColor',
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.25C12.1989 2.25 12.3896 2.32907 12.5303 2.46973L19.5303 9.46973C19.8232 9.76262 19.8232 10.2374 19.5303 10.5303C19.2374 10.8232 18.7626 10.8232 18.4697 10.5303L12.75 4.81055V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81055L5.53027 10.5303C5.23738 10.8232 4.76262 10.8232 4.46973 10.5303C4.17683 10.2374 4.17683 9.76262 4.46973 9.46973L11.4697 2.46973L11.584 2.37598C11.7063 2.29445 11.8508 2.25 12 2.25Z" />
    </svg>
  );
}
