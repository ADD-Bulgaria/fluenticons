import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30.5 7C23.596 7 18 12.596 18 19.5v1a7.5 7.5 0 0 1-7.5 7.5h-5a1.5 1.5 0 0 1 0-3h5a4.5 4.5 0 0 0 4.5-4.5v-1C15 10.94 21.94 4 30.5 4h4.25a1.5 1.5 0 0 1 0 3zm2 8a6.5 6.5 0 0 0-6.5 6.5v1C26 29.956 19.956 36 12.5 36h-7a1.5 1.5 0 0 1 0-3h7C18.299 33 23 28.299 23 22.5v-1a9.5 9.5 0 0 1 9.5-9.5h10a1.5 1.5 0 0 1 0 3zm1.5 9.364c0-.754.61-1.364 1.364-1.364H42.5a1.5 1.5 0 0 0 0-3h-7.136A4.364 4.364 0 0 0 31 24.364C31 33.552 23.552 41 14.364 41H13.5a1.5 1.5 0 0 0 0 3h.864C25.209 44 34 35.209 34 24.364"/>`,
  'regular': `<path d="M30.25 6.5c-7.042 0-12.75 5.708-12.75 12.75v1a7.25 7.25 0 0 1-7.25 7.25h-5a1.25 1.25 0 1 1 0-2.5h5A4.75 4.75 0 0 0 15 20.25v-1C15 10.828 21.828 4 30.25 4h4.5a1.25 1.25 0 1 1 0 2.5zm2 8a6.75 6.75 0 0 0-6.75 6.75v1c0 7.318-5.932 13.25-13.25 13.25h-7a1.25 1.25 0 1 1 0-2.5h7C18.187 33 23 28.187 23 22.25v-1A9.25 9.25 0 0 1 32.25 12h10.5a1.25 1.25 0 1 1 0 2.5zm1.25 9.614c0-.892.722-1.614 1.614-1.614h7.636a1.25 1.25 0 1 0 0-2.5h-7.636A4.114 4.114 0 0 0 31 24.114C31 33.44 23.44 41 14.114 41h-.864a1.25 1.25 0 1 0 0 2.5h.864C24.82 43.5 33.5 34.82 33.5 24.114"/>`
} as const;

export default function StreamIcon({ 
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

  const gradientId = 'streamicon_gradient';
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