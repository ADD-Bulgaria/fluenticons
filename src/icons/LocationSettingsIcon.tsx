import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 37c0 2.515.714 4.863 1.95 6.853a4 4 0 0 1-3.862-1.144L11 32h.038l-.017-.02-.021-.025A17 17 0 0 1 9.274 29.5 16.9 16.9 0 0 1 7 21c0-9.389 7.611-17 17-17s17 7.611 17 17c0 1.315-.15 2.596-.432 3.825A13 13 0 0 0 36 24c-7.18 0-13 5.82-13 13m1.005-9.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12m5.889 4.283a2 2 0 0 1-1.465 2.537l-3.26.748a11 11 0 0 0-.043 3.6l3.464.868a2 2 0 0 1 1.436 2.491l-.997 3.482a11 11 0 0 0 3.086 1.785l2.518-2.607a2 2 0 0 1 2.876-.001l2.484 2.567a11 11 0 0 0 3.095-1.84l-.981-3.196a2 2 0 0 1 1.464-2.537l3.26-.748a11 11 0 0 0 .043-3.6l-3.463-.868a2 2 0 0 1-1.437-2.491l.998-3.482a11 11 0 0 0-3.087-1.785l-2.518 2.607a2 2 0 0 1-2.876.001l-2.484-2.567a11 11 0 0 0-3.095 1.841zM36 40a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M24.005 15.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-3.5 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M41 21c0 1.315-.15 2.596-.432 3.825a13 13 0 0 0-2.417-.648c.229-1.022.349-2.085.349-3.177 0-8.008-6.492-14.5-14.5-14.5S9.5 12.992 9.5 21a14.43 14.43 0 0 0 3.443 9.381l.308.363 9.657 10.251c.242.257.552.409.874.456.308.845.7 1.649 1.169 2.402a4 4 0 0 1-3.863-1.144L11 32h.038l-.017-.02-.021-.025A16.92 16.92 0 0 1 7 21c0-9.389 7.611-17 17-17s17 7.611 17 17M29.894 31.783a2 2 0 0 1-1.465 2.537l-3.26.748a11.1 11.1 0 0 0-.043 3.6l3.464.868a2 2 0 0 1 1.436 2.491l-.997 3.482a11 11 0 0 0 3.086 1.785l2.518-2.607a2 2 0 0 1 2.876-.001l2.484 2.567a11 11 0 0 0 3.095-1.841l-.981-3.195a2 2 0 0 1 1.464-2.537l3.26-.748a11 11 0 0 0 .043-3.6l-3.463-.868a2 2 0 0 1-1.437-2.491l.998-3.482a11 11 0 0 0-3.087-1.785l-2.518 2.607a2 2 0 0 1-2.876 0l-2.484-2.566a11 11 0 0 0-3.095 1.84zM36 40a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function LocationSettingsIcon({ 
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

  const gradientId = 'locationsettingsicon_gradient';
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