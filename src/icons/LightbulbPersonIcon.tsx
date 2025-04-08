
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4C15.992 4 9.5 10.492 9.5 18.5c0 4.235 1.817 8.047 4.71 10.696.448.41.748.873.87 1.349l.005.019A14.44 14.44 0 0 1 24 27.5c3.362 0 6.456 1.144 8.915 3.064l.005-.02c.122-.475.422-.937.87-1.348A14.47 14.47 0 0 0 38.5 18.5C38.5 10.492 32.008 4 24 4m8.224 29.26A11.96 11.96 0 0 0 24 30a11.96 11.96 0 0 0-8.224 3.26l.575 2.24h15.298zM16.992 38l.623 2.43a4.75 4.75 0 0 0 4.6 3.57h3.57a4.75 4.75 0 0 0 4.6-3.57l.623-2.43zM24 14a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-7 4.5a7 7 0 1 1 14 0 7 7 0 0 1-14 0"/>`,
  'regular': `<path d="M12 18.5c0-6.627 5.373-12 12-12s12 5.373 12 12c0 3.504-1.5 6.657-3.898 8.852a5.8 5.8 0 0 0-1.142 1.424A14.44 14.44 0 0 0 24 27c-2.522 0-4.894.644-6.96 1.776a5.8 5.8 0 0 0-1.142-1.424A11.97 11.97 0 0 1 12 18.5m5.83 12.705A11.94 11.94 0 0 1 24 29.5c2.256 0 4.367.623 6.17 1.705l-.845 3.295h-10.65zm2.206 8.604L19.316 37h9.368l-.72 2.809a2.25 2.25 0 0 1-2.18 1.691h-3.568a2.25 2.25 0 0 1-2.18-1.691M24 4C15.992 4 9.5 10.492 9.5 18.5c0 4.235 1.817 8.047 4.71 10.696.448.41.748.873.87 1.349l2.535 9.885a4.75 4.75 0 0 0 4.6 3.57h3.57a4.75 4.75 0 0 0 4.6-3.57l2.535-9.885c.122-.476.422-.938.87-1.35A14.47 14.47 0 0 0 38.5 18.5C38.5 10.492 32.008 4 24 4m-4.5 14.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14"/>`
} as const;

export default function LightbulbPersonIcon({ 
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

  const gradientId = 'lightbulbpersonicon_gradient';
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