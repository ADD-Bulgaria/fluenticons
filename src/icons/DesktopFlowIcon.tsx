import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 3.75c0-.268.06-.523.168-.75H4.25l-.154.005A2.25 2.25 0 0 0 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.006a.75.75 0 0 0-.102-1.494h-1.751v-2.498h4.25l.154-.005a2.25 2.25 0 0 0 2.096-2.245V9.5h-3.75c-.42 0-.805-.147-1.106-.394l-.44 1.319A3.04 3.04 0 0 1 14 12.495v.756A1.75 1.75 0 0 1 12.25 15h-4a1.75 1.75 0 0 1-1.75-1.75v-4c0-.967.784-1.75 1.75-1.75h4c.617 0 1.16.32 1.471.802l.576-1.727a3.04 3.04 0 0 1 2.203-2zm-2.502 14.252.001 2.498h-4l-.001-2.498zM18.25 3a.75.75 0 0 0-.75.75V5.5h-.323c-.876 0-1.654.56-1.932 1.392l-.913 2.742a.54.54 0 0 1-.509.366H13v-.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V11.5h.823c.877 0 1.654-.56 1.932-1.392l.914-2.742A.54.54 0 0 1 17.177 7h.323v.75c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75z"/>`,
  'regular': `<path d="M16.668 3H4.25l-.154.005A2.25 2.25 0 0 0 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.006a.75.75 0 0 0-.102-1.494h-1.751v-2.498h4.25l.154-.005a2.25 2.25 0 0 0 2.096-2.245V9.5h-1.5v6.252l-.007.102a.75.75 0 0 1-.743.648H4.25l-.102-.007a.75.75 0 0 1-.648-.743V5.25l.007-.102A.75.75 0 0 1 4.25 4.5H16.5v-.75c0-.268.06-.523.168-.75m-6.67 15.002h4l.001 2.498h-4zM17.5 3.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V7h-.323a.54.54 0 0 0-.508.366l-.914 2.742a2.04 2.04 0 0 1-1.932 1.392H13v1.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75V10h.823c.23 0 .436-.148.508-.366l.914-2.742A2.04 2.04 0 0 1 17.177 5.5h.323zM19 6.268V7h2.5V4.5H19zM9 10v2.5h2.5V10z"/>`
} as const;

export default function DesktopFlowIcon({ 
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

  const gradientId = 'desktopflowicon_gradient';
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