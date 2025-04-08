import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.056 14.183q.692 2.139.693 3.753c0 2.398-.939 4.247-2.5 4.247-.8 0-1.078-.45-1.383-1.546l-.27-1.022q-.15-.538-.526-1.83a.3.3 0 0 0-.03-.066l-2.866-4.485a5.9 5.9 0 0 0-2.855-2.327l-1.257-.481A1.75 1.75 0 0 1 2.97 8.458l.686-3.538a2.25 2.25 0 0 1 1.673-1.758l8.25-2.021a4.75 4.75 0 0 1 5.733 3.44l1.574 6.172a2.75 2.75 0 0 1-2.665 3.43z"/>`,
  'regular': `<path d="M16.5 17.985c0 2.442-1.14 4.199-3.007 4.199-.975 0-1.341-.543-1.69-1.796l-.207-.772q-.152-.54-.527-1.83a.3.3 0 0 0-.03-.066l-2.866-4.485a5.9 5.9 0 0 0-2.855-2.327l-.473-.181A2.75 2.75 0 0 1 3.13 7.635l.404-2.086A3.25 3.25 0 0 1 5.95 3.011l7.628-1.87a4.75 4.75 0 0 1 5.733 3.44l1.415 5.55a3.25 3.25 0 0 1-3.15 4.053h-1.822c.496 1.632.746 2.892.746 3.801M4.6 7.921a1.25 1.25 0 0 0 .78 1.405l.474.181a7.4 7.4 0 0 1 3.582 2.92l2.867 4.486q.136.211.205.454l.552 1.92.212.792c.14.488.21.605.22.605.868 0 1.507-.984 1.507-2.699 0-.884-.326-2.335-.984-4.315a.75.75 0 0 1 .711-.986h2.85a1.75 1.75 0 0 0 1.696-2.183l-1.415-5.549a3.25 3.25 0 0 0-3.923-2.354l-7.628 1.87a1.75 1.75 0 0 0-1.301 1.367z"/>`
} as const;

export default function ThumbDislikeIcon({ 
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

  const gradientId = 'thumbdislikeicon_gradient';
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