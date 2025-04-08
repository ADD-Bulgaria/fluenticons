import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.003 5.5H21a1 1 0 0 1 .993.883L22 6.5v7a1 1 0 0 1-1.994.117L20 13.5l-.001-4.586-7.292 7.293a1 1 0 0 1-1.32.084l-.094-.083-2.296-2.292-5.288 5.29a1 1 0 0 1-1.497-1.32l.083-.095 5.994-5.996a1 1 0 0 1 1.32-.084l.094.083 2.296 2.292L18.584 7.5h-4.581a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 .883-.993zH21z"/>`,
  'regular': `<path d="M13.749 5.5h7.554l.1.014.099.028.06.026q.12.052.219.15l.04.044.044.057.054.09.039.09.019.064.014.064.009.095v7.532a.75.75 0 0 1-1.493.102l-.007-.102V8.059l-7.719 7.72a.75.75 0 0 1-.976.073l-.085-.073-2.97-2.97-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084 6-6a.75.75 0 0 1 .976-.073l.084.073 2.97 2.97L19.439 7h-5.69a.75.75 0 0 1-.742-.648L13 6.25a.75.75 0 0 1 .648-.743z"/>`
} as const;

export default function ArrowTrendingIcon({ 
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

  const gradientId = 'arrowtrendingicon_gradient';
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