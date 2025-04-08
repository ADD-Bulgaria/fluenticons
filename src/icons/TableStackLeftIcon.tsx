import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zM17 25h-5a1 1 0 0 1-1-1v-5.5h6zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25M25 11v6h-6.5v-6zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M11 4a1 1 0 0 1 1-1h5v6.5h-6zm6 13v-6h-6v6z"/>`,
  'regular': `<path d="M3 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0zm22-17.5A3.75 3.75 0 0 0 21.25 3H10.5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10.75A3.75 3.75 0 0 0 25 21.25zM11 18.5h6v5h-6zm6-1.5h-6v-6h6zm1.5 1.5h5v2.75a2.25 2.25 0 0 1-2.25 2.25H18.5zm5-1.5h-5v-6h5zm0-10.25V9.5h-5v-5h2.75a2.25 2.25 0 0 1 2.25 2.25M17 4.5v5h-6v-5z"/>`
} as const;

export default function TableStackLeftIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'tablestacklefticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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