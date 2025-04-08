import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.997 17.499c0-1.29.375-2.49 1.022-3.501H6.25A2.25 2.25 0 0 0 4 16.248v.92c0 .572.178 1.13.51 1.596 1.403 1.968 3.617 3.034 6.58 3.21l.522-1.713a6.5 6.5 0 0 1-.615-2.762M11.998 2a5.001 5.001 0 1 1 0 10.002 5.001 5.001 0 0 1 0-10.002M23 17.499a5.5 5.5 0 0 1-8.168 4.813l-2.187.665a.5.5 0 0 1-.624-.624l.666-2.187A5.501 5.501 0 1 1 23 17.498m-7.501-1.5a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h2a.5.5 0 1 0 0-1h-2a.5.5 0 0 0-.5.5"/>`,
  'regular': `<path d="M11.31 15.498a6.5 6.5 0 0 1 .71-1.5H6.25A2.25 2.25 0 0 0 4 16.248v.577c0 .893.319 1.757.898 2.436 1.413 1.654 3.491 2.552 6.192 2.714l.451-1.482c-2.502-.08-4.319-.821-5.502-2.206a2.25 2.25 0 0 1-.539-1.462v-.578a.75.75 0 0 1 .75-.749zM11.999 2a5.001 5.001 0 1 1 0 10.002 5.001 5.001 0 0 1 0-10.002m0 1.5a3.5 3.5 0 1 0 0 7.002 3.5 3.5 0 0 0 0-7.002M23 17.5a5.5 5.5 0 0 1-8.168 4.813l-2.187.665a.5.5 0 0 1-.624-.624l.666-2.187A5.501 5.501 0 1 1 23 17.498m-7.501-1.5a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h2a.5.5 0 1 0 0-1h-2a.5.5 0 0 0-.5.5"/>`
} as const;

export default function PersonChatIcon({ 
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

  const gradientId = 'personchaticon_gradient';
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