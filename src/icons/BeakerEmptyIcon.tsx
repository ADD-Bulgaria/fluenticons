import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.56 11.74 10.95 9l-.61-1.05c-.22-.38-.34-.82-.34-1.26V3h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5H6v3.69c0 .44-.12.88-.34 1.26L5.05 9l-1.61 2.74c-.58 1 .14 2.26 1.3 2.26h6.52c1.16 0 1.88-1.26 1.3-2.26"/>`,
  'regular': `<path d="M12.56 11.74 10.95 9l-.61-1.05c-.22-.38-.34-.82-.34-1.26V3h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5H6v3.69c0 .44-.12.88-.34 1.26L5.05 9l-1.61 2.74c-.58 1 .14 2.26 1.3 2.26h6.52c1.16 0 1.88-1.26 1.3-2.26M11.26 13H4.74c-.39 0-.63-.42-.43-.75L5.62 10l.58-1 .32-.55A3.4 3.4 0 0 0 7 6.69V3h2v3.69c0 .62.16 1.23.48 1.76L9.8 9l.58 1 1.31 2.25c.19.33-.05.75-.43.75"/>`
} as const;

export default function BeakerEmptyIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'beakeremptyicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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