import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.145 2.306A.75.75 0 0 1 13.75 2h4.5a.75.75 0 0 1 .75.75V6.5a1 1 0 0 1-.01.12A2.74 2.74 0 0 1 20 8.75v10.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25V8.75A2.75 2.75 0 0 1 6.75 6h.75v-.25A1.75 1.75 0 0 0 5.75 4h-1a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 1 9 5.75V6h1.437zM17.5 3.5h-3.37L12.297 6h4.953q.127 0 .25.011zm-9.28 6.72a.75.75 0 0 0 0 1.06L10.94 14l-2.72 2.72a.75.75 0 1 0 1.06 1.06L12 15.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L13.06 14l2.72-2.72a.75.75 0 1 0-1.06-1.06L12 12.94l-2.72-2.72a.75.75 0 0 0-1.06 0"/>`,
  'regular': `<path d="M8.22 10.22a.75.75 0 0 1 1.06 0L12 12.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L13.06 14l.47.469 2 2 .001.002.25.249a.75.75 0 1 1-1.061 1.06l-.25-.249-2-2-.47-.47-2.72 2.72a.75.75 0 0 1-1.06-1.061L10.94 14l-2.72-2.72a.75.75 0 0 1 0-1.06M13.75 2a.75.75 0 0 0-.605.306L10.437 6H9v-.25A3.25 3.25 0 0 0 5.75 2.5h-1a.75.75 0 0 0 0 1.5h1c.966 0 1.75.784 1.75 1.75V6h-.75A2.75 2.75 0 0 0 4 8.75v10.5A2.75 2.75 0 0 0 6.75 22h10.5A2.75 2.75 0 0 0 20 19.25V8.75c0-.858-.393-1.625-1.01-2.13q.01-.058.01-.12V2.75a.75.75 0 0 0-.75-.75zm3.75 4.011A3 3 0 0 0 17.25 6h-4.953l1.833-2.5h3.37zM6.75 7.5h10.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25V8.75c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function GasIcon({ 
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

  const gradientId = 'gasicon_gradient';
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