import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6.5 8A4.5 4.5 0 0 1 11 3.5h10.5a8 8 0 0 1 8 8V17a4.5 4.5 0 0 1-4.5 4.5H11A4.5 4.5 0 0 1 6.5 17z"/><path d="M3 11.5A4.5 4.5 0 0 1 7.5 7h14a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5h-4.89l-6.205 4.692C9.417 30.439 8 29.734 8 28.495V25h-.5A4.5 4.5 0 0 1 3 20.5z"/>`,
  'filled': `<path d="M27.5 20.5v-9a6 6 0 0 0-6-6h-14q-.123 0-.246.005A4.5 4.5 0 0 1 11 3.5h10.5a8 8 0 0 1 8 8V17a4.5 4.5 0 0 1-2.005 3.746q.005-.123.005-.246M3 11.5A4.5 4.5 0 0 1 7.5 7h14a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5h-4.89l-6.205 4.692C9.417 30.439 8 29.734 8 28.495V25h-.5A4.5 4.5 0 0 1 3 20.5z"/>`,
  'regular': `<path d="M27.5 17.014V20.5q0 .123-.005.246A4.5 4.5 0 0 0 29.5 17v-5.5a8 8 0 0 0-8-8H11a4.5 4.5 0 0 0-3.746 2.005Q7.377 5.5 7.5 5.5h14q.53 0 1.036.09A6 6 0 0 1 27.5 11.5zM7.5 7A4.5 4.5 0 0 0 3 11.5v9A4.5 4.5 0 0 0 7.5 25H8v3.495c0 1.239 1.417 1.944 2.405 1.197L16.61 25h4.89a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 21.5 7zM5 11.5A2.5 2.5 0 0 1 7.5 9h14a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-5.561L10 27.49V23H7.5A2.5 2.5 0 0 1 5 20.5z"/>`
} as const;

export default function CommentMultipleIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'commentmultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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