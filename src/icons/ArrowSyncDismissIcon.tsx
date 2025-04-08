import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.25 5.18a.75.75 0 0 0 .142 1.051 7.251 7.251 0 0 1-3.599 12.976l.01-.01a7.3 7.3 0 0 1-2.057-.065l-.337.338a.75.75 0 0 0-.073.976l.073.084 2 2a.75.75 0 0 0 1.133-.976l-.072-.084-.75-.75a8.75 8.75 0 0 0 4.581-15.68.75.75 0 0 0-1.051.141m-5.72-3.71a.75.75 0 0 0 0 1.06l.75.75a8.75 8.75 0 0 0-4.85 15.47.75.75 0 1 0 .956-1.157 7.251 7.251 0 0 1 3.82-12.8l-.01.01a7.3 7.3 0 0 1 2.058.064l.337-.337a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-7.47-2.53a.75.75 0 1 0-1.06 1.06L10.94 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 13.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 10.94z"/>`,
  'regular': `<path d="M16.274 6.119a.75.75 0 0 1 1.028-1.08A8.75 8.75 0 0 1 12.72 20.72l.75.749.072.084a.75.75 0 0 1-1.133.976l-2-2-.073-.084a.75.75 0 0 1 .073-.976l.313-.313q.623.11 1.278.112a7.27 7.27 0 0 0 4.274-13.15m-2.995-1.276a7.27 7.27 0 0 0-5.78 12.865.75.75 0 0 1-1.068 1.041A8.75 8.75 0 0 1 11.28 3.28l-.75-.749a.75.75 0 1 1 1.061-1.06l2 2a.75.75 0 0 1 0 1.06zM9.469 9.47a.75.75 0 0 1 1.061 0L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-1.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`
} as const;

export default function ArrowSyncDismissIcon({ 
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

  const gradientId = 'arrowsyncdismissicon_gradient';
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