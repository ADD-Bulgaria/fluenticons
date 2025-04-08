import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h8.155a3.24 3.24 0 0 1-.905-2.25v-.25h-7.25a3.75 3.75 0 0 1-3.75-3.75V16.5h31v7.346a13.3 13.3 0 0 1 2.5 1.917V12.25A6.25 6.25 0 0 0 35.75 6zm17.877 20.9c.827-.26 1.707-.4 2.623-.4a8.75 8.75 0 0 1 7.813 4.805 1.25 1.25 0 1 0 2.23-1.129A11.25 11.25 0 0 0 32.75 24c-1.172 0-2.305.18-3.371.514a1.25 1.25 0 0 0 .748 2.386m-3.94 2.564a1.25 1.25 0 0 0-1.876-1.654 11.2 11.2 0 0 0-2.811 7.44v4.5a1.25 1.25 0 1 0 2.5 0v-4.5c0-2.22.825-4.243 2.186-5.786M44 35.25a1.25 1.25 0 1 0-2.5 0v4.5a1.25 1.25 0 1 0 2.5 0zm-14.982-.375a3.75 3.75 0 0 1 7.482.375v8.5a1.25 1.25 0 1 0 2.5 0v-8.5a6.25 6.25 0 0 0-12.47-.621 1.25 1.25 0 1 0 2.488.246M29 39.25a1.25 1.25 0 1 0-2.5 0v4.5a1.25 1.25 0 1 0 2.5 0zM32.75 34c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25"/>`,
  'regular': `<path d="M35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h8.155a3.24 3.24 0 0 1-.905-2.25v-.25h-7.25a3.75 3.75 0 0 1-3.75-3.75V16.5h31v7.346a13.3 13.3 0 0 1 2.5 1.917V12.25A6.25 6.25 0 0 0 35.75 6m3.75 6.25V14h-31v-1.75a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75M30.127 26.9c.827-.26 1.707-.4 2.623-.4a8.75 8.75 0 0 1 7.813 4.805 1.25 1.25 0 1 0 2.23-1.129A11.25 11.25 0 0 0 32.75 24c-1.172 0-2.305.18-3.371.514a1.25 1.25 0 0 0 .748 2.386m-3.94 2.564a1.25 1.25 0 0 0-1.876-1.654 11.2 11.2 0 0 0-2.811 7.44v4.5a1.25 1.25 0 1 0 2.5 0v-4.5c0-2.22.825-4.243 2.186-5.786M44 35.25a1.25 1.25 0 1 0-2.5 0v4.5a1.25 1.25 0 1 0 2.5 0zm-14.982-.375a3.75 3.75 0 0 1 7.482.375v8.5a1.25 1.25 0 1 0 2.5 0v-8.5a6.25 6.25 0 0 0-12.47-.621 1.25 1.25 0 1 0 2.488.246M29 39.25a1.25 1.25 0 1 0-2.5 0v4.5a1.25 1.25 0 1 0 2.5 0zM32.75 34c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function WindowFingerprintIcon({ 
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

  const gradientId = 'windowfingerprinticon_gradient';
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