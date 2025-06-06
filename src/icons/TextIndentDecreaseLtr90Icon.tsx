import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 9v8.5a1 1 0 0 1-1.993.117L6 17.5V9a1 1 0 0 1 1.993-.117zm4.707-6.707 2 2a1 1 0 0 1-1.32 1.497l-.094-.083L12 4.414l-1.293 1.293a1 1 0 0 1-1.497-1.32l.083-.094 2-2a1 1 0 0 1 1.32-.083zM13 9l.001 11.5a1 1 0 0 1-1.993.117L11 20.5V9a1 1 0 0 1 1.993-.117zm5 0v8.5a1 1 0 0 1-1.993.117L16 17.5V9a1 1 0 0 1 1.993-.117z"/>`,
  'regular': `<path d="M8 17.75a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0zm4.78-15.03 2 2a.75.75 0 0 1-.976 1.133l-.084-.073-1.47-1.47-1.47 1.47a.75.75 0 0 1-1.133-.976l.073-.084 2-2a.75.75 0 0 1 .976-.073zM13 20.75a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 1.5 0zm5-3a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0z"/>`
} as const;

export default function TextIndentDecreaseLtr90Icon({ 
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

  const gradientId = 'textindentdecreaseltr90icon_gradient';
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