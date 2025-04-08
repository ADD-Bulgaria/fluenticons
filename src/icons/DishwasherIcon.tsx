import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6a6 6 0 0 0-6 6v5.5h36V12a6 6 0 0 0-6-6zm30 14H16.25a3.25 3.25 0 0 1 3.25 3.25v5a8.75 8.75 0 0 1-5.5 8.127v3.21A3.26 3.26 0 0 1 16.413 42H36a6 6 0 0 0 6-6zm-24-7.75a2 2 0 1 1-4 0 2 2 0 0 1 4 0M25.25 11h7.5a1.25 1.25 0 1 1 0 2.5h-7.5a1.25 1.25 0 1 1 0-2.5m-20 11C4.56 22 4 22.56 4 23.25v5c0 3.3 2.37 6.048 5.5 6.635V41.5H8.25a1.25 1.25 0 1 0 0 2.5h5a1.25 1.25 0 1 0 0-2.5H12v-6.615a6.75 6.75 0 0 0 5.5-6.635v-5c0-.69-.56-1.25-1.25-1.25z"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42H16.413A3.26 3.26 0 0 0 14 39.587V39.5h21.75a3.75 3.75 0 0 0 3.75-3.75V18.5h-31V20H6zm33.5 0a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75V16h31zm-21.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0c0-.69.56-1.25 1.25-1.25h7.5a1.25 1.25 0 1 1 0 2.5h-7.5c-.69 0-1.25-.56-1.25-1.25M5.25 22C4.56 22 4 22.56 4 23.25v5c0 3.3 2.37 6.048 5.5 6.635V41.5H8.25a1.25 1.25 0 1 0 0 2.5h5a1.25 1.25 0 1 0 0-2.5H12v-6.615a6.75 6.75 0 0 0 5.5-6.635v-5c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function DishwasherIcon({ 
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

  const gradientId = 'dishwashericon_gradient';
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