import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M8.5 2A3.5 3.5 0 0 0 5 5.5V21h22V5.5A3.5 3.5 0 0 0 23.5 2z"/><path d="M10 21v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4zm10-11a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path d="M23.5 30a3.5 3.5 0 0 0 3.5-3.5V20H5v6.5A3.5 3.5 0 0 0 8.5 30z"/><path fill-opacity=".7" d="M23.5 30a3.5 3.5 0 0 0 3.5-3.5V20H5v6.5A3.5 3.5 0 0 0 8.5 30z"/><path d="M10 24a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"/>`,
  'filled': `<path d="M20 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0M10 24a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zM5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5zM8.5 4A1.5 1.5 0 0 0 7 5.5V20h3v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3V5.5A1.5 1.5 0 0 0 23.5 4zM7 26.5A1.5 1.5 0 0 0 8.5 28h15a1.5 1.5 0 0 0 1.5-1.5V22H7z"/>`,
  'regular': `<path d="M16 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-6 12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zM5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5zM8.5 4A1.5 1.5 0 0 0 7 5.5V20h3v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3V5.5A1.5 1.5 0 0 0 23.5 4zM7 26.5A1.5 1.5 0 0 0 8.5 28h15a1.5 1.5 0 0 0 1.5-1.5V22H7zM20 17h-8v3h8z"/>`
} as const;

export default function PatientIcon({ 
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

  const gradientId = 'patienticon_gradient';
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