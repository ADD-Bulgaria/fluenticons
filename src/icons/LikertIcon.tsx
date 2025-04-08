import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 4H5a3 3 0 0 0-3 3v4.25h4zm-4 8.75V17a3 3 0 0 0 3 3h1v-7.25zM7.5 20H19a3 3 0 0 0 3-3v-4.25H7.5zm3.75-3.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.75 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-5H7.5V4H19a3 3 0 0 1 3 3zm-11.75-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.75-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`,
  'regular': `<path d="M10.75 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.75 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9.75 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2.75 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm14 1.5A1.5 1.5 0 0 1 20.5 7v4.25h-13V5.5zm1.5 7.25V17a1.5 1.5 0 0 1-1.5 1.5H7.5v-5.75zM6 11.25H3.5V7A1.5 1.5 0 0 1 5 5.5h1zm-2.5 1.5H6v5.75H5A1.5 1.5 0 0 1 3.5 17z"/>`
} as const;

export default function LikertIcon({ 
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

  const gradientId = 'likerticon_gradient';
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