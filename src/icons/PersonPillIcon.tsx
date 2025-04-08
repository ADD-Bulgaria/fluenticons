import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.683 21.997a3.87 3.87 0 0 1 .58-4.735L15.526 14H6.253a2.25 2.25 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596 1.494 2.097 3.909 3.168 7.169 3.233M17 7.004a5 5 0 1 0-10 0 5 5 0 0 0 10 0m.97 5.965a2.871 2.871 0 0 1 4.06 4.061l-5 5a2.871 2.871 0 0 1-4.06-4.06zm3 1.061a1.37 1.37 0 0 0-1.94 0L17.06 16 19 17.94l1.97-1.97a1.37 1.37 0 0 0 0-1.94m-3.94 6a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"/>`,
  'regular': `<path d="M11.158 20.475c.065.53.24 1.05.525 1.522-2.99-.06-5.268-.964-6.78-2.736a3.75 3.75 0 0 1-.9-2.435v-.578A2.25 2.25 0 0 1 6.254 14h9.273l-1.5 1.5H6.253a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46 1.12 1.313 2.812 2.049 5.115 2.19M12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m10.03 9.465a2.87 2.87 0 0 0-4.06 0l-5 5a2.871 2.871 0 0 0 4.06 4.061l5-5a2.87 2.87 0 0 0 0-4.06m-3 1.061a1.371 1.371 0 1 1 1.94 1.94L19 17.94 17.06 16zm-2 4.94a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function PersonPillIcon({ 
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

  const gradientId = 'personpillicon_gradient';
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