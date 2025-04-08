import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 17.5A2.5 2.5 0 0 0 4.5 20h1A2.5 2.5 0 0 0 8 17.5v-11A2.5 2.5 0 0 0 5.5 4h-1A2.5 2.5 0 0 0 2 6.5zm7 0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 12.5 4h-1A2.5 2.5 0 0 0 9 6.5zm7 0a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-1A2.5 2.5 0 0 0 16 6.5z"/>`,
  'regular': `<path d="M3.5 17.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1 2.5A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4h1A2.5 2.5 0 0 1 8 6.5v11A2.5 2.5 0 0 1 5.5 20zm6-2.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1 2.5A2.5 2.5 0 0 1 9 17.5v-11A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v11a2.5 2.5 0 0 1-2.5 2.5zm7-1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1zm-2.5-1a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-1A2.5 2.5 0 0 0 16 6.5z"/>`
} as const;

export default function AlignSpaceEvenlyHorizontalIcon({ 
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

  const gradientId = 'alignspaceevenlyhorizontalicon_gradient';
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