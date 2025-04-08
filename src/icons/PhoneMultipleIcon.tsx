import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.25 2A2.25 2.25 0 0 0 6 4.25v13a2.25 2.25 0 0 0 2.25 2.25h5.5A2.25 2.25 0 0 0 16 17.25v-13A2.25 2.25 0 0 0 13.75 2zM9 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M10.75 22a2.25 2.25 0 0 1-2.122-1.5h5.622A2.75 2.75 0 0 0 17 17.75V4.628a2.25 2.25 0 0 1 1.5 2.122v11A4.25 4.25 0 0 1 14.25 22z"/>`,
  'regular': `<path d="M9.75 15.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM8.25 2A2.25 2.25 0 0 0 6 4.25v13a2.25 2.25 0 0 0 2.25 2.25h5.5A2.25 2.25 0 0 0 16 17.25v-13A2.25 2.25 0 0 0 13.75 2zM7.5 4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75zM10.75 22a2.25 2.25 0 0 1-2.122-1.5h5.622A2.75 2.75 0 0 0 17 17.75V4.628a2.25 2.25 0 0 1 1.5 2.122v11A4.25 4.25 0 0 1 14.25 22z"/>`
} as const;

export default function PhoneMultipleIcon({ 
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

  const gradientId = 'phonemultipleicon_gradient';
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