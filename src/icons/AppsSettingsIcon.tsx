
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.5 17h-5.1q.245-.476.393-1H15.5a.5.5 0 0 0 .492-.41L16 15.5V11a.5.5 0 0 0-.41-.492l-.09-.008h-5v1.706a5.5 5.5 0 0 0-1-1.48V10.5h-.225a5.5 5.5 0 0 0-1.48-1H9.5v-5a.5.5 0 0 0-.325-.469l-.085-.023L9 4H4.5a.5.5 0 0 0-.492.41L4 4.5v4.707q-.523.149-1 .393V4.5a1.5 1.5 0 0 1 1.356-1.493L4.5 3H9a1.5 1.5 0 0 1 1.493 1.355l.007.145v.254l2.189-2.269a1.5 1.5 0 0 1 2.007-.138l.116.101 2.758 2.725a1.5 1.5 0 0 1 .11 2.011l-.103.116-2.31 2.2h.233a1.5 1.5 0 0 1 1.494 1.355L17 11v4.5a1.5 1.5 0 0 1-1.355 1.493zm-5-9.29V9.5h1.79zm-7.434 3.732a2 2 0 0 1-1.43 2.478l-.462.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422q.387.307.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
  'regular': `<path d="M15.5 17h-5.1q.245-.476.393-1H15.5a.5.5 0 0 0 .492-.41L16 15.5V11a.5.5 0 0 0-.41-.492l-.09-.008h-5v1.706a5.5 5.5 0 0 0-1-1.48V10.5h-.225a5.5 5.5 0 0 0-1.48-1H9.5v-5a.5.5 0 0 0-.325-.469l-.085-.023L9 4H4.5a.5.5 0 0 0-.492.41L4 4.5v4.707q-.523.149-1 .393V4.5a1.5 1.5 0 0 1 1.356-1.493L4.5 3H9a1.5 1.5 0 0 1 1.493 1.355l.007.145v.254l2.189-2.269a1.5 1.5 0 0 1 2.007-.138l.116.101 2.758 2.725a1.5 1.5 0 0 1 .11 2.011l-.103.116-2.31 2.2h.233a1.5 1.5 0 0 1 1.494 1.355L17 11v4.5a1.5 1.5 0 0 1-1.355 1.493zm-5-9.29V9.5h1.79zm3.623-4.537a.504.504 0 0 0-.646-.053l-.068.06-2.616 2.713a.5.5 0 0 0-.057.623l.063.078 2.616 2.615a.5.5 0 0 0 .62.07l.079-.061 2.757-2.627a.5.5 0 0 0 .054-.638l-.058-.069zM3.066 11.442a2 2 0 0 1-1.43 2.478l-.462.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422q.387.307.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`
} as const;

export default function AppsSettingsIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'appssettingsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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