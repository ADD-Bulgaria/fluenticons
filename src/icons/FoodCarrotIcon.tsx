import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 2.75a.75.75 0 0 0-1.5 0v4.015c-2.026-1.358-4.867-.881-6.293 1.215L2.353 18.786c-.556.818-.45 1.91.255 2.608a2.1 2.1 0 0 0 2.667.23l10.79-7.469A4.454 4.454 0 0 0 17.24 8h4.009a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L17.5 5.439z"/>`,
  'regular': `<path d="M17.5 2.75a.75.75 0 0 0-1.5 0v4.014c-2.026-1.356-4.866-.88-6.292 1.216L2.355 18.786c-.556.818-.45 1.91.255 2.608a2.1 2.1 0 0 0 2.667.23l10.79-7.469A4.454 4.454 0 0 0 17.242 8h4.007a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L17.5 5.439zm-6.54 6.063c1.062-1.561 3.3-1.776 4.646-.445a2.97 2.97 0 0 1-.405 4.565l-10.788 7.47a.58.58 0 0 1-.736-.064.564.564 0 0 1-.07-.72z"/>`
} as const;

export default function FoodCarrotIcon({ 
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

  const gradientId = 'foodcarroticon_gradient';
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