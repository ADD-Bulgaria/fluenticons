import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42 33.75a6.2 6.2 0 0 1-.726 2.927L32.596 28h5.654A6.22 6.22 0 0 0 42 26.75zm-3.75-8.25h-8.154L16 11.404V8.25A4.25 4.25 0 0 1 20.25 4h7.5A4.25 4.25 0 0 1 32 8.25V12h3.75A6.25 6.25 0 0 1 42 18.25v3.5a3.75 3.75 0 0 1-3.75 3.75M10.485 12.253l-6.119-6.12a1.25 1.25 0 1 1 1.768-1.767l37.5 37.5a1.25 1.25 0 0 1-1.768 1.768l-4-4.001A6.2 6.2 0 0 1 35.75 40h-23.5A6.25 6.25 0 0 1 6 33.75v-7A6.22 6.22 0 0 0 9.75 28H20v1a2 2 0 0 0 2 2h4a2 2 0 0 0 1.89-1.343l-6.547-6.547A2 2 0 0 0 20 25v.5H9.75A3.75 3.75 0 0 1 6 21.75v-3.5a6.25 6.25 0 0 1 4.485-5.997M18.5 8.25V12h11V8.25a1.75 1.75 0 0 0-1.75-1.75h-7.5a1.75 1.75 0 0 0-1.75 1.75"/>`,
  'regular': `<path d="M42 33.75a6.2 6.2 0 0 1-.726 2.927l-1.913-1.912q.137-.486.139-1.015v-7A6.22 6.22 0 0 1 35.75 28h-3.154l-2.5-2.5h5.654a3.75 3.75 0 0 0 3.75-3.75v-3.5a3.75 3.75 0 0 0-3.75-3.75H19.096L16 11.404V8.25A4.25 4.25 0 0 1 20.25 4h7.5A4.25 4.25 0 0 1 32 8.25V12h3.75A6.25 6.25 0 0 1 42 18.25zM21.343 23.11A2 2 0 0 0 20 25v.5h-7.75a3.75 3.75 0 0 1-3.75-3.75v-3.5a3.75 3.75 0 0 1 3.75-3.75h.482zM10.485 12.253A6.25 6.25 0 0 0 6 18.25v15.5A6.25 6.25 0 0 0 12.25 40h23.5a6.3 6.3 0 0 0 2.115-.367l4.001 4a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768zM35.732 37.5H12.25a3.75 3.75 0 0 1-3.75-3.75v-7A6.22 6.22 0 0 0 12.25 28H20v1a2 2 0 0 0 2 2h4a2 2 0 0 0 1.89-1.343zM18.5 8.25V12h11V8.25a1.75 1.75 0 0 0-1.75-1.75h-7.5a1.75 1.75 0 0 0-1.75 1.75"/>`
} as const;

export default function BriefcaseOffIcon({ 
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

  const gradientId = 'briefcaseofficon_gradient';
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