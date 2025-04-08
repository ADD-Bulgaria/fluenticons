import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h7.5A2.25 2.25 0 0 1 16 4.25V9.5h1.75A2.25 2.25 0 0 1 20 11.75V21h-2v1H4.75a.75.75 0 0 1-.75-.75z"/><path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h7.5A2.25 2.25 0 0 1 16 4.25V9.5h1.75A2.25 2.25 0 0 1 20 11.75V21h-2v1H4.75a.75.75 0 0 1-.75-.75z"/><path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h7.5A2.25 2.25 0 0 1 16 4.25V9.5h1.75A2.25 2.25 0 0 1 20 11.75V21h-2v1H4.75a.75.75 0 0 1-.75-.75z"/><path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h7.5A2.25 2.25 0 0 1 16 4.25V9.5h1.75A2.25 2.25 0 0 1 20 11.75V21h-2v1H4.75a.75.75 0 0 1-.75-.75z"/><path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h7.5A2.25 2.25 0 0 1 16 4.25V9.5h1.75A2.25 2.25 0 0 1 20 11.75V21h-2v1H4.75a.75.75 0 0 1-.75-.75z"/><path d="M7 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 13c2.2 0 3-1.216 3-2.4a1.6 1.6 0 0 0-1.6-1.6h-2.8a1.6 1.6 0 0 0-1.6 1.6c0 1.183.8 2.4 3 2.4"/><path fill-opacity=".5" d="M20 22c2.2 0 3-1.216 3-2.4a1.6 1.6 0 0 0-1.6-1.6h-2.8a1.6 1.6 0 0 0-1.6 1.6c0 1.183.8 2.4 3 2.4"/><path d="M20 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-4.5 6c2.567 0 3.5-1.52 3.5-3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2c0 1.48.933 3 3.5 3"/><path d="M15.5 23c2.567 0 3.5-1.52 3.5-3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2c0 1.48.933 3 3.5 3m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`,
  'filled': `<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h7.5A2.25 2.25 0 0 1 16 4.25V9.5h1.75A2.25 2.25 0 0 1 20 11.75v1.3a2.5 2.5 0 0 0-1.617 1.119A3.001 3.001 0 0 0 12.5 15c0 .805.317 1.536.833 2.075A3 3 0 0 0 11 20c0 .664.148 1.366.506 2H4.75a.75.75 0 0 1-.75-.75zM8 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4-3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 6c2.567 0 3.5-1.52 3.5-3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2c0 1.48.933 3 3.5 3m4.007-1.022q.234.021.493.022c2.2 0 3-1.216 3-2.4a1.6 1.6 0 0 0-1.6-1.6h-2.164c.475.53.764 1.232.764 2 0 .656-.144 1.35-.493 1.978M22 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M4.75 22a.75.75 0 0 1-.75-.75v-17A2.25 2.25 0 0 1 6.25 2h8a2.25 2.25 0 0 1 2.25 2.25V9.5h1.25A2.25 2.25 0 0 1 20 11.75v1.3a2.5 2.5 0 0 0-1.5.95v-2.25a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75V20.5h5.528a4 4 0 0 0 .478 1.5zM7.5 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1-2.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8.5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 6c2.567 0 3.5-1.52 3.5-3a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2c0 1.48.933 3 3.5 3m4.007-1.022q.234.021.493.022c2.2 0 3-1.216 3-2.4a1.6 1.6 0 0 0-1.6-1.6h-2.164c.475.53.764 1.232.764 2 0 .656-.144 1.35-.493 1.978M22 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function BuildingPeopleIcon({ 
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

  const gradientId = 'buildingpeopleicon_gradient';
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