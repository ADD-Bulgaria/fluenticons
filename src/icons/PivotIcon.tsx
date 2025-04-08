import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.5V17a3.5 3.5 0 0 0 3.5 3.5h4.379a2.25 2.25 0 0 1 .53-2.341l1.5-1.5a2.25 2.25 0 0 1 3.713.841h.878v-.878a2.25 2.25 0 0 1-.841-3.713l1.5-1.5a2.25 2.25 0 0 1 2.341-.53V6.5A3.5 3.5 0 0 0 17 3H6.5A3.5 3.5 0 0 0 3 6.5M6.5 5h1A1.5 1.5 0 0 1 9 6.5v1A1.5 1.5 0 0 1 7.5 9h-1A1.5 1.5 0 0 1 5 7.5v-1A1.5 1.5 0 0 1 6.5 5M11 6.5A1.5 1.5 0 0 1 12.5 5H17a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 17 9h-4.5A1.5 1.5 0 0 1 11 7.5zM7.5 11A1.5 1.5 0 0 1 9 12.5V17a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 5 17v-4.5A1.5 1.5 0 0 1 6.5 11zm12.78 1.47a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.22-.22v2.44A1.75 1.75 0 0 1 17.25 19h-2.44l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h2.44a3.25 3.25 0 0 0 3.25-3.25v-2.44l.22.22a.75.75 0 1 0 1.06-1.06z"/>`,
  'regular': `<path d="M4.5 6.25c0-.966.784-1.75 1.75-1.75h11c.966 0 1.75.784 1.75 1.75v4.629a2.25 2.25 0 0 1 1.5 0V6.25A3.25 3.25 0 0 0 17.25 3h-11A3.25 3.25 0 0 0 3 6.25v11a3.25 3.25 0 0 0 3.25 3.25h4.629a2.25 2.25 0 0 1 0-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5.5 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM6 12.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm14.28-.03a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 1 0 1.06 1.06l.22-.22v2.44A1.75 1.75 0 0 1 17.25 19h-2.44l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h2.44a3.25 3.25 0 0 0 3.25-3.25v-2.44l.22.22a.75.75 0 1 0 1.06-1.06z"/>`
} as const;

export default function PivotIcon({ 
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

  const gradientId = 'pivoticon_gradient';
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