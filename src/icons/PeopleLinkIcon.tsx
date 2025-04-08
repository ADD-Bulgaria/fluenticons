import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16m18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9c3.394 0 5.902-.614 7.755-1.52A8.34 8.34 0 0 1 21 33.25 8.34 8.34 0 0 1 23.778 27zM23 33.25A6.25 6.25 0 0 1 29.25 27h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 23 33.25m22 0A6.25 6.25 0 0 0 38.75 27h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 45 33.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M10.5 16a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16m14.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12M6.75 27A3.75 3.75 0 0 0 3 30.75v1.303l.004.097q.006.12.026.318c.029.262.084.622.192 1.05a8.7 8.7 0 0 0 1.5 3.112C6.479 38.946 9.826 41 16 41c3.349 0 5.866-.604 7.748-1.526a8.2 8.2 0 0 1-1.626-2.007c-1.46.611-3.438 1.033-6.122 1.033-5.575 0-8.103-1.82-9.285-3.38a6.2 6.2 0 0 1-1.07-2.215 5 5 0 0 1-.144-.881l-.001-.032V30.75c0-.69.56-1.25 1.25-1.25h15.122a8.3 8.3 0 0 1 1.906-2.5zM23 33.25A6.25 6.25 0 0 1 29.25 27h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 23 33.25m22 0A6.25 6.25 0 0 0 38.75 27h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 45 33.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function PeopleLinkIcon({ 
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

  const gradientId = 'peoplelinkicon_gradient';
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