import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.28 4.704c2.12-.31 4.433.3 6.35 1.737a4.23 4.23 0 0 1 1.638 4.062l-.7 4.317a4.625 4.625 0 0 1-3.723 3.807l-2.033.376c-1.064.197-1.893.851-2.105 1.755-.467 1.994-.459 4.506.003 6.483.21.904 1.039 1.558 2.102 1.755l2.033.376a4.625 4.625 0 0 1 3.723 3.807l.655 4.04a4.51 4.51 0 0 1-1.899 4.441c-1.883 1.295-4.109 1.882-6.16 1.617-2.067-.267-3.94-1.4-5.044-3.496-1.82-3.458-3.495-8.49-3.495-15.281 0-6.847 1.702-12.221 3.529-16.016 1.069-2.22 2.99-3.467 5.125-3.78m15.854 9.162a1.25 1.25 0 0 0-1.768 1.767L37.732 22H23.75a1.25 1.25 0 0 0 0 2.5h13.982l-6.366 6.366a1.25 1.25 0 0 0 1.768 1.767l8.5-8.5a1.25 1.25 0 0 0 0-1.767z"/>`,
  'regular': `<path d="M24.005 5.94c-2.038-1.528-4.517-2.191-6.816-1.854-2.327.34-4.434 1.708-5.598 4.127C9.729 12.08 8 17.546 8 24.5c0 6.9 1.702 12.03 3.567 15.572 1.206 2.29 3.265 3.535 5.517 3.825 2.221.287 4.6-.35 6.595-1.722a5.14 5.14 0 0 0 2.16-5.057l-.654-4.038a5.25 5.25 0 0 0-4.227-4.322l-2.032-.377c-.899-.166-1.47-.69-1.608-1.282-.44-1.884-.447-4.3-.002-6.198.139-.592.71-1.117 1.61-1.283l2.032-.377a5.25 5.25 0 0 0 4.227-4.321l.7-4.317a4.86 4.86 0 0 0-1.88-4.662M13.843 9.298c.782-1.623 2.15-2.51 3.708-2.738 1.586-.232 3.403.219 4.954 1.382a2.36 2.36 0 0 1 .912 2.262l-.7 4.316a2.75 2.75 0 0 1-2.214 2.264l-2.032.377c-1.556.288-3.158 1.33-3.59 3.17-.533 2.279-.523 5.084.003 7.337.43 1.84 2.03 2.884 3.587 3.172l2.032.377a2.75 2.75 0 0 1 2.214 2.264l.655 4.038a2.64 2.64 0 0 1-1.11 2.597c-1.547 1.064-3.317 1.501-4.858 1.303-1.51-.195-2.828-.997-3.625-2.51C12.092 35.703 10.5 30.97 10.5 24.5c0-6.527 1.62-11.625 3.343-15.203m19.29 4.569a1.25 1.25 0 0 0-1.767 1.767L37.732 22H23.75a1.25 1.25 0 0 0 0 2.5h13.982l-6.366 6.366a1.25 1.25 0 0 0 1.768 1.767l8.5-8.5a1.25 1.25 0 0 0 0-1.767z"/>`
} as const;

export default function CallForwardIcon({ 
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

  const gradientId = 'callforwardicon_gradient';
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