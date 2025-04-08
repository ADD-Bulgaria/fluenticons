import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3m4.69.016c.47-.235.927-.534 1.31-.896v2.087a5.5 5.5 0 0 0-5.745 8.79L10 18c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.854 2.353.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 15.293V12.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z"/>`,
  'regular': `<path d="M4 5c0-1.007.875-1.755 1.9-2.223A10.2 10.2 0 0 1 10 2a10.2 10.2 0 0 1 4.1.777C15.125 3.245 16 3.993 16 5v4.207a5.5 5.5 0 0 0-1-.185V6.7q-.421.31-.9.525A10.2 10.2 0 0 1 10 8a10.2 10.2 0 0 1-4.1-.777A5 5 0 0 1 5 6.7V15c0 .374.356.875 1.318 1.313a9.2 9.2 0 0 0 3.281.686q.277.54.66 1.003-.13 0-.259-.002a10.2 10.2 0 0 1-4.1-.777C4.875 16.755 4 16.007 4 15zm1 0c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.682.687C5.356 4.125 5 4.626 5 5m14 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.854 2.353.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 15.293V12.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z"/>`
} as const;

export default function DatabaseArrowDownIcon({ 
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

  const gradientId = 'databasearrowdownicon_gradient';
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