import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m3.78-9.22-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 3.47-3.47a.75.75 0 1 1 1.06 1.06m8 6.94a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.47-3.47a.75.75 0 0 1 1.06 0M9.75 20v-3.091a8.4 8.4 0 0 0 1.5-.364V20c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 21.75 20v-7A1.75 1.75 0 0 0 20 11.25h-3.455q.249-.724.364-1.5H20A3.25 3.25 0 0 1 23.25 13v7A3.25 3.25 0 0 1 20 23.25h-7A3.25 3.25 0 0 1 9.75 20"/>`,
  'regular': `<path d="M14.5 8.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0m1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m4.28 6.28a.75.75 0 1 0-1.06-1.06l-3.47 3.47-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0zm-8-9.06a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 3.47-3.47a.75.75 0 0 1 1.06 0M9.75 20v-3.091a8.4 8.4 0 0 0 1.5-.364V20c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 21.75 20v-7A1.75 1.75 0 0 0 20 11.25h-3.455q.249-.724.364-1.5H20A3.25 3.25 0 0 1 23.25 13v7A3.25 3.25 0 0 1 20 23.25h-7A3.25 3.25 0 0 1 9.75 20"/>`
} as const;

export default function CheckmarkCircleSquareIcon({ 
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

  const gradientId = 'checkmarkcirclesquareicon_gradient';
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