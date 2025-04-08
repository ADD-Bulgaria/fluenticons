import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.696a4.5 4.5 0 0 1-1.43-2.018 1.5 1.5 0 0 1 .001-2.964 4.49 4.49 0 0 1 2.751-2.75 1.5 1.5 0 0 1 2.964 0l.018.005V4a2 2 0 0 0-2-2zm9.056 13.332a1 1 0 1 1-1.111-1.663 1 1 0 0 1 1.11 1.662M17.949 14h.551a.5.5 0 0 1 0 1h-.551A3.49 3.49 0 0 1 15 17.949v.551a.5.5 0 0 1-1 0v-.551A3.49 3.49 0 0 1 11.051 15H10.5a.5.5 0 0 1 0-1h.551A3.49 3.49 0 0 1 14 11.051V10.5a.5.5 0 0 1 1 0v.551A3.49 3.49 0 0 1 17.949 14m-3.204 2.988a2.5 2.5 0 1 0-.49-4.976 2.5 2.5 0 0 0 .49 4.976"/>`,
  'regular': `<path d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.274l-.018-.007A1.5 1.5 0 0 0 15 9.086V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.777a4.5 4.5 0 0 0 .92 1H6a2 2 0 0 1-2-2zm11.056 11.332a1 1 0 1 1-1.111-1.663 1 1 0 0 1 1.11 1.662M17.949 14h.551a.5.5 0 0 1 0 1h-.551A3.49 3.49 0 0 1 15 17.949v.551a.5.5 0 0 1-1 0v-.551A3.49 3.49 0 0 1 11.051 15H10.5a.5.5 0 0 1 0-1h.551A3.49 3.49 0 0 1 14 11.051V10.5a.5.5 0 0 1 1 0v.551A3.49 3.49 0 0 1 17.949 14m-3.204 2.988a2.5 2.5 0 1 0-.49-4.976 2.5 2.5 0 0 0 .49 4.976"/>`
} as const;

export default function RectanglePortraitLocationTargetIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'rectangleportraitlocationtargeticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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