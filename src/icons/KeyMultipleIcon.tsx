import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.908 2.082a5 5 0 0 0-5.833 5.783L2.22 12.72a.75.75 0 0 0-.22.53v4c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V15.5h2.25a.75.75 0 0 0 .75-.75v-1.69l1.458-1.457A6.47 6.47 0 0 1 10 7.5a6.5 6.5 0 0 1 2.908-5.418M11 7.5a5.5 5.5 0 1 1 8.5 4.61v2.58l1.276 1.28a.75.75 0 0 1 0 1.06l-.967.97.967.97a.75.75 0 0 1-.046 1.102l-3.245 2.75a.75.75 0 0 1-.99-.017l-2.75-2.5a.75.75 0 0 1-.245-.555v-7.64A5.5 5.5 0 0 1 11 7.5m6.5-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`,
  'regular': `<path d="M12 2q.465 0 .908.082a6.5 6.5 0 0 0-1.582 1.483A3.5 3.5 0 0 0 8.62 7.91a.75.75 0 0 1-.194.725L3.5 13.561V16.5h2v-1.75a.75.75 0 0 1 .75-.75H8.5v-1.25a.75.75 0 0 1 .22-.53l1.915-1.915q.336.7.823 1.298L10 13.06v1.689a.75.75 0 0 1-.75.75H7v1.75a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .22-.53l4.855-4.855A5 5 0 0 1 12 2m4.5 1.5a4 4 0 0 0-1.894 7.524.75.75 0 0 1 .394.66v7.734l2.017 1.834 2.123-1.799-.921-.924a.75.75 0 0 1 0-1.058l.967-.971-.967-.97A.75.75 0 0 1 18 15v-3.316a.75.75 0 0 1 .394-.66A4 4 0 0 0 16.5 3.5m-5.5 4a5.5 5.5 0 1 1 8.5 4.61v2.58l1.276 1.28a.75.75 0 0 1 0 1.06l-.967.97.967.97a.75.75 0 0 1-.046 1.102l-3.245 2.75a.75.75 0 0 1-.99-.017l-2.75-2.5a.75.75 0 0 1-.245-.555v-7.64A5.5 5.5 0 0 1 11 7.5m6.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`
} as const;

export default function KeyMultipleIcon({ 
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

  const gradientId = 'keymultipleicon_gradient';
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