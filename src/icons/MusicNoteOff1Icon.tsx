import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m12 13.06 8.72 8.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.28 8.28v3.317a4 4 0 1 0 1.476 3.56.8.8 0 0 0 .024-.187zm6.987-1.608-6.964-2.611L10.5 7.318V2.75a.75.75 0 0 1 1.013-.702l6.378 2.391A3.25 3.25 0 0 1 20 7.483v3.267a.75.75 0 0 1-1.013.702"/>`,
  'regular': `<path d="m12 13.06 8.72 8.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.28 8.28v3.317a4 4 0 1 0 1.476 3.56.8.8 0 0 0 .024-.187zM10.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m8.487-6.548-6.964-2.611L10.5 7.318V2.75a.75.75 0 0 1 1.013-.702l6.378 2.391A3.25 3.25 0 0 1 20 7.483v3.267a.75.75 0 0 1-1.013.702M18.5 9.668V7.483a1.75 1.75 0 0 0-1.136-1.64L12 3.834V7.23z"/>`
} as const;

export default function MusicNoteOff1Icon({ 
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

  const gradientId = 'musicnoteoff1icon_gradient';
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