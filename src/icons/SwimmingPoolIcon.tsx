import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8a3 3 0 0 0-3 3v1.5a1.5 1.5 0 0 1-3 0V11a6 6 0 1 1 12 0v7h15v-7a3 3 0 1 0-6 0v1.5a1.5 1.5 0 1 1-3 0V11a6 6 0 0 1 12 0v17.715A17 17 0 0 1 33 29v-8H18v3.523a21 21 0 0 0-3-.462V11a3 3 0 0 0-3-3M5.345 30.484a1.5 1.5 0 0 1 .198-2.112l.002-.002.002-.001.004-.003.01-.008.025-.021a5 5 0 0 1 .343-.249 10 10 0 0 1 .948-.563 13.2 13.2 0 0 1 3.534-1.227c3.09-.62 7.472-.46 12.923 2.314 4.96 2.523 9.344 2.648 12.475 2.164a18 18 0 0 0 3.69-.975c.428-.166.755-.315.967-.418q.16-.079.232-.118l.049-.026.002-.002h.002v-.001h.002a1.5 1.5 0 0 1 1.498 2.598l-.002.001-.005.003-.01.006-.029.016a7 7 0 0 1-.424.22c-.282.137-.685.32-1.198.519a20.8 20.8 0 0 1-4.315 1.141c-3.65.566-8.689.398-14.294-2.454-4.872-2.479-8.567-2.53-10.973-2.047-1.216.244-2.134.63-2.733.944a7 7 0 0 0-.797.489l-.023.017a1.5 1.5 0 0 1-2.103-.205m0 9a1.5 1.5 0 0 1 .198-2.112l.002-.002.002-.001.004-.004.01-.007.025-.021a5 5 0 0 1 .343-.249 10 10 0 0 1 .948-.563 13.2 13.2 0 0 1 3.534-1.227c3.09-.62 7.472-.46 12.923 2.314 4.96 2.523 9.344 2.648 12.475 2.164a18 18 0 0 0 3.69-.975c.428-.166.755-.315.967-.418q.16-.08.232-.118l.049-.026.002-.002h.002v-.001h.002a1.5 1.5 0 0 1 1.498 2.598l-.002.001-.001.001-.004.002-.01.006-.029.016a7 7 0 0 1-.424.22c-.282.137-.685.32-1.198.519a20.8 20.8 0 0 1-4.315 1.141c-3.65.566-8.689.398-14.294-2.454-4.872-2.479-8.567-2.53-10.973-2.047-1.216.244-2.134.63-2.733.944a7 7 0 0 0-.797.489l-.023.017a1.5 1.5 0 0 1-2.103-.205"/>`,
  'regular': `<path d="M9 10.75a3.25 3.25 0 0 1 6.5 0v13.402c.8.075 1.634.204 2.5.397V21h15.5v8.058a17 17 0 0 0 2.5-.264V10.75a5.75 5.75 0 0 0-11.5 0v1a1.25 1.25 0 1 0 2.5 0v-1a3.25 3.25 0 0 1 6.5 0v7.75H18v-7.75a5.75 5.75 0 0 0-11.5 0v1a1.25 1.25 0 1 0 2.5 0zm13.054 20.003c-9.48-4.866-14.726-.355-14.964-.15l-.002.001c-.51.458-1.3.418-1.76-.09a1.24 1.24 0 0 1 .08-1.75c.27-.25 6.689-5.941 17.806-.23 9.928 5.105 17.586.757 17.906.568.59-.349 1.36-.15 1.71.438.349.587.16 1.353-.44 1.701-.23.14-3.9 2.259-9.438 2.259-3.837-.103-7.472-.983-10.898-2.747M7.09 39.603c.238-.205 5.485-4.716 14.964.15 3.426 1.764 7.06 2.644 10.898 2.747 5.538 0 9.207-2.12 9.437-2.259.6-.348.79-1.114.44-1.702a1.256 1.256 0 0 0-1.71-.437c-.32.189-7.977 4.537-17.905-.567-11.117-5.712-17.535-.02-17.805.228a1.24 1.24 0 0 0-.08 1.752c.46.507 1.25.547 1.76.09z"/>`
} as const;

export default function SwimmingPoolIcon({ 
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

  const gradientId = 'swimmingpoolicon_gradient';
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