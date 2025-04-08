import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.02 7.591Q4 7.791 4 8v12a4 4 0 0 0 4 4h4v1a1 1 0 0 1-1 1h-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-1a1 1 0 0 1-1-1v-1h4a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8a4 4 0 0 0-3.98 3.591M18 24v1c0 .35.06.687.17 1h-4.34c.11-.313.17-.65.17-1v-1zm6-2H8a2 2 0 0 1-2-2h20a2 2 0 0 1-2 2"/>`,
  'regular': `<path d="M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4v1a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1v-1H8a4 4 0 0 1-4-4zm14.17 18c-.11-.313-.17-.65-.17-1v-1h-4v1c0 .35-.06.687-.17 1zM24 22a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm2-14a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10h20z"/>`
} as const;

export default function DesktopMacIcon({ 
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

  const gradientId = 'desktopmacicon_gradient';
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