import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 2A3.25 3.25 0 0 0 3 5.25V6H2a1 1 0 0 0 0 2h1v5H2a1 1 0 1 0 0 2h1v5H2a1 1 0 1 0 0 2h1v.75A3.25 3.25 0 0 0 6.25 26h1.446L23 8.14V5.25A3.25 3.25 0 0 0 19.75 2zM10 9h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2m18.996-1.497c0-1.393-1.733-2.034-2.639-.976L8.364 27.526c-.834.973-.143 2.476 1.139 2.476h16.243a3.25 3.25 0 0 0 3.25-3.25zM23.12 17.971a.5.5 0 0 1 .88.326V24a1 1 0 0 1-1 1h-4.815a.5.5 0 0 1-.38-.825z"/>`,
  'regular': `<path d="M2.999 5.25A3.25 3.25 0 0 1 6.249 2h13.5a3.25 3.25 0 0 1 3.25 3.25v3.658l-2 2.334V5.25c0-.69-.56-1.25-1.25-1.25h-13.5c-.69 0-1.25.56-1.25 1.25V6h1a1 1 0 1 1 0 2h-1v5h1a1 1 0 1 1 0 2h-1v5h1a1 1 0 1 1 0 2h-1v.75c0 .69.56 1.25 1.25 1.25h3.818l-1.714 2H6.25A3.25 3.25 0 0 1 3 22.75V22H2a1 1 0 0 1 0-2h1v-5H2a1 1 0 0 1 0-2h1V8H2a1 1 0 0 1 0-2h1zm7 3.75a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM25 16.3c0-.696-.866-1.016-1.32-.488l-7.668 8.95a.75.75 0 0 0 .57 1.238H24a1 1 0 0 0 1-1zM23 24h-3.701L23 19.68zm5.996-16.497c0-1.393-1.733-2.034-2.639-.976L8.364 27.526c-.834.973-.143 2.476 1.139 2.476h16.243a3.25 3.25 0 0 0 3.25-3.25zm-2 1.352v17.897c0 .69-.56 1.25-1.25 1.25H10.59z"/>`
} as const;

export default function BinderTriangleIcon({ 
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

  const gradientId = 'bindertriangleicon_gradient';
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