import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25 14.75V5h-6.75A4.25 4.25 0 0 0 14 9.25v24.5A4.25 4.25 0 0 0 18.25 38h16.5A4.25 4.25 0 0 0 39 33.75V19h-9.75A4.25 4.25 0 0 1 25 14.75m2.5 0V5.5l11 11h-9.25a1.75 1.75 0 0 1-1.75-1.75M9 13.7a4 4 0 0 1 2.5-3.71v23.76a6.75 6.75 0 0 0 6.75 6.75h15.76A4 4 0 0 1 30.3 43H18.25A9.25 9.25 0 0 1 9 33.75z"/>`,
  'regular': `<path d="M11.5 10.376V33.75a6.75 6.75 0 0 0 6.75 6.75h15.374A4.25 4.25 0 0 1 29.75 43h-11.5A9.25 9.25 0 0 1 9 33.75v-19.5a4.25 4.25 0 0 1 2.5-3.874M25.757 5a4.25 4.25 0 0 1 3.006 1.245l8.992 8.992A4.25 4.25 0 0 1 39 18.243V33.75A4.25 4.25 0 0 1 34.75 38h-16.5A4.25 4.25 0 0 1 14 33.75V9.25A4.25 4.25 0 0 1 18.25 5zM25 7.5h-6.75a1.75 1.75 0 0 0-1.75 1.75v24.5c0 .967.784 1.75 1.75 1.75h16.5a1.75 1.75 0 0 0 1.75-1.75V19h-7.25a4.25 4.25 0 0 1-4.245-4.044L25 14.75zm10.482 9L27.5 8.518v6.232a1.75 1.75 0 0 0 1.607 1.744l.143.006z"/>`
} as const;

export default function DocumentCopyIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'documentcopyicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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