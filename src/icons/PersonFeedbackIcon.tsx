import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M3 34.79c0 .09.15 9.21 13 9.21s13-9.12 13-9.21v-1.04c0-2.07-1.68-3.75-3.75-3.75H6.75C4.68 30 3 31.68 3 33.75z"/><path d="M3 34.79c0 .09.15 9.21 13 9.21s13-9.12 13-9.21v-1.04c0-2.07-1.68-3.75-3.75-3.75H6.75C4.68 30 3 31.68 3 33.75zm13-7.29c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5M30.27 25c-.24 0-.49-.04-.73-.12A2.21 2.21 0 0 1 28 22.75v-2.81c-2.26-.36-4-2.33-4-4.69v-6.5C24 6.13 26.13 4 28.75 4h11.5C42.87 4 45 6.13 45 8.75v6.5c0 2.62-2.13 4.75-4.75 4.75h-5.12l-3.08 4.1c-.44.58-1.09.9-1.78.9"/>`,
  'filled': `<path d="M30.27 25c-.24 0-.49-.04-.73-.12A2.21 2.21 0 0 1 28 22.75v-2.81c-2.26-.36-4-2.33-4-4.69v-6.5C24 6.13 26.13 4 28.75 4h11.5C42.87 4 45 6.13 45 8.75v6.5c0 2.62-2.13 4.75-4.75 4.75h-5.12l-3.08 4.1c-.44.58-1.09.9-1.78.9M16 27.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5M3 34.79c0 .09.15 9.21 13 9.21s13-9.12 13-9.21v-1.04c0-2.07-1.68-3.75-3.75-3.75H6.75C4.68 30 3 31.68 3 33.75z"/>`,
  'regular': `<path d="M30.27 25c-.24 0-.49-.04-.73-.12A2.21 2.21 0 0 1 28 22.75v-2.81c-2.26-.36-4-2.33-4-4.69v-6.5C24 6.13 26.13 4 28.75 4h11.5C42.87 4 45 6.13 45 8.75v6.5c0 2.62-2.13 4.75-4.75 4.75h-5.12l-3.08 4.1c-.44.58-1.09.9-1.78.9M28.75 6.5c-1.24 0-2.25 1.01-2.25 2.25v6.5c0 1.24 1.01 2.25 2.25 2.25h1.75V22l3.38-4.5h6.38c1.24 0 2.25-1.01 2.25-2.25v-6.5c0-1.24-1.01-2.25-2.25-2.25zM16 27.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5M16 15c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M3 34.79c0 .09.15 9.21 13 9.21s13-9.12 13-9.21v-1.04c0-2.07-1.68-3.75-3.75-3.75H6.75C4.68 30 3 31.68 3 33.75zm2.5-1.04c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25v1.03c0 .27-.22 6.72-10.5 6.72S5.5 35.05 5.5 34.79z"/>`
} as const;

export default function PersonFeedbackIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'personfeedbackicon_gradient';
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