
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 4.5V1H4.5A1.5 1.5 0 0 0 3 2.5v6.55a2.5 2.5 0 0 1 1.537 1.001c.197-.119.338-.264.435-.394.59-.778 1.473-.67 1.784-.587.221.06.49.18.729.404.25.234.515.637.515 1.18V14.5q-.001.264-.085.5H11.5a1.5 1.5 0 0 0 1.5-1.5V6H9.5A1.5 1.5 0 0 1 8 4.5m1 0V1.25L12.75 5H9.5a.5.5 0 0 1-.5-.5m-8 7a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0zm1.5-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m4.5-.346a.62.62 0 0 0-.199-.45.7.7 0 0 0-.306-.168c-.152-.041-.502-.07-.725.225-.197.26-.51.571-.977.784a.5.5 0 0 0 .414.91A3.5 3.5 0 0 0 6 11.458V14.5a.5.5 0 0 0 1 0z"/>`,
  'regular': `<path d="M3 3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l2.915 2.914A1.5 1.5 0 0 1 13 5.414V13a2 2 0 0 1-2 2H7.915q.084-.236.085-.5V14h3a1 1 0 0 0 1-1V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v6.5a2.5 2.5 0 0 0-1-.45zm6.5 2h2.293L9 2.207V4.5a.5.5 0 0 0 .5.5m-2.699 5.204c.1.093.199.247.199.45V14.5a.5.5 0 0 1-1 0v-3.042a3.5 3.5 0 0 1-.793.497.5.5 0 1 1-.414-.91c.467-.213.78-.524.977-.784.223-.295.573-.266.725-.225a.7.7 0 0 1 .306.168M2.5 10A1.5 1.5 0 0 0 1 11.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 2.5 10M2 11.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0z"/>`
} as const;

export default function DocumentNumber1Icon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentnumber1icon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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