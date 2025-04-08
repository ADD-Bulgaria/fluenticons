import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L19.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L20.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L21.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L20.5 6.793zM20.5 15a7.47 7.47 0 0 0 4.5-1.5v2.75a4.25 4.25 0 0 1-4.25 4.25h-6v3h4.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5h4.5v-3h-6A4.25 4.25 0 0 1 3 16.25V6.732A2 2 0 0 1 4 3h10.5a7.5 7.5 0 0 0 6 12"/>`,
  'regular': `<path d="M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L19.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L20.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L21.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L20.5 6.793zM23.5 16.25v-1.874A7.5 7.5 0 0 0 25 13.5v2.749a4.25 4.25 0 0 1-4.25 4.25h-6v3h4.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5h4.5v-3h-6A4.25 4.25 0 0 1 3 16.25V6.732A2 2 0 0 1 4 3h10.5a7.46 7.46 0 0 0-1.484 4H4.5v9.25A2.75 2.75 0 0 0 7.25 19h13.5a2.75 2.75 0 0 0 2.75-2.75"/>`
} as const;

export default function ProjectionScreenDismissIcon({ 
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

  const gradientId = 'projectionscreendismissicon_gradient';
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