import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 9v12H3.75a1.75 1.75 0 0 1-1.744-1.607L2 19.25v-8.5a1.75 1.75 0 0 1 1.606-1.744L3.75 9zm4.75 0a1.75 1.75 0 0 1 1.744 1.606l.006.144v8.5a1.75 1.75 0 0 1-1.607 1.744L12.25 21H8.5V9zm-1.606 8.5h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.101-.007a.75.75 0 0 0-.101-1.493m-4.75 0h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.102-.007a.75.75 0 0 0-.102-1.493M19.75 3a2.25 2.25 0 0 1 2.245 2.096L22 5.25v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 16H15v-2.5h1.25a.75.75 0 0 0 0-1.5H15v-1.5a2.5 2.5 0 0 0-2.336-2.495L12.5 8H6V5.25a2.25 2.25 0 0 1 2.096-2.245L8.25 3z"/>`,
  'regular': `<path d="M12.25 9a1.75 1.75 0 0 1 1.744 1.606l.006.144v8.5a1.75 1.75 0 0 1-1.607 1.744L12.25 21h-8.5a1.75 1.75 0 0 1-1.744-1.607L2 19.25v-8.5a1.75 1.75 0 0 1 1.606-1.744L3.75 9zM7.5 10.499H3.75a.25.25 0 0 0-.243.194l-.007.057v8.5a.25.25 0 0 0 .193.243l.057.007H7.5zm4.75 0H8.5V19.5h3.75a.25.25 0 0 0 .243-.193l.007-.057v-8.5a.25.25 0 0 0-.193-.244zM10.625 17a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493l.102-.007zm-4.75 0a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493L5.375 17zM19.75 3a2.25 2.25 0 0 1 2.245 2.096L22 5.25v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 16H15v-1.5h4.75a.75.75 0 0 0 .743-.648l.007-.102v-8.5a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0-.743.648L7.5 5.25V8H6V5.25a2.25 2.25 0 0 1 2.096-2.245L8.25 3zm-3.5 9a.75.75 0 0 1 0 1.5H15V12z"/>`
} as const;

export default function DualScreenTabletIcon({ 
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

  const gradientId = 'dualscreentableticon_gradient';
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