import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm7 7.25q0-.13.025-.25h2.45q.024.12.025.25v1.75h-2.5zm3.486-.25q.015.123.014.25v4.75a1 1 0 1 0 2 0V11q0-.126-.007-.25A4.25 4.25 0 0 0 7.75 11v4.75a1 1 0 1 0 2 0V11q0-.127.014-.25a2.25 2.25 0 0 1 4.472 0m6.014 2h-3V11q0-.126-.006-.25h3.006a1 1 0 1 1 0 2M6.75 11q0-.126.006-.25H3.75a1 1 0 1 0 0 2h3zm-4 7.75a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M3 4.75A.75.75 0 0 1 3.75 4h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 4.75M9.5 11a2.5 2.5 0 0 1 5 0v4.75a.75.75 0 0 0 1.5 0V11a4 4 0 0 0-8 0v4.75a.75.75 0 0 0 1.5 0zm10.75 1.5H17V11h3.25a.75.75 0 0 1 0 1.5m-16.5 0H7V11H3.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm6.75-7h3v1.5h-3z"/>`
} as const;

export default function TextPositionBehindIcon({ 
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

  const gradientId = 'textpositionbehindicon_gradient';
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