import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2s11 4.925 11 11M14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6zm-1 20c7.18 0 13-5.82 13-13 0-2.577-.75-4.98-2.044-7H35.75A6.25 6.25 0 0 1 42 12.25v23.5c0 1.356-.432 2.61-1.165 3.635l-14.36-14.36a3.5 3.5 0 0 0-4.95 0l-14.36 14.36A6.22 6.22 0 0 1 6 35.75V23.956A12.94 12.94 0 0 0 13 26m21.5-8.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0m4.502 23.588L24.707 26.793a1 1 0 0 0-1.414 0L8.998 41.088A6.2 6.2 0 0 0 12.25 42h23.5a6.2 6.2 0 0 0 3.252-.912"/>`,
  'regular': `<path d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2s11 4.925 11 11M14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6zm21.75 2.5a3.75 3.75 0 0 1 3.75 3.75v23.5a3.73 3.73 0 0 1-.474 1.826l-12.551-12.55a3.5 3.5 0 0 0-4.95 0L8.974 37.575A3.73 3.73 0 0 1 8.5 35.75V25.2A13 13 0 0 1 6 23.956V35.75A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6H23.956c.5.78.919 1.618 1.244 2.5zm1.396 30.732a3.7 3.7 0 0 1-1.396.268h-23.5c-.493 0-.964-.095-1.396-.268l12.439-12.44a1 1 0 0 1 1.414 0zM26 17.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>`
} as const;

export default function ImageAddIcon({ 
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

  const gradientId = 'imageaddicon_gradient';
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