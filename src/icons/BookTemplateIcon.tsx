import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 1A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H8V9H5.5a.5.5 0 0 1 0-1h2.67a3 3 0 0 1 .594-1H5.5a.5.5 0 0 1 0-1H16V3.5A2.5 2.5 0 0 0 13.5 1zM5 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1v-.003h7.5a.5.5 0 0 0 .5-.5zm-8 6.997V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6.997z"/>`,
  'regular': `<path d="M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5V6h-1V3.5A1.5 1.5 0 0 0 13.5 2h-9A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14H8v1H4.5A2.5 2.5 0 0 1 2 12.5zM5.5 6H11a3 3 0 0 0-2.236 1H5.5a.5.5 0 0 1 0-1m2.67 2H5.5a.5.5 0 0 0 0 1H8c0-.35.06-.687.17-1M5.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1v-.003h7.5a.5.5 0 0 0 .5-.5zm-8 6.997V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6.997z"/>`
} as const;

export default function BookTemplateIcon({ 
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

  const gradientId = 'booktemplateicon_gradient';
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