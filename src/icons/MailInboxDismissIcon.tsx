import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M26 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L18.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L19.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L20.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L19.5 6.793zM25 22.75V12.6a7.5 7.5 0 0 1-1.5 1.245V16h-6l-.102.007a.75.75 0 0 0-.648.743 2.75 2.75 0 1 1-5.5 0l-.007-.102A.75.75 0 0 0 10.5 16h-6V7.25c0-.966.784-1.75 1.75-1.75h6.02a7.5 7.5 0 0 1 .595-1.5H6.25A3.25 3.25 0 0 0 3 7.25v15.5A3.25 3.25 0 0 0 6.25 26h15.5A3.25 3.25 0 0 0 25 22.75"/>`,
  'regular': `<path d="M26 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L18.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L19.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L20.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L19.5 6.793zM25 22.75V12.6a7.5 7.5 0 0 1-1.5 1.245V16h-6l-.102.007a.75.75 0 0 0-.648.743 2.75 2.75 0 1 1-5.5 0l-.007-.102A.75.75 0 0 0 10.5 16h-6V7.25c0-.966.784-1.75 1.75-1.75h6.02a7.5 7.5 0 0 1 .595-1.5H6.25A3.25 3.25 0 0 0 3 7.25v15.5A3.25 3.25 0 0 0 6.25 26h15.5A3.25 3.25 0 0 0 25 22.75m-20.5 0V17.5h5.316l.042.204A4.25 4.25 0 0 0 14 21l.215-.005a4.25 4.25 0 0 0 3.969-3.495H23.5v5.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75"/>`
} as const;

export default function MailInboxDismissIcon({ 
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

  const gradientId = 'mailinboxdismissicon_gradient';
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