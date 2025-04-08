import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 3.707V16.5A1.5 1.5 0 0 0 4.5 18h2A1.5 1.5 0 0 0 8 16.5V8.707l4 4V16.5a1.5 1.5 0 0 0 1.5 1.5h2c.489 0 .923-.234 1.197-.596l.45.45a.5.5 0 0 0 .707-.708l-15-15a.5.5 0 1 0-.708.708zm9 6.172 5 5V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5zm-7.84-7.84L8 5.879V3.5A1.5 1.5 0 0 0 6.5 2h-2q-.175 0-.34.039"/>`,
  'regular': `<path d="m3 3.707-.854-.853a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-.449-.45A1.5 1.5 0 0 1 15.5 18h-2a1.5 1.5 0 0 1-1.5-1.5v-3.793l-4-4V16.5A1.5 1.5 0 0 1 6.5 18h-2A1.5 1.5 0 0 1 3 16.5zm4 4-3-3V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm6 6V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .468-.325zM7 3.5v1.379l1 1V3.5A1.5 1.5 0 0 0 6.5 2h-2q-.175 0-.34.039L5.121 3H6.5a.5.5 0 0 1 .5.5m5 6.379 1 1V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v10.379l1 1V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5z"/>`
} as const;

export default function PauseOffIcon({ 
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

  const gradientId = 'pauseofficon_gradient';
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