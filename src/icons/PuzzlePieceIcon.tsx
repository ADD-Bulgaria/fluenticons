import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5"/><path fill-opacity=".7" d="M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5"/>`,
  'filled': `<path d="M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5"/>`,
  'regular': `<path d="M25 6.5a3.5 3.5 0 0 0-3.5 3.5v2.5h-6.75c-.69 0-1.25.56-1.25 1.25v6.75H11a3.5 3.5 0 1 0 0 7h2.5v6.75c0 .69.56 1.25 1.25 1.25h6.75V38a3.5 3.5 0 1 0 7 0v-2.5h6.75c.69 0 1.25-.56 1.25-1.25V30H36a6 6 0 0 1 0-12h.5v-4.25c0-.69-.56-1.25-1.25-1.25H28.5V10A3.5 3.5 0 0 0 25 6.5M19 10a6 6 0 0 1 12 0h4.25A3.75 3.75 0 0 1 39 13.75v6.75h-3a3.5 3.5 0 1 0 0 7h3v6.75A3.75 3.75 0 0 1 35.25 38H31a6 6 0 0 1-12 0h-4.25A3.75 3.75 0 0 1 11 34.25V30a6 6 0 0 1 0-12v-4.25A3.75 3.75 0 0 1 14.75 10z"/>`
} as const;

export default function PuzzlePieceIcon({ 
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

  const gradientId = 'puzzlepieceicon_gradient';
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