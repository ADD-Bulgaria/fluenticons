import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 2A2.75 2.75 0 0 0 6 4.75v5.129a2.25 2.25 0 0 1 2.841.28l3 3a2.25 2.25 0 0 1 0 3.182l-3 3a2.25 2.25 0 0 1-2.841.28v3.629A2.75 2.75 0 0 0 8.75 26h10.5A2.75 2.75 0 0 0 22 23.25v-3.63a2.25 2.25 0 0 1-2.841-.28l-3-3a2.25 2.25 0 0 1 0-3.182l3-3A2.25 2.25 0 0 1 22 9.879V4.75A2.75 2.75 0 0 0 19.25 2zM6.72 12.28 8.44 14H3.75a.75.75 0 0 0 0 1.5h4.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06m14.56 0L19.56 14h4.69a.75.75 0 0 1 0 1.5h-4.69l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06"/>`,
  'regular': `<path d="M8.75 2A2.75 2.75 0 0 0 6 4.75v5.129c.45-.301.983-.423 1.5-.365V4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v4.764a2.25 2.25 0 0 1 1.5.365V4.75A2.75 2.75 0 0 0 19.25 2zM25 14.75a.75.75 0 0 0-.75-.75h-4.69l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h4.69a.75.75 0 0 0 .75-.75m-3 4.871c-.45.301-.983.423-1.5.365v3.264c0 .69-.56 1.25-1.25 1.25H8.75c-.69 0-1.25-.56-1.25-1.25v-3.264a2.25 2.25 0 0 1-1.5-.365v3.629A2.75 2.75 0 0 0 8.75 26h10.5A2.75 2.75 0 0 0 22 23.25zM7.5 11.043a.75.75 0 0 0-.78 1.237L8.44 14H3.75a.75.75 0 0 0 0 1.5h4.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-.28-.177"/>`
} as const;

export default function PhoneSpanInIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'phonespaninicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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