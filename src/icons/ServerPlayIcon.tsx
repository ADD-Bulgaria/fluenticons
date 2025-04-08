import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h2.757a5.5 5.5 0 0 1-1.235-3H7.5a.5.5 0 0 1 0-1h1.522a5.5 5.5 0 0 1 .185-1H7.5a.5.5 0 0 1 0-1h2.1A5.5 5.5 0 0 1 15 9.022V4.5A2.5 2.5 0 0 0 12.5 2zM7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m12 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.287-.437-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874"/>`,
  'regular': `<path d="M14 9.022V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5v11A1.5 1.5 0 0 0 7.5 17h2.1q.276.538.657 1H7.5A2.5 2.5 0 0 1 5 15.5v-11A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5v4.522a5.6 5.6 0 0 0-1 0M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 12.5a.5.5 0 0 1 .5-.5h2.1a5.5 5.5 0 0 0-.393 1H7.5a.5.5 0 0 1-.5-.5m2 2q0-.252.022-.5H7.5a.5.5 0 0 0 0 1h1.522A6 6 0 0 1 9 14.5m10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.287-.437-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874"/>`
} as const;

export default function ServerPlayIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'serverplayicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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