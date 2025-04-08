import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 10c-7.732 0-14 6.268-14 14s6.268 14 14 14h12c7.732 0 14-6.268 14-14s-6.268-14-14-14zm-1.75 8c.69 0 1.25.56 1.25 1.25V23h3.25a1.25 1.25 0 1 1 0 2.5H17.5v3.25a1.25 1.25 0 1 1-2.5 0V25.5h-3.75a1.25 1.25 0 1 1 0-2.5H15v-3.75c0-.69.56-1.25 1.25-1.25M32 27.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m1.5-4.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>`,
  'regular': `<path d="M16.25 18c.69 0 1.25.56 1.25 1.25V23h3.25a1.25 1.25 0 1 1 0 2.5H17.5v3.25a1.25 1.25 0 0 1-2.5 0V25.5h-3.75a1.25 1.25 0 0 1 0-2.5H15v-3.75c0-.69.56-1.25 1.25-1.25M32 27.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m1.5-4.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M4 24c0-7.732 6.268-14 14-14h12c7.732 0 14 6.268 14 14s-6.268 14-14 14H18c-7.732 0-14-6.268-14-14m14-11.5c-6.351 0-11.5 5.149-11.5 11.5S11.649 35.5 18 35.5h12c6.351 0 11.5-5.149 11.5-11.5S36.351 12.5 30 12.5z"/>`
} as const;

export default function GamesIcon({ 
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

  const gradientId = 'gamesicon_gradient';
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