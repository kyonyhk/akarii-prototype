import { iconRegistry } from './index';
import { IconProps, IconName } from './types';

interface DynamicIconProps extends IconProps {
  name: IconName;
}

export default function Icon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconRegistry[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }
  
  return <IconComponent {...props} />;
}