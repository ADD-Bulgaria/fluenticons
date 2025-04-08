import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.02 3a2.25 2.25 0 0 0-2.219 1.88L3.98 9.815A6 6 0 1 0 12.659 17h3.376q-.035.245-.035.5a3.5 3.5 0 1 0 6.001-2.448V12.25A3.25 3.25 0 0 0 18.751 9H17.5V6.75a.75.75 0 0 0-1.5 0V9h-2.115L13.2 4.88A2.25 2.25 0 0 0 10.979 3zm.018 6a6 6 0 0 0-1.43.162l.673-4.035a.75.75 0 0 1 .74-.627h3.958a.75.75 0 0 1 .74.627L12.365 9zM19.5 15.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-17-.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`,
  'regular': `<path d="M7.02 3a2.25 2.25 0 0 0-2.219 1.88L3.98 9.815A6 6 0 1 0 12.659 17h3.376q-.035.245-.035.5a3.5 3.5 0 1 0 5.998-2.451V12.25A3.25 3.25 0 0 0 18.748 9H17.5V6.75a.75.75 0 0 0-1.5 0V9h-2.115L13.2 4.88A2.25 2.25 0 0 0 10.979 3zm5.96 12.5q.02-.248.02-.5c0-1.792-.786-3.4-2.031-4.5h7.779c.967 0 1.75.784 1.75 1.75v1.894a3.5 3.5 0 0 0-3.87 1.356zM7.037 9H7q-.72.002-1.392.162l.673-4.035a.75.75 0 0 1 .74-.627h3.958a.75.75 0 0 1 .74.627L12.365 9zM19.5 15.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-17-.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`
} as const;

export default function VehicleTractorIcon({ 
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

  const gradientId = 'vehicletractoricon_gradient';
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