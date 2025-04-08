import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 14A6.25 6.25 0 0 0 4 20.25v7.5A6.25 6.25 0 0 0 10.25 34h27.5A6.25 6.25 0 0 0 44 27.75v-7.5A6.25 6.25 0 0 0 37.75 14zM32 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0m5 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>`,
  'regular': `<path d="M4 20.25A6.25 6.25 0 0 1 10.25 14h27.5A6.25 6.25 0 0 1 44 20.25v7.5A6.25 6.25 0 0 1 37.75 34h-27.5A6.25 6.25 0 0 1 4 27.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v7.5a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a3.75 3.75 0 0 0-3.75-3.75zM32 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0m5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`
} as const;

export default function StorageIcon({ 
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

  const gradientId = 'storageicon_gradient';
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