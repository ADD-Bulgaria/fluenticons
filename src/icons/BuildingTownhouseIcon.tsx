import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.424 3.71a2 2 0 0 0-2.848 0L3.864 7.476A3 3 0 0 0 3 9.58V26a3 3 0 0 0 3 3h4v-7a1 1 0 0 1 1-1h4V9.581a3 3 0 0 0-.864-2.106zM17 9.582V21h4a1 1 0 0 1 1 1v7h4a3 3 0 0 0 3-3V9.581a3 3 0 0 0-.864-2.106L24.424 3.71a2 2 0 0 0-2.848 0l-3.712 3.764A3 3 0 0 0 17 9.58M17 23v6h3v-6zm-2 6v-6h-3v6zM9 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M21.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M9 18.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M21.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/>`,
  'regular': `<path d="M8.71 3.472a2 2 0 0 1 2.58 0l4.646 3.925.064.056.064-.056 4.645-3.925a2 2 0 0 1 2.582 0l4.645 3.925A3 3 0 0 1 29 9.69V26a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9.69a3 3 0 0 1 1.064-2.292zM15 27v-4h-3v4zm0-6V9.689a1 1 0 0 0-.355-.764L10 5 5.355 8.925A1 1 0 0 0 5 9.69V26a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1zm2 6h3v-4h-3zm0-6h4a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V9.689a1 1 0 0 0-.355-.764L22 5l-4.645 3.925A1 1 0 0 0 17 9.69zm-5.75-9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M22 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M11.25 17a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M22 18.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"/>`
} as const;

export default function BuildingTownhouseIcon({ 
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

  const gradientId = 'buildingtownhouseicon_gradient';
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