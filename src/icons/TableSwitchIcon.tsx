import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.78 1.22a.75.75 0 1 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V6.25c0-.966.784-1.75 1.75-1.75h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zM3 17v-3.168a1.75 1.75 0 0 0 1.987-.345l2-2c.146-.145.261-.31.345-.487H9.5v6zm6.5-7.5H7.332A1.75 1.75 0 0 0 5.5 8.518V6.25a.75.75 0 0 1 .75-.75h2.268A1.75 1.75 0 0 0 9.5 7.332zm1.5 0V7.332c.176-.084.342-.199.487-.345l2-2A1.75 1.75 0 0 0 13.832 3H17v6.5zm-8 9v2.75A3.75 3.75 0 0 0 6.75 25H9.5v-6.5zM17 25v-6.5h-6V25zm1.5 0h2.75A3.75 3.75 0 0 0 25 21.25V18.5h-6.5zm6.5-8v-6h-6.5v6zm0-7.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5zM17 11v6h-6v-6z"/>`,
  'regular': `<path d="M10.78 1.22a.75.75 0 1 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V6.25c0-.966.784-1.75 1.75-1.75h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zM3 21.25v-7.418a1.76 1.76 0 0 0 1.5 0V17h5v-6H7.332a1.76 1.76 0 0 0 0-1.5H9.5V7.332a1.76 1.76 0 0 0 1.5 0V9.5h6v-5h-3.168a1.76 1.76 0 0 0 0-1.5h7.418A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25m1.5-2.75v2.75a2.25 2.25 0 0 0 2.25 2.25H9.5v-5zm6.5 0v5h6v-5zm6-1.5v-6h-6v6zm1.5 1.5v5h2.75a2.25 2.25 0 0 0 2.25-2.25V18.5zm5-1.5v-6h-5v6zm0-10.25a2.25 2.25 0 0 0-2.25-2.25H18.5v5h5z"/>`
} as const;

export default function TableSwitchIcon({ 
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

  const gradientId = 'tableswitchicon_gradient';
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