import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.504 4.128a1.5 1.5 0 0 1 1.992 0l5.069 4.5a1.5 1.5 0 0 1-1.992 2.244L25 8.588v9.162a1.5 1.5 0 0 1-3 0V8.588l-2.573 2.284a1.5 1.5 0 1 1-1.991-2.244zm2 39.737a1.5 1.5 0 0 1-2.008 0l-5-4.5a1.5 1.5 0 0 1 2.008-2.23L22 39.382V30.25a1.5 1.5 0 1 1 3 0v9.132l2.497-2.247a1.5 1.5 0 1 1 2.006 2.23zM8.25 22.25a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 0 0 0-3z"/>`,
  'regular': `<path d="M22.687 4.3a1.25 1.25 0 0 1 1.627.001l5.247 4.5a1.25 1.25 0 0 1-1.628 1.898l-3.183-2.73v9.781a1.25 1.25 0 1 1-2.5 0V7.966l-3.188 2.73a1.25 1.25 0 1 1-1.626-1.9zm2.063 35.73 3.184-2.726a1.25 1.25 0 1 1 1.626 1.9L24.31 43.7c-.468.4-1.159.4-1.627-.001l-5.247-4.5a1.25 1.25 0 0 1 1.628-1.898l3.187 2.734V30.25a1.25 1.25 0 1 1 2.5 0zM7 23.75c0-.69.56-1.25 1.25-1.25h31.5a1.25 1.25 0 1 1 0 2.5H8.25C7.56 25 7 24.44 7 23.75"/>`
} as const;

export default function ArrowMaximizeVerticalIcon({ 
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

  const gradientId = 'arrowmaximizeverticalicon_gradient';
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