import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.614 7.207a2 2 0 0 1 1.772 0l4.5 2.224A2 2 0 0 1 25 11.224v5.553a2 2 0 0 1-1.114 1.793l-4.5 2.224a2 2 0 0 1-1.772 0l-4.5-2.224A2 2 0 0 1 12 16.777v-5.553a2 2 0 0 1 1.114-1.793zm-2.522 4.685a.75.75 0 0 0 .299 1.017l2.36 1.287v3.055a.75.75 0 0 0 1.5 0v-3.055l2.358-1.287a.75.75 0 0 0-.718-1.317l-2.39 1.304-2.392-1.304a.75.75 0 0 0-1.017.3M4.75 8.5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-2 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM4 18.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M18.722 8.552a.5.5 0 0 0-.444 0l-4.5 2.224a.5.5 0 0 0-.278.448v5.553a.5.5 0 0 0 .278.448l4.5 2.225a.5.5 0 0 0 .444 0l4.5-2.225a.5.5 0 0 0 .278-.448v-5.553a.5.5 0 0 0-.278-.448zm-1.108-1.345a2 2 0 0 1 1.772 0l4.5 2.224A2 2 0 0 1 25 11.224v5.553a2 2 0 0 1-1.114 1.793l-4.5 2.224a2 2 0 0 1-1.772 0l-4.5-2.224A2 2 0 0 1 12 16.777v-5.553a2 2 0 0 1 1.114-1.793zM4 9.251a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 4 9.25m-2 4.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m2.75 3.75a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5zm11.36-5.909a.75.75 0 0 0-.72 1.317l2.36 1.287v3.055a.75.75 0 1 0 1.5 0v-3.055l2.36-1.287a.75.75 0 1 0-.72-1.317l-2.39 1.304z"/>`
} as const;

export default function CubeQuickIcon({ 
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

  const gradientId = 'cubequickicon_gradient';
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