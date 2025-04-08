import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m17 7.349-1.698-3.441c-.532-1.078-2.069-1.078-2.6 0L10.01 9.36l-6.017.875c-1.19.173-1.664 1.634-.804 2.473l4.355 4.244-1.028 5.993c-.203 1.185 1.04 2.088 2.104 1.529l5.382-2.83L17 23.221z"/>`,
  'regular': `<path d="m15.302 3.908 2.69 5.452 6.018.875c1.19.173 1.664 1.634.804 2.473l-4.355 4.244 1.028 5.993c.204 1.185-1.04 2.088-2.103 1.529l-5.382-2.83-5.382 2.83c-1.064.559-2.307-.344-2.104-1.529l1.028-5.993-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875 2.691-5.452c.532-1.078 2.069-1.078 2.6 0m1.7 6.587v11.032l2.99 1.572-1.015-5.92c-.081-.47.075-.95.417-1.283l4.3-4.191-5.943-.864a1.45 1.45 0 0 1-.749-.346"/>`
} as const;

export default function StarThreeQuarterIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'starthreequartericon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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