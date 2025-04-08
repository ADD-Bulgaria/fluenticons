import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.834 19.58a6.25 6.25 0 0 0 0 8.84l13.749 13.748a6.25 6.25 0 0 0 8.839 0L42.17 28.419a6.25 6.25 0 0 0 0-8.838L28.422 5.832a6.25 6.25 0 0 0-8.84 0z"/>`,
  'regular': `<path d="M5.833 28.42a6.25 6.25 0 0 1 0-8.84L19.58 5.833a6.25 6.25 0 0 1 8.839 0l13.748 13.749a6.25 6.25 0 0 1 0 8.838L28.42 42.168a6.25 6.25 0 0 1-8.839 0zM7.6 21.347a3.75 3.75 0 0 0 0 5.304L21.35 40.4a3.75 3.75 0 0 0 5.303 0L40.4 26.652a3.75 3.75 0 0 0 0-5.304L26.652 7.6a3.75 3.75 0 0 0-5.303 0z"/>`
} as const;

export default function DiamondIcon({ 
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

  const gradientId = 'diamondicon_gradient';
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