import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.003 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-22a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h16.046a3.05 3.05 0 0 0-2.862 2H3a1 1 0 0 1-1-1m20.5-8a4 4 0 0 1 2.636.99A1 1 0 0 0 25 13H3a1 1 0 1 0 0 2h16.854c.705-.622 1.632-1 2.646-1m3 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2.5 6.25c0 1.868-1.571 3.75-5.5 3.75S17 26.125 17 24.25v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"/>`,
  'regular': `<path d="M2 5.75A.75.75 0 0 1 2.75 5h22.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m0 16a.75.75 0 0 1 .75-.75h16.296a3.04 3.04 0 0 0-2.626 1.5H2.75a.75.75 0 0 1-.75-.75m23.25-7.25h-.812A4 4 0 0 0 22.5 14c-.703 0-1.364.181-1.938.5H2.75a.75.75 0 0 1 0-1.5h22.5a.75.75 0 0 1 0 1.5m.25 3.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2.5 6.25c0 1.868-1.571 3.75-5.5 3.75S17 26.125 17 24.25v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"/>`
} as const;

export default function NavigationPersonIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'navigationpersonicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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