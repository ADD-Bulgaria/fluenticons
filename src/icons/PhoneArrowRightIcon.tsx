
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.75 2A2.25 2.25 0 0 1 16 4.25v5.769A6.5 6.5 0 0 0 10.175 18H8.75a.75.75 0 0 0-.102 1.493l.102.007 1.983.001a6.53 6.53 0 0 0 2.303 2.5L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm2.75 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.216 2.589-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07 1.646 1.645-4.798.001-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008 4.8-.001-1.648 1.647-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.53-2.533.036-.05.042-.08.026-.083.01-.064v-.088l-.01-.064-.026-.083-.041-.08-.038-.05-2.53-2.533-.069-.057a.5.5 0 0 0-.492-.044z"/>`,
  'regular': `<path d="M13.75 2A2.25 2.25 0 0 1 16 4.25v5.769q-.78.061-1.5.294V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h5.127a6.5 6.5 0 0 0 1.659 1.501L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm2.75 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.216 2.589-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07 1.646 1.645-4.798.001-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008 4.8-.001-1.648 1.647-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.53-2.533.036-.05.042-.08.026-.083.01-.064v-.088l-.01-.064-.026-.083-.041-.08-.038-.05-2.53-2.533-.069-.057a.5.5 0 0 0-.492-.044zm-6.64 3.913q.125.786.422 1.499l-1.747.003a.75.75 0 0 1-.002-1.5z"/>`
} as const;

export default function PhoneArrowRightIcon({ 
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

  const gradientId = 'phonearrowrighticon_gradient';
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