import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m26.329 27.743 1.964 1.964a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l9.705 9.705v.026a4 4 0 0 1-.712 2.277L9.704 18h6.882l2 2H8.32l-2.744 3.962C4.102 26.092 5.626 29 8.216 29H23.78c1.083 0 1.98-.51 2.549-1.257M21.538 18l-9.54-9.54V5h-1a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2h-1v8.438a4 4 0 0 0 .71 2.277L22.292 18z"/>`,
  'regular': `<path d="m26.329 27.743 1.964 1.964a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l9.705 9.705v.026a4 4 0 0 1-.712 2.277l-5.71 8.247C4.102 26.092 5.626 29 8.216 29H23.78c1.083 0 1.98-.51 2.549-1.257m-1.45-1.45a1.2 1.2 0 0 1-1.1.707H8.217a1.21 1.21 0 0 1-.997-1.9l3.55-5.127q.11.026.227.026h7.588zM16.587 18h-4.449l.794-1.147a6 6 0 0 0 .814-1.694zm1.412-4.562q0 .572.107 1.129l5.88 5.88-3.276-4.732a4 4 0 0 1-.711-2.277V5h1a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2h1v3.46l2 2V5h4z"/>`
} as const;

export default function BeakerOffIcon({ 
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

  const gradientId = 'beakerofficon_gradient';
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