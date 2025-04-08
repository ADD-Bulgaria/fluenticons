import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5a2.5 2.5 0 0 0-.5 1.5v6c0 .563.186 1.082.5 1.5h-7A1.5 1.5 0 0 1 3 15.5V10a2 2 0 0 1 2-2zm1.25 6.125a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m0 2.25a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m1.625-.5a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m.625-1.75a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0M13.5 8A1.5 1.5 0 0 0 12 9.5v6a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8z"/>`,
  'regular': `<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5a2.5 2.5 0 0 0-.45 1H5a1 1 0 0 0-1 1v5.5a.5.5 0 0 0 .5.5h6.55c.075.37.231.71.45 1h-7A1.5 1.5 0 0 1 3 15.5V10a2 2 0 0 1 2-2zm7 5A1.5 1.5 0 0 1 13.5 8h2A1.5 1.5 0 0 1 17 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zm-7.875 1a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m0 2.25a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25M8.5 13a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m-.625-3a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25"/>`
} as const;

export default function FaxIcon({ 
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

  const gradientId = 'faxicon_gradient';
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