import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3m4.69.016c.47-.235.927-.534 1.31-.896V9h-1.915a1.5 1.5 0 0 0-1.385.923l-2.083 5A1.5 1.5 0 0 0 12.002 17h.469l-.194.776A11.4 11.4 0 0 1 10 18c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984M13.112 16a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 18.35 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.56 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692z"/>`,
  'regular': `<path d="M4 5c0-1.007.875-1.755 1.9-2.223A10.2 10.2 0 0 1 10 2a10.2 10.2 0 0 1 4.1.777C15.125 3.245 16 3.993 16 5v4h-1V6.7q-.421.31-.9.525A10.2 10.2 0 0 1 10 8a10.2 10.2 0 0 1-4.1-.777A5 5 0 0 1 5 6.7V15c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 17q.748.015 1.486-.09.24.088.516.09h.469l-.197.787c-.746.156-1.508.228-2.274.213a10.2 10.2 0 0 1-4.1-.777C4.875 16.755 4 16.007 4 15zm1 0c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.682.687C5.356 4.125 5 4.626 5 5m8.112 11a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.872-4.548A.75.75 0 0 0 18.35 13h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.56 10h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692z"/>`
} as const;

export default function DatabaseLightningIcon({ 
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

  const gradientId = 'databaselightningicon_gradient';
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