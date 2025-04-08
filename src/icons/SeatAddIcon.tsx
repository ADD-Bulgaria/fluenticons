import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm1.471 5.696a6.5 6.5 0 0 1-2.448.287A2.5 2.5 0 0 0 16 15v6h2.75A2.25 2.25 0 0 0 21 18.75V15a2.5 2.5 0 0 0-1.529-2.304M12.021 3H6.25A3.25 3.25 0 0 0 3 6.25v5.627A3.98 3.98 0 0 1 5.5 11c1.339 0 2.524.658 3.25 1.668a3.995 3.995 0 0 1 4.162-1.563A6.48 6.48 0 0 1 11 6.5 6.47 6.47 0 0 1 12.022 3M12 12.5a2.5 2.5 0 0 1 2.5 2.5v6h-5v-6a2.5 2.5 0 0 1 2.5-2.5M8 21v-6a2.5 2.5 0 0 0-5 0v3.75A2.25 2.25 0 0 0 5.25 21z"/>`,
  'regular': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm1.5 7.5c0-.66-.319-1.244-.811-1.608A6.5 6.5 0 0 0 21 11.978v6.772A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V6.25A3.25 3.25 0 0 1 6.25 3h5.772a6.5 6.5 0 0 0-.709 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v5.377a3.5 3.5 0 0 1 2-.627c1.115 0 2.11.522 2.75 1.335a3.49 3.49 0 0 1 3.684-1.21 6.5 6.5 0 0 0 3.377 1.767A2 2 0 0 0 15.5 14.5v5h3.25a.75.75 0 0 0 .75-.75zm-5.5 0a2 2 0 1 0-4 0v5h4zm-8.75 5H8.5v-5a2 2 0 1 0-4 0v4.25c0 .414.336.75.75.75"/>`
} as const;

export default function SeatAddIcon({ 
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

  const gradientId = 'seataddicon_gradient';
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