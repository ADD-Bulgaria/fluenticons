import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75z"/><path d="m40.835 39.385-14.36-14.36a3.5 3.5 0 0 0-4.95 0l-14.36 14.36A6.24 6.24 0 0 0 12.25 42h23.5a6.24 6.24 0 0 0 5.085-2.615M27 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/><path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75z"/><path d="M4.44 4.44a1.5 1.5 0 0 1 2.12 0l37 37a1.5 1.5 0 0 1-2.12 2.12l-37-37a1.5 1.5 0 0 1 0-2.12"/>`,
  'filled': `<path d="m39.266 41.034 2.6 2.6a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l2.6 2.6A5.97 5.97 0 0 0 6 12v24c0 1.205.355 2.326.966 3.266l14.382-14.382c.31-.31.66-.554 1.035-.733l2.5 2.499a1.25 1.25 0 0 0-1.767.002L8.734 41.034c.94.611 2.061.966 3.266.966h24a5.97 5.97 0 0 0 3.266-.966m2.6-3.765q.133-.615.134-1.269V12a6 6 0 0 0-6-6H12q-.654.001-1.27.134zM35.5 16.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>`,
  'regular': `<path d="m39.197 40.965 2.67 2.669a1.25 1.25 0 0 0 1.767-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l2.67 2.67A6.2 6.2 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5a6.2 6.2 0 0 0 3.447-1.035m-1.83-1.83a3.7 3.7 0 0 1-1.617.365h-23.5a3.7 3.7 0 0 1-1.617-.365l12.483-12.483a1.25 1.25 0 0 1 1.766-.003zM22.383 24.15a3.7 3.7 0 0 0-1.035.733L8.865 37.367A3.7 3.7 0 0 1 8.5 35.75v-23.5c0-.579.131-1.127.365-1.617zM42 35.75q-.001.766-.176 1.478L39.5 34.904V12.25a3.75 3.75 0 0 0-3.75-3.75H13.096l-2.324-2.324A6.3 6.3 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25zM32.5 17.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m2.5 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"/>`
} as const;

export default function ImageOffIcon({ 
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

  const gradientId = 'imageofficon_gradient';
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