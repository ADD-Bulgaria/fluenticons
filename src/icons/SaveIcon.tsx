import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 12A2.5 2.5 0 0 1 9 9.5V3H7.5A4.5 4.5 0 0 0 3 7.5v17a4.5 4.5 0 0 0 4 4.473V18.5A2.5 2.5 0 0 1 9.5 16h13a2.5 2.5 0 0 1 2.5 2.5v10.473a4.5 4.5 0 0 0 4-4.473V10.45a4.5 4.5 0 0 0-1.318-3.182l-2.95-2.95A4.5 4.5 0 0 0 22 3.023V9.5a2.5 2.5 0 0 1-2.5 2.5zM20 3h-9v6.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5zm3 26H9V18.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z"/>`,
  'light': `<path d="M7.5 29A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3h13.843q.06 0 .118.002a.5.5 0 0 1 .118.004 4.5 4.5 0 0 1 2.946 1.312l3.157 3.157A4.5 4.5 0 0 1 29 10.657V24.5a4.5 4.5 0 0 1-4.5 4.5zm0-25A3.5 3.5 0 0 0 4 7.5v17a3.5 3.5 0 0 0 3 3.465V18.5A2.5 2.5 0 0 1 9.5 16h13a2.5 2.5 0 0 1 2.5 2.5v9.465a3.5 3.5 0 0 0 3-3.465V10.657a3.5 3.5 0 0 0-1.025-2.475l-3.157-3.157A3.5 3.5 0 0 0 22 4.062V9.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 9 9.5V4zM24 28v-9.5a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 8 18.5V28zM21 4H10v5.5a1.5 1.5 0 0 0 1.5 1.5h8A1.5 1.5 0 0 0 21 9.5z"/>`,
  'regular': `<path d="M5 7.5A2.5 2.5 0 0 1 7.5 5H9v4.5a2.5 2.5 0 0 0 2.5 2.5h8A2.5 2.5 0 0 0 22 9.5V5.04a2.5 2.5 0 0 1 1.318.692l2.95 2.95A2.5 2.5 0 0 1 27 10.45V24.5a2.5 2.5 0 0 1-2 2.45V18.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 7 18.5v8.45a2.5 2.5 0 0 1-2-2.45zM9 27v-8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V27zM20 5v4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V5zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5V10.45a4.5 4.5 0 0 0-1.318-3.182l-2.95-2.95A4.5 4.5 0 0 0 21.55 3z"/>`
} as const;

export default function SaveIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'saveicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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