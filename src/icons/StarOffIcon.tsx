import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l6.297 6.298-4.526.657c-1.19.173-1.664 1.635-.803 2.473l4.354 4.245-1.028 5.993c-.203 1.184 1.04 2.087 2.104 1.528L14 21.644l5.382 2.83c1.063.56 2.307-.344 2.103-1.529l-.082-.481 3.316 3.317a.75.75 0 0 0 1.061-1.061zm7.566 5.444 9.679 9.68-.067-.391 4.354-4.245c.86-.838.385-2.3-.804-2.473l-6.017-.874L15.3 3.908c-.532-1.077-2.069-1.077-2.6 0z"/>`,
  'regular': `<path d="m3.28 2.22 22.5 22.5a.75.75 0 0 1-1.06 1.06l-3.317-3.316.082.482c.204 1.184-1.04 2.087-2.103 1.528L14 21.644l-5.382 2.83c-1.064.56-2.307-.344-2.104-1.529l1.028-5.992-4.354-4.245c-.861-.838-.386-2.3.803-2.473l4.526-.657L2.22 3.28a.75.75 0 1 1 1.06-1.06m16.286 18.407L9.84 10.9l-5.533.804 4.3 4.192c.342.333.498.813.417 1.283L8.01 23.1l5.316-2.795a1.45 1.45 0 0 1 1.35 0l5.315 2.794zm-8.72-12.963 1.12 1.12L14 4.663l2.657 5.385c.212.428.62.725 1.092.793l5.943.864-4.3 4.192a1.5 1.5 0 0 0-.147.167l1.28 1.28-.067-.391 4.354-4.245c.86-.838.385-2.3-.804-2.473l-6.017-.874L15.3 3.908c-.532-1.077-2.069-1.077-2.6 0z"/>`
} as const;

export default function StarOffIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'starofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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