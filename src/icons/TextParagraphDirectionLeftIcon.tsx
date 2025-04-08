import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 8.5A5.5 5.5 0 0 1 13.5 3h6.545c.527 0 .955.336.955.75 0 .38-.36.693-.825.743l-.13.007H19.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V4.5h-1.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V14h-1.5A5.5 5.5 0 0 1 8 8.5m-2.599 6.358a.668.668 0 0 0 .898-.984L4.585 12 6.3 10.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z"/>`,
  'regular': `<path d="M8 8.5A5.5 5.5 0 0 1 13.5 3h6.545c.527 0 .955.336.955.75 0 .38-.36.693-.825.743l-.13.007H19.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V4.5h-1.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V14h-1.5A5.5 5.5 0 0 1 8 8.5m7-4h-1.5a4 4 0 0 0 0 8H15zM5.401 14.858a.668.668 0 0 0 .898-.984L4.585 12 6.3 10.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z"/>`
} as const;

export default function TextParagraphDirectionLeftIcon({ 
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

  const gradientId = 'textparagraphdirectionlefticon_gradient';
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