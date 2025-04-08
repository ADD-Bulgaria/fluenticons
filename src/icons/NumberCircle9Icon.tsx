import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20m-20 .5a4.5 4.5 0 1 0-4.5-4.5c0 1.305.44 2.423 1.184 3.205.733.772 1.833 1.295 3.316 1.295M24 13a7 7 0 0 0-7 7c0 1.87.637 3.628 1.871 4.927C20.114 26.236 21.889 27 24 27a6.99 6.99 0 0 0 5.497-2.665c-.05 2.377-.629 4.432-1.574 5.874C26.955 31.687 25.631 32.5 24 32.5c-1.526 0-2.773-.71-3.717-1.994a1.25 1.25 0 0 0-2.014 1.481C19.613 33.815 21.566 35 24 35c2.62 0 4.67-1.37 6.014-3.42C31.338 29.56 32 26.865 32 24c0-3.657-.786-6.408-2.242-8.27C28.27 13.826 26.198 13 24 13"/>`,
  'regular': `<path d="M24 41.5c9.665 0 17.5-7.835 17.5-17.5S33.665 6.5 24 6.5 6.5 14.335 6.5 24 14.335 41.5 24 41.5M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20m-20 .5a4.5 4.5 0 1 0-4.5-4.5c0 1.305.44 2.423 1.184 3.205.733.772 1.833 1.295 3.316 1.295M24 13c2.197 0 4.27.826 5.758 2.73C31.214 17.592 32 20.343 32 24c0 2.866-.662 5.56-1.986 7.58C28.67 33.63 26.62 35 24 35c-2.434 0-4.387-1.185-5.731-3.013a1.25 1.25 0 0 1 2.014-1.481C21.227 31.79 22.474 32.5 24 32.5c1.63 0 2.955-.813 3.923-2.29.945-1.443 1.524-3.498 1.574-5.875A6.99 6.99 0 0 1 24 27c-2.111 0-3.886-.764-5.129-2.073C17.637 23.627 17 21.87 17 20a7 7 0 0 1 7-7"/>`
} as const;

export default function NumberCircle9Icon({ 
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

  const gradientId = 'numbercircle9icon_gradient';
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