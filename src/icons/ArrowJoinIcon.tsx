import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 2a.5.5 0 0 1 .5.5C5 6.124 7.876 9 11.5 9h.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.293 10H11.5A6.457 6.457 0 0 0 5 16.5a.5.5 0 0 1-1 0 7.45 7.45 0 0 1 4.777-7A7.45 7.45 0 0 1 4 2.5a.5.5 0 0 1 .5-.5m5.532 9.193A5.43 5.43 0 0 0 7 13.309V14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v.691a5.43 5.43 0 0 0 3.032 2.116A1.499 1.499 0 0 1 12.56 6.44l2 2a1.5 1.5 0 0 1 0 2.122l-2 2a1.5 1.5 0 0 1-2.53-1.368"/>`,
  'regular': `<path d="M5 2.5a.5.5 0 0 0-1 0 7.45 7.45 0 0 0 4.777 7A7.45 7.45 0 0 0 4 16.5a.5.5 0 0 0 1 0c0-3.624 2.876-6.5 6.5-6.5h.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L12.293 9H11.5A6.457 6.457 0 0 1 5 2.5M8.5 4a.5.5 0 0 0 0 1H15c.524 0 1 .476 1 1v7c0 .524-.476 1-1 1H8.5a.5.5 0 0 0 0 1H15c1.076 0 2-.924 2-2V6c0-1.076-.924-2-2-2z"/>`
} as const;

export default function ArrowJoinIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'arrowjoinicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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