import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.374 10.5A4.25 4.25 0 0 1 8.248 8h31.5a4.25 4.25 0 0 1 3.874 2.5zm39.625 5H30.615a8 8 0 0 1 1.133 2.5h12.251zM4 15.5h13.385a8 8 0 0 0-1.133 2.5H4zm0 7.25h12.485a8 8 0 0 0 1.479 2.5H4zM4 30h8.15c-.098.4-.15.82-.15 1.25v1.25H4zm32 1.25v1.25h7.999V30H35.85c.098.4.15.82.15 1.25M4.375 37.5H12V40H8.25a4.25 4.25 0 0 1-3.875-2.5M36 37.5V40h3.75a4.25 4.25 0 0 0 3.873-2.5zm-4.485-14.75a8 8 0 0 1-1.479 2.5H44v-2.5zM14 40v-8.75A3.25 3.25 0 0 1 17.25 28h13.5A3.25 3.25 0 0 1 34 31.25V40zm16-20a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/>`,
  'regular': `<path d="M8.248 8a4.25 4.25 0 0 0-3.874 2.5h39.248A4.25 4.25 0 0 0 39.748 8zm22.367 7.5H44V18H31.748a8 8 0 0 0-1.133-2.5m-13.23 0H4V18h12.252a8 8 0 0 1 1.133-2.5m-.9 7.25H4v2.5h13.964a8 8 0 0 1-1.479-2.5M12.15 30H4v2.5h8v-1.25c0-.43.052-.85.15-1.25M36 32.5v-1.25c0-.43-.052-.85-.15-1.25H44v2.5zm-24 5H4.375A4.25 4.25 0 0 0 8.249 40H12zM36 40v-2.5h7.623A4.25 4.25 0 0 1 39.75 40zm-5.963-14.75a8 8 0 0 0 1.478-2.5h12.484v2.5zm-13.537 6a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V40H34v-8.75A3.25 3.25 0 0 0 30.75 28h-13.5A3.25 3.25 0 0 0 14 31.25V40h2.5zM24 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-9.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"/>`
} as const;

export default function VideoBackgroundEffectHorizontalIcon({ 
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

  const gradientId = 'videobackgroundeffecthorizontalicon_gradient';
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