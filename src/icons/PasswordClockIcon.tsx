import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v11.37A12.96 12.96 0 0 0 35 21a12.94 12.94 0 0 0-6.496 1.737L26.768 21l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L25 19.232l-1.866-1.866a1.25 1.25 0 0 0-1.768 1.768L23.232 21l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L25 22.768l1.444 1.444A12.97 12.97 0 0 0 22.038 35H10.25A6.25 6.25 0 0 1 4 28.75zm8.134 4.116a1.25 1.25 0 0 0-1.768 1.768L12.232 21l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L14 22.768l1.866 1.866a1.25 1.25 0 0 0 1.768-1.768L15.768 21l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L14 19.232zM46 34c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"/>`,
  'regular': `<path d="M10.25 7A6.25 6.25 0 0 0 4 13.25v15.5A6.25 6.25 0 0 0 10.25 35h11.788a13 13 0 0 1 .048-2.5H10.25a3.75 3.75 0 0 1-3.75-3.75v-15.5a3.75 3.75 0 0 1 3.75-3.75h27.5a3.75 3.75 0 0 1 3.75 3.75v9.49a13 13 0 0 1 2.5 1.88V13.25A6.25 6.25 0 0 0 37.75 7zm16.194 17.212a13 13 0 0 1 2.06-1.475L26.768 21l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L25 19.232l-1.866-1.866a1.25 1.25 0 0 0-1.768 1.768L23.232 21l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L25 22.768zm-14.31-6.846a1.25 1.25 0 0 0-1.768 1.768L12.232 21l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L14 22.768l1.866 1.866a1.25 1.25 0 0 0 1.768-1.768L15.768 21l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L14 19.232zM46 34c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"/>`
} as const;

export default function PasswordClockIcon({ 
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

  const gradientId = 'passwordclockicon_gradient';
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