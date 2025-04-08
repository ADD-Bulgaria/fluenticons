import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 12.25a.75.75 0 0 1 .75-.75.75.75 0 0 0 0-1.5A2.25 2.25 0 0 0 10 12.25a.75.75 0 0 0 1.5 0M13.5 2c-3.117 0-5.812 1.825-7.285 4.494-.24.435-.609.813-1.056 1.115C3.25 8.901 2 11.18 2 13.75 2 17.696 4.967 21 8.75 21q.487 0 .955-.072a4.4 4.4 0 0 1 2.567.38 6.75 6.75 0 0 0 9.616-7.291 3.1 3.1 0 0 1-.024-1.081q.136-.811.136-1.661C22 6.221 18.26 2 13.5 2m3.75 10.5a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0"/>`,
  'regular': `<path d="M11.5 12.25a.75.75 0 0 1 .75-.75.75.75 0 0 0 0-1.5A2.25 2.25 0 0 0 10 12.25a.75.75 0 0 0 1.5 0M7 12.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6.215 6.494C7.688 3.825 10.383 2 13.5 2c4.76 0 8.5 4.221 8.5 9.275q-.001.85-.136 1.66c-.057.344-.045.71.024 1.083q.11.601.112 1.232a6.75 6.75 0 0 1-9.728 6.059 4.4 4.4 0 0 0-2.567-.381A6 6 0 0 1 8.75 21C4.967 21 2 17.696 2 13.75c0-2.571 1.248-4.85 3.16-6.14.446-.303.814-.681 1.055-1.116M13.5 3.5c-2.501 0-4.727 1.464-5.972 3.719-.375.678-.922 1.223-1.53 1.633C4.513 9.857 3.5 11.664 3.5 13.75c0 3.233 2.406 5.75 5.25 5.75q.372 0 .73-.055a5.9 5.9 0 0 1 3.454.518 5.25 5.25 0 0 0 7.478-5.673 4.6 4.6 0 0 1-.028-1.6q.115-.688.116-1.415c0-4.363-3.2-7.775-7-7.775"/>`
} as const;

export default function FoodEggIcon({ 
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

  const gradientId = 'foodeggicon_gradient';
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