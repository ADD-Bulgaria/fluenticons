import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.5 17H8.425c.155-.305.286-.638.384-1H9.5v-5.5H6.985c-.544-.253-1.02-.657-1.35-1H9.5v-5a.5.5 0 0 0-.326-.469l-.084-.023L9 4H4.5a.5.5 0 0 0-.492.41L4 4.5v4.583a1.5 1.5 0 0 0-.605.386c-.114.12-.247.249-.395.377V4.5a1.5 1.5 0 0 1 1.356-1.493L4.5 3H9a1.5 1.5 0 0 1 1.493 1.355l.007.145v.254l2.189-2.269a1.5 1.5 0 0 1 2.007-.138l.116.101 2.757 2.725a1.5 1.5 0 0 1 .111 2.011l-.103.116-2.311 2.2h.234a1.5 1.5 0 0 1 1.493 1.355L17 11v4.5a1.5 1.5 0 0 1-1.355 1.493zm0-6.5h-5V16h5a.5.5 0 0 0 .492-.41L16 15.5V11a.5.5 0 0 0-.41-.492zm-5-2.79V9.5h1.79zm-5.62 2.45c.508.532 1.484 1.379 2.684 1.552a.5.5 0 0 1 .436.482v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.228 0C3.784 18.772 1 17.64 1 14.517v-2.323a.5.5 0 0 1 .436-.482c1.2-.173 2.175-1.02 2.683-1.553a.535.535 0 0 1 .762 0"/>`,
  'regular': `<path d="M15.5 17H8.425c.155-.305.286-.638.384-1H9.5v-5.5H6.985c-.544-.253-1.02-.657-1.35-1H9.5v-5a.5.5 0 0 0-.326-.469l-.084-.023L9 4H4.5a.5.5 0 0 0-.492.41L4 4.5v4.583a1.5 1.5 0 0 0-.605.386c-.114.12-.247.249-.395.377V4.5a1.5 1.5 0 0 1 1.356-1.493L4.5 3H9a1.5 1.5 0 0 1 1.493 1.355l.007.145v.254l2.189-2.269a1.5 1.5 0 0 1 2.007-.138l.116.101 2.757 2.725a1.5 1.5 0 0 1 .111 2.011l-.103.116-2.311 2.2h.234a1.5 1.5 0 0 1 1.493 1.355L17 11v4.5a1.5 1.5 0 0 1-1.355 1.493zm0-6.5h-5V16h5a.5.5 0 0 0 .492-.41L16 15.5V11a.5.5 0 0 0-.41-.492zm-5-2.79V9.5h1.79zm3.622-4.537a.5.5 0 0 0-.645-.053l-.068.06-2.616 2.713a.5.5 0 0 0-.057.623l.063.078 2.616 2.615a.5.5 0 0 0 .62.07l.078-.061 2.758-2.627a.5.5 0 0 0 .054-.638l-.059-.069zm-9.241 6.986c.507.533 1.483 1.38 2.683 1.553a.5.5 0 0 1 .436.482v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.228 0C3.784 18.772 1 17.64 1 14.517v-2.323a.5.5 0 0 1 .436-.482c1.2-.173 2.175-1.02 2.683-1.553a.535.535 0 0 1 .762 0"/>`
} as const;

export default function AppsShieldIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'appsshieldicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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