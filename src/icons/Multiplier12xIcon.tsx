
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.34 20.242a1.5 1.5 0 0 0 1.65-1.312l.007-.042a2.7 2.7 0 0 1 .448-1.003c.354-.484 1.09-1.135 2.804-1.135 1.544 0 2.553.506 3.128 1.187.575.68.91 1.762.645 3.309-.15.873-.574 1.371-1.275 1.805-.596.369-1.26.621-2.081.934-.334.127-.694.264-1.086.422-1.24.502-2.683 1.193-3.79 2.487C19.644 28.23 19 30.036 19 32.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 1 0 0-3h-8.38c.18-1.013.54-1.678.948-2.155.619-.723 1.496-1.195 2.637-1.657.242-.097.508-.198.788-.305.91-.345 1.971-.748 2.832-1.28 1.262-.781 2.327-1.95 2.654-3.849.378-2.203-.036-4.246-1.31-5.754-1.274-1.506-3.213-2.25-5.42-2.25-2.66 0-4.3 1.1-5.225 2.364a5.7 5.7 0 0 0-.971 2.197 4 4 0 0 0-.04.24l-.003.022v.01l-.001.004v.002c0 .002-.032.3 0 .002a1.5 1.5 0 0 0 1.332 1.65m16.22 4.197a1.5 1.5 0 0 0-2.12 2.122L36.878 29l-2.44 2.44a1.5 1.5 0 0 0 2.122 2.12L39 31.122l2.44 2.44a1.5 1.5 0 0 0 2.12-2.122L41.122 29l2.44-2.44a1.5 1.5 0 0 0-2.122-2.12L39 26.878zM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-5.6-18.696A1.5 1.5 0 0 1 12 15.5v17a1.5 1.5 0 1 1-3 0V19.672a15.4 15.4 0 0 1-2.728 2.114 1.5 1.5 0 1 1-1.544-2.572c1.373-.824 2.502-1.944 3.299-2.886a16 16 0 0 0 1.125-1.502l.052-.082.01-.017h.001a1.5 1.5 0 0 1 1.686-.673"/>`,
  'regular': `<path d="M11.5 15.25a1.25 1.25 0 0 0-2.321-.643l-.003.004-.015.025-.067.106a18 18 0 0 1-1.275 1.742c-.874 1.054-1.976 2.124-3.086 2.628a1.25 1.25 0 0 0 1.035 2.276c1.25-.568 2.36-1.535 3.232-2.465V32.75a1.25 1.25 0 0 0 2.5 0zm8.531 4.73a1.25 1.25 0 0 0 1.448-.998v-.003l.014-.056a3.3 3.3 0 0 1 .59-1.14c.474-.589 1.37-1.283 3.167-1.283 1.595 0 2.599.522 3.166 1.242.58.736.884 1.906.602 3.546-.165.964-.648 1.539-1.408 2.026-.619.398-1.315.681-2.147 1.019-.332.135-.686.279-1.064.442-1.232.53-2.62 1.238-3.679 2.503-1.087 1.3-1.72 3.053-1.72 5.472A1.25 1.25 0 0 0 20.25 34h10a1.25 1.25 0 0 0 0-2.5h-8.672c.164-1.224.571-2.033 1.06-2.618.667-.798 1.6-1.316 2.75-1.811.255-.11.532-.223.821-.34.903-.366 1.921-.779 2.753-1.313 1.204-.774 2.21-1.898 2.52-3.706.363-2.11.042-4.065-1.102-5.517C29.224 14.728 27.405 14 25.25 14c-2.578 0-4.182 1.056-5.115 2.217a5.8 5.8 0 0 0-.885 1.535 5 5 0 0 0-.224.745l-.003.02-.002.007v.005s.14-.787-.001.002a1.25 1.25 0 0 0 1.011 1.45m16.103 4.386a1.25 1.25 0 1 0-1.768 1.768L37.232 29l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768L39 30.768l2.866 2.866a1.25 1.25 0 0 0 1.768-1.768L40.768 29l2.866-2.866a1.25 1.25 0 0 0-1.768-1.768L39 27.232zM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`
} as const;

export default function Multiplier12xIcon({ 
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

  const gradientId = 'multiplier12xicon_gradient';
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