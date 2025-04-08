import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 6A3.25 3.25 0 0 0 2 9.25v10.5A3.25 3.25 0 0 0 5.25 23h8.177A7.503 7.503 0 0 1 18 13.427V9.25A3.25 3.25 0 0 0 14.75 6zm19.998 2.753v5.941A7.47 7.47 0 0 0 20.5 13q-.51 0-1 .066V11.5l3.612-3.628c.787-.79 2.136-.233 2.136.882M20.5 27a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m0-1.5a4.98 4.98 0 0 1-2.965-.974l6.991-6.991A5 5 0 0 1 20.5 25.5m2.965-9.026-6.991 6.991a5 5 0 0 1 6.991-6.991"/>`,
  'regular': `<path d="M5.25 6A3.25 3.25 0 0 0 2 9.25v10.5A3.25 3.25 0 0 0 5.25 23h8.177a7.5 7.5 0 0 1-.36-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75V9.25c0-.966.784-1.75 1.75-1.75h10.502c.967 0 1.75.784 1.75 1.75v4.373a7.4 7.4 0 0 1 1.5-.473v-.505L24 9.223v4.642a7.5 7.5 0 0 1 1.5 1.045V8.748a1.25 1.25 0 0 0-1.956-1.03l-4.542 3.11V9.25A3.25 3.25 0 0 0 15.752 6zM20.5 27a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m0-1.5a4.98 4.98 0 0 1-2.965-.974l6.991-6.991A5 5 0 0 1 20.5 25.5m2.965-9.026-6.991 6.991a5 5 0 0 1 6.991-6.991"/>`
} as const;

export default function VideoProhibitedIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'videoprohibitedicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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