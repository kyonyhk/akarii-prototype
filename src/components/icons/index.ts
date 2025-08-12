// Icon components
export { default as ExternalLink } from './ExternalLink';
export { default as SettingsIcon } from './SettingsIcon';
export { default as FileIcon } from './FileIcon';
export { default as SpeechIcon } from './SpeechIcon';
export { default as SendIcon } from './SendIcon';
export { default as CloseIcon } from './CloseIcon';

// Types
export type { IconProps, IconName } from './types';

// Icon registry for dynamic loading
import ExternalLink from './ExternalLink';
import SettingsIcon from './SettingsIcon';
import FileIcon from './FileIcon';
import SpeechIcon from './SpeechIcon';
import SendIcon from './SendIcon';
import CloseIcon from './CloseIcon';

export const iconRegistry = {
  'external-link': ExternalLink,
  'settings': SettingsIcon,
  'file': FileIcon,
  'speech': SpeechIcon,
  'send': SendIcon,
  'close': CloseIcon,
} as const;