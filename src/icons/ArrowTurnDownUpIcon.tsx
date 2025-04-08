import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M38.866 6.88a1.5 1.5 0 0 0-1.943-.764l-12 5a1.5 1.5 0 0 0 1.154 2.769l8.781-3.659-11.822 28.137L10.893 7.944a1.5 1.5 0 1 0-2.786 1.112L20.702 40.61c.83 2.078 3.76 2.104 4.627.042l12.293-29.258 3.513 7.728a1.5 1.5 0 0 0 2.73-1.241z"/>`,
  'regular': `<path d="M38.378 6.71a1.25 1.25 0 0 0-1.608-.614l-12 5a1.25 1.25 0 1 0 .961 2.308l9.483-3.951L23 39.273 10.407 8.525a1.25 1.25 0 0 0-2.313.948l12.824 31.31c.763 1.864 3.401 1.864 4.164 0l12.374-30.207 4.167 8.713a1.25 1.25 0 1 0 2.255-1.08z"/>`
} as const;

export default function ArrowTurnDownUpIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'arrowturndownupicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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