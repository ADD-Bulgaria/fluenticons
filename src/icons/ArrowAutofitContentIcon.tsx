import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.064 5.244a.75.75 0 1 0-1.128-.988l-1.75 2a.75.75 0 0 0 0 .988l1.75 2a.75.75 0 0 0 1.128-.988L5.403 7.5h2.862a.75.75 0 0 0 0-1.5H5.403zm11.957-1.058a.75.75 0 0 0-.07 1.058l.66.756h-2.86a.75.75 0 0 0 0 1.5h2.86l-.66.756a.75.75 0 0 0 1.128.988l1.75-2a.75.75 0 0 0 0-.988l-1.75-2a.75.75 0 0 0-1.058-.07M5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 17.75v-4A2.75 2.75 0 0 0 18.25 11zM6 15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M5.994 4.186a.75.75 0 0 1 .07 1.058L5.403 6h2.862a.75.75 0 0 1 0 1.5H5.403l.661.756a.75.75 0 0 1-1.128.988l-1.75-2a.75.75 0 0 1 0-.988l1.75-2a.75.75 0 0 1 1.058-.07M17.95 5.244a.75.75 0 0 1 1.13-.988l1.75 2a.75.75 0 0 1 0 .988l-1.75 2a.75.75 0 0 1-1.13-.988l.662-.756H15.75a.75.75 0 0 1 0-1.5h2.862zM6 15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75M5.75 11A2.75 2.75 0 0 0 3 13.75v4a2.75 2.75 0 0 0 2.75 2.75h12.5A2.75 2.75 0 0 0 21 17.75v-4A2.75 2.75 0 0 0 18.25 11zM4.5 13.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25z"/>`
} as const;

export default function ArrowAutofitContentIcon({ 
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

  const gradientId = 'arrowautofitcontenticon_gradient';
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