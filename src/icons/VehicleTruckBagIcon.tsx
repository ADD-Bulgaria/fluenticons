import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1.75 4.5a.75.75 0 0 0-.75.75v6a2.25 2.25 0 0 0 2.25 2.25h5a2.25 2.25 0 0 0 2.25-2.25v-6a.75.75 0 0 0-.75-.75H9.5v-1a2.5 2.5 0 0 0-3.75-2.165A2.5 2.5 0 0 0 2 3.5v.999zM7 4.5v-1c0-.348-.071-.68-.2-.98q.098-.02.2-.02a1 1 0 0 1 1 1v1zm-1.5-1v1h-2v-1a1 1 0 0 1 2 0M2 17.25v-3c.385.161.807.25 1.25.25h5a3.25 3.25 0 0 0 3.25-3.25v-6c0-.698-.409-1.3-1-1.582V3.5q0-.255-.035-.5h3.785a2.25 2.25 0 0 1 2.25 2.25V6h1.55c.87 0 1.662.501 2.034 1.287l1.7 3.587c.142.301.216.63.216.963v5.413a2.25 2.25 0 0 1-2.25 2.25h-1.791a3 3 0 0 1-5.917 0H9.958a3 3 0 0 1-5.92-.01A2.25 2.25 0 0 1 2 17.25m18.5-1.75h-1.25a.75.75 0 1 0 0 1.5h1.25zm-.317-4.5L18.73 7.929a.75.75 0 0 0-.678-.429H16.5V11zM7 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9.5-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3.5 3.5q.002-.214.083-.4Z"/>`,
  'regular': `<path d="M1.75 4.5a.75.75 0 0 0-.75.75v6a2.25 2.25 0 0 0 2.25 2.25h5a2.25 2.25 0 0 0 2.25-2.25v-6a.75.75 0 0 0-.75-.75H9.5v-1a2.5 2.5 0 0 0-3.75-2.165A2.5 2.5 0 0 0 2 3.5v.999zM7 4.5v-1c0-.348-.071-.68-.2-.98q.098-.02.2-.02a1 1 0 0 1 1 1v1zm-1.5-1v1h-2v-1a1 1 0 0 1 2 0M2 17.25v-3c.385.161.807.25 1.25.25h.25v2.75a.75.75 0 0 0 .672.746A3.001 3.001 0 0 1 9.83 18h2.342A3 3 0 0 1 15 16V5.25a.75.75 0 0 0-.75-.75h-2.918a1.76 1.76 0 0 0-.832-.832V3.5q0-.255-.035-.5h3.785a2.25 2.25 0 0 1 2.25 2.25V6h1.55c.87 0 1.662.501 2.034 1.287l1.7 3.587c.142.301.216.63.216.963v5.413a2.25 2.25 0 0 1-2.25 2.25h-1.791a3 3 0 0 1-5.917 0H9.958a3 3 0 0 1-5.92-.01A2.25 2.25 0 0 1 2 17.25m15.83.75h1.92a.75.75 0 0 0 .75-.75V17h-1.25a.75.75 0 0 1 0-1.5h1.25v-3h-4v3.901A3 3 0 0 1 17.83 18M16.5 7.5V11h3.683L18.73 7.929a.75.75 0 0 0-.678-.429zM7 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9.5-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M3.5 3.5q.002-.214.083-.4Z"/>`
} as const;

export default function VehicleTruckBagIcon({ 
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

  const gradientId = 'vehicletruckbagicon_gradient';
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