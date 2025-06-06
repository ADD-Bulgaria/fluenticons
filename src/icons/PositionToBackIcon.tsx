import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 11h1.25A3.75 3.75 0 0 0 11 7.25V6h3.75A3.25 3.25 0 0 1 18 9.25V13h-1.25A3.75 3.75 0 0 0 13 16.75V18H9.25A3.25 3.25 0 0 1 6 14.75zM1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75v3.5A2.75 2.75 0 0 1 7.25 10h-3.5A2.75 2.75 0 0 1 1 7.25zM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zM14 16.75A2.75 2.75 0 0 1 16.75 14h3.5A2.75 2.75 0 0 1 23 16.75v3.5A2.75 2.75 0 0 1 20.25 23h-3.5A2.75 2.75 0 0 1 14 20.25zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25z"/>`,
  'regular': `<path d="M14 16.75A2.75 2.75 0 0 1 16.75 14h3.5A2.75 2.75 0 0 1 23 16.75v3.5A2.75 2.75 0 0 1 20.25 23h-3.5A2.75 2.75 0 0 1 14 20.25zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zM6 11v3.75A3.25 3.25 0 0 0 9.25 18H13v-1.25q0-.126.008-.25h-.324l.367-.367a3.75 3.75 0 0 1 3.082-3.082l.367-.367v.324q.124-.008.25-.008H18V9.25A3.25 3.25 0 0 0 14.75 6H11v1.25q0 .126-.008.25h.57l-.678.678a3.76 3.76 0 0 1-2.706 2.706l-.678.678v-.57a4 4 0 0 1-.25.008zm7.684-3.5h1.066c.24 0 .469.048.677.136l-7.791 7.79a1.8 1.8 0 0 1-.136-.676v-1.066zm-4.434 9q-.259-.001-.495-.071l7.674-7.674q.07.236.071.495v1.313L10.563 16.5zM1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75v3.5A2.75 2.75 0 0 1 7.25 10h-3.5A2.75 2.75 0 0 1 1 7.25zM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function PositionToBackIcon({ 
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

  const gradientId = 'positiontobackicon_gradient';
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