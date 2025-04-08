import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m9.256 8.999.238-1.5h1.481l-.237 1.5zM17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.748V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2zm-7.355 9.16a.75.75 0 1 0 1.482.234l.142-.895h.731a.75.75 0 0 0 0-1.5h-.494l.238-1.5h.756a.75.75 0 0 0 0-1.5h-.519l.162-1.025a.75.75 0 1 0-1.481-.234l-.2 1.259h-1.48l.161-1.025a.75.75 0 0 0-1.481-.234l-.2 1.259H7.25a.75.75 0 1 0 0 1.5h.725l-.237 1.5H6.75a.75.75 0 1 0 0 1.5h.75l-.105.66a.75.75 0 0 0 1.482.235l.142-.895H10.5z"/>`,
  'regular': `<path d="M17.744 1.996a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-11.5A2.25 2.25 0 0 1 4 19.898l-.005-.154V4.246A2.25 2.25 0 0 1 6.09 2.001l.154-.005zm0 1.5h-11.5a.75.75 0 0 0-.743.648l-.007.102v15.498c0 .38.282.694.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648l.007-.102V4.246a.75.75 0 0 0-.648-.743zm-6.726 8.523a.75.75 0 0 1-.623-.858l.104-.66H9.018l-.142.895a.75.75 0 0 1-1.481-.235l.104-.66h-.75a.75.75 0 0 1 0-1.5h.988l.237-1.5H7.25a.75.75 0 1 1 0-1.5h.963l.2-1.26a.75.75 0 1 1 1.48.235L9.732 6h1.48l.2-1.259a.75.75 0 0 1 1.482.235L12.73 6h.52a.75.75 0 0 1 0 1.5h-.757L12.255 9h.494a.75.75 0 0 1 0 1.5h-.731l-.142.896a.75.75 0 0 1-.858.623M9.493 7.5 9.256 9h1.48l.238-1.5z"/>`
} as const;

export default function DocumentPageTopLeftIcon({ 
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

  const gradientId = 'documentpagetoplefticon_gradient';
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