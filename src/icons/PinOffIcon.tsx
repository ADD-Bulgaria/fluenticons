import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m29.524 31.292 12.092 12.092a1.25 1.25 0 1 0 1.768-1.767l-37-37a1.25 1.25 0 1 0-1.768 1.767L16.71 18.477l-6.25 2.159c-1.92.663-2.484 3.108-1.047 4.544l5.82 5.82L6 40.233V42h1.768L17 32.768l5.82 5.82c1.437 1.437 3.881.874 4.544-1.046zm11.692-7.502-8.082 4.041-12.965-12.964 4.041-8.082c1.45-2.9 5.315-3.527 7.608-1.235L42.45 16.183c2.293 2.292 1.665 6.157-1.234 7.607"/>`,
  'regular': `<path d="M16.709 18.477 4.616 6.384a1.25 1.25 0 1 1 1.768-1.768l37 37a1.25 1.25 0 0 1-1.768 1.768L29.524 31.292l-2.16 6.25c-.663 1.92-3.107 2.483-4.543 1.047L17 32.769 7.768 42H6v-1.767L15.232 31l-5.82-5.82c-1.437-1.436-.874-3.88 1.046-4.544zm10.849 10.849-8.884-8.883-7.4 2.556a.25.25 0 0 0-.095.413l13.41 13.409c.13.13.352.08.413-.095zm12.54-7.772-8.827 4.414 1.863 1.863 8.082-4.04c2.9-1.45 3.527-5.316 1.234-7.608L31.817 5.55c-2.292-2.292-6.157-1.665-7.607 1.235l-4.04 8.081 1.863 1.864 4.413-8.827a2.25 2.25 0 0 1 3.604-.585l10.632 10.633a2.25 2.25 0 0 1-.584 3.603"/>`
} as const;

export default function PinOffIcon({ 
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

  const gradientId = 'pinofficon_gradient';
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