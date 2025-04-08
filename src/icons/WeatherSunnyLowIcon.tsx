import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M34.586 27A11 11 0 0 0 35 24c0-6.075-4.925-11-11-11s-11 4.925-11 11a11 11 0 0 0 .414 3z"/><path d="M34.586 27A11 11 0 0 0 35 24c0-6.075-4.925-11-11-11s-11 4.925-11 11a11 11 0 0 0 .414 3z"/><path d="M4 27.5A1.5 1.5 0 0 1 5.5 26h37a1.5 1.5 0 0 1 0 3h-37A1.5 1.5 0 0 1 4 27.5"/><path d="M4 27.5A1.5 1.5 0 0 1 5.5 26h37a1.5 1.5 0 0 1 0 3h-37A1.5 1.5 0 0 1 4 27.5m8 6a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 0 3h-21a1.5 1.5 0 0 1-1.5-1.5"/><path d="M12 33.5a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 0 3h-21a1.5 1.5 0 0 1-1.5-1.5m8 6a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1-1.5-1.5"/><path d="M20 39.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1-1.5-1.5M24 4a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-3 0V5.5A1.5 1.5 0 0 1 24 4"/><path d="M24 4a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-3 0V5.5A1.5 1.5 0 0 1 24 4M9.44 9.44a1.5 1.5 0 0 1 2.12 0l2.5 2.5a1.5 1.5 0 0 1-2.12 2.12l-2.5-2.5a1.5 1.5 0 0 1 0-2.12"/><path d="M9.44 9.44a1.5 1.5 0 0 1 2.12 0l2.5 2.5a1.5 1.5 0 0 1-2.12 2.12l-2.5-2.5a1.5 1.5 0 0 1 0-2.12m27 0a1.5 1.5 0 0 1 2.12 2.12l-2.5 2.5a1.5 1.5 0 0 1-2.12-2.12z"/><path d="M36.44 9.44a1.5 1.5 0 0 1 2.12 2.12l-2.5 2.5a1.5 1.5 0 0 1-2.12-2.12z"/>`,
  'filled': `<path d="M24 13.08c6.03 0 10.92 4.89 10.92 10.92q-.002 1.026-.184 2h8.014a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 0 1 0-2.5h8.013a11 11 0 0 1-.183-2c0-6.03 4.89-10.92 10.92-10.92M11.506 9.804l.101.091 2.148 2.148a1.25 1.25 0 0 1-1.666 1.859l-.102-.091-2.148-2.148a1.25 1.25 0 0 1 1.666-1.859m26.638.091a1.25 1.25 0 0 1 .091 1.666l-.091.102-2.148 2.148a1.25 1.25 0 0 1-1.859-1.666l.091-.102 2.148-2.148a1.25 1.25 0 0 1 1.768 0M24 3.997c.648 0 1.18.492 1.244 1.122l.006.128v3.038a1.25 1.25 0 0 1-2.493.127l-.007-.127V5.247c0-.69.56-1.25 1.25-1.25M21.25 38a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 0 0 0-2.5zM12 33.25c0-.69.56-1.25 1.25-1.25h21.5a1.25 1.25 0 1 1 0 2.5h-21.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M24 13.08c6.03 0 10.92 4.89 10.92 10.92q-.002 1.026-.184 2h8.014a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 0 1 0-2.5h8.013a11 11 0 0 1-.183-2c0-6.03 4.89-10.92 10.92-10.92M15.82 26h16.36a8.42 8.42 0 1 0-16.36 0M11.504 9.804l.102.091 2.148 2.148a1.25 1.25 0 0 1-1.666 1.859l-.102-.091-2.148-2.148a1.25 1.25 0 0 1 1.666-1.859m26.639.091a1.25 1.25 0 0 1 .091 1.666l-.091.102-2.148 2.148a1.25 1.25 0 0 1-1.859-1.666l.091-.102 2.148-2.148a1.25 1.25 0 0 1 1.768 0M24 3.997c.648 0 1.18.492 1.244 1.122l.006.128v3.038a1.25 1.25 0 0 1-2.493.127l-.007-.127V5.247c0-.69.56-1.25 1.25-1.25M21.25 38a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 0 0 0-2.5zM12 33.25c0-.69.56-1.25 1.25-1.25h21.5a1.25 1.25 0 1 1 0 2.5h-21.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function WeatherSunnyLowIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'weathersunnylowicon_gradient';
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