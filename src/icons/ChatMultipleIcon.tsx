import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 13.5C2 7.701 6.701 3 12.5 3S23 7.701 23 13.5 18.3 24 12.5 24c-1.686 0-3.281-.398-4.695-1.106L3.89 23.943a1.5 1.5 0 0 1-1.837-1.837l1.05-3.918A10.4 10.4 0 0 1 2 13.5m10.5 12q1-.001 1.955-.158A8.46 8.46 0 0 0 19.5 27c1.486 0 2.88-.38 4.094-1.049a1 1 0 0 1 .741-.09l3.456.926-.926-3.458a1 1 0 0 1 .09-.74A8.46 8.46 0 0 0 28 18.5a8.49 8.49 0 0 0-3.665-6.991 12 12 0 0 0-.787-2.7A10.5 10.5 0 0 1 30 18.5a10.5 10.5 0 0 1-1.102 4.688l1.05 3.918a1.5 1.5 0 0 1-1.838 1.837l-3.915-1.049A10.46 10.46 0 0 1 19.5 29c-3.124 0-5.93-1.364-7.853-3.53q.423.03.853.03"/>`,
  'regular': `<path d="M2 13.5C2 7.701 6.701 3 12.5 3S23 7.701 23 13.5 18.3 24 12.5 24c-1.686 0-3.281-.398-4.695-1.106L3.89 23.943a1.5 1.5 0 0 1-1.837-1.837l1.05-3.918A10.4 10.4 0 0 1 2 13.5m2 0a8.46 8.46 0 0 0 1.046 4.088 1 1 0 0 1 .09.74l-.927 3.459 3.456-.926a1 1 0 0 1 .74.09A8.46 8.46 0 0 0 12.5 22 8.5 8.5 0 1 0 4 13.5m8.5 12q1-.001 1.955-.158A8.46 8.46 0 0 0 19.5 27c1.486 0 2.88-.38 4.094-1.049a1 1 0 0 1 .741-.09l3.456.926-.926-3.458a1 1 0 0 1 .09-.74A8.46 8.46 0 0 0 28 18.5a8.49 8.49 0 0 0-3.665-6.991 12 12 0 0 0-.787-2.7A10.5 10.5 0 0 1 30 18.5a10.5 10.5 0 0 1-1.102 4.688l1.05 3.918a1.5 1.5 0 0 1-1.838 1.837l-3.915-1.049A10.46 10.46 0 0 1 19.5 29c-3.124 0-5.93-1.364-7.853-3.53q.423.03.853.03"/>`
} as const;

export default function ChatMultipleIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'chatmultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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