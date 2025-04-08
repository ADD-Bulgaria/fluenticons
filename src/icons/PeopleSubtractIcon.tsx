import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M27 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-9.904 6.207A8.98 8.98 0 0 0 14 24q.001.796.133 1.552c-.994.28-2.191.448-3.633.448C2 26 2 20.15 2 20.15V20a3 3 0 0 1 3-3h11c.387 0 .757.073 1.096.207M30.5 24a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M18 23.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"/>`,
  'regular': `<path d="M10.5 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M5 9.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M23 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-1.903 6.207A3 3 0 0 0 16 17H5a3 3 0 0 0-3 3c0 .098-.002.196.004.293q.002.081.017.212c.02.173.057.408.129.686.144.554.43 1.287.999 2.017C4.319 24.71 6.52 26 10.5 26c1.43 0 2.629-.166 3.633-.449a9 9 0 0 1-.119-2.057c-.871.303-2.013.506-3.514.506-3.52 0-5.069-1.117-5.773-2.02a3.6 3.6 0 0 1-.642-1.292 3 3 0 0 1-.076-.404C3.999 20.189 4 20.095 4 20a1 1 0 0 1 1-1h10.516a9 9 0 0 1 1.58-1.793M30.5 24a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M18 23.75c0 .414.336.75.75.75h8.5a.75.75 0 1 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"/>`
} as const;

export default function PeopleSubtractIcon({ 
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

  const gradientId = 'peoplesubtracticon_gradient';
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