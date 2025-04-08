
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.25 2.996A2.75 2.75 0 0 1 20 5.746v5.752a6.52 6.52 0 0 0-4-.324V7.729a.74.74 0 0 0-.75-.73.74.74 0 0 0-.75.73v4.003a6.53 6.53 0 0 0-2.768 2.768l-.017-1.785a.73.73 0 0 0-.74-.719.73.73 0 0 0-.725.734l.035 3.547c.004.4.332.72.734.72q-.018.25-.019.503a6.47 6.47 0 0 0 1.02 3.496H4.75A2.75 2.75 0 0 1 2 18.246v-12.5a2.75 2.75 0 0 1 2.75-2.75zM6.75 9a.75.75 0 0 0-.75.747v6.507c0 .412.336.746.75.746s.75-.334.75-.746V9.746A.75.75 0 0 0 6.75 9m7.528 4.977a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16s1.45.672 1.45 1.5S18.3 19 17.5 19"/>`,
  'regular': `<path d="M17.25 2.996A2.75 2.75 0 0 1 20 5.746v5.752a6.5 6.5 0 0 0-1.5-.422v-5.33c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h6.562c.172.534.411 1.037.707 1.5H4.75A2.75 2.75 0 0 1 2 18.246v-12.5a2.75 2.75 0 0 1 2.75-2.75zM16 7.73v3.445a6.5 6.5 0 0 0-1.5.558V7.73a.74.74 0 0 1 .75-.73c.38 0 .694.275.743.63zm-4.285 4.986.017 1.785a6.5 6.5 0 0 0-.713 2.496.73.73 0 0 1-.726-.62l-.008-.099-.035-3.547a.73.73 0 0 1 .725-.734.73.73 0 0 1 .732.62zM6.75 9c.38 0 .693.281.743.646l.007.101v6.507a.75.75 0 0 1-.75.746.75.75 0 0 1-.743-.645L6 16.253V9.746C6 9.334 6.336 9 6.75 9m7.528 4.977a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16s1.45.672 1.45 1.5S18.3 19 17.5 19"/>`
} as const;

export default function DataUsageSettingsIcon({ 
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

  const gradientId = 'datausagesettingsicon_gradient';
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