import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 6a1 1 0 0 0-1-1H7l-.217.005A5 5 0 0 0 7 15h2l.117-.007A1 1 0 0 0 9 13H7l-.176-.005A3 3 0 0 1 7 7h2l.117-.007A1 1 0 0 0 10 6m12 4a5 5 0 0 0-5-5h-2l-.117.007A1 1 0 0 0 15 7h2l.176.005a3 3 0 0 1 2.493 4.366 6.5 6.5 0 0 1 1.76.95A5 5 0 0 0 22 10m-5-1H7l-.117.007A1 1 0 0 0 7 11h10l.117-.007A1 1 0 0 0 17 9m-4.163 7.472a2 2 0 0 0 1.441-2.496l-.198-.687a5.3 5.3 0 0 1 1.483-.912l.499.525a2 2 0 0 0 2.899 0l.493-.518a5.3 5.3 0 0 1 1.484.921l-.186.631a2 2 0 0 0 1.45 2.51l.539.13a5.7 5.7 0 0 1 .006 1.808l-.584.144a2 2 0 0 0-1.44 2.496l.197.686a5.3 5.3 0 0 1-1.483.913l-.498-.524a2 2 0 0 0-2.9-.001l-.493.519a5.3 5.3 0 0 1-1.484-.922l.187-.631a2 2 0 0 0-1.45-2.51l-.54-.13a5.7 5.7 0 0 1-.006-1.808zM18.95 17.5c0-.828-.65-1.5-1.45-1.5s-1.45.672-1.45 1.5.65 1.5 1.45 1.5 1.45-.672 1.45-1.5"/>`,
  'regular': `<path d="M9.25 5a.75.75 0 0 1 .11 1.492l-.11.008H7a3.5 3.5 0 0 0-.206 6.994L7 13.5h2.25a.75.75 0 0 1 .11 1.492L9.25 15H7a5 5 0 0 1-.25-9.994L7 5zM17 5a5 5 0 0 1 4.43 7.322 6.5 6.5 0 0 0-1.294-.765 3.5 3.5 0 0 0-2.93-5.05L17 6.499h-2.25a.75.75 0 0 1-.11-1.492L14.75 5zM7 9.25h10a.75.75 0 0 1 .102 1.493L17 10.75H7a.75.75 0 0 1-.102-1.493zm7.278 4.726a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16s1.45.672 1.45 1.5S18.3 19 17.5 19"/>`
} as const;

export default function LinkSettingsIcon({ 
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

  const gradientId = 'linksettingsicon_gradient';
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