import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.75 4c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-5.5a1.25 1.25 0 1 1 0-2.5H9.5V5.25c0-.69.56-1.25 1.25-1.25m26.5 0c.69 0 1.25.56 1.25 1.25V9.5h4.25a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25v-5.5c0-.69.56-1.25 1.25-1.25M14 14.5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v19a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5zm6.25 4.5a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm0 5a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5zM12 42.75a1.25 1.25 0 1 1-2.5 0V38.5H5.25a1.25 1.25 0 1 1 0-2.5h5.5c.69 0 1.25.56 1.25 1.25zm26.5 0a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5H38.5z"/>`,
  'regular': `<path d="M10.75 4c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-5.5a1.25 1.25 0 1 1 0-2.5H9.5V5.25c0-.69.56-1.25 1.25-1.25m26.5 0c.69 0 1.25.56 1.25 1.25V9.5h4.25a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25v-5.5c0-.69.56-1.25 1.25-1.25M16.5 12a2.5 2.5 0 0 0-2.5 2.5v19a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-19a2.5 2.5 0 0 0-2.5-2.5zm0 2.5h15v19h-15zm3.75 4.5a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm0 5a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5zM12 42.75a1.25 1.25 0 1 1-2.5 0V38.5H5.25a1.25 1.25 0 1 1 0-2.5h5.5c.69 0 1.25.56 1.25 1.25zm26.5 0a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5H38.5z"/>`
} as const;

export default function MobileOptimizedIcon({ 
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

  const gradientId = 'mobileoptimizedicon_gradient';
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