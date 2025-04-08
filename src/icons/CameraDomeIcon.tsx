import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 7.25A3.25 3.25 0 0 1 7.25 4h33.5a3.25 3.25 0 0 1 0 6.5H7.25A3.25 3.25 0 0 1 4 7.25M24 18.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m0 2.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12m18-8H6v13c0 9.941 8.059 18 18 18s18-8.059 18-18zM13 27c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11"/>`,
  'regular': `<path d="M4 7.25A3.25 3.25 0 0 1 7.25 4h33.5A3.25 3.25 0 0 1 44 7.25v2.5a3.25 3.25 0 0 1-2 3V26c0 9.941-8.059 18-18 18S6 35.941 6 26V12.75a3.25 3.25 0 0 1-2-3zM8.5 13v13c0 8.56 6.94 15.5 15.5 15.5S39.5 34.56 39.5 26V13zm33-3.25v-2.5a.75.75 0 0 0-.75-.75H7.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h33.5a.75.75 0 0 0 .75-.75M15.5 27a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0M24 16c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11m-6 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0"/>`
} as const;

export default function CameraDomeIcon({ 
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

  const gradientId = 'cameradomeicon_gradient';
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