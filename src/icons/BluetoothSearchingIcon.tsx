import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.617 2.076a1 1 0 0 1 1.09.217l5 5a1 1 0 0 1-.082 1.488L13.6 12l4.024 3.22a1 1 0 0 1 .082 1.487l-5 5A1 1 0 0 1 11 21v-6.92l-3.375 2.7a1 1 0 0 1-1.25-1.56L10.4 12 6.375 8.78a1 1 0 0 1 1.25-1.56L11 9.92V3a1 1 0 0 1 .617-.924M13 14.081v4.505l2.503-2.503zm0-4.162 2.503-2.002L13 5.414zm5.5-.785a1 1 0 0 1 1.366.365c.442.765.634 1.627.634 2.501s-.192 1.736-.634 2.5a1 1 0 1 1-1.732-1c.239-.413.366-.917.366-1.5s-.127-1.087-.366-1.5a1 1 0 0 1 .365-1.366m3.285-2.084a1 1 0 0 0-1.57 1.239A5.97 5.97 0 0 1 21.5 12a5.97 5.97 0 0 1-1.285 3.711 1 1 0 0 0 1.57 1.239A7.97 7.97 0 0 0 23.5 12a7.97 7.97 0 0 0-1.715-4.95"/>`,
  'regular': `<path d="M11.463 2.057a.75.75 0 0 1 .817.163l5 5a.75.75 0 0 1-.044 1.101L12.908 12l4.328 3.679a.75.75 0 0 1 .044 1.101l-5 5a.75.75 0 0 1-1.28-.53v-7.628l-3.764 3.2a.75.75 0 0 1-.972-1.143L10.592 12 6.264 8.321a.75.75 0 0 1 .972-1.142l3.764 3.2V2.75a.75.75 0 0 1 .463-.693M12.5 13.622v5.817l3.145-3.144zm0-3.244 3.145-2.673L12.5 4.561zm5.467-.791a.75.75 0 0 1 1.014.313c.331.627.519 1.343.519 2.1s-.187 1.473-.52 2.1a.75.75 0 1 1-1.326-.7c.22-.418.346-.893.346-1.4s-.125-.982-.346-1.4a.75.75 0 0 1 .313-1.013M20.6 7.799a.75.75 0 1 0-1.2.9c.691.92 1.1 2.062 1.1 3.301s-.409 2.38-1.1 3.3a.75.75 0 1 0 1.2.901A6.97 6.97 0 0 0 22 12a6.97 6.97 0 0 0-1.4-4.201"/>`
} as const;

export default function BluetoothSearchingIcon({ 
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

  const gradientId = 'bluetoothsearchingicon_gradient';
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