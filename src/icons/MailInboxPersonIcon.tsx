import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h14.17a7.6 7.6 0 0 1-.42-2.5v-.502A5 5 0 0 1 31 34h1.101A6.98 6.98 0 0 1 30 29a6.98 6.98 0 0 1 2.101-5H29.75c-.69 0-1.25.56-1.25 1.25v1.25a4.5 4.5 0 1 1-9 0v-1.25c0-.69-.56-1.25-1.25-1.25H8.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v10.21c.95.363 1.8.927 2.5 1.641V12.25A6.25 6.25 0 0 0 35.75 6zM42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v11.851a7 7 0 0 0-2.5-1.641V12.25a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75V24h9.75c.69 0 1.25.56 1.25 1.25v1.25a4.5 4.5 0 1 0 9 0v-1.25c0-.69.56-1.25 1.25-1.25h2.351a6.98 6.98 0 0 0-2.032 5.99A7 7 0 0 1 17 26.5H8.501v9.25a3.75 3.75 0 0 0 3.75 3.75H26c0 .867.143 1.707.42 2.5H12.25A6.25 6.25 0 0 1 6 35.75zM42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`
} as const;

export default function MailInboxPersonIcon({ 
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

  const gradientId = 'mailinboxpersonicon_gradient';
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