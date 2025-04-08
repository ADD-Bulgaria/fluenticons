import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 1a8 8 0 0 1 7.475 10.856L14.2 9.4C12.882 8.411 11 9.352 11 11v5.938Q10.508 17 10 17a8 8 0 0 1-3.613-.86l-.121-.065-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083.91-3.644-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 9a8 8 0 0 1 8-8m3.6 9.2 8 6c.769.577.361 1.8-.6 1.8h-4.4a1 1 0 0 0-.882.53l-1.836 3.44c-.49.92-1.882.571-1.882-.47V11q0-.078.01-.15a1.002 1.002 0 0 1 1.59-.65"/>`,
  'regular': `<path d="M10 1a8 8 0 0 1 7.475 10.856l-.837-.628a7 7 0 1 0-12.744 1.196.5.5 0 0 1 .063.273l-.014.094-.756 3.021 3.024-.754a.5.5 0 0 1 .188-.01l.091.021.087.038A6.97 6.97 0 0 0 10 16q.51 0 1-.07v1.008Q10.508 17 10 17a8 8 0 0 1-3.613-.86l-.121-.065-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083.91-3.644-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 9a8 8 0 0 1 8-8m11.6 15.2c.769.577.361 1.8-.6 1.8h-4.4a1 1 0 0 0-.882.53l-1.836 3.44c-.49.92-1.882.571-1.882-.47V11a1 1 0 0 1 1.6-.8z"/>`
} as const;

export default function ChatCursorIcon({ 
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

  const gradientId = 'chatcursoricon_gradient';
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