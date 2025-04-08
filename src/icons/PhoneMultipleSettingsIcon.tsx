import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.278 2.976a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.632c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.499.525a5.3 5.3 0 0 0 1.482-.913l-.198-.686a2 2 0 0 1 1.442-2.496l.583-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.912zM6.5 8c-.8 0-1.45-.672-1.45-1.5S5.7 5 6.5 5s1.45.672 1.45 1.5S7.3 8 6.5 8M13 6.5a6.5 6.5 0 0 1-7 6.481v4.269a2.25 2.25 0 0 0 2.25 2.25h5.5A2.25 2.25 0 0 0 16 17.25v-13A2.25 2.25 0 0 0 13.75 2h-2.56A6.48 6.48 0 0 1 13 6.5m-4 9.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m-.372 4.25A2.25 2.25 0 0 0 10.75 22h3.5a4.25 4.25 0 0 0 4.25-4.25v-11A2.25 2.25 0 0 0 17 4.628V17.75a2.75 2.75 0 0 1-2.75 2.75z"/>`,
  'regular': `<path d="M3.278 2.976a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.632c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.499.525a5.3 5.3 0 0 0 1.482-.913l-.198-.686a2 2 0 0 1 1.442-2.496l.583-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.912zM6.5 8c-.8 0-1.45-.672-1.45-1.5S5.7 5 6.5 5s1.45.672 1.45 1.5S7.3 8 6.5 8m1 4.924a6.6 6.6 0 0 1-1.5.057v4.269a2.25 2.25 0 0 0 2.25 2.25h5.5A2.25 2.25 0 0 0 16 17.25v-13A2.25 2.25 0 0 0 13.75 2h-2.56c.427.444.79.949 1.078 1.5h1.482a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75zM9.75 15.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-1.122 5A2.25 2.25 0 0 0 10.75 22h3.5a4.25 4.25 0 0 0 4.25-4.25v-11A2.25 2.25 0 0 0 17 4.628V17.75a2.75 2.75 0 0 1-2.75 2.75z"/>`
} as const;

export default function PhoneMultipleSettingsIcon({ 
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

  const gradientId = 'phonemultiplesettingsicon_gradient';
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