
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 5v2H5.5A1.5 1.5 0 0 0 4 8.5V18a4 4 0 0 0 4 4h4.81A6.48 6.48 0 0 1 11 17.5a6.48 6.48 0 0 1 2-4.69V5c0-.334-.055-.656-.156-.956A1.5 1.5 0 0 1 15.5 5v2h-1v4.732a6.5 6.5 0 0 1 3-.732c.886 0 1.73.177 2.5.498V8.5A1.5 1.5 0 0 0 18.5 7H17V5a3 3 0 0 0-5-2.236A3 3 0 0 0 7 5m3-1.5A1.5 1.5 0 0 1 11.5 5v2h-3V5A1.5 1.5 0 0 1 10 3.5m13 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.087-2.403a.55.55 0 0 0-.547-.045.6.6 0 0 0-.19.133.62.62 0 0 0-.177.437v3.757q0 .122.047.236a.7.7 0 0 0 .13.2q.085.085.194.137a.55.55 0 0 0 .439.006 1 1 0 0 0 .114-.061l2.806-1.915a.56.56 0 0 0 .2-.227.65.65 0 0 0 .07-.297.6.6 0 0 0-.074-.298.6.6 0 0 0-.205-.223z"/>`,
  'regular': `<path d="M7 5v2H5.5A1.5 1.5 0 0 0 4 8.5V18a4 4 0 0 0 4 4h4.81a6.5 6.5 0 0 1-1.078-1.5H8A2.5 2.5 0 0 1 5.5 18V8.5H13v4.31a6.5 6.5 0 0 1 1.5-1.078V8.5h4v2.576a6.5 6.5 0 0 1 1.5.422V8.5A1.5 1.5 0 0 0 18.5 7H17V5a3 3 0 0 0-5-2.236A3 3 0 0 0 7 5m3-1.5A1.5 1.5 0 0 1 11.5 5v2h-3V5A1.5 1.5 0 0 1 10 3.5M15.5 7H13V5c0-.334-.055-.656-.156-.956A1.5 1.5 0 0 1 15.5 5zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.087-2.403a.55.55 0 0 0-.547-.045.6.6 0 0 0-.19.133.62.62 0 0 0-.177.437v3.757q0 .122.047.236a.7.7 0 0 0 .13.2q.085.085.194.137a.55.55 0 0 0 .439.006 1 1 0 0 0 .114-.061l2.806-1.915a.56.56 0 0 0 .2-.227.65.65 0 0 0 .07-.297.6.6 0 0 0-.074-.298.6.6 0 0 0-.205-.223z"/>`
} as const;

export default function ShoppingBagPlayIcon({ 
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

  const gradientId = 'shoppingbagplayicon_gradient';
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