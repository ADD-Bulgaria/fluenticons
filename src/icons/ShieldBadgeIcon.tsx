import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.75A2.75 2.75 0 0 1 4.75 5h12.5A2.75 2.75 0 0 1 20 7.75v2.471a4 4 0 0 1-.803-.486 4.6 4.6 0 0 1-.745-.725l-.025-.032a1.755 1.755 0 0 0-2.878.032 4.6 4.6 0 0 1-.745.725c-.538.415-1.232.76-2.054.76-.97 0-1.755.786-1.755 1.755V15H4.75A2.75 2.75 0 0 1 2 12.25zm13.573 1.228q.003-.002 0 0m3.01 1.553a5 5 0 0 1-.97-.964.75.75 0 0 0-1.226 0 5 5 0 0 1-.97.964c-.312.24-.684.474-1.11.652-.459.191-.98.317-1.557.317a.75.75 0 0 0-.75.75V15c0 1.643.438 2.947 1.299 3.98.846 1.016 2.044 1.7 3.438 2.222a.75.75 0 0 0 .526 0c1.394-.522 2.592-1.206 3.438-2.222C21.562 17.947 22 16.643 22 15v-2.75a.75.75 0 0 0-.75-.75 4 4 0 0 1-1.557-.317 5 5 0 0 1-1.11-.652"/>`,
  'regular': `<path d="M4.75 5A2.75 2.75 0 0 0 2 7.75v4.5A2.75 2.75 0 0 0 4.75 15H11v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v1.333c.456.55.992.903 1.5 1.132V7.75A2.75 2.75 0 0 0 17.25 5zM17 9.25a.75.75 0 0 0-.612.316l-.008.012a4 4 0 0 1-.226.271 5.7 5.7 0 0 1-.737.682c-.647.5-1.552.969-2.667.969a.75.75 0 0 0-.75.75V15c0 1.643.438 2.947 1.299 3.98.846 1.016 2.044 1.7 3.438 2.222a.75.75 0 0 0 .526 0c1.394-.522 2.592-1.206 3.438-2.222C21.562 17.947 22 16.643 22 15v-2.75a.75.75 0 0 0-.75-.75c-1.115 0-2.02-.47-2.667-.969a5.7 5.7 0 0 1-.737-.682 4 4 0 0 1-.226-.271l-.007-.01A.75.75 0 0 0 17 9.25m-.667 2.469c.262-.202.484-.403.667-.584a8 8 0 0 0 .667.584c.675.521 1.635 1.063 2.833 1.23V15c0 1.357-.354 2.303-.951 3.02-.57.683-1.41 1.22-2.549 1.676-1.139-.456-1.98-.993-2.549-1.676-.597-.717-.951-1.663-.951-3.02v-2.052c1.198-.166 2.158-.708 2.833-1.23m.055-2.153-.001.002Z"/>`
} as const;

export default function ShieldBadgeIcon({ 
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

  const gradientId = 'shieldbadgeicon_gradient';
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