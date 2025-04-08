import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.75 4h4a2.75 2.75 0 0 1 2.75 2.75v10.5A2.75 2.75 0 0 1 8.75 20h-4A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4M6 9v6a.75.75 0 0 0 1.5 0V9A.75.75 0 0 0 6 9m9.25-5h4A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20h-4a2.75 2.75 0 0 1-2.75-2.75V6.75A2.75 2.75 0 0 1 15.25 4m2.25 5.75v1.5h-1.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5H17v-1.5h1.25A.75.75 0 0 0 19 12V9a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5z"/>`,
  'regular': `<path d="M8.75 4a2.75 2.75 0 0 1 2.75 2.75v10.5A2.75 2.75 0 0 1 8.75 20h-4A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4zm0 1.5h-4c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25M19.25 4A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20h-4a2.75 2.75 0 0 1-2.75-2.75V6.75A2.75 2.75 0 0 1 15.25 4zm0 1.5h-4c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25M6 9v6a.75.75 0 0 0 1.5 0V9A.75.75 0 0 0 6 9m11.5.75v1.5h-1.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5H17v-1.5h1.25A.75.75 0 0 0 19 12V9a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5z"/>`
} as const;

export default function NumberRowIcon({ 
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

  const gradientId = 'numberrowicon_gradient';
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