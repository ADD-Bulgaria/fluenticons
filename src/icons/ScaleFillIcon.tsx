import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 3A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3zM6 6.75A.75.75 0 0 1 6.75 6h2.5a.75.75 0 0 1 0 1.5h-.69l1.72 1.72a.75.75 0 1 1-1.06 1.06L7.5 8.56v.691a.75.75 0 1 1-1.5 0zm11.78 11.031a.75.75 0 0 1-.53.22h-2.5a.75.75 0 0 1 0-1.5h.69l-1.72-1.72a.75.75 0 0 1 1.06-1.061l1.72 1.72v-.69a.75.75 0 0 1 1.5 0v2.501a.75.75 0 0 1-.22.53M18 6.751v2.5a.75.75 0 0 1-1.5 0v-.69l-1.72 1.72a.75.75 0 1 1-1.06-1.061l1.72-1.72h-.69a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75M6.22 17.78a.75.75 0 0 1-.22-.53v-2.5a.75.75 0 0 1 1.5 0v.689l1.72-1.72a.75.75 0 0 1 1.06 1.06L8.56 16.5h.691a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.53-.22"/>`,
  'regular': `<path d="M6 6.75A.75.75 0 0 1 6.75 6h2.5a.75.75 0 0 1 0 1.5h-.69l1.72 1.72a.75.75 0 1 1-1.06 1.06L7.5 8.56v.691a.75.75 0 1 1-1.5 0zm11.25 11.251a.75.75 0 0 0 .75-.75V14.75a.75.75 0 0 0-1.5 0v.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l1.72 1.721h-.69a.75.75 0 0 0 0 1.5zm.53-11.78c.142.14.22.33.22.53v2.5a.75.75 0 0 1-1.5 0v-.69l-1.72 1.72a.75.75 0 1 1-1.06-1.061l1.72-1.72h-.69a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .53.22M6 17.25a.75.75 0 0 0 .75.75h2.501a.75.75 0 0 0 0-1.5h-.69l1.72-1.72a.75.75 0 0 0-1.061-1.06L7.5 15.44v-.69a.75.75 0 0 0-1.5 0zm-3-12A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75zm2.25-.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75z"/>`
} as const;

export default function ScaleFillIcon({ 
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

  const gradientId = 'scalefillicon_gradient';
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