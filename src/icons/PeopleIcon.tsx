import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"/><path fill-opacity=".5" d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"/><path d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9 13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"/><path d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9 13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27zM34 24a6 6 0 1 0 0-12 6 6 0 0 0 0 12m-18 0a8 8 0 1 0 0-16 8 8 0 0 0 0 16"/>`,
  'filled': `<path d="M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16m18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9 13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27zm21.924 11.089c1.376.558 3.119.911 5.325.911 10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27H29.607a5.73 5.73 0 0 1 1.391 3.75v1.295l-.001.057-.006.15q-.008.173-.035.43a10 10 0 0 1-.24 1.325 10.7 10.7 0 0 1-2.042 4.082"/>`,
  'regular': `<path d="M10.5 16a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16m14.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 27c-2.176 0-3.922-.352-5.316-.922l.186-.24c.494-.651.873-1.303 1.163-1.921 1.02.355 2.316.583 3.966.583 4.276 0 6.173-1.533 7.063-2.831a5.55 5.55 0 0 0 .925-2.5 3 3 0 0 0 .012-.176v-.243c0-.69-.56-1.25-1.25-1.25h-9.886a5.7 5.7 0 0 0-1.255-2.5H40.75a3.75 3.75 0 0 1 3.75 3.75v.297l-.003.086q-.005.106-.02.279a8.05 8.05 0 0 1-1.351 3.67C41.701 37.158 38.973 39 33.998 39M6.75 27A3.75 3.75 0 0 0 3 30.75v1.303l.004.097q.006.12.026.318c.029.262.084.622.192 1.05a8.7 8.7 0 0 0 1.5 3.112C6.479 38.946 9.826 41 16 41s9.522-2.054 11.277-4.37a8.7 8.7 0 0 0 1.501-3.113c.108-.427.163-.787.192-1.05a6 6 0 0 0 .03-.414V30.75A3.75 3.75 0 0 0 25.25 27zm-1.249 5.024-.001-.032V30.75c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25v1.242l-.001.032a5 5 0 0 1-.144.88 6.2 6.2 0 0 1-1.07 2.216c-1.182 1.56-3.71 3.38-9.285 3.38s-8.103-1.82-9.285-3.38a6.2 6.2 0 0 1-1.07-2.215 5 5 0 0 1-.144-.881"/>`
} as const;

export default function PeopleIcon({ 
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

  const gradientId = 'peopleicon_gradient';
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