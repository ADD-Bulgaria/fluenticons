import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h6v10.5a1.5 1.5 0 0 1-1.5 1.5H13v-5.001A2 2 0 0 0 11 15h-1v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-1 .268V3.5A1.5 1.5 0 0 1 5.5 2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM4 16v-1.5A1.5 1.5 0 0 1 5.5 13h2A1.5 1.5 0 0 1 9 14.5V16h1.5a1.5 1.5 0 0 1 1.5 1.5V19H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 16zm1-1.5V16h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M9 20h3v1.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 21.5V20h3v.5a.5.5 0 0 0 1 0V20h3v.5a.5.5 0 0 0 1 0z"/>`,
  'regular': `<path d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v9.75a.75.75 0 0 1-.75.75H13V22h4.75A2.25 2.25 0 0 0 20 19.75V9.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25v8.018c.294-.17.636-.268 1-.268h.5zM17.44 8.5H14a.5.5 0 0 1-.5-.5V4.56zM4 16v-1.5A1.5 1.5 0 0 1 5.5 13h2A1.5 1.5 0 0 1 9 14.5V16h1.5a1.5 1.5 0 0 1 1.5 1.5V19H9v-.5a.5.5 0 0 0-1 0v.5H5v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 16zm1-1.5V16h3v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M9 20h3v1.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 21.5V20h3v.5a.5.5 0 0 0 1 0V20h3v.5a.5.5 0 0 0 1 0z"/>`
} as const;

export default function DocumentToolboxIcon({ 
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

  const gradientId = 'documenttoolboxicon_gradient';
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