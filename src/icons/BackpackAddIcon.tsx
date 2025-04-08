import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.519 11.43a8.5 8.5 0 0 1 16.962 0c3.966 2.484 6.765 6.658 7.388 11.513A13 13 0 0 0 35 22a13 13 0 0 0-3.287.419 2.8 2.8 0 0 0 .287-1.24A5.18 5.18 0 0 0 26.821 16H21.18A5.18 5.18 0 0 0 16 21.179 2.82 2.82 0 0 0 18.821 24h9.248a13.1 13.1 0 0 0-4.025 4H8v-3c0-5.721 3.003-10.741 7.519-13.57m13.529-1.617a5.501 5.501 0 0 0-10.096 0A16 16 0 0 1 24 9c1.764 0 3.461.285 5.048.813M22 35c0-1.582.282-3.098.8-4.5h-4.3v3.25a1.25 1.25 0 1 1-2.5 0V30.5H8v8.25c0 2.9 2.35 5.25 5.25 5.25h12.37A12.96 12.96 0 0 1 22 35m-3.5-13.821a2.68 2.68 0 0 1 2.679-2.679h5.642a2.68 2.68 0 0 1 2.679 2.679.32.32 0 0 1-.321.321H18.82a.32.32 0 0 1-.321-.321M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`,
  'regular': `<path d="M24 4a8 8 0 0 0-7.951 7.113C11.239 13.872 8 19.058 8 25v13.75c0 2.9 2.35 5.25 5.25 5.25h12.37a13 13 0 0 1-1.88-2.5H13.25a2.75 2.75 0 0 1-2.75-2.75V30.5H16v3.25a1.25 1.25 0 1 0 2.5 0V30.5h4.3c.325-.882.744-1.72 1.244-2.5H10.5v-3c0-7.456 6.044-13.5 13.5-13.5 6.491 0 11.912 4.581 13.206 10.686a13 13 0 0 1 2.663.756c-.65-5.068-3.673-9.394-7.918-11.83A8 8 0 0 0 24 4m0 5c-1.764 0-3.461.285-5.048.813a5.501 5.501 0 0 1 10.096 0A16 16 0 0 0 24 9m4.069 15a13 13 0 0 1 3.644-1.581 2.8 2.8 0 0 0 .287-1.24A5.18 5.18 0 0 0 26.821 16H21.18A5.18 5.18 0 0 0 16 21.179 2.82 2.82 0 0 0 18.821 24zm-6.89-5.5h5.642a2.68 2.68 0 0 1 2.679 2.679.32.32 0 0 1-.321.321H18.82a.32.32 0 0 1-.321-.321 2.68 2.68 0 0 1 2.679-2.679M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`
} as const;

export default function BackpackAddIcon({ 
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

  const gradientId = 'backpackaddicon_gradient';
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