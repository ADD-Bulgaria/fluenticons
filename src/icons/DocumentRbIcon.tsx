import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.75 5H10.5a.5.5 0 0 1-.5-.5V1.25zM9 4.5A1.5 1.5 0 0 0 10.5 6H14v7.498a1.5 1.5 0 0 1-1.5 1.5H8.744c.144-.192.265-.402.352-.633a2.5 2.5 0 0 0-.201-2.153 2.48 2.48 0 0 0-.177-1.868A2.51 2.51 0 0 0 6.501 9h-1a1.52 1.52 0 0 0-1.272.703q-.09-.083-.188-.155L4 9.517V2.5A1.5 1.5 0 0 1 5.5 1H9zm-1.004 7.1a1.5 1.5 0 0 1-.269.762l.001.001a1.49 1.49 0 0 1 .429 1.659 1.51 1.51 0 0 1-1.407.979H5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.33.808c.127.243.184.517.166.791M6.5 10.999H6v1h.5a.5.5 0 1 0 0-1m-.5 3h.75a.5.5 0 1 0 0-1H6zm-2.478-1.412c.237.393.406.823.5 1.272l.02.077q.026.116.054.2a.501.501 0 0 1-.344.863c-.476 0-.59-.458-.7-.899l-.003-.01C2.959 13.73 2.773 13 2.5 13H2v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1.001a1.5 1.5 0 0 1 1.021 2.588M2.5 10.999H2v1h.5a.5.5 0 1 0 0-1"/>`,
  'regular': `<path d="m9.647 1.439 2.914 2.914A1.5 1.5 0 0 1 13 5.413v7.586a2 2 0 0 1-2 2H8.744a2.45 2.45 0 0 0 .455-1H11a1 1 0 0 0 1-1v-7H9.5a1.5 1.5 0 0 1-1.5-1.5v-2.5H5a1 1 0 0 0-1 1v6.518q-.022-.017-.042-.035-.026-.024-.056-.045A2.5 2.5 0 0 0 3 9.077V3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.061.439M9 4.499a.5.5 0 0 0 .5.5h2.293L9 2.206zm-1.004 7.1a1.5 1.5 0 0 1-.269.762l.001.001a1.49 1.49 0 0 1 .429 1.659A1.51 1.51 0 0 1 6.75 15H5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.33.808c.127.243.184.517.166.791m-1.496-.6H6v1h.5a.5.5 0 1 0 0-1m-.5 3h.75a.5.5 0 1 0 0-1H6zm-2.478-1.412c.237.393.406.823.5 1.272l.02.077q.026.116.054.2a.501.501 0 0 1-.344.863c-.476 0-.59-.458-.7-.899l-.003-.01C2.959 13.73 2.773 13 2.5 13H2v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1.001a1.5 1.5 0 0 1 1.021 2.588M2.5 10.999H2v1h.5a.5.5 0 1 0 0-1"/>`
} as const;

export default function DocumentRbIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentrbicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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