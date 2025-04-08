import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.5 2a6.5 6.5 0 0 0-.482 12.982 7.5 7.5 0 0 1 6.964-6.964A6.5 6.5 0 0 0 8.5 2m2.78 5.78-3 3a.75.75 0 0 1-1.06 0l-1.5-1.502a.75.75 0 0 1 1.061-1.06l.97.971 2.469-2.47a.75.75 0 0 1 1.06 1.061M9 15.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0m4.217-2.26a.75.75 0 0 0 .005 1.06l1.215 1.203-1.217 1.217a.75.75 0 1 0 1.06 1.06l1.22-1.219 1.215 1.219a.75.75 0 0 0 1.062-1.06l-1.215-1.217 1.212-1.204a.75.75 0 0 0-1.057-1.064L15.5 14.444l-1.221-1.21a.75.75 0 0 0-1.06.005"/>`,
  'regular': `<path d="M8.5 3.5a5 5 0 0 0-.229 9.995 7.5 7.5 0 0 0-.253 1.487 6.5 6.5 0 1 1 6.964-6.964 7.5 7.5 0 0 0-1.487.253A5 5 0 0 0 8.5 3.5m5.778 9.734a.75.75 0 1 0-1.056 1.066l1.215 1.203-1.217 1.217a.75.75 0 1 0 1.06 1.06l1.22-1.219 1.215 1.219a.75.75 0 0 0 1.062-1.06l-1.215-1.217 1.212-1.204a.75.75 0 0 0-1.057-1.064L15.5 14.444zM15.5 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m-5 6.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0m.78-8.78a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1.5-1.502a.75.75 0 0 1 1.061-1.06l.97.971 2.469-2.47a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function ShiftsAvailabilityIcon({ 
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

  const gradientId = 'shiftsavailabilityicon_gradient';
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