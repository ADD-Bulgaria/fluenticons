import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2zM9 6.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V7a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5zm0 11h1.25a.75.75 0 0 1 0 1.5H9a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V17a.5.5 0 0 0 .5.5M15.5 7a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H15a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0zM15 17.5a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 1.5 0V17a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5z"/>`,
  'regular': `<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2zM5.5 4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75zM9 6.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V7a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5zm0 11a.5.5 0 0 1-.5-.5v-1.25a.75.75 0 0 0-1.5 0V17a2 2 0 0 0 2 2h1.25a.75.75 0 0 0 0-1.5zM15.5 7a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H15a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0zM15 17.5a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 1.5 0V17a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5z"/>`
} as const;

export default function DocumentFitIcon({ 
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

  const gradientId = 'documentfiticon_gradient';
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