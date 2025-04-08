import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m4.663 20 1.286-3.999-1.286-3.999 16.092 3.016c1.088.204 1.088 1.762 0 1.966z"/><path d="M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979c.557.092.557.893 0 .986L5.723 18.471a1 1 0 0 0-.788.68l-2.858 8.886c-.407 1.265.91 2.395 2.099 1.8L29.17 17.343c1.106-.552 1.106-2.13 0-2.683z"/><path d="M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979c.557.092.557.893 0 .986L5.723 18.471a1 1 0 0 0-.788.68l-2.858 8.886c-.407 1.265.91 2.395 2.099 1.8L29.17 17.343c1.106-.552 1.106-2.13 0-2.683z"/><path fill-opacity=".3" d="M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979c.557.092.557.893 0 .986L5.723 18.471a1 1 0 0 0-.788.68l-2.858 8.886c-.407 1.265.91 2.395 2.099 1.8L29.17 17.343c1.106-.552 1.106-2.13 0-2.683z"/><path fill-rule="evenodd" d="M15.5 23a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="M23.5 18.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5z" clip-rule="evenodd"/>`,
  'filled': `<path d="M4.176 2.164c-1.188-.594-2.505.536-2.099 1.8l2.858 8.884a1 1 0 0 0 .787.68l11.869 1.979a.5.5 0 0 1 .253.116A8.96 8.96 0 0 1 23 14a8.98 8.98 0 0 1 6.664 2.951c.575-.702.41-1.84-.494-2.292zM5.723 18.47l10.894-1.816A8.97 8.97 0 0 0 14 23q.001.944.187 1.833L4.176 29.838c-1.188.594-2.506-.536-2.099-1.801l2.858-8.886a1 1 0 0 1 .788-.68M23 30.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15M22.75 18a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75"/>`,
  'light': `<path d="M2.079 3.975c-.417-1.267.902-2.407 2.095-1.81L29.168 14.66c.902.45 1.068 1.583.5 2.285q-.366-.345-.768-.646a.5.5 0 0 0-.179-.745L3.727 3.059a.5.5 0 0 0-.698.603l3.898 11.84H18.5a.5.5 0 0 1 .429.243 9 9 0 0 0-1.09.757H6.928L3.03 28.342a.5.5 0 0 0 .698.604L14.5 23.56q.003.55.071 1.082L4.174 29.84c-1.193.597-2.512-.544-2.095-1.81l3.96-12.028zM23.499 31a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m-.25-12.5a.75.75 0 0 1 .75.75V23h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75"/>`,
  'regular': `<path d="M2.078 3.965c-.407-1.265.91-2.395 2.099-1.8L29.171 14.66c.905.452 1.07 1.59.494 2.292a8.98 8.98 0 0 0-6.268-2.943L4.346 4.485l3.382 10.516H18.87a9 9 0 0 0-2.58 2H7.729L4.346 27.517l9.66-4.828a9.2 9.2 0 0 0 .181 2.145l-10.01 5.004c-1.188.594-2.506-.536-2.099-1.8L5.95 16zM23 30.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15M22.75 18a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 1 0 0-1.5H23.5v-3.75a.75.75 0 0 0-.75-.75"/>`
} as const;

export default function SendClockIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'sendclockicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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