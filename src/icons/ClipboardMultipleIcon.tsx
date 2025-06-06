import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 1a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v8A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 10.5 2h-.585A1.5 1.5 0 0 0 8.5 1zM6 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m7 9V3.27c.6.35 1 .99 1 1.73v6.5c0 1.93-1.57 3.5-3.5 3.5H6c-.74 0-1.38-.4-1.73-1h6.23a2.5 2.5 0 0 0 2.5-2.5"/>`,
  'regular': `<path d="M6.5 1a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v8A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 10.5 2h-.585A1.5 1.5 0 0 0 8.5 1zM6 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M4.5 3h.585A1.5 1.5 0 0 0 6.5 4h2a1.5 1.5 0 0 0 1.415-1h.585a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5m8.5 8.5V3.27c.6.35 1 .99 1 1.73v6.5c0 1.93-1.57 3.5-3.5 3.5H6c-.74 0-1.38-.4-1.73-1h6.23a2.5 2.5 0 0 0 2.5-2.5"/>`
} as const;

export default function ClipboardMultipleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'clipboardmultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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