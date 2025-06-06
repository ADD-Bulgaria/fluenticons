import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M8 11a8 8 0 1 1 16 0 .5.5 0 0 0 1 0 9 9 0 1 0-10.827 8.814 2 2 0 1 0-.158-1.062A8 8 0 0 1 8 11m8-5a5 5 0 0 0 0 10c-.727 0-1.393.259-1.913.689a6 6 0 1 1 3.825 0A3 3 0 0 0 16 16a5 5 0 0 0 0-10m8.5 13H19c0-.35-.06-.687-.17-1h5.67a3.5 3.5 0 0 1 3.5 3.5v.667C28 24.317 25.234 30 16 30S4 24.316 4 22.167V21.5A3.5 3.5 0 0 1 7.5 18h1.359q.532.543 1.14 1H7.5A2.5 2.5 0 0 0 5 21.5v.667C5 23.684 7.234 29 16 29s11-5.316 11-6.833V21.5a2.5 2.5 0 0 0-2.5-2.5"/>`
} as const;

export default function PersonSuportIcon({ 
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

  const gradientId = 'personsuporticon_gradient';
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