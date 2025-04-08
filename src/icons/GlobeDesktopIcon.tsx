
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 16.5H8.904l.058.295C9.6 19.905 10.803 22 12 22c.495 0 .992-.358 1.449-.999H13a2 2 0 0 1-2-2zm0-1.5H8.674a26 26 0 0 1-.132-4.512L8.576 10h6.849q.076.97.077 2H13a2 2 0 0 0-2 2zm11.002-3h-5q0-.681-.032-1.343L16.932 10h4.87c.13.645.2 1.314.2 1.999m-14.63 4.5-4.306.001.146.279a10.03 10.03 0 0 0 5.952 4.814c-.81-1.24-1.428-3.011-1.792-5.093M7.069 10h-4.87a10.05 10.05 0 0 0 .257 5H7.16l-.057-.58A28 28 0 0 1 7.069 10m7.767-7.593.108.17c.88 1.43 1.522 3.507 1.837 5.923h4.591a10.03 10.03 0 0 0-6.536-6.093m-5.672 0-.122.037A10.03 10.03 0 0 0 2.628 8.5H7.22l.062-.44c.347-2.324 1.002-4.304 1.883-5.653m6.05 5.778C14.646 4.544 13.32 2.002 12 2.002c-1.356 0-2.721 2.689-3.26 6.498h6.52zM12 14a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v2h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-2h-3a1 1 0 0 1-1-1z"/>`,
  'regular': `<path d="M22.002 12c0-5.524-4.478-10.002-10.002-10.002S2 6.476 2 12c0 5.186 3.947 9.45 9.001 9.952v-1.843c-.778-.612-1.478-1.905-1.939-3.61h1.94V15H8.737a19 19 0 0 1-.135-5h6.794c.068.64.105 1.31.105 2h1.5q-.001-1.028-.095-2h3.358c.154.64.237 1.31.237 2zM4.786 16.5h2.722l.102.395c.317 1.17.748 2.196 1.27 3.015a8.53 8.53 0 0 1-4.094-3.41m-1.05-6.501h3.358a21 21 0 0 0-.095 2c0 1.043.075 2.051.217 3H4.043a8.5 8.5 0 0 1-.544-3c0-.682.08-1.347.232-1.983zm5.122-5.902.023-.008c-.722 1.132-1.27 2.658-1.583 4.41H4.25c.905-2 2.56-3.587 4.608-4.402m3.026-.594L12 3.498l.126.006c1.262.126 2.48 2.125 3.045 4.995H8.83c.568-2.878 1.79-4.88 3.055-4.996m3.343.76-.107-.174.291.121A8.53 8.53 0 0 1 19.75 8.5h-3.048c-.298-1.665-.806-3.125-1.475-4.237M12 18.999a1 1 0 0 0 1 1h3v2h-.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1H19v-2h3a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1z"/>`
} as const;

export default function GlobeDesktopIcon({ 
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

  const gradientId = 'globedesktopicon_gradient';
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