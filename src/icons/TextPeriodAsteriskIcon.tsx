import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.246 4.75a.75.75 0 0 0-1.5 0v1.858l-1.764-.573a.75.75 0 1 0-.464 1.426l1.768.575L9.194 9.54a.75.75 0 0 0 1.214.882l1.09-1.502 1.092 1.502a.75.75 0 1 0 1.213-.882L12.71 8.037l1.771-.576a.75.75 0 1 0-.463-1.426l-1.772.575zM6.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`,
  'regular': `<path d="M11.996 4.496a.5.5 0 0 0-1 0v2.465l-2.341-.76a.5.5 0 0 0-.31.95l2.345.762-1.45 1.998a.5.5 0 1 0 .808.588l1.45-1.996 1.45 1.995a.5.5 0 0 0 .808-.587l-1.45-1.997 2.348-.762a.5.5 0 0 0-.309-.951l-2.349.763zM6 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function TextPeriodAsteriskIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'textperiodasteriskicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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