import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.25 5A4.25 4.25 0 0 0 4 9.25V19h7.533l3.156-8.842a3.25 3.25 0 0 1 6.156.1l3.718 11.6 3.492-7.482a3.25 3.25 0 0 1 5.94.11L35.898 19H44V9.25A4.25 4.25 0 0 0 39.75 5zM4 32.75V25.5h9.824a3.25 3.25 0 0 0 3.06-2.157l.7-1.961 3.321 10.36a3.25 3.25 0 0 0 6.04.382l3.911-8.38a3.25 3.25 0 0 0 2.887 1.756H44v7.25A4.25 4.25 0 0 1 39.75 37H31v3.5h2.75a1.25 1.25 0 1 1 0 2.5h-19.5a1.25 1.25 0 1 1 0-2.5H17V37H8.25A4.25 4.25 0 0 1 4 32.75M28.5 37h-9v3.5h9zm-9.56-26.132a1.25 1.25 0 0 0-2.367-.038L12.943 21H5.25a1.25 1.25 0 1 0 0 2.5h8.574c.528 0 1-.332 1.177-.83l2.685-7.523L22.81 31.13a1.25 1.25 0 0 0 2.323.148l5.81-12.45 1.648 3.907c.196.463.65.764 1.152.764h9.007a1.25 1.25 0 1 0 0-2.5h-8.178l-2.42-5.736a1.25 1.25 0 0 0-2.285-.043l-5.65 12.11z"/>`,
  'regular': `<path d="M8.25 5A4.25 4.25 0 0 0 4 9.25v9.048q.124-.008.25-.008H6.5V9.25c0-.966.784-1.75 1.75-1.75h31.5c.967 0 1.75.784 1.75 1.75v9.04h2.25q.126 0 .25.008V9.25A4.25 4.25 0 0 0 39.75 5zM4 32.75v-6.969q.124.009.25.009H6.5v6.96c0 .967.784 1.75 1.75 1.75h31.5a1.75 1.75 0 0 0 1.75-1.75v-6.96h2.25q.126 0 .25-.009v6.969A4.25 4.25 0 0 1 39.75 37H31v3.5h2.75a1.25 1.25 0 1 1 0 2.5h-19.5a1.25 1.25 0 1 1 0-2.5H17V37H8.25A4.25 4.25 0 0 1 4 32.75M28.5 37h-9v3.5h9zm-9.56-26.132a1.25 1.25 0 0 0-2.367-.038L12.943 21H5.25a1.25 1.25 0 1 0 0 2.5h8.574c.528 0 1-.332 1.177-.83l2.685-7.523L22.81 31.13a1.25 1.25 0 0 0 2.323.148l5.81-12.45 1.648 3.907c.196.463.65.764 1.152.764h9.007a1.25 1.25 0 1 0 0-2.5h-8.178l-2.42-5.736a1.25 1.25 0 0 0-2.285-.043l-5.65 12.11z"/>`
} as const;

export default function DesktopPulseIcon({ 
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

  const gradientId = 'desktoppulseicon_gradient';
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