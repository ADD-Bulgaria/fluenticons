import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20m-23.25-8c-.69 0-1.25.56-1.25 1.25v13.5a1.25 1.25 0 1 0 2.5 0v-13.5c0-.69-.56-1.25-1.25-1.25M34 17.25a1.25 1.25 0 1 0-2.5 0v13.5a1.25 1.25 0 1 0 2.5 0zM14.75 20c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 1 0 2.5 0v-5.5c0-.69-.56-1.25-1.25-1.25m13.25.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 1 0 2.5 0z"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24 33.665 6.5 24 6.5M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m16.75-8c.69 0 1.25.56 1.25 1.25v13.5a1.25 1.25 0 1 1-2.5 0v-13.5c0-.69.56-1.25 1.25-1.25M34 17.25a1.25 1.25 0 1 0-2.5 0v13.5a1.25 1.25 0 1 0 2.5 0zM14.75 20c.69 0 1.25.56 1.25 1.25v5.5a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25m13.25.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 1 0 2.5 0z"/>`
} as const;

export default function SoundWaveCircleIcon({ 
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

  const gradientId = 'soundwavecircleicon_gradient';
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