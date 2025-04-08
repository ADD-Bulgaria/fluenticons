import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 20.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m.5-4V2.995a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.117zm-6.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m.5-4V2.995a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.117zm-6.492 4a1.5 1.5 0 1 1 2.999 0 1.5 1.5 0 0 1-3 0m.493-4V2.995a1 1 0 0 1 1.993-.117L7 2.995V16.5a1 1 0 0 1-1.993.117z"/>`,
  'regular': `<path d="M17.5 20.75a1.25 1.25 0 1 1 2.499 0 1.25 1.25 0 0 1-2.499 0m.5-3.5V2.75a.75.75 0 0 1 1.493-.102l.007.102v14.5a.75.75 0 0 1-1.493.102zm-7 3.5a1.25 1.25 0 1 1 2.499 0 1.25 1.25 0 0 1-2.499 0m.5-3.5V2.75a.75.75 0 0 1 1.493-.102L13 2.75v14.5a.75.75 0 0 1-1.493.102zm-7 3.5a1.25 1.25 0 1 1 2.499 0 1.25 1.25 0 0 1-2.499 0m.5-3.5V2.75a.75.75 0 0 1 1.493-.102l.007.102v14.5a.75.75 0 0 1-1.493.102z"/>`
} as const;

export default function TextBulletListLtrRotate270Icon({ 
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

  const gradientId = 'textbulletlistltrrotate270icon_gradient';
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