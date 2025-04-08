import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3a.75.75 0 0 1 0 1.5A1.75 1.75 0 0 0 4.5 6.25a.75.75 0 0 1-1.5 0A3.25 3.25 0 0 1 6.25 3m3.5 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm7.25.75c0 .414.336.75.75.75.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 0 1.5 0v-1A3.25 3.25 0 0 0 17.75 3a.75.75 0 0 0-.75.75m-14 14a.75.75 0 0 1 1.5 0c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 1 3 17.75m0-3.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0zM7 5.5A1.5 1.5 0 0 0 5.5 7v10A1.5 1.5 0 0 0 7 18.5h2v-.75a3.25 3.25 0 0 1 3.25-3.25h2.25v-2.25A3.25 3.25 0 0 1 17.75 9h.75V7A1.5 1.5 0 0 0 17 5.5zm5.25 10h3.25v-3.25A2.25 2.25 0 0 1 17.75 10h3A2.25 2.25 0 0 1 23 12.25v7.5A3.25 3.25 0 0 1 19.75 23h-7.5A2.25 2.25 0 0 1 10 20.75v-3a2.25 2.25 0 0 1 2.25-2.25M17 12.25v3.25h4.5v-3.25a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75m-1.5 9.25V17h-3.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75zM17 17v4.5h2.75a1.75 1.75 0 0 0 1.75-1.75V17z"/>`,
  'regular': `<path d="M7 3.75A.75.75 0 0 0 6.25 3 3.25 3.25 0 0 0 3 6.25a.75.75 0 0 0 1.5 0c0-.966.784-1.75 1.75-1.75A.75.75 0 0 0 7 3.75m2 0A.75.75 0 0 1 9.75 3h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 3.75m8.75.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 21 6.25v1a.75.75 0 0 1-1.5 0v-1a1.75 1.75 0 0 0-1.75-1.75M3.75 17a.75.75 0 0 0-.75.75A3.25 3.25 0 0 0 6.25 21h1a.75.75 0 0 0 0-1.5h-1a1.75 1.75 0 0 1-1.75-1.75.75.75 0 0 0-.75-.75m0-2a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75m8.5.499h3.25v-3.25a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25v7.5a3.25 3.25 0 0 1-3.25 3.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25m4.75-3.25v3.25h4.5v-3.25a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75m-1.5 9.25v-4.5h-3.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75zm1.5-4.5v4.5h2.75a1.75 1.75 0 0 0 1.75-1.75v-2.75z"/>`
} as const;

export default function SquareHintAppsIcon({ 
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

  const gradientId = 'squarehintappsicon_gradient';
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