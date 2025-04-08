import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 2A4.5 4.5 0 0 0 2 6.5V7h24v-.5A4.5 4.5 0 0 0 21.5 2zM2 21.5V9h24v12.5a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 2 21.5m26-12V5.757c1.206.808 2 2.183 2 3.743V22a8 8 0 0 1-8 8H9.5a4.5 4.5 0 0 1-3.742-2H22a6 6 0 0 0 6-6z"/>`,
  'light': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h15A4.5 4.5 0 0 1 27 7.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 3 22.5zM22.5 4h-15A3.5 3.5 0 0 0 4 7.5V9h22V7.5A3.5 3.5 0 0 0 22.5 4m3.5 6H4v12.5A3.5 3.5 0 0 0 7.5 26h15a3.5 3.5 0 0 0 3.5-3.5zM7.671 29c.773.625 1.757 1 2.829 1h12a7.5 7.5 0 0 0 7.5-7.5v-12a4.48 4.48 0 0 0-1-2.829V22.5a6.5 6.5 0 0 1-6.5 6.5H7.67"/>`,
  'regular': `<path d="M2 6.5A4.5 4.5 0 0 1 6.5 2h15A4.5 4.5 0 0 1 26 6.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 2 21.5zM6.5 4A2.5 2.5 0 0 0 4 6.5V7h20v-.5A2.5 2.5 0 0 0 21.5 4zM4 21.5A2.5 2.5 0 0 0 6.5 24h15a2.5 2.5 0 0 0 2.5-2.5V9H4zm24-12V5.757c1.206.808 2 2.183 2 3.743V22a8 8 0 0 1-8 8H9.5a4.5 4.5 0 0 1-3.742-2H22a6 6 0 0 0 6-6z"/>`
} as const;

export default function CalendarMultipleIcon({ 
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

  const gradientId = 'calendarmultipleicon_gradient';
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