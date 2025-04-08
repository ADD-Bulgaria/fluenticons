import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m19.729 3.875.05.16.552 1.922a.75.75 0 0 1-.418.893l-.096.035L9.09 9.96h11.16a.75.75 0 0 1 .742.65l.007.1v8.499a2.75 2.75 0 0 1-2.582 2.745l-.168.005H5.75a2.75 2.75 0 0 1-2.745-2.582L3 19.209v-8.392l-.522-1.821a2.75 2.75 0 0 1 1.726-3.35l.16-.052L16.378 2.15a2.75 2.75 0 0 1 3.35 1.726M6.273 6.607l-1.496.43a1.25 1.25 0 0 0-.886 1.42l.03.125.344 1.201.295-.085zm4.756-1.363-2.717.779-1.714 3.09 2.718-.778zm4.758-1.365-2.718.78-1.713 3.09 2.716-.778zm1.847-.233-1.521 2.74 2.569-.737-.344-1.2a1.25 1.25 0 0 0-.704-.803"/>`,
  'regular': `<path d="m19.729 3.917.05.16.552 1.922a.75.75 0 0 1-.418.893l-.096.035L9.09 10.002h11.16a.75.75 0 0 1 .742.65l.007.1v8.499a2.75 2.75 0 0 1-2.582 2.745l-.168.005H5.75a2.75 2.75 0 0 1-2.745-2.582L3 19.25v-8.392l-.522-1.821a2.75 2.75 0 0 1 1.726-3.35l.16-.052L16.378 2.19a2.75 2.75 0 0 1 3.35 1.726m-.23 7.585H4.5v7.749c0 .604.429 1.108.998 1.224l.124.02.128.006h12.5a1.25 1.25 0 0 0 1.243-1.122l.006-.128zM6.272 6.649l-1.496.43a1.25 1.25 0 0 0-.886 1.42l.03.125.344 1.201.295-.085zm4.756-1.363-2.717.779-1.714 3.09 2.718-.778zm4.758-1.365-2.718.78-1.713 3.09 2.716-.778zm1.847-.233-1.521 2.74 2.569-.737-.344-1.2a1.25 1.25 0 0 0-.704-.803"/>`
} as const;

export default function MoviesAndTvIcon({ 
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

  const gradientId = 'moviesandtvicon_gradient';
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