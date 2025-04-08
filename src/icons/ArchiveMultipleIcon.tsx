import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.75 2A1.75 1.75 0 0 0 3 3.75v1.5C3 6.216 3.784 7 4.75 7h13.5A1.75 1.75 0 0 0 20 5.25v-1.5A1.75 1.75 0 0 0 18.25 2zM19 8H4v7.75a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75zM9 11.25a.75.75 0 0 1 .75-.75h3.477a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75m12.5.5a3.74 3.74 0 0 0-1.5-3v7.5a4.25 4.25 0 0 1-4.25 4.25h-8.5c.684.91 1.773 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75z"/>`,
  'regular': `<path d="M9.75 10.5a.75.75 0 0 0 0 1.5h3.477a.75.75 0 0 0 0-1.5zm-5-8.5A1.75 1.75 0 0 0 3 3.75v2.5c0 .698.409 1.3 1 1.582v7.918a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75V7.832c.591-.281 1-.884 1-1.582v-2.5A1.75 1.75 0 0 0 18.25 2zm.75 13.75V8h12v7.75A2.25 2.25 0 0 1 15.25 18h-7.5a2.25 2.25 0 0 1-2.25-2.25m-1-12a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25zm17 8a3.74 3.74 0 0 0-1.5-3v7.5a4.25 4.25 0 0 1-4.25 4.25h-8.5c.684.91 1.773 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75z"/>`
} as const;

export default function ArchiveMultipleIcon({ 
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

  const gradientId = 'archivemultipleicon_gradient';
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