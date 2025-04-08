
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M31 19c0 1.483-.657 2.734-1.67 3.643C30.936 23.812 32 25.628 32 27.75c0 3.721-3.272 6.5-7 6.5s-7-2.779-7-6.5c0-2.122 1.064-3.938 2.67-5.107C19.658 21.734 19 20.483 19 19c0-3.144 2.954-5.25 6-5.25s6 2.106 6 5.25m-6-2.25c-1.924 0-3 1.252-3 2.25s1.076 2.25 3 2.25 3-1.252 3-2.25-1.076-2.25-3-2.25m-4 11c0 1.802 1.653 3.5 4 3.5s4-1.698 4-3.5-1.653-3.5-4-3.5-4 1.698-4 3.5m15.56-3.31a1.5 1.5 0 0 0-2.12 2.12L36.878 29l-2.44 2.44a1.5 1.5 0 0 0 2.122 2.12L39 31.122l2.44 2.44a1.5 1.5 0 0 0 2.12-2.122L41.122 29l2.44-2.44a1.5 1.5 0 0 0-2.122-2.12L39 26.878zM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-5.6-18.696A1.5 1.5 0 0 1 12 15.5v17a1.5 1.5 0 1 1-3 0V19.672a15.4 15.4 0 0 1-2.728 2.114 1.5 1.5 0 1 1-1.544-2.572c1.373-.824 2.502-1.944 3.299-2.886a16 16 0 0 0 1.125-1.502l.052-.082.01-.017h.001a1.5 1.5 0 0 1 1.686-.673"/>`,
  'regular': `<path d="M30.5 18.875c0 1.513-.692 2.815-1.762 3.728 1.797 1.129 3.012 3.033 3.012 5.272 0 3.628-3.19 6.375-6.875 6.375S18 31.503 18 27.875c0-2.24 1.216-4.143 3.013-5.272-1.07-.913-1.763-2.215-1.763-3.728 0-2.969 2.666-5.125 5.625-5.125s5.625 2.156 5.625 5.125m-5.625-2.625c-1.872 0-3.125 1.314-3.125 2.625s1.253 2.625 3.125 2.625S28 20.186 28 18.875s-1.252-2.625-3.125-2.625M20.5 27.875c0 2.033 1.847 3.875 4.375 3.875s4.375-1.842 4.375-3.875S27.404 24 24.875 24 20.5 25.842 20.5 27.875m15.634-3.509a1.25 1.25 0 0 0-1.768 1.768L37.232 29l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768L39 30.768l2.866 2.866a1.25 1.25 0 0 0 1.768-1.768L40.768 29l2.866-2.866a1.25 1.25 0 0 0-1.768-1.768L39 27.232zM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-5-17.5a1.25 1.25 0 0 0-2.321-.643l-.003.004-.015.025-.067.106a18 18 0 0 1-1.275 1.742c-.874 1.054-1.976 2.123-3.086 2.628a1.25 1.25 0 0 0 1.035 2.276c1.25-.568 2.36-1.535 3.232-2.465V32.75a1.25 1.25 0 0 0 2.5 0z"/>`
} as const;

export default function Multiplier18xIcon({ 
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

  const gradientId = 'multiplier18xicon_gradient';
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