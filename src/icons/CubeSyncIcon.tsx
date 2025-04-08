import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.175v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04a3.75 3.75 0 0 0 1.966.233A6.48 6.48 0 0 1 11 17.501c0-.621.087-1.222.25-1.792v-4.948L6.484 8.952a.75.75 0 0 1 .532-1.402L12 9.44l4.984-1.89a.75.75 0 1 1 .532 1.402l-4.766 1.809v2.303A6.48 6.48 0 0 1 17.5 11c1.747 0 3.332.689 4.5 1.81V7.174a1.75 1.75 0 0 0-1.093-1.622zM12 17.501a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m8.5-3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 14c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 .5-.5M15 19.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 0 1 .764.645A3.5 3.5 0 0 1 17.5 21a3.5 3.5 0 0 1-2.5-1.05"/>`,
  'regular': `<path d="M6.049 7.985a.75.75 0 0 1 .967-.435L12 9.44l4.984-1.89a.75.75 0 1 1 .532 1.402l-4.766 1.809v2.303a6.5 6.5 0 0 0-1.5 2.646v-4.95L6.484 8.953a.75.75 0 0 1-.435-.967m14.451-.81v4.558A6.5 6.5 0 0 1 22 12.81V7.176a1.75 1.75 0 0 0-1.093-1.622l-7.498-3.04a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.175v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04a3.75 3.75 0 0 0 1.966.233 6.5 6.5 0 0 1-.96-1.494 2.3 2.3 0 0 1-.442-.129l-7.499-3.04a.25.25 0 0 1-.156-.232V7.176a.25.25 0 0 1 .156-.232l7.499-3.04a2.25 2.25 0 0 1 1.69 0l7.499 3.04a.25.25 0 0 1 .156.232M12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m8.5-3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 14c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 .5-.5M15 19.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 0 1 .764.645A3.5 3.5 0 0 1 17.5 21a3.5 3.5 0 0 1-2.5-1.05"/>`
} as const;

export default function CubeSyncIcon({ 
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

  const gradientId = 'cubesyncicon_gradient';
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