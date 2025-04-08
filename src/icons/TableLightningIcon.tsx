import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75V9.5h6.5V3zM3 17v-6h6.5v6zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25M17 25h-6v-6.5h4.263l-1.117 2.358A1.5 1.5 0 0 0 15.502 23H17zm8-12v-2h-6.5v2.034q.155-.034.318-.034zm-8 1.834V11h-6v6h4.974zm8-8.084V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M11 3h6v6.5h-6zm7.817 11h6.328a.5.5 0 0 1 .436.745L23.751 18h1.514a.75.75 0 0 1 .569 1.24l-6.416 7.452c-.522.606-1.499.052-1.246-.707L19.5 22h-4a.5.5 0 0 1-.451-.714l3.316-7a.5.5 0 0 1 .452-.286"/>`,
  'regular': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h10.698l.666-2H17v.5h-6v-5h4.263l.71-1.5H11v-6h6v3.834l.462-.976a1.5 1.5 0 0 1 1.038-.824V11h5v2H25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 21.25V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M9.5 11v6h-5v-6zm11.75-6.5a2.25 2.25 0 0 1 2.25 2.25V9.5h-5v-5zM11 4.5h6v5h-6zm-4.25 0H9.5v5h-5V6.75A2.25 2.25 0 0 1 6.75 4.5M18.817 14h6.328a.5.5 0 0 1 .436.745L23.751 18h1.514a.75.75 0 0 1 .569 1.24l-6.416 7.452c-.522.606-1.499.052-1.246-.707L19.5 22h-4a.5.5 0 0 1-.451-.714l3.316-7a.5.5 0 0 1 .452-.286"/>`
} as const;

export default function TableLightningIcon({ 
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

  const gradientId = 'tablelightningicon_gradient';
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