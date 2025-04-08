import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.25 3A2.25 2.25 0 0 0 9 5.25V7.5h6V5.25A2.25 2.25 0 0 0 12.75 3zM15 9H9v6h2.498A6.52 6.52 0 0 1 15 11.498zm-6 7.5h2.076q-.075.49-.076 1a6.47 6.47 0 0 0 1.022 3.5h-.772A2.25 2.25 0 0 1 9 18.75zm12-5.25v.772A6.47 6.47 0 0 0 17.5 11q-.51 0-1 .076V9h2.25A2.25 2.25 0 0 1 21 11.25M7.5 15V9H5.25A2.25 2.25 0 0 0 3 11.25v1.5A2.25 2.25 0 0 0 5.25 15zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`,
  'regular': `<path d="M10.75 3A2.25 2.25 0 0 0 8.5 5.25V8.5H5.25A2.25 2.25 0 0 0 3 10.75v2.5a2.25 2.25 0 0 0 2.25 2.25H8.5v3.25A2.25 2.25 0 0 0 10.75 21h1.272a6.5 6.5 0 0 1-.709-1.5h-.563a.75.75 0 0 1-.75-.75V15.5h1.313a6.5 6.5 0 0 1 .709-1.5H10v-4h4v2.022a6.5 6.5 0 0 1 1.5-.709V10h3.25a.75.75 0 0 1 .75.75v.563a6.5 6.5 0 0 1 1.5.709V10.75a2.25 2.25 0 0 0-2.25-2.25H15.5V5.25A2.25 2.25 0 0 0 13.25 3zM14 8.5h-4V5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75zM8.5 10v4H5.25a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function TableCellAddIcon({ 
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

  const gradientId = 'tablecelladdicon_gradient';
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