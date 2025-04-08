import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.731 17.174a2.5 2.5 0 0 1 0-3.536l4.9-4.9a2.5 2.5 0 0 1 3.536 0l.8.8a7.995 7.995 0 1 0-8.441 8.44zm7.737-7.734 2.095 2.1a1.5 1.5 0 0 1 0 2.122l-3.6 3.6-4.216-4.217 3.6-3.6a1.5 1.5 0 0 1 2.122 0zm-2.212 8.523-4.216-4.217-.6.6a1.5 1.5 0 0 0 0 2.122l2.1 2.095a1.5 1.5 0 0 0 1.117.438h4.092a.5.5 0 0 0 0-1h-2.531z"/>`,
  'regular': `<path d="M8.732 17.173a2.5 2.5 0 0 1-.288-.353A7.01 7.01 0 0 1 3 10a7.01 7.01 0 0 1 7-7 7.01 7.01 0 0 1 6.819 5.441q.19.13.354.29l.8.8A8 8 0 0 0 10 2a8.01 8.01 0 0 0-8 8 8 8 0 0 0 7.535 7.976zm.707-.707a1.5 1.5 0 0 1 0-2.122l4.9-4.9a1.5 1.5 0 0 1 2.122 0l2.095 2.095a1.5 1.5 0 0 1 0 2.122L14.216 18h2.531a.5.5 0 0 1 0 1h-4.092a1.5 1.5 0 0 1-1.121-.438zm5.612-6.319-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.708l-2.095-2.095a.5.5 0 0 0-.705.003m-1.5 7.108-2.8-2.8-.6.6a.5.5 0 0 0 0 .708l2.095 2.095a.5.5 0 0 0 .708 0z"/>`
} as const;

export default function CircleEraserIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'circleerasericon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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