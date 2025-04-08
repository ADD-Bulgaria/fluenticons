
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.357 4.103c-1.001 1.001-1.58 2.335-1.912 3.673-.333 1.344-.431 2.747-.43 3.95a.327.327 0 0 1-.322.323c-1.771.007-4.016.22-5.832 1.087-.682.326-.967.998-.826 1.635.133.596.615 1.085 1.267 1.244.795.194 1.717.445 2.519.73.401.142.76.288 1.052.434.302.152.487.28.578.372.091.09.22.275.371.577.146.292.292.65.434 1.051.284.801.534 1.723.728 2.517.159.652.648 1.135 1.245 1.267.637.142 1.309-.143 1.635-.825.867-1.813 1.08-4.054 1.09-5.823 0-.174.147-.321.323-.321 1.202 0 2.606-.098 3.95-.431 1.34-.333 2.674-.912 3.676-1.914 1.12-1.12 1.668-2.609 1.917-4.056.25-1.451.209-2.926.095-4.092a3.77 3.77 0 0 0-3.41-3.41c-1.166-.113-2.64-.154-4.092.095-1.447.25-2.936.798-4.056 1.917M16 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`,
  'regular': `<path d="M9.515 11.724c0-1.13.092-2.402.386-3.587.295-1.189.778-2.235 1.517-2.973.82-.82 1.974-1.28 3.25-1.5 1.27-.218 2.6-.186 3.692-.08a2.27 2.27 0 0 1 2.062 2.063c.106 1.092.138 2.42-.08 3.692-.22 1.276-.68 2.429-1.5 3.25-.739.739-1.786 1.223-2.976 1.518-1.185.294-2.458.387-3.588.387-1 0-1.82.812-1.825 1.814-.008 1.695-.22 3.66-.936 5.17a.25.25 0 0 1-.076-.137 28 28 0 0 0-.771-2.663 11 11 0 0 0-.507-1.221c-.178-.355-.392-.707-.651-.967-.26-.26-.612-.474-.968-.652a11 11 0 0 0-1.222-.507 29 29 0 0 0-2.665-.773.25.25 0 0 1-.135-.075c1.51-.717 3.48-.927 5.177-.934a1.827 1.827 0 0 0 1.816-1.825m.842-7.621c-1.001 1.001-1.58 2.335-1.912 3.673-.333 1.344-.431 2.747-.43 3.95a.327.327 0 0 1-.322.323c-1.771.007-4.016.22-5.832 1.087-.682.326-.967.998-.826 1.635.133.596.615 1.085 1.267 1.244.795.194 1.717.445 2.519.73.401.142.76.288 1.052.434.302.152.487.28.578.372.091.09.22.275.371.577.146.292.292.65.434 1.051.284.801.534 1.723.728 2.517.159.652.648 1.135 1.245 1.267.637.142 1.309-.143 1.635-.825.867-1.813 1.08-4.054 1.09-5.823 0-.174.147-.321.323-.321 1.202 0 2.606-.098 3.95-.431 1.34-.333 2.674-.912 3.676-1.914 1.12-1.12 1.668-2.609 1.917-4.056.25-1.451.209-2.926.095-4.092a3.77 3.77 0 0 0-3.41-3.41c-1.166-.113-2.64-.154-4.092.095-1.447.249-2.936.798-4.056 1.917M16.002 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`
} as const;

export default function FoodFishIcon({ 
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

  const gradientId = 'foodfishicon_gradient';
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