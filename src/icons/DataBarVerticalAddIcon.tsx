import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.25 3A2.25 2.25 0 0 0 16 5.25v5.924A6.5 6.5 0 0 1 17.498 11h.002c1.081 0 2.101.264 2.998.731V5.25A2.25 2.25 0 0 0 18.25 3m-4.252 6.25v2.772a6.5 6.5 0 0 0-3 5.478 6.47 6.47 0 0 0 1.012 3.485q-.128.015-.26.015a2.25 2.25 0 0 1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.498 0M3 13.25a2.25 2.25 0 1 1 4.498 0v5.5a2.25 2.25 0 1 1-4.498 0zm20 4.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`,
  'regular': `<path d="M18.25 3A2.25 2.25 0 0 0 16 5.25v5.924A6.5 6.5 0 0 1 17.498 11h.002V5.25a.75.75 0 0 1 1.498 0v5.924c.528.124 1.03.313 1.5.557V5.25A2.25 2.25 0 0 0 18.25 3m-4.252 6.25v2.772a6.5 6.5 0 0 0-1.5 1.324V9.25a.75.75 0 0 0-1.498 0v8.095a7 7 0 0 0 0 .312v1.095c0 .224.098.425.255.563.173.597.43 1.158.755 1.671q-.128.015-.26.015a2.25 2.25 0 0 1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.498 0M3 13.25a2.25 2.25 0 1 1 4.498 0v5.5a2.25 2.25 0 1 1-4.498 0zm2.998 0a.75.75 0 0 0-1.498 0v5.5a.75.75 0 0 0 1.498 0zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function DataBarVerticalAddIcon({ 
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

  const gradientId = 'databarverticaladdicon_gradient';
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