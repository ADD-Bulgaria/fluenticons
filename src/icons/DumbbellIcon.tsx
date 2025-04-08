import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.493 3.69a2.977 2.977 0 0 0-4.501.338 3.613 3.613 0 0 0-3.19 6.113l1.518 1.517-1.603 1.603 2.049 2.049 1.603-1.603 1.517 1.517a3.613 3.613 0 0 0 6.112-3.19q.178-.13.338-.29a2.977 2.977 0 0 0 0-4.21l-.897-.898.786-.785a1.449 1.449 0 0 0-2.05-2.05l-.785.786zm.406 6.38a.75.75 0 0 1-1.06 0l-1.91-1.909a.75.75 0 0 1 1.06-1.06L20.9 9.01a.75.75 0 0 1 0 1.06m-5.677 7.817-5.083-5.083a3.614 3.614 0 0 0-6.113 3.19 2.977 2.977 0 0 0-.338 4.501l.898.897-.812.812a1.449 1.449 0 0 0 2.049 2.049l.812-.812.897.897a2.977 2.977 0 0 0 4.5-.338 3.613 3.613 0 0 0 3.19-6.113m-5.779 2.578a.75.75 0 1 1-1.06 1.06l-1.91-1.909a.75.75 0 0 1 1.061-1.06z"/>`,
  'regular': `<path d="M20.9 10.07a.75.75 0 0 0 0-1.06L18.992 7.1a.75.75 0 0 0-1.06 1.06l1.909 1.91a.75.75 0 0 0 1.06 0m-10.182 9.122a.75.75 0 1 1-1.06 1.06l-1.91-1.909a.75.75 0 0 1 1.06-1.06zM24.758 3.27a2.2 2.2 0 0 0-3.11 0l-.898.898-.367-.367a2.772 2.772 0 0 0-4.23.366 3.25 3.25 0 0 0-3.059.862l-.225.224a3.25 3.25 0 0 0 0 4.597l1.1 1.099-3.019 3.018-1.099-1.099a3.25 3.25 0 0 0-4.596 0l-.225.225a3.25 3.25 0 0 0-.861 3.06 2.772 2.772 0 0 0-.366 4.23l.366.365-.923.924a2.199 2.199 0 0 0 3.11 3.11l.923-.924.367.367a2.773 2.773 0 0 0 4.229-.366 3.25 3.25 0 0 0 3.06-.862l.224-.225a3.25 3.25 0 0 0 0-4.596l-1.099-1.1 3.018-3.018 1.1 1.1a3.25 3.25 0 0 0 4.596 0l.224-.225a3.25 3.25 0 0 0 .862-3.06q.194-.135.366-.308a2.773 2.773 0 0 0 0-3.92l-.366-.368.897-.897a2.2 2.2 0 0 0 0-3.11M12.998 16.017l-.988-.988 3.018-3.018.989.988zm-6.78 6.781-.924.924a.699.699 0 0 1-.989-.988l.924-.924zm16.58-16.58-.988-.989.897-.897a.699.699 0 1 1 .989.988zm-5.276-1.356a1.273 1.273 0 0 1 1.8 0l3.843 3.844a1.272 1.272 0 0 1-.478 2.1.75.75 0 0 0-.423 1.045c.33.656.22 1.476-.327 2.022l-.225.225a1.75 1.75 0 0 1-2.475 0L13.93 8.79a1.75 1.75 0 0 1 0-2.475l.225-.225a1.75 1.75 0 0 1 2.022-.327.75.75 0 0 0 1.044-.423c.061-.173.161-.337.302-.478M8.79 13.93l5.309 5.308a1.75 1.75 0 0 1 0 2.475l-.225.224a1.75 1.75 0 0 1-2.023.328.75.75 0 0 0-1.044.422 1.272 1.272 0 0 1-2.1.478l-3.844-3.843a1.273 1.273 0 0 1 .478-2.101.75.75 0 0 0 .422-1.044 1.75 1.75 0 0 1 .328-2.023l.225-.224a1.75 1.75 0 0 1 2.474 0"/>`
} as const;

export default function DumbbellIcon({ 
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

  const gradientId = 'dumbbellicon_gradient';
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