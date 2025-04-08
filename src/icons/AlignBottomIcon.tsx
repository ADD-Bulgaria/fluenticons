import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 41.5a1.25 1.25 0 1 1 0-2.5h37.5a1.25 1.25 0 1 1 0 2.5zM26 32.25a4.25 4.25 0 0 0 4.25 4.25h5.5A4.25 4.25 0 0 0 40 32.25v-15A4.25 4.25 0 0 0 35.75 13h-5.5A4.25 4.25 0 0 0 26 17.25zM12.25 36.5h5.5A4.25 4.25 0 0 0 22 32.25V10a4.25 4.25 0 0 0-4.25-4.25h-5.5A4.25 4.25 0 0 0 8 10v22.25a4.25 4.25 0 0 0 4.25 4.25"/>`,
  'regular': `<path d="M5.25 41.5a1.25 1.25 0 1 1 0-2.5h37.5a1.25 1.25 0 1 1 0 2.5zM26 32.25a4.25 4.25 0 0 0 4.25 4.25h5.5A4.25 4.25 0 0 0 40 32.25v-15A4.25 4.25 0 0 0 35.75 13h-5.5A4.25 4.25 0 0 0 26 17.25zM30.25 34a1.75 1.75 0 0 1-1.75-1.75v-15c0-.966.784-1.75 1.75-1.75h5.5c.967 0 1.75.784 1.75 1.75v15A1.75 1.75 0 0 1 35.75 34zm-18 2.5h5.5A4.25 4.25 0 0 0 22 32.25V10a4.25 4.25 0 0 0-4.25-4.25h-5.5A4.25 4.25 0 0 0 8 10v22.25a4.25 4.25 0 0 0 4.25 4.25m5.5-2.5h-5.5a1.75 1.75 0 0 1-1.75-1.75V10c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v22.25A1.75 1.75 0 0 1 17.75 34"/>`
} as const;

export default function AlignBottomIcon({ 
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

  const gradientId = 'alignbottomicon_gradient';
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