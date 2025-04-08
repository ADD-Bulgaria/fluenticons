import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M37.222 39.997a7 7 0 0 0 3.07-.818A7 7 0 0 0 44 33v-9.75a4.25 4.25 0 0 0-3.409-4.167A4.3 4.3 0 0 0 39.75 19h-5.5q-.433.001-.842.083A4.25 4.25 0 0 0 30 23.25V33c0 2.675 1.501 5 3.707 6.179a6.96 6.96 0 0 0 3.27.821H37q.111 0 .222-.004"/><path fill-opacity=".5" d="M37.222 39.997a7 7 0 0 0 3.07-.818A7 7 0 0 0 44 33v-9.75a4.25 4.25 0 0 0-3.409-4.167A4.3 4.3 0 0 0 39.75 19h-5.5q-.433.001-.842.083A4.25 4.25 0 0 0 30 23.25V33c0 2.675 1.501 5 3.707 6.179a6.96 6.96 0 0 0 3.27.821H37q.111 0 .222-.004"/><path d="M11.222 39.997a7 7 0 0 0 3.07-.818A7 7 0 0 0 18 33v-9.75a4.25 4.25 0 0 0-3.409-4.167A4.3 4.3 0 0 0 13.75 19h-5.5q-.433.001-.842.083A4.25 4.25 0 0 0 4 23.25V33c0 2.675 1.501 5 3.707 6.179a6.96 6.96 0 0 0 3.27.821H11q.112 0 .222-.004"/><path fill-opacity=".5" d="M11.222 39.997a7 7 0 0 0 3.07-.818A7 7 0 0 0 18 33v-9.75a4.25 4.25 0 0 0-3.409-4.167A4.3 4.3 0 0 0 13.75 19h-5.5q-.433.001-.842.083A4.25 4.25 0 0 0 4 23.25V33c0 2.675 1.501 5 3.707 6.179a6.96 6.96 0 0 0 3.27.821H11q.112 0 .222-.004"/><path d="M19.25 19A4.25 4.25 0 0 0 15 23.25V34a9 9 0 1 0 18 0V23.25A4.25 4.25 0 0 0 28.75 19z"/><path d="M19.25 19A4.25 4.25 0 0 0 15 23.25V34a9 9 0 1 0 18 0V23.25A4.25 4.25 0 0 0 28.75 19zM37 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10M11 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m7 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0"/>`,
  'filled': `<path d="M18 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0m19-4a5 5 0 1 0 0 10 5 5 0 0 0 0-10M11 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m8.25 12A4.25 4.25 0 0 0 15 23.25V34a9 9 0 1 0 18 0V23.25A4.25 4.25 0 0 0 28.75 19zM13 23.25c0-1.6.602-3.061 1.592-4.167A4.3 4.3 0 0 0 13.75 19h-5.5A4.25 4.25 0 0 0 4 23.25V33a7 7 0 0 0 10.293 6.179A10.95 10.95 0 0 1 13 34zM35 34c0 1.872-.468 3.635-1.293 5.179A7 7 0 0 0 44 33v-9.75A4.25 4.25 0 0 0 39.75 19h-5.5q-.433.001-.842.083A6.23 6.23 0 0 1 35 23.25z"/>`,
  'regular': `<path d="M24 7.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M18 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0m19-1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M32 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0M8.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M11 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m4 16.25A4.25 4.25 0 0 1 19.25 19h9.5A4.25 4.25 0 0 1 33 23.25V34a9 9 0 1 1-18 0zm9 17.25a6.5 6.5 0 0 0 6.5-6.5V23.25a1.75 1.75 0 0 0-1.75-1.75h-9.5a1.75 1.75 0 0 0-1.75 1.75V34a6.5 6.5 0 0 0 6.5 6.5m-13-3a4.5 4.5 0 0 0 2.367-.672c.219.826.532 1.613.926 2.35A7 7 0 0 1 4 33v-9.749A4.25 4.25 0 0 1 8.25 19h5.5q.433.001.841.083a6.24 6.24 0 0 0-1.343 2.417H8.25a1.75 1.75 0 0 0-1.75 1.75V33a4.5 4.5 0 0 0 4.5 4.5M37 40a7 7 0 0 1-3.293-.821c.394-.738.707-1.525.926-2.351A4.5 4.5 0 0 0 41.5 33v-9.75a1.75 1.75 0 0 0-1.75-1.75h-4.998a6.24 6.24 0 0 0-1.344-2.417q.41-.082.842-.083h5.5A4.25 4.25 0 0 1 44 23.25V33a7 7 0 0 1-7 7"/>`
} as const;

export default function PeopleTeamIcon({ 
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

  const gradientId = 'peopleteamicon_gradient';
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