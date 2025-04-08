import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m20 18 2.646 2.646a.5.5 0 0 0 .708 0l2.41-2.41A3.5 3.5 0 0 1 28 21.5v.5c0 2.393-1.523 4.418-3.685 5.794C22.141 29.177 19.198 30 16 30s-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18z"/><path d="m20 18 2.646 2.646a.5.5 0 0 0 .708 0l2.41-2.41A3.5 3.5 0 0 1 28 21.5v.5c0 2.393-1.523 4.418-3.685 5.794C22.141 29.177 19.198 30 16 30s-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18z"/><path fill-opacity=".25" d="m20 18 2.646 2.646a.5.5 0 0 0 .708 0l2.41-2.41A3.5 3.5 0 0 1 28 21.5v.5c0 2.393-1.523 4.418-3.685 5.794C22.141 29.177 19.198 30 16 30s-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18z"/><path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m6.997 3.337-.608-.765a4.105 4.105 0 0 0-6.082-.415c-1.68 1.614-1.75 4.314-.156 6.017l6.079 6.491a1.047 1.047 0 0 0 1.534 0l6.082-6.486c1.598-1.704 1.528-4.41-.157-6.026a4.11 4.11 0 0 0-6.084.419z"/>`,
  'filled': `<path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30a18 18 0 0 0 3.563-.354l-4.324-4.618c-1.832-1.956-1.965-4.925-.446-7.028zm8.651 6.174 6.079 6.491a1.047 1.047 0 0 0 1.534 0l6.082-6.486c1.598-1.704 1.528-4.41-.157-6.026a4.11 4.11 0 0 0-6.084.419l-.608.765-.608-.765a4.105 4.105 0 0 0-6.082-.415c-1.319 1.267-1.645 3.203-.954 4.8l.02.044c.188.422.447.819.778 1.173m4.8 5.125-4.8-5.125a4.3 4.3 0 0 1-.518-.68"/>`,
  'regular': `<path d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0M7.5 18A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30a18 18 0 0 0 3.563-.354l-1.647-1.758q-.929.11-1.916.112c-2.877 0-5.434-.744-7.241-1.894C6.939 24.95 6 23.472 6 22v-.5A1.5 1.5 0 0 1 7.5 20h6.39c.162-.709.463-1.39.903-2zm14.89.572.607.765.608-.765a4.11 4.11 0 0 1 6.084-.42c1.685 1.616 1.755 4.323.157 6.027l-6.082 6.487a1.047 1.047 0 0 1-1.534 0l-6.079-6.492c-1.594-1.703-1.524-4.403.156-6.017a4.105 4.105 0 0 1 6.082.415M20.95 29.3l-1.555-1.661Z"/>`
} as const;

export default function PersonHeartIcon({ 
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

  const gradientId = 'personhearticon_gradient';
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