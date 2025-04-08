import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 10v12H3.75a1.75 1.75 0 0 1-1.744-1.607L2 20.25v-8.5a1.75 1.75 0 0 1 1.606-1.744L3.75 10zm4.75 0a1.75 1.75 0 0 1 1.744 1.606l.006.144v8.5a1.75 1.75 0 0 1-1.607 1.744L12.25 22H8.5V10zm-1.606 8.5h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.101-.007a.75.75 0 0 0-.101-1.493m-4.75 0h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.102-.007a.75.75 0 0 0-.102-1.493M19.75 2a2.25 2.25 0 0 1 2.245 2.096L22 4.25v9a2.25 2.25 0 0 1-2.096 2.245l-.154.005H17v2h1.25a.75.75 0 0 1 .102 1.493L18.25 19H15v-1.5h.5v-2H15v-4a2.5 2.5 0 0 0-2.336-2.495L12.5 9H4V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2z"/>`,
  'regular': `<path d="M12.25 10a1.75 1.75 0 0 1 1.744 1.606l.006.144v8.5a1.75 1.75 0 0 1-1.607 1.744L12.25 22h-8.5a1.75 1.75 0 0 1-1.744-1.607L2 20.25v-8.5a1.75 1.75 0 0 1 1.606-1.744L3.75 10zM7.5 11.499H3.75a.25.25 0 0 0-.243.194l-.007.057v8.5a.25.25 0 0 0 .193.243l.057.007 3.75-.001zm4.75 0H8.5v9l3.75.001a.25.25 0 0 0 .243-.193l.007-.057v-8.5a.25.25 0 0 0-.193-.244zM10.625 18a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493l.102-.007zm-4.75 0a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493L5.375 18zM19.75 2a2.25 2.25 0 0 1 2.245 2.096L22 4.25v9a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-2.746v2h1.246a.75.75 0 0 1 .102 1.493L18.25 19H15v-1.5h.504v-2H15V14h4.75a.75.75 0 0 0 .743-.648l.007-.102v-9a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.743.648L5.5 4.25V9H4V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2z"/>`
} as const;

export default function DualScreenDesktopIcon({ 
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

  const gradientId = 'dualscreendesktopicon_gradient';
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