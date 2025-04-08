import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M3.5 3a.5.5 0 0 0 0 1h25a.5.5 0 0 0 0-1zm12.146 3.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L16.5 7.707V14.5a.5.5 0 0 1-1 0V7.707l-2.146 2.147a.5.5 0 0 1-.708-.708zM3.5 11a.5.5 0 0 0-.5.5v13A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-13a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5V20h-8v-8.5a.5.5 0 0 0-.5-.5zm7.5 9H4v-8h7zm-7 1h7v7H7.5A3.5 3.5 0 0 1 4 24.5zm17 7v-7h7v3.5a3.5 3.5 0 0 1-3.5 3.5zm7-8h-7v-8h7zm-16 8v-7h8v7z"/>`
} as const;

export default function TableMoveAboveIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'tablemoveaboveicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}