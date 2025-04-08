import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 11.5v-2h9v1.215a7.5 7.5 0 0 1-1.334.785zM18 8.75v1.217c.37 0 .74.127 1.036.38A7.7 7.7 0 0 0 21 11.572v-4.84A2 2 0 0 0 20 3H4a2 2 0 0 0-1 3.732V20.25c0 .414.336.75.75.75H6v-5.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75V21h1.815c-.757-1.006-1.314-2.322-1.314-4v-3.5q.002-.268.083-.5H6.75a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 6.75 8h10.5a.75.75 0 0 1 .75.75M3.5 5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5M10 16.5V21H7.5v-4.5zm12.5-3.523c-1.906-.172-3.433-1.287-4.115-1.87a.6.6 0 0 0-.77 0c-.68.583-2.209 1.698-4.115 1.87a.54.54 0 0 0-.5.523V17c0 4.223 4.094 5.716 4.873 5.962a.42.42 0 0 0 .255 0C18.907 22.716 23 21.222 23 17v-3.5a.54.54 0 0 0-.5-.523"/>`,
  'regular': `<path d="M11.5 19.5h.967c.225.562.517 1.06.848 1.5H3.75a.75.75 0 0 1-.75-.75V6.732A2 2 0 0 1 4 3h16a2 2 0 0 1 1 3.732v4.84a7.4 7.4 0 0 1-1.5-.857V7h-15v12.5H6v-4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75zM3.5 5a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5m4 10.5v4H10v-4zM6.75 8a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h5.334a1.56 1.56 0 0 1 1.326-1.019 5.5 5.5 0 0 0 1.756-.481H7.5v-2h9v1.215a8 8 0 0 0 .465-.368c.295-.253.665-.38 1.035-.38V8.75a.75.75 0 0 0-.75-.75zm11.635 3.106c.681.585 2.209 1.699 4.116 1.871.275.025.5.247.5.523V17c0 4.223-4.094 5.716-4.873 5.962a.42.42 0 0 1-.255 0C17.094 22.716 13 21.222 13 17v-3.5c0-.276.225-.498.5-.523 1.906-.172 3.434-1.287 4.116-1.87a.6.6 0 0 1 .77 0"/>`
} as const;

export default function BuildingRetailShieldIcon({ 
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

  const gradientId = 'buildingretailshieldicon_gradient';
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