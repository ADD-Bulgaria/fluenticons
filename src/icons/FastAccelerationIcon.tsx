import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 4a8.5 8.5 0 1 1-4.822 15.5H1.752a.75.75 0 0 1-.102-1.493L1.752 18l5.268.001a8.5 8.5 0 0 1-1.022-1.5L3.747 16.5a.75.75 0 0 1-.102-1.493L3.747 15l1.627.001A8.5 8.5 0 0 1 5 12.5c0-2.097.76-4.018 2.019-5.5H2.75a.75.75 0 0 1-.102-1.493L2.75 5.5h5.927A8.46 8.46 0 0 1 13.5 4m1.154 10.716a2.5 2.5 0 0 1-2.297.006l-1.096 1.096c.64.433 1.411.687 2.242.687.834 0 1.608-.255 2.249-.691zm-5.152-2.213c0 .836.256 1.613.695 2.255l1.093-1.091a2.5 2.5 0 0 1-.29-1.168c0-.417.103-.81.284-1.155l-1.091-1.09a4 4 0 0 0-.691 2.25m7.316-2.242-1.095 1.095c.176.342.276.731.276 1.143 0 .417-.102.81-.283 1.156l1.098 1.097c.436-.641.69-1.415.69-2.249 0-.83-.253-1.603-.686-2.242M13.5 11.5a1 1 0 1 0 0 1.998 1 1 0 0 0 0-1.998m.003-2.998a4 4 0 0 0-2.25.691l1.09 1.09a2.5 2.5 0 0 1 2.323.005l1.092-1.091a4 4 0 0 0-2.255-.695"/>`,
  'regular': `<path d="M13.5 4a8.5 8.5 0 1 1-4.822 15.5H1.752a.75.75 0 0 1-.102-1.493L1.752 18l5.268.001a8.5 8.5 0 0 1-1.022-1.5L3.747 16.5a.75.75 0 0 1-.102-1.493L3.747 15l1.627.001A8.5 8.5 0 0 1 5 12.5c0-2.097.76-4.018 2.019-5.5H2.75a.75.75 0 0 1-.102-1.493L2.75 5.5h5.927A8.46 8.46 0 0 1 13.5 4m0 1.5a7 7 0 1 0 0 14 7 7 0 0 0 0-14m.003 1.502a5.501 5.501 0 1 1 0 11.003 5.501 5.501 0 0 1 0-11.003m1.151 7.714a2.5 2.5 0 0 1-2.297.006l-1.096 1.096c.64.433 1.411.687 2.242.687.834 0 1.608-.255 2.249-.691zm-5.152-2.213c0 .836.256 1.613.695 2.255l1.093-1.091a2.5 2.5 0 0 1-.29-1.168c0-.417.103-.81.284-1.155l-1.091-1.09a4 4 0 0 0-.691 2.25m7.316-2.242-1.095 1.095c.176.342.276.731.276 1.143 0 .417-.102.81-.283 1.156l1.098 1.097c.436-.641.69-1.415.69-2.249 0-.83-.253-1.603-.686-2.242M13.5 11.5a1 1 0 1 0 0 1.998 1 1 0 0 0 0-1.998m.003-2.998a4 4 0 0 0-2.25.691l1.09 1.09a2.5 2.5 0 0 1 2.323.005l1.092-1.091a4 4 0 0 0-2.255-.695"/>`
} as const;

export default function FastAccelerationIcon({ 
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

  const gradientId = 'fastaccelerationicon_gradient';
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