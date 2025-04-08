import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 4.5v6.238c0 .375-.094.744-.273 1.074L7.539 14h4.482a6.52 6.52 0 0 1 3.094-2.549 2.3 2.3 0 0 1-.116-.713V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5zm-2.275 11h4.588a6.5 6.5 0 0 0-.314 2 6.47 6.47 0 0 0 1.022 3.5h-5.34a1.75 1.75 0 0 1-1.539-2.585zM17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.5 8.503V18h2.503a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0"/>`,
  'regular': `<path d="M8 4.5h1v6.238c0 .375-.094.744-.273 1.074l-3.585 6.603A1.75 1.75 0 0 0 6.68 21h5.341a6.5 6.5 0 0 1-.708-1.5H6.68a.25.25 0 0 1-.22-.37l1.971-3.63h2.882a6.5 6.5 0 0 1 .708-1.5H9.246l.8-1.473a3.75 3.75 0 0 0 .454-1.789V4.5h3v6.238c0 .492.096.977.282 1.43a6.5 6.5 0 0 1 1.333-.717 2.3 2.3 0 0 1-.116-.713V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5m9.5 7.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.5 8.503V18h2.503a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0"/>`
} as const;

export default function BeakerAddIcon({ 
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

  const gradientId = 'beakeraddicon_gradient';
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