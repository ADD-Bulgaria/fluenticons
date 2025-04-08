import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.499 3.5a1.5 1.5 0 1 1-2.999 0 1.5 1.5 0 0 1 2.999 0m-.5 4v13.503a1 1 0 0 1-1.993.117L5 21.003V7.5a1 1 0 0 1 1.994-.116zm6.5-4a1.5 1.5 0 1 1-2.999 0 1.5 1.5 0 0 1 2.999 0m-.5 4v13.503a1 1 0 0 1-1.993.117L11 21.003V7.5a1 1 0 0 1 1.994-.116zm6.493-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.493 4v13.503a1 1 0 0 1-1.994.117L17 21.003V7.5a1 1 0 0 1 1.993-.116z"/>`,
  'regular': `<path d="M6.5 3.25a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.499 0M6 6.75v14.5a.75.75 0 0 1-1.493.102l-.006-.102V6.75a.75.75 0 0 1 1.493-.102zm7-3.5a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.499 0m-.5 3.5v14.5a.75.75 0 0 1-1.493.102l-.006-.102V6.75a.75.75 0 0 1 1.493-.102zm7-3.5a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.499 0m-.5 3.5v14.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 1.494-.102z"/>`
} as const;

export default function TextBulletList90Icon({ 
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

  const gradientId = 'textbulletlist90icon_gradient';
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