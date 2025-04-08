import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.972 4c1.24 0 2.327.83 2.653 2.026l.953 3.493A2.75 2.75 0 0 1 22 12.25v2.25c0 .865-.4 1.636-1.023 2.14a3.25 3.25 0 0 1-6.32.61H9.843a3.251 3.251 0 0 1-6.258-.258A2.75 2.75 0 0 1 2 14.5v-1.688a2.75 2.75 0 0 1 2.083-2.668l2.182-.546 2.509-4.246A2.75 2.75 0 0 1 11.142 4zm1.206 2.421a1.25 1.25 0 0 0-1.206-.921H14.5v4h3.518zM13 9.5v-4h-1.858a1.25 1.25 0 0 0-1.077.614l-2 3.386zm4.75 5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.5 16.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0"/>`,
  'regular': `<path d="M18.626 6.026A2.75 2.75 0 0 0 15.971 4h-4.83a2.75 2.75 0 0 0-2.368 1.352L6.265 9.598l-2.182.546A2.75 2.75 0 0 0 2 12.812V14.5a2.75 2.75 0 0 0 1.585 2.492 3.251 3.251 0 0 0 6.258.258h4.814a3.252 3.252 0 0 0 6.32-.61A2.75 2.75 0 0 0 22 14.5v-2.25a2.75 2.75 0 0 0-2.422-2.73zM9.962 15.75a3.25 3.25 0 0 0-6.274-.591A1.24 1.24 0 0 1 3.5 14.5v-1.688c0-.574.39-1.074.947-1.213L6.844 11H19.25c.69 0 1.25.56 1.25 1.25v2.267a3.25 3.25 0 0 0-5.962 1.233zM13 9.5H8.066l2-3.386a1.25 1.25 0 0 1 1.076-.614H13zm1.5-4h1.472a1.25 1.25 0 0 1 1.206.921l.84 3.079H14.5zm3.25 9a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M8.5 16.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"/>`
} as const;

export default function VehicleCarProfileRtlIcon({ 
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

  const gradientId = 'vehiclecarprofilertlicon_gradient';
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