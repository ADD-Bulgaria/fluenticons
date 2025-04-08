import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20q0 .816-.064 1.616A12.97 12.97 0 0 0 34 21c-7.18 0-13 5.82-13 13 0 3.985 1.793 7.551 4.616 9.936Q24.816 44 24 44c-3.45 0-6.698-.874-9.533-2.414L6.23 43.928c-1.319.375-2.537-.844-2.162-2.162l2.342-8.238A19.9 19.9 0 0 1 4 24m41 10c0-6.075-4.925-11-11-11s-11 4.925-11 11 4.925 11 11 11 11-4.925 11-11m-14.293 3.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L29.414 34H35a4 4 0 0 0 4-4 1 1 0 1 1 2 0 6 6 0 0 1-6 6h-5.586z"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24c0 3.188.851 6.173 2.338 8.745.17.293.213.642.12.968l-2.116 7.442 7.44-2.116a1.25 1.25 0 0 1 .968.12 17.4 17.4 0 0 0 8.122 2.33c.642.908 1.396 1.73 2.244 2.447Q24.816 44 24 44c-3.45 0-6.698-.874-9.533-2.414L6.23 43.928c-1.319.375-2.537-.844-2.162-2.162l2.342-8.238A19.9 19.9 0 0 1 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20q0 .816-.064 1.616a13 13 0 0 0-2.447-2.244C41.159 13.998 33.455 6.5 24 6.5M45 34c0-6.075-4.925-11-11-11s-11 4.925-11 11 4.925 11 11 11 11-4.925 11-11m-14.293 3.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L29.414 34H35a4 4 0 0 0 4-4 1 1 0 1 1 2 0 6 6 0 0 1-6 6h-5.586z"/>`
} as const;

export default function ChatArrowBackDownIcon({ 
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

  const gradientId = 'chatarrowbackdownicon_gradient';
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