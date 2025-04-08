import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 11.5v-2h9v2zM4 3a2 2 0 0 0-1 3.732V20.25c0 .414.336.75.75.75H6v-5.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75V16c.456-.607 1.182-1 2-1H21V6.732A2 2 0 0 0 20 3zm-.5 2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5m3.25 3h10.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 6.75 8M10 16.5V21H7.5v-4.5zm2 1a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5zm10 .5a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1zm4.25-2.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0"/>`,
  'regular': `<path d="M6.75 8a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zm.75 3.5v-2h9v2zm6.25 2.5a.75.75 0 0 0-.75.75v.3q.243-.05.5-.05H18v-.25a.75.75 0 0 0-.75-.75zm-2.25.75V16c-.314.418-.5.937-.5 1.5V21H3.75a.75.75 0 0 1-.75-.75V6.732A2 2 0 0 1 4 3h16a2 2 0 0 1 1 3.732V15h-1.5V7h-15v12.5H6v-4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75M3.5 5a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5M10 19.5v-4H7.5v4zm2-2a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5zm10 .5a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1zm4.25-2.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0"/>`
} as const;

export default function BuildingRetailMoneyIcon({ 
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

  const gradientId = 'buildingretailmoneyicon_gradient';
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