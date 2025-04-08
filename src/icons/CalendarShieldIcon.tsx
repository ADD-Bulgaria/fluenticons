import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V14H6zm0 4.25v19.25A6.25 6.25 0 0 0 12.25 42h15.836C26.693 39.96 26 37.602 26 35v-5.25A2.75 2.75 0 0 1 28.75 27c2.155 0 4.338-.754 6.6-2.45a2.75 2.75 0 0 1 3.3 0c1.134.85 2.249 1.464 3.35 1.865V16.5zm36 12.02q-2.305-.686-4.55-2.37a.75.75 0 0 0-.9 0c-2.542 1.907-5.137 2.85-7.8 2.85a.75.75 0 0 0-.75.75V35c0 2.734.884 5.071 2.627 7 1.446 1.6 3.483 2.918 6.098 3.948a.75.75 0 0 0 .55 0C43.042 43.676 46 40 46 35v-5.25a.75.75 0 0 0-.75-.75q-1.642 0-3.25-.48"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v14.165c-.825-.3-1.657-.72-2.5-1.27V16.5h-31v19.25a3.75 3.75 0 0 0 3.75 3.75h14.536q.493 1.318 1.3 2.5H12.25A6.25 6.25 0 0 1 6 35.75zm33.5 15.223q1.24.672 2.5 1.048 1.608.48 3.25.479a.75.75 0 0 1 .75.75V35c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0c-2.615-1.03-4.652-2.349-6.098-3.948a10.1 10.1 0 0 1-1.673-2.5Q28 37.467 28 35v-5.25a.75.75 0 0 1 .75-.75c2.663 0 5.258-.944 7.8-2.85a.75.75 0 0 1 .9 0q1.02.764 2.05 1.323M12.25 8.5a3.75 3.75 0 0 0-3.75 3.75V14h31v-1.75a3.75 3.75 0 0 0-3.75-3.75z"/>`
} as const;

export default function CalendarShieldIcon({ 
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

  const gradientId = 'calendarshieldicon_gradient';
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