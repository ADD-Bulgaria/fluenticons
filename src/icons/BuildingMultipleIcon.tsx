import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="M14 4.25V22H3.75a.75.75 0 0 1-.75-.75v-17A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25" clip-rule="evenodd"/><path fill-opacity=".2" fill-rule="evenodd" d="M14 4.25V22H3.75a.75.75 0 0 1-.75-.75v-17A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 4.25V22H3.75a.75.75 0 0 1-.75-.75v-17A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25" clip-rule="evenodd"/><path d="M8 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.75 5A2.25 2.25 0 0 1 21 7.25v14a.75.75 0 0 1-.75.75h-9.247A1 1 0 0 1 10 21V7.25A2.25 2.25 0 0 1 12.25 5z"/><path d="M13 19a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3h-5zm2-10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`,
  'filled': `<path d="M7 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-2.75V5h4.75A2.25 2.25 0 0 1 21 7.25v13.5a.75.75 0 0 1-.75.75h-3v-2.75a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5v2.75h-10a.75.75 0 0 1-.75-.75V4.25A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25M5.25 3.5a.75.75 0 0 0-.75.75V20H10V7.25A2.25 2.25 0 0 1 12.25 5h.25v-.75a.75.75 0 0 0-.75-.75zM18 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M8 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1-4v-.75A2.25 2.25 0 0 0 11.75 2h-6.5A2.25 2.25 0 0 0 3 4.25v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V7.25A2.25 2.25 0 0 0 18.75 5zm-9.5-.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V5h-.25A2.25 2.25 0 0 0 10 7.25V20H4.5zM14.5 20v-1.5h2V20zm3.5-2.25a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V20h-1.5V7.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V20H18z"/>`
} as const;

export default function BuildingMultipleIcon({ 
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

  const gradientId = 'buildingmultipleicon_gradient';
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