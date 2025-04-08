import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M6 25h20.688S26 25.4 26 27s.688 2 .688 2H9a3 3 0 0 1-3-3z"/><path d="M9 28a2 2 0 0 1-2-2h18.25A1.75 1.75 0 0 0 27 24.25V6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h17a1 1 0 1 0 0-2z"/><path d="M10.75 6A1.75 1.75 0 0 0 9 7.75v2.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 23 10.25v-2.5A1.75 1.75 0 0 0 21.25 6z"/><path fill-opacity=".3" d="M27 6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h17a1 1 0 0 0 1-1z"/><path fill-opacity=".3" d="M27 6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h17a1 1 0 0 0 1-1z"/><path d="M17 28c0 .546.34 1.059.936 1.5 1.21.897 3.473 1.5 6.064 1.5 3.866 0 7-1.343 7-3v-9c-.436.33-.936.603-1.46.827l-.04.018c-.6.253-1.274.462-2 .621a16.5 16.5 0 0 1-3.5.361c-2.086 0-4.046-.36-5.54-1A7 7 0 0 1 17 19z"/><path d="M27.5 21.599c.772-.192 1.45-.445 2-.743.94-.51 1.5-1.155 1.5-1.856 0-.7-.56-1.345-1.5-1.856-.55-.298-1.228-.551-2-.743A14.7 14.7 0 0 0 24 16c-3.866 0-7 1.343-7 3s3.134 3 7 3c1.275 0 2.47-.146 3.5-.401"/>`,
  'filled': `<path d="M5 26V6a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v8.788a15.4 15.4 0 0 0-3-.288c-4.375 0-7.978 1.75-8.448 4H15.5V26H7a2 2 0 0 0 2 2h6.5c.08.775.336 1.417.884 2H9a4 4 0 0 1-4-4m5.75-20A1.75 1.75 0 0 0 9 7.75v1.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 23 9.25v-1.5A1.75 1.75 0 0 0 21.25 6zM17 28c0 .546.34 1.059.936 1.5 1.21.897 3.473 1.5 6.064 1.5 3.866 0 7-1.343 7-3v-6.327a7 7 0 0 1-1.46.827l-.04.017c-.6.254-1.274.463-2 .622a16.5 16.5 0 0 1-3.5.361c-2.086 0-4.046-.36-5.54-1a7 7 0 0 1-1.46-.827zm10.5-6.401c.772-.192 1.45-.445 2-.743.94-.51 1.5-1.155 1.5-1.856 0-.7-.56-1.345-1.5-1.856-.55-.298-1.228-.551-2-.743A14.7 14.7 0 0 0 24 16c-3.866 0-7 1.343-7 3s3.134 3 7 3c1.275 0 2.47-.146 3.5-.401"/>`,
  'regular': `<path d="M7 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8.53c.696.044 1.366.132 2 .258V6a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h7.384c-.433-.46-.72-.966-.832-1.5H15.5V28H9a2 2 0 0 1-2-2h8.5v-2H7zm3.75 0A1.75 1.75 0 0 0 9 7.75v2.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 23 10.25v-2.5A1.75 1.75 0 0 0 21.25 6zm.25 4V8h10v2zm6 18c0 .546.34 1.059.936 1.5 1.21.897 3.473 1.5 6.064 1.5 3.866 0 7-1.343 7-3v-6.327a7 7 0 0 1-1.46.827l-.04.017c-.6.254-1.274.463-2 .622a16.5 16.5 0 0 1-3.5.361c-2.086 0-4.046-.36-5.54-1a7 7 0 0 1-1.46-.827zm10.5-6.401c.772-.192 1.45-.445 2-.743.94-.51 1.5-1.155 1.5-1.856 0-.7-.56-1.345-1.5-1.856-.55-.298-1.228-.551-2-.743A14.7 14.7 0 0 0 24 16c-3.866 0-7 1.343-7 3s3.134 3 7 3c1.275 0 2.47-.146 3.5-.401"/>`
} as const;

export default function BookDatabaseIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'bookdatabaseicon_gradient';
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