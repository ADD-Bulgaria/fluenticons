import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 3.5A7.5 7.5 0 0 0 4.5 11v.25a.75.75 0 0 1-1.5 0V11a9 9 0 0 1 18 0v.25a.75.75 0 0 1-1.5 0V11A7.5 7.5 0 0 0 12 3.5m0 3A4.5 4.5 0 0 0 7.5 11v.25a.75.75 0 0 1-1.5 0V11a6 6 0 1 1 12 0v.25a.75.75 0 0 1-1.5 0V11A4.5 4.5 0 0 0 12 6.5M9 11a3 3 0 1 1 3.75 2.906V16H18a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6h5.25v-2.094A3 3 0 0 1 9 11"/>`,
  'regular': `<path d="M12 3.5A7.5 7.5 0 0 0 4.5 11v.25a.75.75 0 0 1-1.5 0V11a9 9 0 0 1 18 0v.25a.75.75 0 0 1-1.5 0V11A7.5 7.5 0 0 0 12 3.5m0 3A4.5 4.5 0 0 0 7.5 11v.25a.75.75 0 0 1-1.5 0V11a6 6 0 1 1 12 0v.25a.75.75 0 0 1-1.5 0V11A4.5 4.5 0 0 0 12 6.5M12 8a3 3 0 0 0-.75 5.906V16H6a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6h-5.25v-2.094A3.001 3.001 0 0 0 12 8m-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M6 17.5h12a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3"/>`
} as const;

export default function RouterIcon({ 
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

  const gradientId = 'routericon_gradient';
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