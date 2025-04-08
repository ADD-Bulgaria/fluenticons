import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.75 1.25a.75.75 0 0 1 .75.75v1A.75.75 0 0 1 16 3V2a.75.75 0 0 1 .75-.75m3.72 1.22a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06-1.06zM8.25 6.31v2.88l6.56 6.56h2.879zM19.06 15l1.41-1.409a2.25 2.25 0 0 0 0-3.182L13.59 3.53a2.25 2.25 0 0 0-3.181 0l-1.41 1.41zM13 16.06 7.94 11l-4.91 4.909a2.25 2.25 0 0 0 0 3.182l1.88 1.879a2.25 2.25 0 0 0 3.182 0zm-3.47-1.59a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0M22 8h-1a.75.75 0 0 1 0-1.5h1A.75.75 0 0 1 22 8"/>`,
  'regular': `<path d="M17.5 2A.75.75 0 0 0 16 2v1a.75.75 0 0 0 1.5 0zm4.03.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M8.03 17.03l1.5-1.5a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 1 0 1.06 1.06M8.25 6v4.69l-5.22 5.219a2.25 2.25 0 0 0 0 3.182l1.88 1.879a2.25 2.25 0 0 0 3.182 0l5.22-5.22H18a.75.75 0 0 0 .53-.22l1.94-1.939a2.25 2.25 0 0 0 0-3.182L13.59 3.53a2.25 2.25 0 0 0-3.181 0l-1.94 1.94a.75.75 0 0 0-.22.53m3.22-1.409a.75.75 0 0 1 1.06 0l6.879 6.879a.75.75 0 0 1 0 1.06l-1.41 1.41L10.06 6zm-1.72 3.22 6.44 6.439h-2.88l-3.56-3.56zM9 12.06 11.94 15l-4.91 4.909a.75.75 0 0 1-1.06 0L4.09 18.03a.75.75 0 0 1 0-1.06zM21 8h1a.75.75 0 0 0 0-1.5h-1A.75.75 0 0 0 21 8"/>`
} as const;

export default function FlashlightIcon({ 
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

  const gradientId = 'flashlighticon_gradient';
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