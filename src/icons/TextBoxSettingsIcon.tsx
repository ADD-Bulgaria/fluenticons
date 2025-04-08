
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272a6.47 6.47 0 0 1-1.003-4H6.75a.75.75 0 0 1-.102-1.493l.102-.007h4.563A6.5 6.5 0 0 1 12.81 13H6.75a.75.75 0 0 1-.102-1.493l.102-.007h7.5c.162 0 .313.052.435.14A6.5 6.5 0 0 1 17.5 11a6.47 6.47 0 0 1 3.5 1.022zM17.25 7.5a.75.75 0 0 1 .102 1.493L17.25 9H6.75a.75.75 0 0 1-.102-1.493L6.75 7.5zm-4.75 8.129.447.43a2 2 0 0 1 0 2.882l-.447.43c.2.574.49 1.103.853 1.57l.602-.178a2 2 0 0 1 2.51 1.45l.174.715a5.2 5.2 0 0 0 1.722 0l.173-.716a2 2 0 0 1 2.511-1.449l.602.178c.362-.467.652-.996.853-1.57l-.447-.43a2 2 0 0 1 0-2.882l.447-.43a5.5 5.5 0 0 0-.853-1.57l-.602.178a2 2 0 0 1-2.51-1.45l-.174-.715a5.2 5.2 0 0 0-1.723 0l-.172.716a2 2 0 0 1-2.511 1.449l-.602-.178a5.5 5.5 0 0 0-.853 1.57m5 3.371c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16s1.45.672 1.45 1.5S18.3 19 17.5 19"/>`,
  'regular': `<path d="M18.25 3A2.75 2.75 0 0 1 21 5.75v6.272a6.5 6.5 0 0 0-1.5-.709V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.563c.173.534.412 1.037.709 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3zm-4 8.5c.162 0 .313.052.435.14A6.5 6.5 0 0 0 12.81 13H6.75a.75.75 0 0 1-.102-1.493l.102-.007zm-7.5 4h4.563c-.154.478-.255.98-.294 1.5H6.75a.75.75 0 0 1-.102-1.493zm10.5-8H6.75l-.102.007A.75.75 0 0 0 6.75 9h10.5l.102-.007A.75.75 0 0 0 17.25 7.5m-4.75 8.129.447.43a2 2 0 0 1 0 2.882l-.447.43c.2.574.49 1.103.853 1.57l.602-.178a2 2 0 0 1 2.51 1.45l.174.715a5.2 5.2 0 0 0 1.722 0l.173-.716a2 2 0 0 1 2.511-1.449l.602.178c.362-.467.652-.996.853-1.57l-.447-.43a2 2 0 0 1 0-2.882l.447-.43a5.5 5.5 0 0 0-.853-1.57l-.602.178a2 2 0 0 1-2.51-1.45l-.174-.715a5.2 5.2 0 0 0-1.723 0l-.172.716a2 2 0 0 1-2.511 1.449l-.602-.178a5.5 5.5 0 0 0-.853 1.57m5 3.371c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16s1.45.672 1.45 1.5S18.3 19 17.5 19"/>`
} as const;

export default function TextBoxSettingsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'textboxsettingsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={`url(#${gradientId})`}
      className={className}
      style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
      aria-hidden={title ? undefined : true}
      focusable="false"
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%" y1="0%" x2="100%" y2="0%"
          gradientTransform={gradient.angle !== undefined ? `rotate(${gradient.angle})` : undefined}
        >
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}