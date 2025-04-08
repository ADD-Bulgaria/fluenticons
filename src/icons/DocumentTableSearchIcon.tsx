import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.475 19.5h4.775A1.75 1.75 0 0 0 17 17.75v-4A1.75 1.75 0 0 0 15.25 12h-6.5c-.24 0-.47.049-.68.137A5.5 5.5 0 0 0 5.5 11.5a5.5 5.5 0 0 0-1.5.207V4.5a2 2 0 0 1 2-2h6v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-5.018a1.74 1.74 0 0 0-.495-.987zm5.025-3v1.25a.25.25 0 0 1-.25.25H11.5v-1.5zm-4-1.5v-1.5h3.75a.25.25 0 0 1 .25.25V15zm2-12v5.5a.5.5 0 0 0 .5.5h5.5zM9.168 19.607a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 1 0 1.06-1.06zM8.5 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'regular': `<path d="M15.25 12c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-4.775l-.05-.05c.368-.737.575-1.57.575-2.45 0-1.177-.37-2.268-1-3.163V13.5h-.257a5.5 5.5 0 0 0-1.672-1.363c.209-.088.438-.137.679-.137zm-3.75 4.5V18h3.75a.25.25 0 0 0 .25-.25V16.5zm4-1.5v-1.25a.25.25 0 0 0-.25-.25H11.5V15zm2.5 6h-6.025l.512.513c.278.277.443.626.495.987H18a2 2 0 0 0 2-2V10.328a2 2 0 0 0-.586-1.414l-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007l-.082-.007H6a2 2 0 0 0-2 2v7.207a5.5 5.5 0 0 1 1.5-.207v-7A.5.5 0 0 1 6 4h6v4.5a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V5.121zM5.5 21.5a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21.5m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function DocumentTableSearchIcon({ 
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
        viewBox="0 0 24 25"
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

  const gradientId = 'documenttablesearchicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
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