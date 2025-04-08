import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m38.196 39.963 3.67 3.67a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l2.79 2.79A6.5 6.5 0 0 0 4 14.5v19a6.5 6.5 0 0 0 6.5 6.5h27q.352 0 .696-.037m-21.46-21.459a3 3 0 0 0-1.26.513C14.639 19.616 13.5 20.88 13.5 24c0 3.159 1.083 4.391 1.94 4.958.632.418 1.522.62 2.388.529.867-.092 1.542-.456 1.905-.963a1.25 1.25 0 0 1 2.034 1.453c-.887 1.242-2.308 1.851-3.676 1.996-1.37.145-2.856-.153-4.03-.93C12.382 29.933 11 27.842 11 24c0-3.88 1.49-5.921 3.024-7.017q.354-.252.748-.444zm13.74.513c-.764.547-1.779 1.646-1.95 4.205l5.751 5.752q.275-.199.456-.45a1.25 1.25 0 0 1 2.034 1.453q-.317.439-.71.776l6.645 6.645A6.47 6.47 0 0 0 44 33.5v-19A6.5 6.5 0 0 0 37.5 8H13.303l13.044 13.043c.529-2.037 1.591-3.285 2.676-4.06 2.31-1.65 6.091-1.359 7.787 1.354a1.25 1.25 0 0 1-2.12 1.326c-.804-1.287-2.871-1.605-4.213-.646"/>`,
  'regular': `<path d="m38.196 39.963 3.67 3.67a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l2.79 2.79A6.5 6.5 0 0 0 4 14.5v19a6.5 6.5 0 0 0 6.5 6.5h27q.352 0 .696-.037M35.732 37.5H10.5a4 4 0 0 1-4-4v-19a4 4 0 0 1 2.516-3.716l5.756 5.756a5 5 0 0 0-.748.443C12.489 18.079 11 20.12 11 24c0 3.842 1.383 5.933 3.06 7.043 1.175.777 2.66 1.075 4.03.93 1.369-.145 2.79-.754 3.677-1.996a1.25 1.25 0 0 0-2.034-1.454c-.363.508-1.038.872-1.905.964-.866.091-1.756-.111-2.388-.53-.857-.566-1.94-1.799-1.94-4.957 0-3.12 1.138-4.384 1.976-4.983.378-.27.813-.438 1.26-.513zm5.768-4c0 .77-.218 1.49-.596 2.101l1.798 1.797A6.47 6.47 0 0 0 44 33.5v-19A6.5 6.5 0 0 0 37.5 8H13.303l2.5 2.5H37.5a4 4 0 0 1 4 4zm-7.223-4.526 1.78 1.78q.393-.338.71-.777a1.25 1.25 0 0 0-2.034-1.454q-.18.253-.456.45m-7.93-7.93 2.178 2.178c.172-2.56 1.187-3.658 1.952-4.205 1.342-.959 3.409-.64 4.213.646a1.25 1.25 0 0 0 2.12-1.326c-1.696-2.713-5.478-3.003-7.787-1.354-1.085.775-2.147 2.023-2.676 4.06"/>`
} as const;

export default function ClosedCaptionOffIcon({ 
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

  const gradientId = 'closedcaptionofficon_gradient';
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