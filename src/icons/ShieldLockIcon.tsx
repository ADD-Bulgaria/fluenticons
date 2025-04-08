
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24.865 4.348a1.25 1.25 0 0 0-1.73 0c-2.759 2.643-6.685 4.077-10.037 4.84-1.66.376-3.139.58-4.202.69A29 29 0 0 1 7.242 10H7.22A1.25 1.25 0 0 0 6 11.25v9.5c0 4.837 1.243 9.658 4.098 13.775 2.861 4.126 7.29 7.469 13.529 9.418.243.076.503.076.746 0q.843-.264 1.641-.56A5 5 0 0 1 26 43V33a5 5 0 0 1 4.059-4.912 7.001 7.001 0 0 1 11.776-4.15Q42.001 22.474 42 21v-9.75A1.25 1.25 0 0 0 40.78 10h-.022l-.08-.003-.328-.017a29 29 0 0 1-1.246-.102 36 36 0 0 1-4.202-.69c-3.353-.763-7.279-2.197-10.037-4.84M32 30v-1a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H31a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3zm2.5-1v1h5v-1a2.5 2.5 0 0 0-5 0m5.5 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`,
  'regular': `<path d="M23.135 4.348a1.25 1.25 0 0 1 1.73 0c2.758 2.643 6.684 4.077 10.037 4.84 1.659.376 3.139.58 4.202.69a29 29 0 0 0 1.654.122h.021A1.25 1.25 0 0 1 42 11.25V21q0 1.474-.165 2.938a7 7 0 0 0-2.378-1.495q.043-.72.043-1.443v-8.575a38 38 0 0 1-5.152-.8c-3.219-.731-7.21-2.102-10.348-4.702-3.138 2.6-7.13 3.97-10.348 4.702a38 38 0 0 1-5.152.8v8.325c0 4.413 1.132 8.717 3.652 12.35 2.459 3.545 6.288 6.524 11.848 8.338q1.04-.339 2-.732V43q0 .194.014.383-.799.296-1.641.56a1.25 1.25 0 0 1-.746 0c-6.238-1.95-10.668-5.292-13.53-9.418C7.244 30.408 6 25.587 6 20.75v-9.5A1.25 1.25 0 0 1 7.22 10h.022l.08-.003q.11-.004.328-.017c.29-.017.715-.048 1.246-.102a36 36 0 0 0 4.202-.69c3.352-.763 7.278-2.197 10.037-4.84M32 30v-1a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H31a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3zm2.5-1v1h5v-1a2.5 2.5 0 0 0-5 0m5.5 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`
} as const;

export default function ShieldLockIcon({ 
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

  const gradientId = 'shieldlockicon_gradient';
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