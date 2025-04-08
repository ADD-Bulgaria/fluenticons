import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.56 10.56a1.5 1.5 0 0 0-2.12-2.12l-11 11a1.5 1.5 0 0 0 0 2.12l11 11a1.5 1.5 0 0 0 2.12-2.12L9.122 22H24.5C33.613 22 41 29.387 41 38.5a1.5 1.5 0 0 0 3 0C44 27.73 35.27 19 24.5 19H9.121z"/>`,
  'regular': `<path d="M17.134 10.134a1.25 1.25 0 0 0-1.768-1.768l-11 11a1.25 1.25 0 0 0 0 1.768l11 11a1.25 1.25 0 0 0 1.768-1.768L8.268 21.5H25.25c8.975 0 16.25 7.275 16.25 16.25a1.25 1.25 0 1 0 2.5 0C44 27.395 35.605 19 25.25 19H8.268z"/>`
} as const;

export default function ArrowReplyIcon({ 
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

  const gradientId = 'arrowreplyicon_gradient';
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