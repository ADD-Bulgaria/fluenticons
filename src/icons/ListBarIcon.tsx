import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M11 28h14.5a2.5 2.5 0 0 0 2.5-2.5v-2a2.5 2.5 0 0 0-2.5-2.5H11l-1 3.5zm0-9h14.5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H11l-1 3zm0-8h14.5A2.5 2.5 0 0 0 28 8.5v-2A2.5 2.5 0 0 0 25.5 4H11l-1 3.5z"/><path d="M11 13v6H6.5A2.5 2.5 0 0 1 4 16.5v-1A2.5 2.5 0 0 1 6.5 13zm0-9v7H6.5A2.5 2.5 0 0 1 4 8.5v-2A2.5 2.5 0 0 1 6.5 4zm0 17v7H6.5A2.5 2.5 0 0 1 4 25.5v-2A2.5 2.5 0 0 1 6.5 21z"/>`,
  'filled': `<path d="M12 28h13.5a2.5 2.5 0 0 0 2.5-2.5v-2a2.5 2.5 0 0 0-2.5-2.5H12zm0-9h13.5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H12zm-2-6v6H6.5A2.5 2.5 0 0 1 4 16.5v-1A2.5 2.5 0 0 1 6.5 13zm2-2h13.5A2.5 2.5 0 0 0 28 8.5v-2A2.5 2.5 0 0 0 25.5 4H12zm-2-7v7H6.5A2.5 2.5 0 0 1 4 8.5v-2A2.5 2.5 0 0 1 6.5 4zm0 17v7H6.5A2.5 2.5 0 0 1 4 25.5v-2A2.5 2.5 0 0 1 6.5 21z"/>`,
  'regular': `<path d="M7.5 4A3.5 3.5 0 0 0 4 7.5v2c0 .98.402 1.865 1.05 2.5A3.5 3.5 0 0 0 4 14.5v3c0 .98.402 1.865 1.05 2.5A3.5 3.5 0 0 0 4 22.5v2A3.5 3.5 0 0 0 7.5 28h17a3.5 3.5 0 0 0 3.5-3.5v-2a3.5 3.5 0 0 0-1.05-2.5A3.5 3.5 0 0 0 28 17.5v-3a3.5 3.5 0 0 0-1.05-2.5A3.5 3.5 0 0 0 28 9.5v-2A3.5 3.5 0 0 0 24.5 4zM6 22.5A1.5 1.5 0 0 1 7.5 21H10v5H7.5A1.5 1.5 0 0 1 6 24.5zm6 3.5v-5h12.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5zm0-7v-6h12.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5zm0-8V6h12.5A1.5 1.5 0 0 1 26 7.5v2a1.5 1.5 0 0 1-1.5 1.5zm-2-5v5H7.5A1.5 1.5 0 0 1 6 9.5v-2A1.5 1.5 0 0 1 7.5 6zm0 7v6H7.5A1.5 1.5 0 0 1 6 17.5v-3A1.5 1.5 0 0 1 7.5 13z"/>`
} as const;

export default function ListBarIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'listbaricon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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