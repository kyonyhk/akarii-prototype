// Icon components
export { default as ExternalLink } from './ExternalLink';

// Types
export type { IconProps, IconName } from './types';

// Icon registry for dynamic loading
import ExternalLink from './ExternalLink';

export const iconRegistry = {
  'external-link': ExternalLink,
} as const;