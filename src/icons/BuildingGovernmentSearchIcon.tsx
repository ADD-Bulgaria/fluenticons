import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M15 5h2v3h-2z"/><path d="M15 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM7 16a9 9 0 1 1 18 0v1H7z"/><path d="M7 16a9 9 0 1 1 18 0v1H7z"/><path d="M7 16a9 9 0 1 1 18 0v1H7z"/><path d="m13.516 29-3.202-3.256A5 5 0 1 1 7 17v-1h20a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1z"/><path fill-opacity=".5" d="m13.516 29-3.202-3.256A5 5 0 1 1 7 17v-1h20a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1z"/><path fill-opacity=".6" d="m13.516 29-3.202-3.256A5 5 0 1 1 7 17v-1h20a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1z"/><path fill-opacity=".6" d="m13.516 29-3.202-3.256A5 5 0 1 1 7 17v-1h20a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1z"/><path d="M25 21a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0zm-4-9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-1.025 10.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/><path d="M7 28.5c1.296 0 2.496-.41 3.476-1.11l3.317 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 7 28.5m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`,
  'filled': `<path d="M16 2h4.667c.368 0 .666.298.666.667v2.666a.667.667 0 0 1-.666.667H17v1.055A9 9 0 0 1 25 16h2a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H19v-4a1 1 0 0 0-1-1h-3.65q.149-.729.15-1.5a7.47 7.47 0 0 0-1.76-4.827A1 1 0 0 0 13 17v-3a1 1 0 1 0-2 0v2.155A7.46 7.46 0 0 0 7.055 15 9.004 9.004 0 0 1 15 7.055V3a1 1 0 0 1 1-1m5 12a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-4 3v-3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0m8 4a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0zM7 28.5c1.296 0 2.496-.41 3.476-1.11l3.317 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 7 28.5m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`,
  'regular': `<path d="M21 14a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v2.155a7.5 7.5 0 0 1 1.74 1.518A1 1 0 0 0 13 17zm3-5a7 7 0 0 0-6.964 6.28A7.5 7.5 0 0 0 7.055 15 9.004 9.004 0 0 1 15 7.055V3a1 1 0 0 1 1-1h4.667c.368 0 .666.298.666.667v2.666a.667.667 0 0 1-.666.667H17v1.055A9 9 0 0 1 25 16h2a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H16.792a2.5 2.5 0 0 0-.525-.768L15.035 27H17.5v-2h-3.427a7.5 7.5 0 0 0 .41-2H18.5a1 1 0 0 1 1 1v3H28v-8a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1v-1a7 7 0 0 0-7-7m9 12a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0zM7 28.5c1.296 0 2.496-.41 3.476-1.11l3.317 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 7 28.5m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`
} as const;

export default function BuildingGovernmentSearchIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'buildinggovernmentsearchicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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