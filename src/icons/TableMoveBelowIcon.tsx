import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M3.5 29a.5.5 0 0 1 0-1h25a.5.5 0 0 1 0 1zm12.146-3.146a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L16.5 24.293V17.5a.5.5 0 0 0-1 0v6.793l-2.146-2.147a.5.5 0 0 0-.708.708zM3.5 21a.5.5 0 0 1-.5-.5v-13A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v13a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V12h-8v8.5a.5.5 0 0 1-.5.5zm7.5-9H4v8h7zm-7-1h7V4H7.5A3.5 3.5 0 0 0 4 7.5zm17-7v7h7V7.5A3.5 3.5 0 0 0 24.5 4zm7 8h-7v8h7zM12 4v7h8V4z"/>`
} as const;

export default function TableMoveBelowIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'tablemovebelowicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}