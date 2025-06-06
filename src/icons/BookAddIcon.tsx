import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 2A3.75 3.75 0 0 0 5 5.75v16.5A3.75 3.75 0 0 0 8.75 26h6.65a7.5 7.5 0 0 1-1.246-1.5H8.75a2.25 2.25 0 0 1-2.236-2h6.756A7.5 7.5 0 0 1 23 13.427V5.75A3.75 3.75 0 0 0 19.25 2zM8.5 6.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"/>`,
  'regular': `<path d="M8.75 2A3.75 3.75 0 0 0 5 5.75v16.5A3.75 3.75 0 0 0 8.75 26h6.65a7.5 7.5 0 0 1-1.246-1.5H8.75a2.25 2.25 0 0 1-2.236-2h6.756a7.5 7.5 0 0 1-.254-1.5H6.5V5.75A2.25 2.25 0 0 1 8.75 3.5h10.5a2.25 2.25 0 0 1 2.25 2.25v7.316q.78.106 1.5.36V5.75A3.75 3.75 0 0 0 19.25 2zm1 3.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zM10 9V7h8v2zm17 11.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"/>`
} as const;

export default function BookAddIcon({ 
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

  const gradientId = 'bookaddicon_gradient';
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