import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M14 7.54c0-.844-.72-1.577-1.632-1.48C7.101 6.626 3 11.083 3 16.5 3 22.3 7.701 27 13.5 27c5.417 0 9.875-4.101 10.44-9.368.098-.913-.636-1.632-1.48-1.632H17a3 3 0 0 1-3-3z"/><path fill-opacity=".4" d="M14 7.54c0-.844-.72-1.577-1.632-1.48C7.101 6.626 3 11.083 3 16.5 3 22.3 7.701 27 13.5 27c5.417 0 9.875-4.101 10.44-9.368.098-.913-.636-1.632-1.48-1.632H17a3 3 0 0 1-3-3z"/><path fill-opacity=".4" d="M14 7.54c0-.844-.72-1.577-1.632-1.48C7.101 6.626 3 11.083 3 16.5 3 22.3 7.701 27 13.5 27c5.417 0 9.875-4.101 10.44-9.368.098-.913-.636-1.632-1.48-1.632H17a3 3 0 0 1-3-3z"/><path d="M17.5 2q-.277 0-.552.014a1 1 0 0 0-.948.999V12a2 2 0 0 0 2 2h8.987a1 1 0 0 0 .999-.948Q28 12.778 28 12.5C28 6.701 23.299 2 17.5 2M29 16a2 2 0 0 0-2 2v11a2 2 0 1 0 4 0V18a2 2 0 0 0-2-2m-5 4a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0v-7a2 2 0 0 0-2-2m-7 5a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z"/>`,
  'filled': `<path d="M16.948 2.014Q17.222 2 17.5 2C23.299 2 28 6.701 28 12.5q0 .277-.014.552a1 1 0 0 1-.999.948H18a2 2 0 0 1-2-2V3.013a1 1 0 0 1 .948-.999M14 7.54c0-.844-.72-1.577-1.632-1.48C7.101 6.626 3 11.083 3 16.5 3 22.3 7.701 27 13.5 27q1.028-.001 2-.19V25a3.5 3.5 0 0 1 5.004-3.161 3.5 3.5 0 0 1 3.305-3.334q.083-.43.13-.873c.099-.913-.635-1.632-1.479-1.632H17a3 3 0 0 1-3-3zM27 18a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm-5 4a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0zm-3 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2"/>`,
  'regular': `<path d="M16.948 2.014Q17.222 2 17.5 2C23.299 2 28 6.701 28 12.5q0 .277-.014.552a1 1 0 0 1-.999.948H18a2 2 0 0 1-2-2V3.013a1 1 0 0 1 .948-.999m1.052 2V12h7.985A8.5 8.5 0 0 0 18 4.014M14 7.54c0-.844-.72-1.577-1.632-1.48C7.101 6.626 3 11.083 3 16.5 3 22.3 7.701 27 13.5 27q1.03-.002 2.003-.19l-.003-.143v-1.904A8.5 8.5 0 1 1 12 8.131V13a5 5 0 0 0 5 5h4.868a8.4 8.4 0 0 1-.477 1.667 3.5 3.5 0 0 1 2.418-1.162q.083-.43.13-.873c.099-.913-.635-1.632-1.479-1.632H17a3 3 0 0 1-3-3zM27 18a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm-5 4a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0zm-3 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2"/>`
} as const;

export default function ChartMultipleIcon({ 
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

  const gradientId = 'chartmultipleicon_gradient';
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