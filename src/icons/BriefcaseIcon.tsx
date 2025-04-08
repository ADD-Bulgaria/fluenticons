import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.5 8.25V12h11V8.25a1.75 1.75 0 0 0-1.75-1.75h-7.5a1.75 1.75 0 0 0-1.75 1.75M16 12V8.25A4.25 4.25 0 0 1 20.25 4h7.5A4.25 4.25 0 0 1 32 8.25V12h3.75A6.25 6.25 0 0 1 42 18.25v3.5a3.75 3.75 0 0 1-3.75 3.75H28V25a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.5H9.75A3.75 3.75 0 0 1 6 21.75v-3.5A6.25 6.25 0 0 1 12.25 12zm4 16H9.75A6.22 6.22 0 0 1 6 26.75v7A6.25 6.25 0 0 0 12.25 40h23.5A6.25 6.25 0 0 0 42 33.75v-7A6.22 6.22 0 0 1 38.25 28H28v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>`,
  'regular': `<path d="M16 12V8.25A4.25 4.25 0 0 1 20.25 4h7.5A4.25 4.25 0 0 1 32 8.25V12h3.75A6.25 6.25 0 0 1 42 18.25v15.5A6.25 6.25 0 0 1 35.75 40h-23.5A6.25 6.25 0 0 1 6 33.75v-15.5A6.25 6.25 0 0 1 12.25 12zm2.5-3.75V12h11V8.25a1.75 1.75 0 0 0-1.75-1.75h-7.5a1.75 1.75 0 0 0-1.75 1.75m21 10a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75v3.5a3.75 3.75 0 0 0 3.75 3.75H20V25a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v.5h7.75a3.75 3.75 0 0 0 3.75-3.75zM12.25 28a6.22 6.22 0 0 1-3.75-1.25v7a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-7A6.22 6.22 0 0 1 35.75 28H28v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1z"/>`
} as const;

export default function BriefcaseIcon({ 
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

  const gradientId = 'briefcaseicon_gradient';
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