
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 7h2.5v3H5zm6.5 0v3h-3V7zm1 3H15V7h-2.5zm3.54-6q.39 0 .741.156.352.157.625.43.274.273.43.625.156.351.164.75V11q0 .531-.266 1a1.9 1.9 0 0 1-.734.734V14.5q0 .305-.117.578a1.5 1.5 0 0 1-.805.805q-.28.125-.578.117h-4a.48.48 0 0 1-.352-.148L10 14.703l-1.148 1.149A.48.48 0 0 1 8.5 16h-4q-.305 0-.578-.117a1.5 1.5 0 0 1-.805-.805A1.3 1.3 0 0 1 3 14.5v-1.766A1.93 1.93 0 0 1 2.273 12 2.06 2.06 0 0 1 2 11V5.96q0-.39.156-.741a2.1 2.1 0 0 1 .43-.625 2.1 2.1 0 0 1 .625-.43A1.9 1.9 0 0 1 3.96 4zm-.657 2.078A.95.95 0 0 0 15 6H5a.85.85 0 0 0-.39.078 1 1 0 0 0-.531.531 1 1 0 0 0-.079.39v3q.008.22.078.4.07.179.211.312t.32.21q.18.08.391.079h10a.85.85 0 0 0 .39-.079q.188-.086.32-.218.135-.133.212-.313A1 1 0 0 0 16 10V7q0-.204-.078-.391a.9.9 0 0 0-.219-.32 1.1 1.1 0 0 0-.32-.211"/>`,
  'regular': `<path d="M16.04 4q.39 0 .741.156.352.157.625.43.274.273.43.625.156.351.164.75V11q0 .531-.266 1a1.9 1.9 0 0 1-.734.734V14.5q0 .305-.117.578a1.5 1.5 0 0 1-.805.805q-.28.125-.578.117h-4a.48.48 0 0 1-.352-.148L10 14.703l-1.148 1.149A.48.48 0 0 1 8.5 16h-4q-.305 0-.578-.117a1.5 1.5 0 0 1-.805-.805A1.3 1.3 0 0 1 3 14.5v-1.766A1.93 1.93 0 0 1 2.273 12 2.06 2.06 0 0 1 2 11V5.96q0-.39.156-.741a2.1 2.1 0 0 1 .43-.625 2.1 2.1 0 0 1 .625-.43A1.9 1.9 0 0 1 3.96 4zM17 6a.95.95 0 0 0-.078-.383 1.1 1.1 0 0 0-.211-.32.9.9 0 0 0-.32-.219A1 1 0 0 0 16 5H4a.97.97 0 0 0-.703.29 1.1 1.1 0 0 0-.219.32A.85.85 0 0 0 3 6v5q0 .21.078.39.079.18.211.32a.85.85 0 0 0 .313.212q.18.07.398.078h12a.97.97 0 0 0 .703-.29q.133-.132.219-.32A.85.85 0 0 0 17 11zm-2 0a.95.95 0 0 1 .383.078q.18.079.32.211a.9.9 0 0 1 .219.32Q16 6.797 16 7v3a.97.97 0 0 1-.29.703 1.1 1.1 0 0 1-.32.219A.85.85 0 0 1 15 11H5a1 1 0 0 1-.39-.078 1.1 1.1 0 0 1-.32-.211.85.85 0 0 1-.212-.313A1.2 1.2 0 0 1 4 10V7a.97.97 0 0 1 .29-.703 1.1 1.1 0 0 1 .32-.219A.85.85 0 0 1 5 6zM7.5 7H5v3h2.5zm4 3V7h-3v3zm1 0H15V7h-2.5zm3.5 3H4v1.5q0 .203.148.352A.48.48 0 0 0 4.5 15h3.797l1.351-1.352A.48.48 0 0 1 10 13.5a.48.48 0 0 1 .352.148L11.71 15h3.79a.48.48 0 0 0 .352-.148A.48.48 0 0 0 16 14.5z"/>`
} as const;

export default function RamIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'ramicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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