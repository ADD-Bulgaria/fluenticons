import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 5v2H5.5A1.5 1.5 0 0 0 4 8.5V18a4 4 0 0 0 4 4h4.168a1.75 1.75 0 0 1 .345-1.987l.708-.71A4 4 0 0 1 13 18v-.337a3.5 3.5 0 0 1 0-6.326V5c0-.334-.055-.656-.156-.956A1.5 1.5 0 0 1 15.5 5v2h-1v4a3.5 3.5 0 0 1 3.5 3.5v.025l2-2V8.5A1.5 1.5 0 0 0 18.5 7H17V5a3 3 0 0 0-5-2.236A3 3 0 0 0 7 5m1.5 2V5a1.5 1.5 0 1 1 3 0v2zm6 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1.28-5.22a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06z"/>`,
  'regular': `<path d="M7 5v2H5.5A1.5 1.5 0 0 0 4 8.5V18a4 4 0 0 0 4 4h4.168a1.76 1.76 0 0 1 0-1.5H8A2.5 2.5 0 0 1 5.5 18V8.5h7.51v2.832A3.5 3.5 0 0 1 14.5 11h.01V8.5h3.99v5.525l1.5-1.5V8.5A1.5 1.5 0 0 0 18.5 7H17V5a3 3 0 0 0-5-2.236A3 3 0 0 0 7 5m4.5 0v2h-3V5a1.5 1.5 0 1 1 3 0m4 2H13V5c0-.334-.055-.656-.156-.956A1.5 1.5 0 0 1 15.5 5zm-1 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1.28-5.22a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06z"/>`
} as const;

export default function ShoppingBagPercentIcon({ 
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

  const gradientId = 'shoppingbagpercenticon_gradient';
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