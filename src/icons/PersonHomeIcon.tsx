import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 24c5.523 0 10-4.477 10-10S25.523 4 20 4 10 8.477 10 14s4.477 10 10 10M8.25 28A4.25 4.25 0 0 0 4 32.249V33c0 3.755 1.942 6.567 4.92 8.38C11.849 43.163 15.786 44 20 44c1.373 0 2.711-.099 4-.28v-8.423c0-1.25.546-2.43 1.498-3.239l4.775-4.059zm25.293-.155a2.25 2.25 0 0 1 2.914 0l6.75 5.737c.503.427.793 1.054.793 1.714v8.972c0 .956-.775 1.731-1.731 1.731h-2.538A1.73 1.73 0 0 1 38 44.268v-4.885c0-.763-.617-1.381-1.379-1.385h-3.243a1.385 1.385 0 0 0-1.379 1.385v4.885c0 .956-.775 1.731-1.731 1.731H27.73a1.73 1.73 0 0 1-1.731-1.731v-8.972c0-.66.29-1.287.793-1.714z"/>`,
  'regular': `<path d="M8.25 30.5h19.082l2.941-2.5H8.25A4.25 4.25 0 0 0 4 32.249V33c0 3.755 1.942 6.567 4.92 8.38C11.849 43.163 15.786 44 20 44c1.373 0 2.711-.099 4-.28v-2.521a26 26 0 0 1-4 .302c-3.932 0-7.37-.788-9.78-2.255-2.36-1.437-3.72-3.5-3.72-6.245v-.751c0-.966.783-1.75 1.75-1.75M20 24c5.523 0 10-4.477 10-10S25.523 4 20 4 10 8.477 10 14s4.477 10 10 10m0-17.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m13.543 21.345a2.25 2.25 0 0 1 2.914 0l6.75 5.737c.503.427.793 1.054.793 1.714v8.972c0 .956-.775 1.731-1.731 1.731h-2.538A1.73 1.73 0 0 1 38 44.268v-4.885c0-.763-.617-1.381-1.379-1.385h-3.243a1.385 1.385 0 0 0-1.379 1.385v4.885c0 .956-.775 1.731-1.731 1.731H27.73a1.73 1.73 0 0 1-1.731-1.731v-8.972c0-.66.29-1.287.793-1.714z"/>`
} as const;

export default function PersonHomeIcon({ 
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

  const gradientId = 'personhomeicon_gradient';
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