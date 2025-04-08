import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 21A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4.5 3h1A2.5 2.5 0 0 1 8 5.5v13A2.5 2.5 0 0 1 5.5 21zm7 0A2.5 2.5 0 0 1 9 18.5v-13A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5v13a2.5 2.5 0 0 1-2.5 2.5zm4.5-2.5a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3h-1A2.5 2.5 0 0 0 16 5.5z"/>`,
  'regular': `<path d="M4.5 21A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4.5 3h1A2.5 2.5 0 0 1 8 5.5v13A2.5 2.5 0 0 1 5.5 21zm-1-2.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm8 2.5A2.5 2.5 0 0 1 9 18.5v-13A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5v13a2.5 2.5 0 0 1-2.5 2.5zm-1-2.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm5.5 0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3h-1A2.5 2.5 0 0 0 16 5.5zm2.5 1a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1z"/>`
} as const;

export default function ColumnTripleIcon({ 
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

  const gradientId = 'columntripleicon_gradient';
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