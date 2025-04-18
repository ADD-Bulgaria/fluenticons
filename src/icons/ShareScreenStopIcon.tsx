import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h30.5A4.75 4.75 0 0 0 44 35.25v-22.5A4.75 4.75 0 0 0 39.25 8zm13.482 16-5.866-5.866a1.25 1.25 0 0 1 1.768-1.768L24 22.232l5.866-5.866a1.25 1.25 0 0 1 1.768 1.768L25.768 24l5.866 5.866a1.25 1.25 0 0 1-1.768 1.768L24 25.768l-5.866 5.866a1.25 1.25 0 0 1-1.768-1.768z"/>`,
  'regular': `<path d="m22.232 24-5.866-5.866a1.25 1.25 0 0 1 1.768-1.768L24 22.232l5.866-5.866a1.25 1.25 0 0 1 1.768 1.768L25.768 24l5.866 5.866a1.25 1.25 0 0 1-1.768 1.768L24 25.768l-5.866 5.866a1.25 1.25 0 0 1-1.768-1.768zM4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v22.5A4.75 4.75 0 0 1 39.25 40H8.75A4.75 4.75 0 0 1 4 35.25zm4.75-2.25a2.25 2.25 0 0 0-2.25 2.25v22.5a2.25 2.25 0 0 0 2.25 2.25h30.5a2.25 2.25 0 0 0 2.25-2.25v-22.5a2.25 2.25 0 0 0-2.25-2.25z"/>`
} as const;

export default function ShareScreenStopIcon({ 
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

  const gradientId = 'sharescreenstopicon_gradient';
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