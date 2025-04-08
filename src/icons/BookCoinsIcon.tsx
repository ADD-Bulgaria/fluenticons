import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm6.197 2.964C9.622 7.739 9 8.24 9 9s.622 1.26 1.197 1.536c.622.297 1.437.464 2.303.464s1.681-.167 2.303-.464C15.378 10.261 16 9.76 16 9s-.621-1.26-1.197-1.536C14.18 7.167 13.366 7 12.5 7s-1.681.167-2.303.464m5.798 3.426C15.17 11.567 13.91 12 12.5 12s-2.67-.433-3.495-1.11A1 1 0 0 0 9 11c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2q0-.055-.005-.11M12.5 14c-1.41 0-2.67-.433-3.495-1.11A1 1 0 0 0 9 13c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2a1 1 0 0 0-.005-.11C15.17 13.567 13.91 14 12.5 14"/>`,
  'regular': `<path d="M10.197 7.464C10.82 7.167 11.634 7 12.5 7s1.681.167 2.303.464C15.378 7.739 16 8.24 16 9s-.621 1.26-1.197 1.536c-.622.297-1.437.464-2.303.464s-1.681-.167-2.303-.464C9.622 10.261 9 9.76 9 9s.622-1.26 1.197-1.536m.54 1.128c-.465.222-.487.408-.487.408s.022.186.487.408c.419.2 1.041.342 1.763.342s1.344-.141 1.763-.342c.465-.222.487-.408.487-.408s-.022-.186-.487-.408c-.419-.2-1.041-.342-1.763-.342s-1.344.141-1.763.342M12.5 12c1.41 0 2.67-.433 3.495-1.11q.005.055.005.11c0 1.105-1.567 2-3.5 2S9 12.105 9 11q0-.055.005-.11C9.83 11.567 11.09 12 12.5 12m0 2c1.41 0 2.67-.433 3.495-1.11q.005.055.005.11c0 1.105-1.567 2-3.5 2S9 14.105 9 13q0-.055.005-.11C9.83 13.567 11.09 14 12.5 14m-6-12A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"/>`
} as const;

export default function BookCoinsIcon({ 
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

  const gradientId = 'bookcoinsicon_gradient';
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