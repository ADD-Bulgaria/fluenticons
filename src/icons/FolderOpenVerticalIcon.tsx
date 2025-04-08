import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 5.25A3.25 3.25 0 0 0 17.75 2H8.84l3.54 2.045a4.25 4.25 0 0 1 2.126 3.68V20h.745a3.25 3.25 0 0 0 3.25-3.25v-5.19l1.842-1.84A2.25 2.25 0 0 0 21 8.129zm-7.995 2.475v13.02c0 1.732-1.875 2.814-3.375 1.948l-5.26-3.036a2.75 2.75 0 0 1-1.375-2.382V4.255c0-1.731 1.875-2.814 3.375-1.948l5.259 3.037a2.75 2.75 0 0 1 1.375 2.381"/>`,
  'regular': `<path d="M17.75 3.5c.966 0 1.75.784 1.75 1.75v2.88a.75.75 0 0 1-.22.53l-2.06 2.06a.75.75 0 0 0-.22.531v5.5a1.75 1.75 0 0 1-1.75 1.75.8.8 0 0 0-.246.041V8.72a3.75 3.75 0 0 0-1.874-3.25L9.717 3.5zM6.212 2A3.25 3.25 0 0 0 3 5.25V11q0 .044.005.086v5.195A3.75 3.75 0 0 0 4.88 19.53l5.25 3.03c2.104 1.216 4.72-.225 4.868-2.602a.8.8 0 0 0 .252.043 3.25 3.25 0 0 0 3.25-3.25v-5.19l1.841-1.84A2.25 2.25 0 0 0 21 8.129V5.25A3.25 3.25 0 0 0 17.75 2zm7.292 6.719v11.026c0 1.347-1.458 2.19-2.625 1.515l-5.25-3.03a2.25 2.25 0 0 1-1.124-1.949V5.255c0-1.347 1.458-2.19 2.625-1.516l5.25 3.031a2.25 2.25 0 0 1 1.124 1.949"/>`
} as const;

export default function FolderOpenVerticalIcon({ 
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

  const gradientId = 'folderopenverticalicon_gradient';
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