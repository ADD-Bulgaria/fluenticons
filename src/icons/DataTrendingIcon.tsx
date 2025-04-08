import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M38 17.121V23.5a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0 0 3h6.379l-8.428 8.428-4.442-4.038a1.5 1.5 0 0 0-2.037.018l-8.5 8a1.5 1.5 0 1 0 2.056 2.184l7.49-7.049 4.473 4.067a1.5 1.5 0 0 0 2.07-.05z"/><path d="M7.5 6A1.5 1.5 0 0 1 9 7.5v28a3.5 3.5 0 0 0 3.5 3.5h28a1.5 1.5 0 0 1 0 3h-28A6.5 6.5 0 0 1 6 35.5v-28A1.5 1.5 0 0 1 7.5 6"/>`,
  'filled': `<path d="M7.5 6A1.5 1.5 0 0 1 9 7.5v28a3.5 3.5 0 0 0 3.5 3.5h28a1.5 1.5 0 0 1 0 3h-28A6.5 6.5 0 0 1 6 35.5v-28A1.5 1.5 0 0 1 7.5 6M38 17.121V23.5a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0 0 3h6.379l-8.428 8.428-4.442-4.038a1.5 1.5 0 0 0-2.037.018l-8.5 8a1.5 1.5 0 1 0 2.056 2.184l7.49-7.049 4.473 4.067a1.5 1.5 0 0 0 2.07-.05z"/>`,
  'regular': `<path d="M8.5 7.25a1.25 1.25 0 1 0-2.5 0v28.5A6.25 6.25 0 0 0 12.25 42h28.5a1.25 1.25 0 1 0 0-2.5h-28.5a3.75 3.75 0 0 1-3.75-3.75zm19.5 6c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v10a1.25 1.25 0 1 1-2.5 0v-6.982L27.884 26.384a1.25 1.25 0 0 1-1.725.04l-4.618-4.197-7.407 7.407a1.25 1.25 0 0 1-1.768-1.768l8.25-8.25a1.25 1.25 0 0 1 1.725-.04l4.618 4.197 9.273-9.273H29.25c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function DataTrendingIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'datatrendingicon_gradient';
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