import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.262 3.244c-1.787-.893-3.765.812-3.146 2.711L8.13 18.26a2 2 0 0 0 1.573 1.352l15.86 2.643c.835.14.835 1.34 0 1.48L9.704 26.378a2 2 0 0 0-1.573 1.352L4.116 40.042c-.62 1.9 1.359 3.605 3.146 2.712l24.74-12.366v-.897A3.25 3.25 0 0 1 32.25 23h11.5q.126 0 .249.01a2.23 2.23 0 0 0-1.244-2.024zM31 26.25c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 0 1 0 2.5H42v6.274a5 5 0 0 0 .772 2.669L43.754 38h-11.51l.984-1.56A5 5 0 0 0 34 33.772V27.5h-1.75c-.69 0-1.25-.56-1.25-1.25M30.982 40l-1.514 2.4c-1.26 1.997.175 4.6 2.537 4.6h11.988c2.363 0 3.798-2.603 2.538-4.6L45.016 40z"/>`,
  'regular': `<path d="M4.128 5.964c-.62-1.899 1.358-3.603 3.145-2.71L42.757 20.99A2.22 2.22 0 0 1 44 23.01a3 3 0 0 0-.25-.01h-2.565L6.69 5.757l5.217 15.996H28.75a1.25 1.25 0 0 1 0 2.5H11.907L6.69 40.248l23.312-11.652a3.24 3.24 0 0 0 2 .895v.9l-24.73 12.36c-1.786.894-3.764-.81-3.144-2.71l5.557-17.038zM31 26.25c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 0 1 0 2.5H42v6.274a5 5 0 0 0 .772 2.669L43.754 38h-11.51l.984-1.56A5 5 0 0 0 34 33.772V27.5h-1.75c-.69 0-1.25-.56-1.25-1.25M30.982 40l-1.514 2.4c-1.26 1.997.175 4.6 2.537 4.6h11.988c2.363 0 3.798-2.603 2.538-4.6L45.016 40z"/>`
} as const;

export default function SendBeakerIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'sendbeakericon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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