import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 3a4 4 0 1 0 0-8 4 4 0 0 0 0 8m15.5-7a8.5 8.5 0 0 0-8.5 8.5 1.5 1.5 0 0 0 3 0 5.5 5.5 0 1 1 5.5 5.5h-17a1.5 1.5 0 0 0 0 3h17a8.5 8.5 0 0 0 0-17m14.904 12a6.5 6.5 0 0 0-6.306 4.924l-.053.212a1.5 1.5 0 1 0 2.91.728l.053-.213A3.5 3.5 0 0 1 37.404 21h.096a3.5 3.5 0 1 1 0 7h-32a1.5 1.5 0 0 0 0 3H30a3 3 0 1 1-2.77 4.154l-.095-.23a1.5 1.5 0 1 0-2.77 1.153l.097.23A6 6 0 1 0 35.197 31H37.5a6.5 6.5 0 1 0 0-13zM17 39a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0m19-28a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>`,
  'regular': `<path d="M8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M22.999 7c-4.301 0-7.833 3.407-7.998 7.702a1.25 1.25 0 0 0 2.498.096A5.51 5.51 0 0 1 23 9.5a5.501 5.501 0 0 1 .001 11H5.25a1.25 1.25 0 1 0 0 2.5H23a8 8 0 1 0-.001-16m14.988 11.5a6.035 6.035 0 0 0-5.854 4.562l-.096.385a1.25 1.25 0 0 0 2.426.606l.096-.384A3.535 3.535 0 0 1 37.987 21a3.51 3.51 0 0 1 3.513 3.5A3.5 3.5 0 0 1 38 28H5.25a1.25 1.25 0 1 0 0 2.5H30c1.642 0 3 1.368 3 3.04 0 1.628-1.323 2.96-2.922 2.96a2.92 2.92 0 0 1-2.613-1.615l-.097-.194a1.25 1.25 0 1 0-2.236 1.118l.097.194A5.42 5.42 0 0 0 30.079 39c3.009 0 5.421-2.481 5.421-5.46a5.54 5.54 0 0 0-.908-3.04H38a6 6 0 0 0 6-6c0-3.318-2.704-6-6.013-6M19 39a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M40 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>`
} as const;

export default function WeatherDuststormIcon({ 
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

  const gradientId = 'weatherduststormicon_gradient';
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