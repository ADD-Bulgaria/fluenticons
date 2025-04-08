import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path fill-opacity=".75" d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path fill-opacity=".7" d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path d="M2 9.5A4.5 4.5 0 0 1 6.5 5h19c1.414 0 2.675.652 3.5 1.671V10h1v.59l-13.526 7.292a1 1 0 0 1-.948 0L2 10.59z"/><path fill-opacity=".3" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10h-1V6.671A4.5 4.5 0 0 0 25.5 5z"/><path fill-rule="evenodd" d="M15.5 9a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="M23.5 4.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5z" clip-rule="evenodd"/>`,
  'filled': `<path d="M23 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15M22.75 4a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5V4.75a.75.75 0 0 0-.75-.75M14 9a8.98 8.98 0 0 0 3.448 7.084l-1.448.78-12.52-6.741-1.476-.82A4.5 4.5 0 0 1 6.5 5h8.436A8.96 8.96 0 0 0 14 9m2.474 9.88 2.982-1.605A9 9 0 0 0 23 18a8.98 8.98 0 0 0 7-3.343V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5V11.588l.514.286 13.012 7.007a1 1 0 0 0 .948 0"/>`,
  'regular': `<path d="M23 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15M22.75 4a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H23.5V4.75a.75.75 0 0 0-.75-.75M6.5 5h8.436a9 9 0 0 0-.713 2H6.5A2.5 2.5 0 0 0 4 9.5v.903l12 6.461 1.448-.78c.61.48 1.285.881 2.007 1.191l-2.981 1.606a1 1 0 0 1-.948 0L4 12.674V22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5v-6.015a9 9 0 0 0 2-1.828V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"/>`
} as const;

export default function MailClockIcon({ 
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

  const gradientId = 'mailclockicon_gradient';
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