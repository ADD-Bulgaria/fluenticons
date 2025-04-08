
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M37 32 26.912 42.71a4 4 0 0 1-5.824 0L11 32h.038l-.017-.02-.021-.025A16.92 16.92 0 0 1 7 21c0-9.389 7.611-17 17-17s17 7.611 17 17a16.92 16.92 0 0 1-4 10.955l-.021.025-.017.02zM22.884 16.884a1.25 1.25 0 0 0-1.768-1.768l-5 5a1.25 1.25 0 0 0 0 1.768l5 5a1.25 1.25 0 0 0 1.768-1.768l-2.866-2.866H31a1.25 1.25 0 1 0 0-2.5H20.018z"/>`,
  'regular': `<path d="M22.884 16.884a1.25 1.25 0 0 0-1.768-1.768l-5 5a1.25 1.25 0 0 0 0 1.768l5 5a1.25 1.25 0 0 0 1.768-1.768l-2.866-2.866H31a1.25 1.25 0 1 0 0-2.5H20.018zm4.028 25.825L37 32h-.038l.017-.02.021-.025A16.92 16.92 0 0 0 41 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.92 16.92 0 0 0 4 10.955l.021.025.017.02H11l10.088 10.71a4 4 0 0 0 5.823 0M38.5 21a14.43 14.43 0 0 1-3.443 9.381l-.308.363-9.657 10.251a1.5 1.5 0 0 1-2.184 0l-9.657-10.251-.308-.363A14.43 14.43 0 0 1 9.5 21c0-8.008 6.492-14.5 14.5-14.5S38.5 12.992 38.5 21"/>`
} as const;

export default function LocationArrowLeftIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'locationarrowlefticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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