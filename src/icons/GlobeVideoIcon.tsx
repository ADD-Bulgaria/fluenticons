
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 41.99V32.5h-3.718c.471 2.437 1.135 4.603 1.931 6.395.565 1.27 1.174 2.3 1.787 3.095M26 27h5.407a48 48 0 0 0-.224-8.5H16.817A47 47 0 0 0 16.5 24c0 2.098.134 4.111.38 6h4.536A5 5 0 0 1 26 27m9 0a5 5 0 0 1 4.584 3h.132l1.653-1.271a3.45 3.45 0 0 1 2.231-.73c.262-1.293.4-2.63.4-3.999a20 20 0 0 0-.766-5.5H33.7a51 51 0 0 1 .213 8.5zm-20.64 3a49 49 0 0 1-.36-6c0-1.897.104-3.74.3-5.5H4.767A20 20 0 0 0 4 24c0 2.09.32 4.106.916 6zm-8.47 2.5c2.49 5.295 7.235 9.321 12.997 10.84-1.856-2.49-3.324-6.293-4.149-10.84zM28.788 9.105c.85 1.914 1.55 4.254 2.025 6.895H17.188c.476-2.64 1.175-4.981 2.026-6.895.82-1.844 1.731-3.183 2.617-4.026C22.704 4.25 23.433 4 24 4s1.296.248 2.169 1.08c.886.842 1.798 2.18 2.617 4.025M33.349 16h8.987c-2.421-5.541-7.281-9.774-13.223-11.34 1.924 2.58 3.43 6.572 4.236 11.34M5.664 16h8.987c.806-4.768 2.312-8.76 4.236-11.34C12.945 6.226 8.085 10.459 5.664 16M23 32a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1.843l4.589-3.53c.986-.758 2.414-.055 2.414 1.19v10.991c0 1.245-1.428 1.948-2.414 1.19L38 40.153V42a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z"/>`,
  'regular': `<path d="M24 4c11.046 0 20 8.954 20 20 0 1.37-.138 2.706-.4 3.998a3.45 3.45 0 0 0-2.23.73l-.669.514A17.5 17.5 0 0 0 41.5 24c0-1.921-.31-3.77-.882-5.5h-7a40 40 0 0 1 .271 8.5H31.38q.118-1.46.119-3a36 36 0 0 0-.41-5.5H16.91a36 36 0 0 0-.41 5.5c0 2.12.175 4.137.49 6h4.426A5 5 0 0 0 21 32v.5h-3.48c.437 1.702.997 3.228 1.645 4.524.6 1.2 1.223 2.115 1.835 2.794V42c0 .644.122 1.26.344 1.825C11.554 42.525 4 34.145 4 24 4 12.954 12.954 4 24 4m-9.542 26A39 39 0 0 1 14 24c0-1.907.133-3.753.383-5.5H7.382A17.5 17.5 0 0 0 6.5 24c0 2.108.373 4.129 1.056 6zm-5.759 2.5a17.55 17.55 0 0 0 9.713 8.089c-1.49-2.012-2.695-4.807-3.466-8.089zM30.604 16c-.453-1.905-1.058-3.602-1.769-5.024C27.158 7.622 25.305 6.5 24 6.5c-1.304 0-3.158 1.122-4.835 4.476-.711 1.422-1.316 3.12-1.769 5.024zm2.564 0h6.4a17.55 17.55 0 0 0-9.98-8.589c1.565 2.114 2.816 5.09 3.58 8.589M18.412 7.411A17.55 17.55 0 0 0 8.432 16h6.4c.764-3.499 2.015-6.475 3.58-8.589M23 32a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1.843l4.589-3.53c.986-.758 2.414-.055 2.414 1.19v10.991c0 1.245-1.428 1.948-2.414 1.19L38 40.153V42a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z"/>`
} as const;

export default function GlobeVideoIcon({ 
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

  const gradientId = 'globevideoicon_gradient';
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