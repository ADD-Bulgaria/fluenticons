import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 10a6 6 0 0 1 10-4.472A6 6 0 0 1 34 10v4h3.5a2.5 2.5 0 0 1 2.5 2.5v6.964A12.94 12.94 0 0 0 34 22c-1.582 0-3.098.282-4.5.8V14h2v-4a3.5 3.5 0 0 0-6.014-2.434A6 6 0 0 1 26 10v4h1v10.044A12.99 12.99 0 0 0 21 35c0 3.493 1.378 6.664 3.62 9H14.5A6.5 6.5 0 0 1 8 37.5v-21a2.5 2.5 0 0 1 2.5-2.5H14zm9.5 4v-4a3.5 3.5 0 1 0-7 0v4zM45 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L32 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414"/>`,
  'regular': `<path d="M20 4a6 6 0 0 0-6 6v4h-3.5A2.5 2.5 0 0 0 8 16.5v21a6.5 6.5 0 0 0 6.5 6.5h10.12a13 13 0 0 1-1.88-2.5H14.5a4 4 0 0 1-4-4v-21H27v7.544c.78-.5 1.618-.919 2.5-1.244v-6.3h8v5.977c.874.243 1.71.576 2.5.987V16.5a2.5 2.5 0 0 0-2.5-2.5H34v-4a6 6 0 0 0-10-4.472A5.98 5.98 0 0 0 20 4m11.5 10H26v-4a6 6 0 0 0-.514-2.434A3.5 3.5 0 0 1 31.5 10zm-8-4v4h-7v-4a3.5 3.5 0 1 1 7 0M45 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L32 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414"/>`
} as const;

export default function ShoppingBagCheckmarkIcon({ 
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

  const gradientId = 'shoppingbagcheckmarkicon_gradient';
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