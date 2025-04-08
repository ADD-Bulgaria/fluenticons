
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30.718 32.5c-.471 2.437-1.135 4.603-1.931 6.395-.82 1.844-1.732 3.183-2.618 4.026C25.296 43.75 24.567 44 24 44s-1.296-.248-2.169-1.08c-.886-.842-1.798-2.18-2.617-4.025-.797-1.792-1.46-3.958-1.932-6.395zm2.544 0c-.825 4.547-2.293 8.35-4.149 10.84 5.762-1.519 10.506-5.545 12.996-10.84zm9.822-2.5h-9.443c.234-1.91.359-3.922.359-6 0-1.897-.104-3.74-.3-5.5h9.534A20 20 0 0 1 44 24c0 2.09-.32 4.106-.916 6m-11.963 0H16.879a47 47 0 0 1-.379-6 47 47 0 0 1 .317-5.5h14.366A47 47 0 0 1 31.5 24a47 47 0 0 1-.38 6m-16.76 0a49 49 0 0 1-.36-6c0-1.897.104-3.74.3-5.5H4.767A20 20 0 0 0 4 24c0 2.09.32 4.106.916 6zm-8.47 2.5c2.49 5.295 7.235 9.321 12.997 10.84-1.856-2.49-3.324-6.293-4.149-10.84zM28.788 9.105c.85 1.914 1.55 4.254 2.025 6.895H17.188c.476-2.64 1.175-4.981 2.026-6.895.82-1.844 1.731-3.183 2.617-4.026C22.704 4.25 23.433 4 24 4s1.296.248 2.169 1.08c.886.842 1.798 2.18 2.617 4.025M33.349 16h8.987c-2.421-5.541-7.281-9.774-13.223-11.34 1.924 2.58 3.43 6.572 4.236 11.34M5.664 16h8.987c.806-4.768 2.312-8.76 4.236-11.34C12.945 6.226 8.085 10.459 5.664 16"/>`,
  'regular': `<path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4m0 37.5c1.304 0 3.158-1.122 4.835-4.476.648-1.296 1.208-2.822 1.645-4.524H17.52c.437 1.702.997 3.228 1.645 4.524C20.842 40.378 22.695 41.5 24 41.5M16.99 30h14.02c.315-1.863.49-3.88.49-6a36 36 0 0 0-.41-5.5H16.91a36 36 0 0 0-.41 5.5c0 2.12.175 4.137.49 6m16.064 2.5c-.771 3.282-1.976 6.077-3.466 8.089A17.55 17.55 0 0 0 39.3 32.5zm7.39-2.5a17.5 17.5 0 0 0 1.056-6c0-1.921-.31-3.77-.882-5.5h-7A39 39 0 0 1 34 24c0 2.09-.16 4.106-.458 6zm-25.986 0A39 39 0 0 1 14 24c0-1.907.133-3.753.383-5.5H7.382A17.5 17.5 0 0 0 6.5 24c0 2.108.373 4.129 1.056 6zm-5.759 2.5a17.55 17.55 0 0 0 9.713 8.089c-1.49-2.012-2.695-4.807-3.466-8.089zM17.396 16h13.208c-.453-1.905-1.058-3.602-1.769-5.024C27.158 7.622 25.305 6.5 24 6.5c-1.304 0-3.158 1.122-4.835 4.476-.711 1.422-1.316 3.12-1.769 5.024m15.772 0h6.4a17.55 17.55 0 0 0-9.98-8.589c1.565 2.114 2.816 5.09 3.58 8.589M18.412 7.411A17.55 17.55 0 0 0 8.432 16h6.4c.764-3.499 2.015-6.475 3.58-8.589"/>`
} as const;

export default function GlobeIcon({ 
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

  const gradientId = 'globeicon_gradient';
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