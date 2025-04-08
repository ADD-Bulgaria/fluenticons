import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H3.003v1H15a3.5 3.5 0 0 0-2.45 6c-.816 0-1.461.412-1.864.864A2.68 2.68 0 0 0 10 15.62v.32q.002.559.16 1.06H5.5A2.5 2.5 0 0 1 3 14.5zM15 13a2.5 2.5 0 1 1 2-4h-2v1h2.45a2.5 2.5 0 0 1 0 1H15v1h2c-.456.607-1.182 1-2 1m-2.45 1c-.465 0-.855.235-1.116.529-.26.291-.434.686-.434 1.091v.32c0 1.634 1.633 3.06 4 3.06 1.24 0 2.28-.392 2.988-1H15v-1h3.761a2.5 2.5 0 0 0 .238-1H15v-1h3.867a1.8 1.8 0 0 0-.3-.471c-.262-.294-.652-.529-1.117-.529z"/>`,
  'regular': `<path d="M5.497 3a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h4.664a3.5 3.5 0 0 1-.16-1H5.497a1.5 1.5 0 0 1-1.5-1.5V7H17V6h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5zm10.5 2.5V6h-12v-.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5M15 12a1.5 1.5 0 0 1 0-3h2a2.5 2.5 0 1 0 0 3zm-2.45 3c-.115 0-.25.06-.369.193a.68.68 0 0 0-.181.427v.32c0 .889.97 2.06 3 2.06h2.988c-.708.608-1.747 1-2.988 1-2.367 0-4-1.426-4-3.06v-.32c0-.405.175-.8.434-1.091.261-.294.651-.529 1.116-.529h4.9c.465 0 .855.235 1.116.529.122.137.226.298.3.471zm4.95-4.5q0 .257-.05.5H15v-1h2.45q.05.243.05.5M15 17h3.761a2.5 2.5 0 0 0 .238-1H15z"/>`
} as const;

export default function WindowInprivateAccountIcon({ 
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

  const gradientId = 'windowinprivateaccounticon_gradient';
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