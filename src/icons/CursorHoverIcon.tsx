import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 9.25a3.5 3.5 0 0 0-3.5 3.5v18.5a3.5 3.5 0 0 0 3.5 3.5H18v-13.5a3.25 3.25 0 0 1 5.548-2.298l15.5 15.5q.143.142.263.297a3.5 3.5 0 0 0 3.439-3.499v-18.5a3.5 3.5 0 0 0-3.5-3.5zm13.384 11.116A1.25 1.25 0 0 0 20 21.25v21.5a1.25 1.25 0 0 0 2.285.7l4.961-7.333a.75.75 0 0 1 .808-.306l8.386 2.15a1.25 1.25 0 0 0 1.194-2.095z"/>`,
  'regular': `<path d="M4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v18.5a4.75 4.75 0 0 1-4.099 4.706 3.24 3.24 0 0 0-.853-1.504l-.952-.952h1.154a2.25 2.25 0 0 0 2.25-2.25v-18.5a2.25 2.25 0 0 0-2.25-2.25H8.75a2.25 2.25 0 0 0-2.25 2.25v18.5a2.25 2.25 0 0 0 2.25 2.25H18V36H8.75A4.75 4.75 0 0 1 4 31.25zm18.134 7.616A1.25 1.25 0 0 0 20 21.25v21.5a1.25 1.25 0 0 0 2.285.7l4.961-7.333a.75.75 0 0 1 .808-.306l8.386 2.15a1.25 1.25 0 0 0 1.194-2.095zm.366 18.305V24.268l10.137 10.137-3.962-1.016a3.25 3.25 0 0 0-3.5 1.327z"/>`
} as const;

export default function CursorHoverIcon({ 
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

  const gradientId = 'cursorhovericon_gradient';
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