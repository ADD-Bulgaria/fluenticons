import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.207 2.293a1 1 0 1 0-1.414 1.414L26.586 8.5H19a4 4 0 0 0-4 4v7a2 2 0 0 1-2 2h-.09A5.502 5.502 0 0 0 2 22.5a5.5 5.5 0 0 0 10.91 1H13a4 4 0 0 0 4-4v-7a2 2 0 0 1 2-2h7.586l-4.793 4.793a1 1 0 0 0 1.414 1.414l6.5-6.5a1 1 0 0 0 0-1.414z"/>`,
  'regular': `<path d="M23.207 2.293a1 1 0 1 0-1.414 1.414L26.586 8.5H19a4 4 0 0 0-4 4v7a2 2 0 0 1-2 2h-.09A5.502 5.502 0 0 0 2 22.5a5.5 5.5 0 0 0 10.91 1H13a4 4 0 0 0 4-4v-7a2 2 0 0 1 2-2h7.586l-4.793 4.793a1 1 0 0 0 1.414 1.414l6.5-6.5a1 1 0 0 0 0-1.414zM11 22.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>`
} as const;

export default function ArrowFlowUpRightIcon({ 
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

  const gradientId = 'arrowflowuprighticon_gradient';
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