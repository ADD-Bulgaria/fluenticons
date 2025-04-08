import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.98.98A2.25 2.25 0 0 0 2 6.25v11.505a2.25 2.25 0 0 0 2.25 2.25h7.25A6.5 6.5 0 0 1 11 17.5a6.47 6.47 0 0 1 1.022-3.5H8.75l-.144.006A1.75 1.75 0 0 0 7 15.75l-.001 2.754H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h.19L9 10.061A3 3 0 0 0 11.94 13l1.178 1.178a5.5 5.5 0 0 0 7.717 7.697.75.75 0 0 0 .946-1.155zm16.456 18.577a.56.56 0 0 1-.778.084L17.5 19.777l-1.458 1.104c-.458.347-1.074-.12-.899-.68l.557-1.788-1.458-1.104c-.458-.347-.223-1.101.343-1.101h.562zM10.553 7.372l4.076 4.075a3 3 0 0 0-4.075-4.075m4.988 4.987 1.701 1.701a.577.577 0 0 1 .813.36l.206.659 1.128 1.129h1.026c.566 0 .8.754.343 1.1l-.152.116 2.035 2.035a5.5 5.5 0 0 0-7.1-7.1M7.18 4l1.5 1.5h11.064a.75.75 0 0 1 .75.75v5.48a6.5 6.5 0 0 1 1.5 1.075V6.25A2.25 2.25 0 0 0 19.745 4z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.98.98A2.25 2.25 0 0 0 2 6.25v11.505a2.25 2.25 0 0 0 2.25 2.25h7.25a6.5 6.5 0 0 1-.423-1.501H8.5V15.75l.007-.057a.25.25 0 0 1 .243-.193h2.563a6.5 6.5 0 0 1 .709-1.5H8.75l-.144.006A1.75 1.75 0 0 0 7 15.75l-.001 2.754H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h.19L9 10.061A3 3 0 0 0 11.94 13l1.178 1.178a5.5 5.5 0 0 0 7.717 7.697.75.75 0 0 0 .946-1.155zm16.456 18.577a.56.56 0 0 1-.778.084L17.5 19.777l-1.458 1.104c-.458.347-1.074-.12-.899-.68l.557-1.788-1.458-1.104c-.458-.347-.223-1.101.343-1.101h.562zM10.553 7.372l1.157 1.156q.14-.027.29-.028a1.5 1.5 0 0 1 1.472 1.79l1.157 1.157a3 3 0 0 0-4.075-4.075m4.988 4.987 1.701 1.701a.577.577 0 0 1 .813.36l.206.659 1.128 1.129h1.026c.566 0 .8.754.343 1.1l-.152.116 2.035 2.035a5.5 5.5 0 0 0-7.1-7.1M7.18 4l1.5 1.5h11.064a.75.75 0 0 1 .75.75v5.48a6.5 6.5 0 0 1 1.5 1.075V6.25A2.25 2.25 0 0 0 19.745 4z"/>`
} as const;

export default function VideoPersonStarOffIcon({ 
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

  const gradientId = 'videopersonstarofficon_gradient';
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