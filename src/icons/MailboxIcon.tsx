import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V8h3.671A4.5 4.5 0 0 0 10 11.5V17c0 .364.097.706.268 1H3a1 1 0 0 1-1-1v-5.5A3.5 3.5 0 0 1 5.5 8H6v3.5a.5.5 0 0 0 1 0V5H3.5a.5.5 0 0 1-.5-.5zM14.5 8a3.5 3.5 0 0 0-3.5 3.5V17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5.5A3.5 3.5 0 0 0 14.5 8m-1.25 3.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5"/>`,
  'regular': `<path d="M3.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H7v3H5.5A3.5 3.5 0 0 0 2 11.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.5A3.5 3.5 0 0 0 14.5 8H8V2.5a.5.5 0 0 0-.5-.5zM7 9v2.5a.5.5 0 0 0 1 0V9h4.05A3.5 3.5 0 0 0 11 11.5V17H3v-5.5A2.5 2.5 0 0 1 5.5 9zm10 2.5V17h-5v-5.5a2.5 2.5 0 0 1 5 0m-3-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>`
} as const;

export default function MailboxIcon({ 
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

  const gradientId = 'mailboxicon_gradient';
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