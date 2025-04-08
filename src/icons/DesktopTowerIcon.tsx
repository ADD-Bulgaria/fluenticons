import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 4.25A2.25 2.25 0 0 1 4.25 2h5.5A2.25 2.25 0 0 1 12 4.25V6H9.25A3.25 3.25 0 0 0 6 9.25v6.5A3.25 3.25 0 0 0 9.25 19h1.25v.5h-.25A1.75 1.75 0 0 0 8.668 22H4.25A2.25 2.25 0 0 1 2 19.75zM9.25 7A2.25 2.25 0 0 0 7 9.25v6.5A2.25 2.25 0 0 0 9.25 18h2.25v2.5h-1.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5H17.5V18h2.25A2.25 2.25 0 0 0 22 15.75v-6.5A2.25 2.25 0 0 0 19.75 7zM16 18v2.5h-3V18z"/>`,
  'regular': `<path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v15.5A2.25 2.25 0 0 0 4.25 22h4.418a1.74 1.74 0 0 1 0-1.5H4.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75V6H12V4.25A2.25 2.25 0 0 0 9.75 2zM7 9.25A2.25 2.25 0 0 1 9.25 7h10.5A2.25 2.25 0 0 1 22 9.25v6.5A2.25 2.25 0 0 1 19.75 18H17.5v2.5h1.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h1.25V18H9.25A2.25 2.25 0 0 1 7 15.75zm9 11.25V18h-3v2.5zm3.75-4a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H9.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75z"/>`
} as const;

export default function DesktopTowerIcon({ 
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

  const gradientId = 'desktoptowericon_gradient';
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