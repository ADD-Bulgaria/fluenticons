import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 7H5v1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5m6.75-4h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3M6.561 8.561A1.5 1.5 0 0 1 5.5 9H5v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1A1.503 1.503 0 0 1 7 7.5c0 .398-.158.779-.439 1.061M11.4 6.8 10 8.666V10.5a.5.5 0 1 1-1 0V8.666L7.6 6.8a.502.502 0 0 1 .471-.795.5.5 0 0 1 .329.195l1.1 1.467L10.6 6.2a.5.5 0 0 1 .7-.1.5.5 0 0 1 .1.7"/>`,
  'regular': `<path d="M4.5 6h1a1.5 1.5 0 0 1 0 3H5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5M5 8h.5a.5.5 0 0 0 0-1H5zm5 .666L11.4 6.8a.5.5 0 1 0-.8-.6L9.5 7.667 8.4 6.2a.5.5 0 1 0-.8.6L9 8.666V10.5a.5.5 0 0 0 1 0zM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function CodePyRectangleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codepyrectangleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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