import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M23 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M4 6.5A4.5 4.5 0 0 1 8.5 2h15A4.5 4.5 0 0 1 28 6.5v14a4.5 4.5 0 0 1-2.436 4 4.5 4.5 0 0 1 2.436 4v1a.5.5 0 0 1-1 0v-1a3.5 3.5 0 0 0-3.5-3.5h-2a.5.5 0 0 1 0-1h2c.742 0 1.43-.23 1.996-.625l-8.435-8.436a1.5 1.5 0 0 0-2.122 0l-8.435 8.436A3.5 3.5 0 0 0 8.5 24h2a.5.5 0 0 1 0 1h-2A3.5 3.5 0 0 0 5 28.5v1a.5.5 0 0 1-1 0v-1a4.5 4.5 0 0 1 2.436-4A4.5 4.5 0 0 1 4 20.5zm1.772 16.193 8.46-8.46a2.5 2.5 0 0 1 3.536 0l8.46 8.46c.483-.6.772-1.363.772-2.193v-14A3.5 3.5 0 0 0 23.5 3h-15A3.5 3.5 0 0 0 5 6.5v14c0 .83.289 1.593.772 2.193M17.5 24a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z"/>`
} as const;

export default function ImageReflectionIcon({ 
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

  const gradientId = 'imagereflectionicon_gradient';
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