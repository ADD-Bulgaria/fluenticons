import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.659 4.839c-1.437-.875-3.294.054-3.455 1.729l-.244 2.527H17a1.25 1.25 0 0 1 0 2.5h-4.28l-1.43 14.83c-.346 3.578-4.538 5.328-7.324 3.056l-.506-.413a1.25 1.25 0 0 1 1.58-1.937l.506.412c1.238 1.01 3.101.232 3.255-1.358l1.406-14.59H8.13a1.25 1.25 0 0 1 0-2.5h2.32l.266-2.767c.339-3.511 4.232-5.46 7.244-3.625l.94.573a1.25 1.25 0 0 1-1.3 2.136zM27.634 16.23a1.25 1.25 0 0 0-1.768-1.768l-4.39 4.392-1.374-2.897a3.204 3.204 0 0 0-4.8-1.203l-.795.587a1.25 1.25 0 0 0 1.486 2.01l.795-.587a.704.704 0 0 1 1.055.265L19.6 20.73l-5.233 5.234a1.25 1.25 0 0 0 1.768 1.768l4.602-4.603 1.503 3.17a3.204 3.204 0 0 0 5.054.995l.299-.272a1.25 1.25 0 0 0-1.684-1.848l-.299.272a.705.705 0 0 1-1.11-.219l-1.886-3.976z"/>`,
  'regular': `<path d="M17.086 4.401c-1.588-1.256-3.935-.228-4.087 1.791l-.21 2.804H17a1 1 0 1 1 0 2h-4.362L11.486 26.31c-.288 3.831-4.918 5.583-7.67 2.903l-.514-.5a1 1 0 0 1 1.396-1.434l.513.5c1.536 1.497 4.12.52 4.281-1.62l1.14-15.163H8a1 1 0 1 1 0-2h2.783l.222-2.954c.272-3.618 4.477-5.46 7.322-3.209l.794.629a1 1 0 1 1-1.242 1.568zm-.88 11.87a1.115 1.115 0 0 1 1.75.38l1.862 4.113-5.525 5.525a1 1 0 0 0 1.414 1.414l4.992-4.992 1.574 3.476c.905 1.998 3.535 2.46 5.067.892l.375-.385a1 1 0 1 0-1.43-1.397l-.376.384a1.115 1.115 0 0 1-1.814-.319L22.21 21.2l5.497-5.497a1 1 0 0 0-1.414-1.414l-4.964 4.964-1.552-3.427a3.115 3.115 0 0 0-4.887-1.062l-.548.479a1 1 0 0 0 1.316 1.506z"/>`
} as const;

export default function MathFormulaIcon({ 
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

  const gradientId = 'mathformulaicon_gradient';
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