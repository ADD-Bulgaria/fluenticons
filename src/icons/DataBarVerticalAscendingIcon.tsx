import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M20.5 5.25a2.25 2.25 0 0 0-4.5 0v13.5a2.25 2.25 0 0 0 4.5 0zm-6.5 4a2.25 2.25 0 0 0-4.5 0v9.5a2.25 2.25 0 0 0 4.5 0zm-6.5 4a2.25 2.25 0 0 0-4.5 0v5.5a2.25 2.25 0 0 0 4.5 0z"/>`,
  'filled': `<path d="M18.251 3a2.25 2.25 0 0 0-2.249 2.25v13.5a2.249 2.249 0 1 0 4.498 0V5.25A2.25 2.25 0 0 0 18.251 3m-6.5 4a2.25 2.25 0 0 0-2.249 2.25v9.5a2.249 2.249 0 1 0 4.498 0v-9.5A2.25 2.25 0 0 0 11.751 7m-6.5 4a2.25 2.25 0 0 0-2.25 2.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11"/>`,
  'regular': `<path d="M18.251 3a2.25 2.25 0 0 0-2.249 2.25v13.5a2.249 2.249 0 1 0 4.498 0V5.25A2.25 2.25 0 0 0 18.251 3m-6.5 4a2.25 2.25 0 0 0-2.249 2.25v9.5a2.249 2.249 0 1 0 4.498 0v-9.5A2.25 2.25 0 0 0 11.751 7m-6.5 4a2.25 2.25 0 0 0-2.25 2.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11m13-6.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-1.499 0V5.25c0-.415.335-.75.749-.75m-6.5 4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.499 0v-9.5c0-.415.335-.75.749-.75m-6.5 4a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function DataBarVerticalAscendingIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'databarverticalascendingicon_gradient';
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