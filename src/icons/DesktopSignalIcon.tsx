import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 1.5q-.276 0-.548.017a.75.75 0 0 0 .096 1.497Q14.773 3 15 3a7 7 0 0 1 6.986 7.452.75.75 0 0 0 1.497.096q.017-.272.017-.548A8.5 8.5 0 0 0 15 1.5M15 4q-.289 0-.57.027a.75.75 0 0 0 .14 1.493q.213-.02.43-.02a4.5 4.5 0 0 1 4.48 4.93.75.75 0 0 0 1.493.14Q21 10.29 21 10a6 6 0 0 0-6-6m0 2.5q-.325 0-.636.058a.75.75 0 0 0 .271 1.475Q14.813 8 15 8a2 2 0 0 1 1.967 2.364.75.75 0 0 0 1.475.271q.058-.31.058-.635A3.5 3.5 0 0 0 15 6.5M12.91 3H4.25l-.154.005A2.25 2.25 0 0 0 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.006a.75.75 0 0 0-.102-1.494h-1.751v-2.498h4.25l.154-.005a2.25 2.25 0 0 0 2.096-2.245V12.09a1.8 1.8 0 0 1-.519-.368 1.747 1.747 0 0 1-2.514-.007 1.748 1.748 0 0 1-2.677-.184 2 2 0 0 1-2.818-2.818 1.75 1.75 0 0 1-.185-2.677 1.746 1.746 0 0 1-.007-2.515 1.8 1.8 0 0 1-.368-.52M9.999 18.002h4L14 20.5h-4zM16 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`,
  'regular': `<path d="M15 1.5q-.276 0-.548.017a.75.75 0 0 0 .096 1.497Q14.773 3 15 3a7 7 0 0 1 6.986 7.452.75.75 0 0 0 1.497.096q.017-.272.017-.548A8.5 8.5 0 0 0 15 1.5M15 4q-.289 0-.57.027a.75.75 0 0 0 .14 1.493q.213-.02.43-.02a4.5 4.5 0 0 1 4.48 4.93.75.75 0 0 0 1.493.14Q21 10.29 21 10a6 6 0 0 0-6-6m0 2.5q-.325 0-.636.058a.75.75 0 0 0 .271 1.475Q14.813 8 15 8a2 2 0 0 1 1.967 2.364.75.75 0 0 0 1.475.271q.058-.31.058-.635A3.5 3.5 0 0 0 15 6.5M12.91 3H4.25l-.154.005A2.25 2.25 0 0 0 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.006a.75.75 0 0 0-.102-1.494h-1.751v-2.498h4.25l.154-.005a2.25 2.25 0 0 0 2.096-2.245V12.09a1.8 1.8 0 0 1-.519-.368 1.75 1.75 0 0 1-.981.509v3.522l-.007.102a.75.75 0 0 1-.743.648H4.25l-.102-.007a.75.75 0 0 1-.648-.743V5.25l.007-.102A.75.75 0 0 1 4.25 4.5h8.521c.06-.378.242-.72.508-.98a1.8 1.8 0 0 1-.368-.52m1.088 15.002L14 20.5h-4l-.001-2.498zM16 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`
} as const;

export default function DesktopSignalIcon({ 
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

  const gradientId = 'desktopsignalicon_gradient';
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