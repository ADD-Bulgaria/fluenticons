import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v8c.607.456 1 1.182 1 2q0 .112-.016.219l.6-1.714a1.5 1.5 0 0 1 2.832 0L9 13.674V13.5a2.5 2.5 0 0 1 4.5-1.5 2.5 2.5 0 0 1 2.5-.95V8h-4.5A1.5 1.5 0 0 1 10 6.5m1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5M2.5 13a.5.5 0 0 0-.5.5v.236c0 .279.158.534.407.658l.633.317c.588.294.96.895.96 1.553v.236a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.236a.74.74 0 0 0-.407-.658l-.633-.317A1.74 1.74 0 0 1 1 13.736V13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5m4.972-.665a.5.5 0 0 0-.944 0l-1.75 5a.5.5 0 1 0 .944.33L5.955 17h2.09l.233.665a.5.5 0 1 0 .944-.33zM7.695 16h-1.39L7 14.014zM11 13.5a.5.5 0 0 1 1 0 .5.5 0 0 0 1 0 1.5 1.5 0 0 0-3 0v.236c0 .658.371 1.259.96 1.553l.633.317c.25.124.407.38.407.658v.236a.5.5 0 0 1-1 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 0 3 0v-.236c0-.658-.371-1.259-.96-1.553l-.633-.317a.74.74 0 0 1-.407-.658zm4.5-.5a.5.5 0 0 0-.5.5v.236c0 .279.158.534.407.658l.633.317c.588.294.96.895.96 1.553v.236a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.236a.74.74 0 0 0-.407-.658l-.633-.317a1.74 1.74 0 0 1-.96-1.553V13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5"/>`,
  'regular': `<path d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414v3.636a2.5 2.5 0 0 0-1 0V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v9.4h-.002A2.5 2.5 0 0 0 4 11.5zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5m-9 6a.5.5 0 0 0-.5.5v.236c0 .279.158.534.407.658l.633.317c.588.294.96.895.96 1.553v.236a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.236a.74.74 0 0 0-.407-.658l-.633-.317A1.74 1.74 0 0 1 1 13.736V13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5m4.972-.665a.5.5 0 0 0-.944 0l-1.75 5a.5.5 0 1 0 .944.33L5.955 17h2.09l.233.665a.5.5 0 1 0 .944-.33zM7.695 16h-1.39L7 14.014zM11 13.5a.5.5 0 0 1 1 0 .5.5 0 0 0 1 0 1.5 1.5 0 0 0-3 0v.236c0 .658.371 1.259.96 1.553l.633.317c.25.124.407.38.407.658v.236a.5.5 0 0 1-1 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 0 3 0v-.236c0-.658-.371-1.259-.96-1.553l-.633-.317a.74.74 0 0 1-.407-.658zm4.5-.5a.5.5 0 0 0-.5.5v.236c0 .279.158.534.407.658l.633.317c.588.294.96.895.96 1.553v.236a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.236a.74.74 0 0 0-.407-.658l-.633-.317a1.74 1.74 0 0 1-.96-1.553V13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5"/>`
} as const;

export default function DocumentSassIcon({ 
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

  const gradientId = 'documentsassicon_gradient';
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