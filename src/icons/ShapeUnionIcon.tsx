import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2z"/>`,
  'regular': `<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v8q0 .15.013.297a3.2 3.2 0 0 0 .542 1.52c.258.382.596.707.989.95a3.2 3.2 0 0 0 1.409.47h.006a3 3 0 0 0 .291.013H7.5v2.25a3.24 3.24 0 0 0 2.226 3.085A3.2 3.2 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.246 3.246 0 0 0-3.25-3.25H16.5V5.25q0-.15-.013-.297a3.2 3.2 0 0 0-.542-1.52 3.3 3.3 0 0 0-.989-.95 3.2 3.2 0 0 0-1.409-.47h-.006A3 3 0 0 0 13.25 2zm.69 1.5L3.5 5.94v-.69c0-.966.784-1.75 1.75-1.75zM3.5 8.06 8.06 3.5h1.88L3.5 9.94zm8.56-4.56h1.19q.31.002.588.101L3.601 13.838a1.8 1.8 0 0 1-.101-.588v-1.19zm2.84 1.162q.1.277.101.588v1.19L6.44 15H5.25q-.31-.002-.588-.101zm.104 3.895A.5.5 0 0 0 15.5 9h.94L9 16.44v-.94a.5.5 0 0 0-.443-.497zM18.561 9h.189c.468 0 .893.184 1.207.483L9.483 19.957A1.74 1.74 0 0 1 9 18.75v-.19zm1.939 2.06v1.88l-7.56 7.56h-1.88zm0 4v1.88l-3.56 3.56h-1.88zm-.034 4.035a1.75 1.75 0 0 1-1.371 1.371z"/>`
} as const;

export default function ShapeUnionIcon({ 
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

  const gradientId = 'shapeunionicon_gradient';
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