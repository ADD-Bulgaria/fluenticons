import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-3.5 8c0-1.152.433-2.204 1.146-3H6a3 3 0 0 0-3 3v3.5a1 1 0 0 0 1 1h4.5zm15 0a4.48 4.48 0 0 0-1.146-3H26a3 3 0 0 1 3 3v3.5a1 1 0 0 1-1 1h-4.5zM3 23.5A1.5 1.5 0 0 1 4.5 22h23a1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 23.5m1-15a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m17 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M10 16a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4.5H10z"/>`,
  'regular': `<path d="M14 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-3 9a3 3 0 0 0-3 3v3.5a1 1 0 1 0 2 0V16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.5a1 1 0 1 0 2 0V16a3 3 0 0 0-3-3zm-8.5 9A1.5 1.5 0 0 0 3 23.5 4.5 4.5 0 0 0 7.5 28h17a4.5 4.5 0 0 0 4.5-4.5 1.5 1.5 0 0 0-1.5-1.5zm3 4a2.5 2.5 0 0 1-2.45-2h21.9a2.5 2.5 0 0 1-2.45 2zm15.889-11H26a1 1 0 0 1 1 1v3.5a1 1 0 1 0 2 0V16a3 3 0 0 0-3-3h-3.646c.5.559.863 1.243 1.035 2M9.646 13H6a3 3 0 0 0-3 3v3.5a1 1 0 1 0 2 0V16a1 1 0 0 1 1-1h2.612a4.5 4.5 0 0 1 1.034-2M7.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M4 8.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m19 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M24.5 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>`
} as const;

export default function PeopleAudienceIcon({ 
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

  const gradientId = 'peopleaudienceicon_gradient';
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