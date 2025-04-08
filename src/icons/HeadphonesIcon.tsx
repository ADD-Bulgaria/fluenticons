import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24v4l1.5 1 1-1v-4c0-11.046-8.954-20-20-20S4 12.954 4 24v4l1 1 1.5-1z"/><path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24v4l1.5 1 1-1v-4c0-11.046-8.954-20-20-20S4 12.954 4 24v4l1 1 1.5-1z"/><path d="M4 38.25V28h2.5l3.5 7-3.5 7.994A5.74 5.74 0 0 1 4 38.25m40 0c0 1.97-.99 3.708-2.5 4.744l-3-7.494 3-7.5H44z"/><path d="M6.5 28v14.994A5.7 5.7 0 0 0 9.75 44h6c.69 0 1.25-.56 1.25-1.25v-13.5c0-.69-.56-1.25-1.25-1.25zm35 14.994V28h-9.25c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h6a5.7 5.7 0 0 0 3.25-1.006"/>`,
  'filled': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24v4h9.25c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-6A5.75 5.75 0 0 1 4 38.25V24C4 12.954 12.954 4 24 4s20 8.954 20 20v14.25A5.75 5.75 0 0 1 38.25 44h-6c-.69 0-1.25-.56-1.25-1.25v-13.5c0-.69.56-1.25 1.25-1.25h9.25v-4c0-9.665-7.835-17.5-17.5-17.5"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24v4h9.25c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-6A5.75 5.75 0 0 1 4 38.25V24C4 12.954 12.954 4 24 4s20 8.954 20 20v14.25A5.75 5.75 0 0 1 38.25 44h-6c-.69 0-1.25-.56-1.25-1.25v-13.5c0-.69.56-1.25 1.25-1.25h9.25v-4c0-9.665-7.835-17.5-17.5-17.5m17.5 24h-8v11h4.75a3.25 3.25 0 0 0 3.25-3.25zm-35 0v7.75a3.25 3.25 0 0 0 3.25 3.25h4.75v-11z"/>`
} as const;

export default function HeadphonesIcon({ 
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

  const gradientId = 'headphonesicon_gradient';
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