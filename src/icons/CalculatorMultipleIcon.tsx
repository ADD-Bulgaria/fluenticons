import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.137 2A3.137 3.137 0 0 0 3 5.137v11.226A3.137 3.137 0 0 0 6.137 19.5h8.726A3.137 3.137 0 0 0 18 16.363V5.137A3.137 3.137 0 0 0 14.863 2zM7.75 5h5.5c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 6 7.75v-1C6 5.784 6.784 5 7.75 5m-2 7a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4.75-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m0 3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14 14.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-8.2 6.237A2.75 2.75 0 0 0 8.259 22h6.992c2.9 0 5.25-2.35 5.25-5.25v-9.5a2.75 2.75 0 0 0-1.514-2.457q.015.17.014.344V16.75a3.75 3.75 0 0 1-3.75 3.75H6.137q-.17 0-.336-.013"/>`,
  'regular': `<path d="M7.75 5A1.75 1.75 0 0 0 6 6.75v1c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 15 7.75v-1A1.75 1.75 0 0 0 13.25 5zM7.5 6.75a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25zm3 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 15.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M7 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M5.75 15.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-1.25 4.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M6.137 2A3.137 3.137 0 0 0 3 5.137v11.226A3.137 3.137 0 0 0 6.137 19.5h8.726A3.137 3.137 0 0 0 18 16.363V5.137A3.137 3.137 0 0 0 14.863 2zM4.5 5.137c0-.904.733-1.637 1.637-1.637h8.726c.904 0 1.637.733 1.637 1.637v11.226c0 .904-.733 1.637-1.637 1.637H6.137A1.637 1.637 0 0 1 4.5 16.363zm1.3 15.35A2.75 2.75 0 0 0 8.259 22h6.992c2.9 0 5.25-2.35 5.25-5.25v-9.5a2.75 2.75 0 0 0-1.514-2.457q.015.17.014.344V16.75a3.75 3.75 0 0 1-3.75 3.75H6.137q-.17 0-.336-.013"/>`
} as const;

export default function CalculatorMultipleIcon({ 
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

  const gradientId = 'calculatormultipleicon_gradient';
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