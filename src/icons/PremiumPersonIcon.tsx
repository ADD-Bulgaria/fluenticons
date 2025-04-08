
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.832 3.445A1 1 0 0 0 18 3H6l-.125.008a1 1 0 0 0-.77.545l-3 6-.052.125a1 1 0 0 0 .204.991l8.982 9.983a.98.98 0 0 0 .532.322l.112.02a1.01 1.01 0 0 0 .887-.352l.26-.29a4 4 0 0 1-.03-.477v-.103A2.77 2.77 0 0 1 15.774 17h.274l.002-.002a3.5 3.5 0 0 1 4.678-5.199l1.016-1.13.084-.107a1 1 0 0 0 .067-1.01l-3-6zM9.423 11h5.153L12 17.342zm-4.177 0h2.018l1.66 4.087zm1.372-6h2.004l-1.3 4H4.618zm4.108 0h2.547l1.299 4H9.427zm4.651 0h2.004l2 4h-2.704zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M17.999 3a.75.75 0 0 1 .605.306l.055.087 3.263 6.028.038.093.012.04.02.102.006.094a.8.8 0 0 1-.027.2l-.047.125-.038.069-.04.058-.035.044.019-.025-1.274 1.446a3.5 3.5 0 0 0-1.455-.616l.486-.551h-2.975L12.7 20.523A.75.75 0 0 1 12 21h-.003a1 1 0 0 1-.093-.006H11.9l-.005-.001a1 1 0 0 1-.103-.023l-.01-.002a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546-.026-.032-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066.013-.089.024-.086.022-.059.028-.057 3.25-6a.75.75 0 0 1 .557-.386L5.999 3zm-2.997 7.5H8.998l3 7.687.002-.003v.004zm-7.613 0h-2.98l5.351 6.074zm1.582-6H6.445L4.007 9h3.524zm4.48 0h-2.905L9.105 9h5.785zm4.1 0h-2.525l1.44 4.5h3.522zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function PremiumPersonIcon({ 
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

  const gradientId = 'premiumpersonicon_gradient';
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