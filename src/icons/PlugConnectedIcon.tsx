import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m21.515 9.514-1.27 1.27a4.25 4.25 0 0 0 0 6.01l10.96 10.96a4.25 4.25 0 0 0 6.01 0l1.27-1.27c4.388-4.387 4.667-11.327.839-16.04l4.31-4.31a1.25 1.25 0 1 0-1.768-1.768l-4.31 4.31c-4.713-3.83-11.654-3.55-16.041.838m6.24 27.701-1.27 1.27c-4.387 4.388-11.328 4.668-16.04.839l-4.311 4.31a1.25 1.25 0 1 1-1.768-1.768l4.31-4.31c-3.828-4.713-3.549-11.653.839-16.041l1.27-1.27a4.25 4.25 0 0 1 6.01 0l10.96 10.96a4.25 4.25 0 0 1 0 6.01"/>`,
  'regular': `<path d="m21.515 9.514-1.27 1.27a4.25 4.25 0 0 0 0 6.01l10.96 10.96a4.25 4.25 0 0 0 6.01 0l1.27-1.27c4.388-4.387 4.667-11.327.839-16.04l4.31-4.31a1.25 1.25 0 1 0-1.768-1.768l-4.31 4.31c-4.713-3.83-11.654-3.55-16.041.838m.497 3.038 1.27-1.27a9.5 9.5 0 0 1 13.435 13.435l-1.27 1.27a1.75 1.75 0 0 1-2.474 0l-10.96-10.96a1.75 1.75 0 0 1 0-2.475m4.473 25.933 1.27-1.27a4.25 4.25 0 0 0 0-6.01l-10.96-10.96a4.25 4.25 0 0 0-6.01 0l-1.27 1.27c-4.388 4.388-4.667 11.328-.839 16.041l-4.31 4.31a1.25 1.25 0 0 0 1.768 1.767l4.31-4.31c4.713 3.83 11.654 3.55 16.042-.838m-.497-3.038-1.27 1.27a9.5 9.5 0 0 1-13.435-13.434l1.27-1.27a1.75 1.75 0 0 1 2.474 0l10.96 10.96a1.75 1.75 0 0 1 0 2.474"/>`
} as const;

export default function PlugConnectedIcon({ 
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

  const gradientId = 'plugconnectedicon_gradient';
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