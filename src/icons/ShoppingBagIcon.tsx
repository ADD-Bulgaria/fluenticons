import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 10a6 6 0 0 1 10-4.472A6 6 0 0 1 34 10v4h3.5a2.5 2.5 0 0 1 2.5 2.5v22.25a5.25 5.25 0 1 1-10.5 0V14h2v-4a3.5 3.5 0 0 0-6.014-2.434A6 6 0 0 1 26 10v4h1v24.75c0 2.025.777 3.87 2.05 5.25H14.5A6.5 6.5 0 0 1 8 37.5v-21a2.5 2.5 0 0 1 2.5-2.5H14zm2.5 4h7v-4a3.5 3.5 0 1 0-7 0z"/>`,
  'regular': `<path d="M20 4a6 6 0 0 0-6 6v4h-3.5A2.5 2.5 0 0 0 8 16.5v21a6.5 6.5 0 0 0 6.5 6.5h19a6.5 6.5 0 0 0 6.5-6.5v-21a2.5 2.5 0 0 0-2.5-2.5H34v-4a6 6 0 0 0-10-4.472A5.98 5.98 0 0 0 20 4m17.5 12.5v21a4 4 0 0 1-8 0v-21zm-9.124 25H14.5a4 4 0 0 1-4-4v-21H27v21c0 1.508.514 2.897 1.376 4M31.5 14H26v-4a6 6 0 0 0-.514-2.434A3.5 3.5 0 0 1 31.5 10zm-8-4v4h-7v-4a3.5 3.5 0 1 1 7 0"/>`
} as const;

export default function ShoppingBagIcon({ 
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

  const gradientId = 'shoppingbagicon_gradient';
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