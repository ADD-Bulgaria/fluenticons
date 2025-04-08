import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1v5.269a2 2 0 0 0-.412.317l-4.002 4.002a2 2 0 0 0 0 2.828l4.002 4.003a2 2 0 0 0 2.828 0l4.003-4.003q.19-.191.32-.416h5.26v1a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1h-5.263a2 2 0 0 0-.317-.412l-4.003-4.002a2 2 0 0 0-.416-.32V13h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/>`,
  'regular': `<path d="M3 6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9v5.266a2 2 0 0 1 .416.32l4.003 4.002a2 2 0 0 1 .317.412H19v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-1h-5.262q-.128.225-.32.416L9.417 29.42a2 2 0 0 1-2.828 0l-4.002-4.003a2 2 0 0 1 0-2.828l4.002-4.002q.19-.19.412-.317V13H6a3 3 0 0 1-3-3zm5.002 14L4 24.002l4.002 4.002L12 24.007v-.01zM6 5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm16 16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/>`
} as const;

export default function FlowchartIcon({ 
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

  const gradientId = 'flowcharticon_gradient';
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