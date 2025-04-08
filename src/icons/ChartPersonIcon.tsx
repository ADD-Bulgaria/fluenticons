import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.75 4c.69 0 1.25.56 1.25 1.25V6h13.75C41.65 6 44 8.35 44 11.25V29a7 7 0 1 0-11.899 5H31a5 5 0 0 0-4.585 3H19.25a1 1 0 0 1-.081.098l-6 6.5a1.25 1.25 0 1 1-1.838-1.696L15.858 37H9.25A5.25 5.25 0 0 1 4 31.75v-20.5C4 8.35 6.35 6 9.25 6H22.5v-.75c0-.69.56-1.25 1.25-1.25m-11.5 9.5a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zM11 21.75c0 .69.56 1.25 1.25 1.25h14.5a1.25 1.25 0 1 0 0-2.5h-14.5c-.69 0-1.25.56-1.25 1.25m0 7c0 .69.56 1.25 1.25 1.25h11.5a1.25 1.25 0 1 0 0-2.5h-11.5c-.69 0-1.25.56-1.25 1.25M42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`,
  'regular': `<path d="M25 5.25a1.25 1.25 0 1 0-2.5 0V6H9.25A5.25 5.25 0 0 0 4 11.25v20.5C4 34.65 6.35 37 9.25 37h6.607l-4.525 4.902a1.25 1.25 0 1 0 1.836 1.696l6-6.5A1 1 0 0 0 19.25 37h7.165a5.02 5.02 0 0 1 2.402-2.5H9.25a2.75 2.75 0 0 1-2.75-2.75v-20.5A2.75 2.75 0 0 1 9.25 8.5h29.5a2.75 2.75 0 0 1 2.75 2.75v12.388A6.99 6.99 0 0 1 44 29V11.25C44 8.35 41.65 6 38.75 6H25zM12.25 13.5a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zM11 21.75c0-.69.56-1.25 1.25-1.25h14.5a1.25 1.25 0 1 1 0 2.5h-14.5c-.69 0-1.25-.56-1.25-1.25m0 7c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 1 1 0 2.5h-11.5c-.69 0-1.25-.56-1.25-1.25M42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`
} as const;

export default function ChartPersonIcon({ 
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

  const gradientId = 'chartpersonicon_gradient';
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