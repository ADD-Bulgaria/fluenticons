import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.117 9a4.25 4.25 0 0 0-3.813 2.373L6.155 21.83a6.7 6.7 0 0 1 2.095-.33h31.5c.731 0 1.435.116 2.095.331l-5.149-10.458A4.25 4.25 0 0 0 32.883 9zM4 28.25v6.5A4.25 4.25 0 0 0 8.25 39h31.5A4.25 4.25 0 0 0 44 34.75v-6.5A4.25 4.25 0 0 0 39.75 24H8.25A4.25 4.25 0 0 0 4 28.25m34.5 3.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M11.304 11.373A4.25 4.25 0 0 1 15.117 9h17.766c1.62 0 3.098.92 3.813 2.373l6.661 13.53q.116.236.211.478A4.2 4.2 0 0 1 44 27.25v7.5A4.25 4.25 0 0 1 39.75 39H8.25A4.25 4.25 0 0 1 4 34.75v-7.5c0-.67.155-1.305.432-1.869q.095-.241.21-.477zm23.15 1.104a1.75 1.75 0 0 0-1.57-.977H15.116a1.75 1.75 0 0 0-1.57.977L8.367 23h31.267zM6.718 26.402a3.8 3.8 0 0 0-.219 1.262v7.086c0 .967.784 1.75 1.75 1.75h31.5a1.75 1.75 0 0 0 1.75-1.75v-7.086c0-.431-.074-.858-.219-1.262a1.75 1.75 0 0 0-1.531-.902H8.25a1.75 1.75 0 0 0-1.531.902M36 33a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`
} as const;

export default function HardDriveIcon({ 
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

  const gradientId = 'harddriveicon_gradient';
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