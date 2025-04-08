import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.606 5.855a3.78 3.78 0 0 1 4.788 0l13.175 10.742A3.91 3.91 0 0 1 41 19.628v19.485C41 41.26 39.288 43 37.175 43h-26.35C8.713 43 7 41.26 7 39.113V19.628a3.91 3.91 0 0 1 1.431-3.031zM19.25 24.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m7 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m7 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m-7 7a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m-7 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m14 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>`,
  'regular': `<path d="M26.25 24.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M17 26.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m16.25-2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M24 33.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m-4.75-2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M31 33.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M26.394 5.855a3.78 3.78 0 0 0-4.788 0L8.431 16.597A3.91 3.91 0 0 0 7 19.628v19.485C7 41.26 8.713 43 10.825 43h26.35C39.288 43 41 41.26 41 39.113V19.628a3.91 3.91 0 0 0-1.431-3.031zM33 40.41v-.002l-.075.002h-22.1c-.704 0-1.275-.58-1.275-1.296V19.628a1.3 1.3 0 0 1 .477-1.01L23.202 7.875a1.26 1.26 0 0 1 1.596 0l13.175 10.741c.302.246.477.618.477 1.011v19.485c0 .716-.57 1.296-1.275 1.296z"/>`
} as const;

export default function HomeMoreIcon({ 
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

  const gradientId = 'homemoreicon_gradient';
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