import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42.5 4A1.5 1.5 0 0 1 44 5.5v12a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 1 1 0-3h8.396c-3.645-5.232-9.364-8.097-15.874-8-7.432.11-14.19 3.883-17.428 10.416a1.5 1.5 0 0 1-2.688-1.332C7.71 9.411 15.578 5.126 23.978 5c6.73-.1 12.796 2.582 17.022 7.527V5.5A1.5 1.5 0 0 1 42.5 4M30.315 22c-2.7 0-4.626 1.244-5.788 3.233-1.094 1.874-1.462 4.313-1.462 6.767s.368 4.893 1.462 6.767C25.69 40.757 27.614 42 30.315 42s4.625-1.244 5.787-3.233c1.095-1.874 1.463-4.313 1.463-6.767s-.368-4.893-1.463-6.767C34.94 23.244 33.015 22 30.315 22m-4.25 10c0-2.24.35-4.052 1.053-5.254C27.753 25.66 28.702 25 30.315 25s2.561.659 3.196 1.746c.703 1.202 1.054 3.014 1.054 5.254s-.351 4.052-1.053 5.254C32.875 38.34 31.926 39 30.315 39s-2.562-.659-3.197-1.746c-.702-1.202-1.053-3.014-1.053-5.254M19 23.5a1.5 1.5 0 0 0-2.794-.759v.002l-.01.016-.05.08a15 15 0 0 1-1.101 1.497c-.783.94-1.897 2.056-3.266 2.878a1.5 1.5 0 0 0 1.543 2.572A15 15 0 0 0 16 27.71V40.5a1.5 1.5 0 1 0 3 0z"/>`,
  'regular': `<path d="M16.694 8.607a20.03 20.03 0 0 1 24.245 7.348h-9.544a1.25 1.25 0 0 0 0 2.5H42.75c.69 0 1.25-.56 1.25-1.25V5.85a1.25 1.25 0 1 0-2.5 0v6.708a22.53 22.53 0 0 0-25.757-6.263C10.677 8.38 6.554 12.307 4.13 17.198a1.25 1.25 0 0 0 2.24 1.11c2.163-4.364 5.837-7.854 10.324-9.701m13.62 13.396c-2.627 0-4.47 1.24-5.579 3.196-1.055 1.86-1.42 4.303-1.42 6.804s.365 4.945 1.42 6.804c1.11 1.956 2.952 3.196 5.58 3.196 2.627 0 4.469-1.24 5.579-3.196 1.055-1.859 1.42-4.302 1.42-6.804 0-2.501-.365-4.944-1.42-6.804-1.11-1.956-2.952-3.196-5.58-3.196m-4.5 10c0-2.33.354-4.262 1.095-5.57.688-1.21 1.72-1.93 3.405-1.93s2.718.72 3.405 1.93c.742 1.308 1.095 3.24 1.095 5.57s-.353 4.263-1.095 5.57c-.687 1.212-1.72 1.93-3.405 1.93s-2.718-.718-3.405-1.93c-.741-1.307-1.094-3.239-1.094-5.57m-7.846-9.773a1.24 1.24 0 0 1 .532 1.052v17.471a1.25 1.25 0 0 1-2.5 0v-13.83c-.757.77-1.748 1.587-3.106 2.402a1.25 1.25 0 1 1-1.287-2.143c2.496-1.498 3.439-2.899 4.261-4.12q.172-.258.343-.503a1.253 1.253 0 0 1 1.743-.339z"/>`
} as const;

export default function SkipForward10Icon({ 
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

  const gradientId = 'skipforward10icon_gradient';
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