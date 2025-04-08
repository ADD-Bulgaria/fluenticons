import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 6.75V2H8.75A2.25 2.25 0 0 0 6.5 4.25V11a6.5 6.5 0 0 1 6.187 8.5h5.063A2.25 2.25 0 0 0 20 17.25V9h-4.75A2.25 2.25 0 0 1 13 6.75M5.503 4.627l-.002 6.45a6.5 6.5 0 0 0-1.501.42V6.75c0-.98.627-1.815 1.503-2.123m9.741 17.377h-4.058a6.5 6.5 0 0 0 1.08-1.5h5.1a2.25 2.25 0 0 1-2.122 1.5M14.5 6.75V2.5l5 5h-4.25a.75.75 0 0 1-.75-.75M12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9.5 0c0 .834.255 1.608.691 2.248l5.557-5.557A4 4 0 0 0 2.5 17.5m4 4a4 4 0 0 0 3.309-6.248l-5.557 5.557A4 4 0 0 0 6.5 21.5"/>`,
  'regular': `<path d="M5.503 4.627 5.5 6.75v4.326a6.5 6.5 0 0 0-1.5.422V6.75c0-.98.627-1.815 1.503-2.123m12.244 14.877h-5.062q.234-.719.296-1.5h4.766a.75.75 0 0 0 .75-.75V9.003H15.25a2.25 2.25 0 0 1-2.245-2.095L13 6.754V3.5H8.751a.75.75 0 0 0-.75.75v6.925a6.5 6.5 0 0 0-1.5-.175V4.25A2.25 2.25 0 0 1 8.752 2h4.376c.597 0 1.17.237 1.592.66l4.618 4.62c.422.422.659.995.659 1.591v8.383a2.25 2.25 0 0 1-2.25 2.25M14.499 4.561l.001 2.193c0 .38.282.693.648.743l.102.007 2.19-.001zm-3.313 17.443a6.5 6.5 0 0 0 1.08-1.5h5.1a2.25 2.25 0 0 1-2.122 1.5zM12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9.5 0c0 .834.255 1.608.691 2.248l5.557-5.557A4 4 0 0 0 2.5 17.5m4 4a4 4 0 0 0 3.309-6.248l-5.557 5.557A4 4 0 0 0 6.5 21.5"/>`
} as const;

export default function DocumentMultipleProhibitedIcon({ 
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

  const gradientId = 'documentmultipleprohibitedicon_gradient';
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