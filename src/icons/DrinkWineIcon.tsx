
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 2a.75.75 0 0 0-.75.75v7a5.75 5.75 0 0 0 5 5.701v5.057L8.753 20.5a.75.75 0 0 0-.006 1.5l3 .011h.005l3.5-.011a.75.75 0 0 0-.004-1.5l-2.748.009v-5.053A6.25 6.25 0 0 0 18 9.25v-6.5a.75.75 0 0 0-.75-.75zm.75 5V3.5h9V7zm8.183 2.707a3.73 3.73 0 0 1-1.159 2.066 3.75 3.75 0 0 1-1.754.898.5.5 0 0 1-.205-.979 2.74 2.74 0 0 0 1.286-.658 2.76 2.76 0 0 0 .85-1.515.5.5 0 0 1 .982.188"/>`,
  'regular': `<path d="M15.929 9.754a.75.75 0 0 0-1.473-.281 2.48 2.48 0 0 1-.773 1.376 2.5 2.5 0 0 1-1.169.598.75.75 0 1 0 .307 1.469 4 4 0 0 0 1.872-.958 4 4 0 0 0 1.236-2.204M6 2.75A.75.75 0 0 1 6.75 2h10.5a.75.75 0 0 1 .75.75v6.5a6.25 6.25 0 0 1-5.5 6.206v5.053l2.748-.009a.75.75 0 0 1 .004 1.5l-3.5.011h-.005l-3-.011a.75.75 0 0 1 .006-1.5l2.247.008v-5.056A5.75 5.75 0 0 1 6 9.75zm1.5.75v2.75h9V3.5zm0 6.25A4.25 4.25 0 0 0 11.75 14a4.75 4.75 0 0 0 4.75-4.75v-1.5h-9z"/>`
} as const;

export default function DrinkWineIcon({ 
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

  const gradientId = 'drinkwineicon_gradient';
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