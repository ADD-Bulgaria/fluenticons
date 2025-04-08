import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.702.702A3.24 3.24 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21h13.5a3.2 3.2 0 0 0 1.024-.165l.945.945a.75.75 0 0 0 1.061-1.06zm9.837 11.957-2.635 1.45A1 1 0 0 1 9 14.75v-4.69zm2.364-3.053a1 1 0 0 1 .312 1.487l6.071 6.072q.135-.445.136-.933V6.25A3.25 3.25 0 0 0 18.75 3H6.182l6.688 6.688z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.702.702A3.24 3.24 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21h13.5a3.2 3.2 0 0 0 1.024-.165l.945.945a.75.75 0 0 0 1.061-1.06zM18.44 19.5H5.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.468.184-.893.483-1.207L9 10.061v4.69a1 1 0 0 0 1.482.875l2.635-1.449zm-5.57-9.812 2.924 2.923a1.002 1.002 0 0 0-.311-1.487zM20.5 6.25v11.068l1.364 1.364q.135-.444.136-.932V6.25A3.25 3.25 0 0 0 18.75 3H6.182l1.5 1.5H18.75c.966 0 1.75.784 1.75 1.75"/>`
} as const;

export default function VideoClipOffIcon({ 
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

  const gradientId = 'videoclipofficon_gradient';
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