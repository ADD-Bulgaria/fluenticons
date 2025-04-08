import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.21 5.562a5.002 5.002 0 0 1 9.58 0 5 5 0 0 1 4.021 6.303A5 5 0 0 1 20 21h-3v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3H8a5 5 0 0 1-2.811-9.135A5 5 0 0 1 9.21 5.562M12.5 24a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-3h-3z"/>`,
  'regular': `<path d="M14 2a5 5 0 0 0-4.79 3.562 5 5 0 0 0-4.021 6.303A5 5 0 0 0 8 21h3v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h3a5 5 0 0 0 2.811-9.135 5 5 0 0 0-4.021-6.303A5 5 0 0 0 14 2m1.5 19v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3zM10.554 6.385a3.501 3.501 0 0 1 6.892 0 .75.75 0 0 0 .707.618 3.5 3.5 0 0 1 3.057 4.894.75.75 0 0 0 .353.97A3.5 3.5 0 0 1 20 19.5H8a3.5 3.5 0 0 1-1.563-6.633.75.75 0 0 0 .353-.97 3.5 3.5 0 0 1 3.058-4.893.75.75 0 0 0 .706-.62"/>`
} as const;

export default function TreeDeciduousIcon({ 
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

  const gradientId = 'treedeciduousicon_gradient';
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