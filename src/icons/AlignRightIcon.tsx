import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M41.5 5.25a1.25 1.25 0 1 0-2.5 0v37.5a1.25 1.25 0 1 0 2.5 0zM32.25 26a4.25 4.25 0 0 1 4.25 4.25v5.5A4.25 4.25 0 0 1 32.25 40h-15A4.25 4.25 0 0 1 13 35.75v-5.5A4.25 4.25 0 0 1 17.25 26zm4.25-13.75v5.5A4.25 4.25 0 0 1 32.25 22H10a4.25 4.25 0 0 1-4.25-4.25v-5.5A4.25 4.25 0 0 1 10 8h22.25a4.25 4.25 0 0 1 4.25 4.25"/>`,
  'regular': `<path d="M41.5 5.25a1.25 1.25 0 1 0-2.5 0v37.5a1.25 1.25 0 1 0 2.5 0zM32.25 26a4.25 4.25 0 0 1 4.25 4.25v5.5A4.25 4.25 0 0 1 32.25 40h-15A4.25 4.25 0 0 1 13 35.75v-5.5A4.25 4.25 0 0 1 17.25 26zM34 30.25a1.75 1.75 0 0 0-1.75-1.75h-15a1.75 1.75 0 0 0-1.75 1.75v5.5c0 .967.784 1.75 1.75 1.75h15A1.75 1.75 0 0 0 34 35.75zm2.5-18v5.5A4.25 4.25 0 0 1 32.25 22H10a4.25 4.25 0 0 1-4.25-4.25v-5.5A4.25 4.25 0 0 1 10 8h22.25a4.25 4.25 0 0 1 4.25 4.25m-2.5 5.5v-5.5a1.75 1.75 0 0 0-1.75-1.75H10a1.75 1.75 0 0 0-1.75 1.75v5.5c0 .966.784 1.75 1.75 1.75h22.25A1.75 1.75 0 0 0 34 17.75"/>`
} as const;

export default function AlignRightIcon({ 
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

  const gradientId = 'alignrighticon_gradient';
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