import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.25 5.18a.75.75 0 0 0 .142 1.051 7.251 7.251 0 0 1-3.599 12.976l.005-.005a7.3 7.3 0 0 1-2.056-.065l-.333.333a.75.75 0 0 0-.073.976l.073.084 2 2a.75.75 0 0 0 1.133-.976l-.072-.084-.75-.75a8.75 8.75 0 0 0 4.581-15.68.75.75 0 0 0-1.051.141m-5.72-3.71a.75.75 0 0 0 0 1.06l.75.75a8.75 8.75 0 0 0-4.85 15.47.75.75 0 1 0 .956-1.157 7.251 7.251 0 0 1 3.82-12.8L11.2 4.8a7.3 7.3 0 0 1 2.058.065l.333-.334a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-2.97-2.03a.75.75 0 0 0-1.06 0L11 12.94l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 0-1.06"/>`,
  'regular': `<path d="M16.392 6.231a.75.75 0 1 1 .91-1.192A8.75 8.75 0 0 1 12.72 20.72l.75.749.072.084a.75.75 0 0 1-1.133.976l-2-2-.073-.084a.75.75 0 0 1 .073-.976l.333-.333a7.3 7.3 0 0 0 2.056.065l-.005.005a7.251 7.251 0 0 0 3.6-12.976m-5.862-3.7a.75.75 0 1 1 1.061-1.061l2 2a.75.75 0 0 1 0 1.06l-.333.334a7.3 7.3 0 0 0-2.058-.065l.006-.006a7.251 7.251 0 0 0-3.82 12.8.75.75 0 0 1-.955 1.156A8.75 8.75 0 0 1 11.28 3.28zm4.5 8.5a.75.75 0 1 0-1.06-1.061L11 12.94l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-1.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`
} as const;

export default function ArrowSyncCheckmarkIcon({ 
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

  const gradientId = 'arrowsynccheckmarkicon_gradient';
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