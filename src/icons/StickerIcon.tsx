import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v6.749L16.251 13l-.213.007a3.25 3.25 0 0 0-2.714 1.832q-.63.17-1.323.17a4.84 4.84 0 0 1-2.824-.873.75.75 0 1 0-.854 1.233 6.34 6.34 0 0 0 3.678 1.14q.34 0 .671-.032l.329-.04L13 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm2.591 11.72-5.621 5.62a2 2 0 0 1-.218.191L14.5 16.25l.006-.143a1.75 1.75 0 0 1 1.593-1.6l.151-.007h4.282q-.089.115-.192.22M9.001 7.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 7.75m6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499"/>`,
  'regular': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v6.879a2.25 2.25 0 0 1-.659 1.59l-5.621 5.622a2.25 2.25 0 0 1-1.591.659H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75H13v-3.064a7 7 0 0 1-.673.066L12 16.51a6.33 6.33 0 0 1-3.678-1.14.75.75 0 1 1 .854-1.234c.844.584 1.78.874 2.824.874q.693 0 1.324-.171a3.25 3.25 0 0 1 2.713-1.832L16.25 13h3.25V6.25a1.75 1.75 0 0 0-1.75-1.75m.689 10h-2.188a1.75 1.75 0 0 0-1.744 1.607l-.006.143-.001 2.189zM9 7.751a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.5m6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499"/>`
} as const;

export default function StickerIcon({ 
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

  const gradientId = 'stickericon_gradient';
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