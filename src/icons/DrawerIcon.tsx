import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.406 3.89A2 2 0 0 1 8.07 3h7.86a2 2 0 0 1 1.664.89l2.07 3.106A2 2 0 0 1 20 8.106V11a1 1 0 0 1-1 1h-.357l.857 2a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-4A1.5 1.5 0 0 1 4.5 14l.857-2H5a1 1 0 0 1-1-1V8.106a2 2 0 0 1 .336-1.11zM6 10.5l.857-2H5.5v2zm9.51-2H8.49l-2.337 5.451.024.049h11.646l.024-.049zm1.633 0 .857 2h.5v-2zm-6.893 8.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M10.25 16.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM8.07 3a2 2 0 0 0-1.664.89l-2.07 3.106A2 2 0 0 0 4 8.106V11a1 1 0 0 0 1 1h.357L4.5 14A1.5 1.5 0 0 0 3 15.5v4A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5l-.857-2H19a1 1 0 0 0 1-1V8.106a2 2 0 0 0-.336-1.11l-2.07-3.105A2 2 0 0 0 15.93 3zM18 10.5l-.857-2H18.5v2zm-2.49-2 2.337 5.451-.024.049H6.177l-.024-.049L8.489 8.5zM17.865 7H6.136l1.518-2.277A.5.5 0 0 1 8.07 4.5h7.86a.5.5 0 0 1 .416.223zM6.857 8.5 6 10.5h-.5v-2zm-2.357 7h15v4h-15z"/>`
} as const;

export default function DrawerIcon({ 
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

  const gradientId = 'drawericon_gradient';
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