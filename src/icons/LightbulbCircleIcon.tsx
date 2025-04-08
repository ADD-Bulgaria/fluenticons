
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.481 15H9.519l.103.454.043.152.057.143c.288.646.902 1.05 1.587 1.05h1.382l.156-.009.15-.023.147-.035a1.73 1.73 0 0 0 1.233-1.276zM12 5.202a5 5 0 0 0-5 5l.008.271.02.256.034.252a5 5 0 0 0 1.64 2.978l.154.129.321 1.412h5.644l.32-1.41.163-.136a5 5 0 0 0 1.69-3.497l.006-.255a5 5 0 0 0-5-5"/>`,
  'regular': `<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m0 1.702a5 5 0 0 1 3.11 8.915l.032-.028-.765 3.367a1.73 1.73 0 0 1-1.38 1.311l-.15.023-.156.008h-1.382c-.734 0-1.386-.463-1.644-1.192l-.043-.152-.766-3.366-.155-.129a5 5 0 0 1-1.672-3.23l-.021-.256L7 10.202a5 5 0 0 1 5-5M13.17 16h-2.342l.245 1.078.019.067a.23.23 0 0 0 .217.153l1.34.001.069-.002a.23.23 0 0 0 .197-.175zM12 6.702c-1.933 0-3.5 1.567-3.5 3.478l.006.228a3.5 3.5 0 0 0 1.459 2.641.75.75 0 0 1 .294.444l.229 1.009.04-.002h2.943l.039.002.23-1.008a.75.75 0 0 1 .199-.363l.08-.069.169-.128A3.5 3.5 0 0 0 12 6.702"/>`
} as const;

export default function LightbulbCircleIcon({ 
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

  const gradientId = 'lightbulbcircleicon_gradient';
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