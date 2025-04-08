import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 3H6.25A3.25 3.25 0 0 0 3 6.25V8.5h11zm1.5 5.5H21V6.25A3.25 3.25 0 0 0 17.75 3H15.5zM10 10v4h2.022a6.5 6.5 0 0 1 5.478-3 6.47 6.47 0 0 1 3.5 1.022V10zm-7 5.5h8.314a6.5 6.5 0 0 0-.314 2 6.47 6.47 0 0 0 1.022 3.5H6.25A3.25 3.25 0 0 1 3 17.75zM8.5 10H3v4h5.5zm9 13a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2-3h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m3.39-5.812a.5.5 0 0 1-.078.702L16.8 16.5l2.012 1.61a.5.5 0 1 1-.624.78l-2.5-2a.5.5 0 0 1 0-.78l2.5-2a.5.5 0 0 1 .702.078"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.5 6.5 0 0 1-.709-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h6.813a6.5 6.5 0 0 1 .709-1.5H10v-4h9.5v1.313a6.5 6.5 0 0 1 1.5.709V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75H14v4H4.5zm0 3.75h4v4h-4zm15-1.5h-4v-4h2.25c.966 0 1.75.784 1.75 1.75zm-2 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-2-3h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m3.39-5.812a.5.5 0 0 1-.078.702L16.8 16.5l2.012 1.61a.5.5 0 1 1-.624.78l-2.5-2a.5.5 0 0 1 0-.78l2.5-2a.5.5 0 0 1 .702.078"/>`
} as const;

export default function TableOffsetLessThanOrEqualToIcon({ 
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

  const gradientId = 'tableoffsetlessthanorequaltoicon_gradient';
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