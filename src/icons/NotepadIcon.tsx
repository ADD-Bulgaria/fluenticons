import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 2a1 1 0 0 0-1 1v1H8.25A3.25 3.25 0 0 0 5 7.25v18.5A3.25 3.25 0 0 0 8.25 29h9.25v-5.75A3.25 3.25 0 0 1 20.75 20H27V7.25A3.25 3.25 0 0 0 23.75 4H22V3a1 1 0 1 0-2 0v1h-3V3a1 1 0 1 0-2 0v1h-3V3a1 1 0 0 0-1-1m15.414 20H20.75c-.69 0-1.25.56-1.25 1.25v5.616a1 1 0 0 0 .207-.159zM10 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m1 4h10a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2m-1 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M10 3a1 1 0 1 1 2 0v1h3V3a1 1 0 1 1 2 0v1h3V3a1 1 0 1 1 2 0v1h1.75A3.25 3.25 0 0 1 27 7.25V21a1 1 0 0 1-.293.707l-7 7A1 1 0 0 1 19 29H8.25A3.25 3.25 0 0 1 5 25.75V7.25A3.25 3.25 0 0 1 8.25 4H10zM7 7.25v18.5c0 .69.56 1.25 1.25 1.25h9.25v-3.75A3.25 3.25 0 0 1 20.75 20H25V7.25C25 6.56 24.44 6 23.75 6H8.25C7.56 6 7 6.56 7 7.25m12.5 18.836L23.586 22H20.75c-.69 0-1.25.56-1.25 1.25zM11 10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"/>`
} as const;

export default function NotepadIcon({ 
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

  const gradientId = 'notepadicon_gradient';
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