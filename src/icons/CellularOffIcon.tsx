import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L11 12.06V19a1 1 0 1 0 2 0v-4.94l2 2v2.945c0 .55.448.995 1 .995s1-.446 1-.995v-.944l3.72 3.72a.75.75 0 0 0 1.06-1.061zM19 15.818l2 2V6a1 1 0 0 0-2 0zm-4-4 2 2V8.995A1 1 0 0 0 16 8c-.552 0-1 .446-1 .995zM8 14c.552 0 1 .445 1 .994v4.012A.997.997 0 0 1 8 20c-.552 0-1-.445-1-.994v-4.012A.997.997 0 0 1 8 14m-4 3c.552 0 1 .44 1 .984v1.032A.99.99 0 0 1 4 20c-.552 0-1-.44-1-.984v-1.032A.99.99 0 0 1 4 17"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L11 12.06v7.19l.007.102a.75.75 0 0 0 1.493-.102v-5.69l2.5 2.5v3.19l.007.102a.75.75 0 0 0 1.493-.102v-1.69l4.22 4.22a.75.75 0 0 0 1.06-1.06zM19 15.818l1.5 1.5V5.742l-.008-.101A.75.75 0 0 0 19 5.757zm-4-4 1.5 1.5V8.75l-.007-.102A.75.75 0 0 0 15 8.75zM3.75 17a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 19.25v-1.5a.75.75 0 0 1 .75-.75m4-3a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 19.249V14.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function CellularOffIcon({ 
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

  const gradientId = 'cellularofficon_gradient';
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