import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3H10a1 1 0 1 1 0 2H6.25C5.56 5 5 5.56 5 6.25V10a1 1 0 1 1-2 0zM13 4a1 1 0 0 1 1-1h3.75A3.25 3.25 0 0 1 21 6.25V10a1 1 0 1 1-2 0V6.25C19 5.56 18.44 5 17.75 5H14a1 1 0 0 1-1-1m-9 9a1 1 0 0 1 1 1v3.586l4.525-4.525a3.5 3.5 0 0 1 4.95 0L19 17.586V14a1 1 0 1 1 2 0v3.75A3.25 3.25 0 0 1 17.75 21H14a1 1 0 1 1 0-2h3.586l-4.525-4.525a1.5 1.5 0 0 0-2.122 0L6.414 19H10a1 1 0 1 1 0 2H6.25A3.25 3.25 0 0 1 3 17.75V14a1 1 0 0 1 1-1m13.5-4.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"/>`,
  'regular': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4A1.75 1.75 0 0 0 4.5 6.25v4a.75.75 0 0 1-1.5 0zm10-2.5a.75.75 0 0 1 .75-.75h4A3.25 3.25 0 0 1 21 6.25v4a.75.75 0 0 1-1.5 0v-4a1.75 1.75 0 0 0-1.75-1.75h-4a.75.75 0 0 1-.75-.75M3.75 13a.75.75 0 0 1 .75.75v4q.002.31.101.588l5.631-5.63a2.5 2.5 0 0 1 3.536 0l5.63 5.63q.1-.277.102-.588v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21h-4a.75.75 0 0 1 0-1.5h4q.31-.002.588-.101l-5.63-5.631a1 1 0 0 0-1.415 0l-5.631 5.63q.277.1.588.102h4a.75.75 0 0 1 0 1.5h-4A3.25 3.25 0 0 1 3 17.75v-4a.75.75 0 0 1 .75-.75m11.5-5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M13 8.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>`
} as const;

export default function WallpaperIcon({ 
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

  const gradientId = 'wallpapericon_gradient';
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