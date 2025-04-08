import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1 8.574V4.428a1.5 1.5 0 0 1 .83-1.342l3.5-1.75a1.5 1.5 0 0 1 1.34 0l3.5 1.75A1.5 1.5 0 0 1 11 4.428v4.146a1.5 1.5 0 0 1-.83 1.341l-3.5 1.75a1.5 1.5 0 0 1-1.34 0l-3.5-1.75A1.5 1.5 0 0 1 1 8.574m1.553-4.047a.5.5 0 0 0 .223.67L5.5 6.56V9.5a.5.5 0 1 0 1 0V6.56l2.724-1.362a.5.5 0 1 0-.448-.895L6 5.692 3.224 4.303a.5.5 0 0 0-.671.224m9-1.527A2.5 2.5 0 0 1 12 4.428v4.145a2.5 2.5 0 0 1-1.382 2.236l-3.5 1.75a2.5 2.5 0 0 1-2.236 0L2 11.12v6.131a2.25 2.25 0 0 0 2.04 2.24 3 3 0 0 0 5.919.01h2.082a3 3 0 0 0 5.918 0h1.791A2.25 2.25 0 0 0 22 17.25v-5.412a2.25 2.25 0 0 0-.217-.963l-1.699-3.588A2.25 2.25 0 0 0 18.051 6H16.5v-.75A2.25 2.25 0 0 0 14.25 3zm7.697 12.5h1.25V17h-1.25a.75.75 0 1 1 0-1.5m-.521-7.57L20.183 11H16.5V7.5h1.55a.75.75 0 0 1 .679.43M8.5 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>`,
  'regular': `<path d="M1 8.574V4.428a1.5 1.5 0 0 1 .83-1.342l3.5-1.75a1.5 1.5 0 0 1 1.34 0l3.5 1.75A1.5 1.5 0 0 1 11 4.428v4.146a1.5 1.5 0 0 1-.83 1.341l-3.5 1.75a1.5 1.5 0 0 1-1.34 0l-3.5-1.75A1.5 1.5 0 0 1 1 8.574m1.553-4.047a.5.5 0 0 0 .223.67L5.5 6.56V9.5a.5.5 0 1 0 1 0V6.56l2.724-1.362a.5.5 0 1 0-.448-.895L6 5.692 3.224 4.303a.5.5 0 0 0-.671.224m.947 7.341v5.382a.75.75 0 0 0 .672.747A3.001 3.001 0 0 1 9.83 18h2.342A3 3 0 0 1 15 16V5.25a.75.75 0 0 0-.75-.75H12v-.072c0-.52-.161-1.016-.447-1.428h2.697a2.25 2.25 0 0 1 2.25 2.25V6h1.55c.87 0 1.662.501 2.034 1.287l1.7 3.588c.142.3.216.63.216.963v5.413a2.25 2.25 0 0 1-2.25 2.25h-1.791a3 3 0 0 1-5.917 0H9.958a3 3 0 0 1-5.92-.01A2.25 2.25 0 0 1 2 17.25v-6.133zm13 4.534A3 3 0 0 1 17.83 18h1.92a.75.75 0 0 0 .75-.75V17h-1.25a.75.75 0 1 1 0-1.5h1.25v-3h-4zM18.05 7.5H16.5V11h3.683L18.73 7.93a.75.75 0 0 0-.678-.43M5.5 19a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`
} as const;

export default function VehicleTruckCubeIcon({ 
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

  const gradientId = 'vehicletruckcubeicon_gradient';
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