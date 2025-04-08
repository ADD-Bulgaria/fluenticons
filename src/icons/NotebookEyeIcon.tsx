import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 2a2 2 0 0 0-2 2v7.57a5.8 5.8 0 0 1 6.466.998C10.355 13.394 11 14.515 11 15.5c0 .517-.181 1.049-.434 1.519a5.3 5.3 0 0 1-.687.981H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16zM1 15.5C1 14.318 2.736 12 5.5 12c2.761 0 4.5 2.3 4.5 3.5 0 1.182-1.739 3.5-4.5 3.5S1 16.7 1 15.5m3.111 2.079A2.5 2.5 0 1 0 6.89 13.42a2.5 2.5 0 0 0-2.78 4.16m2.636-1.246a1.5 1.5 0 1 0-2.494-1.666 1.5 1.5 0 0 0 2.494 1.666"/>`,
  'regular': `<path d="M5.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM6 7V6h6v1zM3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.88a5.3 5.3 0 0 0 .686-.981l.01-.019H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7.197a5.7 5.7 0 0 0-1 .372zm13 2h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5M16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16zM1 15.5C1 14.318 2.736 12 5.5 12c2.761 0 4.5 2.3 4.5 3.5 0 1.182-1.739 3.5-4.5 3.5S1 16.7 1 15.5m3.111 2.079A2.5 2.5 0 1 0 6.89 13.42a2.5 2.5 0 0 0-2.78 4.16m2.636-1.246a1.5 1.5 0 1 0-2.494-1.666 1.5 1.5 0 0 0 2.494 1.666"/>`
} as const;

export default function NotebookEyeIcon({ 
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

  const gradientId = 'notebookeyeicon_gradient';
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