import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 10.25A6.25 6.25 0 0 1 29.25 4h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 23 10.25m22 0A6.25 6.25 0 0 0 38.75 4h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 45 10.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25m-7 0c0-1.555.417-3.009 1.142-4.25H11.25A7.25 7.25 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36H36.75A7.25 7.25 0 0 0 44 28.75V16.69a7.82 7.82 0 0 1-5 1.81H29c-4.418 0-8-3.694-8-8.25"/>`,
  'regular': `<path d="M23 10.25A6.25 6.25 0 0 1 29.25 4h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 23 10.25m22 0A6.25 6.25 0 0 0 38.75 4h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 45 10.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25m13.5 18.5V18.09a7.9 7.9 0 0 0 2.5-1.4v12.06A7.25 7.25 0 0 1 36.75 36H26.397l-10.85 7.658C14.058 44.71 12 43.644 12 41.82V36h-.75A7.25 7.25 0 0 1 4 28.75v-15.5A7.25 7.25 0 0 1 11.25 6h10.892a8.4 8.4 0 0 0-.962 2.5h-9.93a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.838L25.603 33.5H36.75a4.75 4.75 0 0 0 4.75-4.75"/>`
} as const;

export default function CommentLinkIcon({ 
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

  const gradientId = 'commentlinkicon_gradient';
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