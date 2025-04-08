import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.003 18.999H21a1 1 0 0 0 .993-.884L22 18v-7a1 1 0 0 0-1.994-.117L20 11l-.001 4.586-7.292-7.294a1 1 0 0 0-1.32-.083l-.094.083-2.296 2.292-5.288-5.29a1 1 0 0 0-1.497 1.32l.083.094 5.994 5.997a1 1 0 0 0 1.32.083l.094-.083 2.296-2.292 6.585 6.586h-4.581a1 1 0 0 0-.993.884l-.007.116a1 1 0 0 0 .883.994z"/>`,
  'regular': `<path d="M13.749 18.5h7.554l.1-.014.099-.028.06-.025a.7.7 0 0 0 .219-.151l.04-.044.044-.057.054-.09.039-.09.019-.064.014-.064.009-.094v-7.533a.75.75 0 0 0-1.493-.101l-.007.101v5.695l-7.719-7.72a.75.75 0 0 0-.976-.073l-.085.073-2.97 2.97-5.47-5.47a.75.75 0 0 0-1.133.977l.073.084 6 6a.75.75 0 0 0 .976.073l.084-.073 2.97-2.97L19.439 17h-5.69a.75.75 0 0 0-.742.648L13 17.75c0 .38.282.694.648.743z"/>`
} as const;

export default function ArrowTrendingDownIcon({ 
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

  const gradientId = 'arrowtrendingdownicon_gradient';
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