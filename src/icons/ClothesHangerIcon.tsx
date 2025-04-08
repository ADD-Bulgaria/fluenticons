
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 4.5a1.5 1.5 0 0 0-1.376.9 1 1 0 0 1-1.832-.8q.165-.376.408-.7a3.5 3.5 0 1 1 4.294 5.266 1.3 1.3 0 0 0-.414.293c-.08.092-.08.137-.08.142 0 .037.02.072.052.09l7.543 4.19A2.731 2.731 0 0 1 19.27 19H4.743a2.743 2.743 0 0 1-1.37-5.12L9 10.635a1 1 0 0 1 1 1.732l-5.628 3.247A.743.743 0 0 0 4.743 17H19.27a.731.731 0 0 0 .355-1.37l-7.543-4.191A2.1 2.1 0 0 1 11 9.602c0-1.208.984-1.935 1.64-2.244A1.5 1.5 0 0 0 12 4.5"/>`,
  'regular': `<path d="M12 4.5c-.652 0-1.208.416-1.415 1A.75.75 0 1 1 9.171 5a3 3 0 1 1 4.588 3.43c-.301.219-.568.438-.757.667-.186.226-.252.407-.252.563a.66.66 0 0 0 .346.58l7.607 4.112A2.473 2.473 0 0 1 19.527 19H4.473a2.473 2.473 0 0 1-1.176-4.648l6.1-3.298a.75.75 0 1 1 .713 1.32l-6.1 3.297a.973.973 0 0 0 .463 1.829h15.054a.973.973 0 0 0 .463-1.829l-7.607-4.112a2.16 2.16 0 0 1-1.133-1.9c0-.623.278-1.131.594-1.515.314-.38.707-.69 1.035-.928A1.5 1.5 0 0 0 12 4.5"/>`
} as const;

export default function ClothesHangerIcon({ 
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

  const gradientId = 'clotheshangericon_gradient';
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