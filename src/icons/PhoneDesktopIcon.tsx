import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 8.25A4.25 4.25 0 0 1 13.25 4h26.5A4.25 4.25 0 0 1 44 8.25v17.5A4.25 4.25 0 0 1 39.75 30H32v5h2.75a1.25 1.25 0 1 1 0 2.5H22V35h7.5v-5H22v-8.75A6.25 6.25 0 0 0 15.75 15H9zm-5 13A4.25 4.25 0 0 1 8.25 17h7.5A4.25 4.25 0 0 1 20 21.25v18.5A4.25 4.25 0 0 1 15.75 44h-7.5A4.25 4.25 0 0 1 4 39.75zm5.5 17c0 .69.56 1.25 1.25 1.25h2.5a1.25 1.25 0 1 0 0-2.5h-2.5c-.69 0-1.25.56-1.25 1.25"/>`,
  'regular': `<path d="M13.25 4A4.25 4.25 0 0 0 9 8.25V15h2.5V8.25c0-.966.784-1.75 1.75-1.75h26.5c.967 0 1.75.784 1.75 1.75v17.5a1.75 1.75 0 0 1-1.75 1.75H22V30h7.5v5H22v2.5h12.75a1.25 1.25 0 1 0 0-2.5H32v-5h7.75A4.25 4.25 0 0 0 44 25.75V8.25A4.25 4.25 0 0 0 39.75 4zM9.5 38.25c0-.69.56-1.25 1.25-1.25h2.5a1.25 1.25 0 1 1 0 2.5h-2.5c-.69 0-1.25-.56-1.25-1.25M8.25 17A4.25 4.25 0 0 0 4 21.25v18.5A4.25 4.25 0 0 0 8.25 44h7.5A4.25 4.25 0 0 0 20 39.75v-18.5A4.25 4.25 0 0 0 15.75 17zM6.5 21.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v18.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function PhoneDesktopIcon({ 
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

  const gradientId = 'phonedesktopicon_gradient';
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