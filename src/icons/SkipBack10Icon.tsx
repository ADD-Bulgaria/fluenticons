import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.5a1.5 1.5 0 1 1 3 0v7.027C11.226 7.582 17.292 4.9 24.022 5c8.4.126 16.269 4.411 20.072 12.084a1.5 1.5 0 0 1-2.688 1.332C38.168 11.883 31.41 8.111 23.978 8c-6.51-.097-12.23 2.768-15.874 8H16.5a1.5 1.5 0 1 1 0 3h-11A1.5 1.5 0 0 1 4 17.5zm15 18a1.5 1.5 0 0 0-2.794-.759l-.001.002-.01.016a8 8 0 0 1-.268.413c-.198.29-.495.7-.882 1.164-.784.94-1.898 2.056-3.267 2.878a1.5 1.5 0 1 0 1.544 2.572A15 15 0 0 0 16 27.71V40.5a1.5 1.5 0 0 0 3 0zM30.314 22c-2.7 0-4.625 1.244-5.787 3.233-1.095 1.874-1.463 4.313-1.463 6.767s.368 4.893 1.463 6.767C25.689 40.757 27.614 42 30.314 42s4.626-1.244 5.788-3.233c1.094-1.874 1.462-4.313 1.462-6.767s-.368-4.893-1.462-6.767C34.94 23.243 33.014 22 30.314 22m-4.25 10c0-2.24.351-4.052 1.053-5.254C27.752 25.66 28.702 25 30.314 25s2.562.659 3.197 1.746c.702 1.202 1.053 3.014 1.053 5.254s-.35 4.052-1.053 5.254C32.876 38.34 31.926 39 30.314 39s-2.562-.659-3.197-1.746c-.702-1.202-1.053-3.014-1.053-5.254"/>`,
  'regular': `<path d="M17.195 8.18a20.03 20.03 0 0 1 14.11.427c4.488 1.847 8.162 5.337 10.325 9.702a1.25 1.25 0 1 0 2.24-1.11c-2.424-4.892-6.547-8.82-11.613-10.904A22.53 22.53 0 0 0 6.5 12.557V5.85a1.25 1.25 0 1 0-2.5 0v11.355c0 .69.56 1.25 1.25 1.25h11.355a1.25 1.25 0 0 0 0-2.5H7.06a20.03 20.03 0 0 1 10.135-7.776m.772 14.05a1.24 1.24 0 0 1 .533 1.052v17.471a1.25 1.25 0 1 1-2.5 0v-13.83c-.757.77-1.748 1.587-3.107 2.402a1.25 1.25 0 1 1-1.286-2.143c2.495-1.498 3.438-2.899 4.26-4.12q.173-.258.343-.503a1.253 1.253 0 0 1 1.743-.339zm12.347-.227c-2.627 0-4.47 1.24-5.58 3.196-1.054 1.86-1.42 4.303-1.42 6.804s.366 4.945 1.42 6.804c1.11 1.956 2.953 3.196 5.58 3.196s4.47-1.24 5.58-3.196c1.055-1.859 1.42-4.302 1.42-6.804 0-2.501-.365-4.944-1.42-6.804-1.11-1.956-2.953-3.196-5.58-3.196m-4.5 10c0-2.33.353-4.262 1.095-5.57.687-1.21 1.72-1.93 3.405-1.93s2.718.72 3.405 1.93c.742 1.308 1.095 3.24 1.095 5.57s-.353 4.263-1.095 5.57c-.687 1.212-1.72 1.93-3.405 1.93s-2.718-.718-3.405-1.93c-.742-1.307-1.095-3.239-1.095-5.57"/>`
} as const;

export default function SkipBack10Icon({ 
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

  const gradientId = 'skipback10icon_gradient';
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