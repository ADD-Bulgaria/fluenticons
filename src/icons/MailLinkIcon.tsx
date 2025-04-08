import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.75A3.75 3.75 0 0 0 19.25 3l-.102.007A.75.75 0 0 0 19.25 4.5l.154.005A2.25 2.25 0 0 1 19.25 9l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V10.5l.2-.005A3.75 3.75 0 0 0 23 6.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 9l-.154-.005A2.25 2.25 0 0 1 15.75 4.5l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 15.75 7.5h3.5l.102-.007A.75.75 0 0 0 20 6.75m-.75 4.75h-2.77l-4.132 2.164a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75v-6.127a4.73 4.73 0 0 1-2.75.877M5.25 4h6.627a4.75 4.75 0 0 0 2.057 7.14L12 12.153l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.918z"/>`,
  'regular': `<path d="M23 6.75A3.75 3.75 0 0 0 19.25 3l-.102.007A.75.75 0 0 0 19.25 4.5l.154.005A2.25 2.25 0 0 1 19.25 9l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V10.5l.2-.005A3.75 3.75 0 0 0 23 6.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 9l-.154-.005A2.25 2.25 0 0 1 15.75 4.5l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 15.75 7.5h3.5l.102-.007A.75.75 0 0 0 20 6.75M5.25 4h6.627a4.7 4.7 0 0 0-.71 1.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474 1.928-1.015a4.7 4.7 0 0 0 1.822.362h.71l-4.11 2.164a.75.75 0 0 1-.603.042l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-5.416a4.7 4.7 0 0 0 1.5-.71v6.126a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245z"/>`
} as const;

export default function MailLinkIcon({ 
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

  const gradientId = 'maillinkicon_gradient';
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