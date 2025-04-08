import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.001 13.5a3.5 3.5 0 0 1-3.5 3.5H5.672c.773.625 1.757 1 2.829 1h5a4.5 4.5 0 0 0 4.5-4.5v-5a4.48 4.48 0 0 0-1-2.829zM4.501 16H6v-4H2v1.5A2.5 2.5 0 0 0 4.5 16M6 7v4H2V7zm5 4H7V7h4zm-4 1h4v4H7zm5-5v4h4V7zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H12zM2 6h4V2H4.5A2.5 2.5 0 0 0 2 4.5zm5 0V2h4v4zm5 0V2h1.5A2.5 2.5 0 0 1 16 4.5V6z"/>`,
  'regular': `<path d="M5.672 17h7.834a3.5 3.5 0 0 0 2.458-1.014l.011-.011.012-.011A3.5 3.5 0 0 0 17 13.5V5.671c.626.773 1 1.757 1 2.83v5a4.5 4.5 0 0 1-4.5 4.5h-5a4.48 4.48 0 0 1-2.828-1m9.596-14.268A2.5 2.5 0 0 1 16 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 13.5v-9A2.5 2.5 0 0 1 4.5 2h9a2.5 2.5 0 0 1 1.768.732M4.5 3l-.144.007A1.5 1.5 0 0 0 3 4.5V6h3V3zM11 3H7v3h4zm4 1.5-.007-.144A1.5 1.5 0 0 0 13.5 3H12v3h3zM7 7v4h4V7zm8 0h-3v4h3zm-8 5v3h4v-3zm8 0h-3v3h1.5l.144-.007A1.5 1.5 0 0 0 15 13.5zM3.492 14.61A1.5 1.5 0 0 0 4.5 15H6v-3H3v1.5l.007.144a1.5 1.5 0 0 0 .485.966M3 7v4h3V7z"/>`
} as const;

export default function TableMultipleIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'tablemultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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