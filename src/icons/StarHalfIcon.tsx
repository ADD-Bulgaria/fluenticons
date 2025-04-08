import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 3.1c-.517 0-1.033.27-1.299.808l-2.69 5.452-6.018.875c-1.19.173-1.664 1.634-.804 2.473l4.355 4.244-1.028 5.993c-.203 1.185 1.04 2.088 2.104 1.529L14 21.645z"/>`,
  'regular': `<path d="M12.701 3.908a1.43 1.43 0 0 1 1.301-.808c.517 0 1.034.27 1.3.808l2.69 5.452 6.018.875c1.19.173 1.664 1.634.804 2.473l-4.355 4.244 1.028 5.993c.204 1.185-1.04 2.088-2.103 1.529l-5.382-2.83-5.382 2.83c-1.064.559-2.307-.344-2.104-1.529l1.028-5.993-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875zm1.301 16.23c.232 0 .463.055.674.166l5.316 2.795-1.015-5.92c-.081-.47.075-.95.417-1.283l4.3-4.191-5.943-.864a1.45 1.45 0 0 1-1.092-.793l-2.657-5.385z"/>`
} as const;

export default function StarHalfIcon({ 
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

  const gradientId = 'starhalficon_gradient';
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