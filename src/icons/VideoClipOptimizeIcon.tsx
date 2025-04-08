import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.75 3.5A4.25 4.25 0 0 0 3.5 7.75v1a.75.75 0 0 1-1.5 0v-1A5.75 5.75 0 0 1 7.75 2h1a.75.75 0 0 1 0 1.5zm0 21a4.25 4.25 0 0 1-4.25-4.25v-1a.75.75 0 0 0-1.5 0v1A5.75 5.75 0 0 0 7.75 26h1a.75.75 0 0 0 0-1.5zM24.5 7.75a4.25 4.25 0 0 0-4.25-4.25h-1a.75.75 0 0 1 0-1.5h1A5.75 5.75 0 0 1 26 7.75v1a.75.75 0 0 1-1.5 0zM20.25 24.5a4.25 4.25 0 0 0 4.25-4.25v-1a.75.75 0 0 1 1.5 0v1A5.75 5.75 0 0 1 20.25 26h-1a.75.75 0 0 1 0-1.5zM5.004 8.75A3.75 3.75 0 0 1 8.754 5H19.25A3.75 3.75 0 0 1 23 8.75v10.5A3.75 3.75 0 0 1 19.25 23H8.753a3.75 3.75 0 0 1-3.75-3.75zm5.246 9a1 1 0 0 0 1.472.882l7-3.75a1 1 0 0 0 0-1.762l-7-3.75a1 1 0 0 0-1.472.881z"/>`,
  'regular': `<path d="M3.5 7.75A4.25 4.25 0 0 1 7.75 3.5h1a.75.75 0 0 0 0-1.5h-1A5.75 5.75 0 0 0 2 7.75v1a.75.75 0 0 0 1.5 0zm0 12.5a4.25 4.25 0 0 0 4.25 4.25h1a.75.75 0 0 1 0 1.5h-1A5.75 5.75 0 0 1 2 20.25v-1a.75.75 0 0 1 1.5 0zM20.25 3.5a4.25 4.25 0 0 1 4.25 4.25v1a.75.75 0 0 0 1.5 0v-1A5.75 5.75 0 0 0 20.25 2h-1a.75.75 0 0 0 0 1.5zm4.25 16.75a4.25 4.25 0 0 1-4.25 4.25h-1a.75.75 0 0 0 0 1.5h1A5.75 5.75 0 0 0 26 20.25v-1a.75.75 0 0 0-1.5 0zm-14.25-9.999v7.5a1 1 0 0 0 1.472.881l7-3.75a1 1 0 0 0 0-1.762l-7-3.75a1 1 0 0 0-1.472.881M8.754 5a3.75 3.75 0 0 0-3.75 3.75v10.5A3.75 3.75 0 0 0 8.754 23H19.25A3.75 3.75 0 0 0 23 19.25V8.75A3.75 3.75 0 0 0 19.25 5zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H19.25a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H8.753a2.25 2.25 0 0 1-2.25-2.25z"/>`
} as const;

export default function VideoClipOptimizeIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'videoclipoptimizeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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