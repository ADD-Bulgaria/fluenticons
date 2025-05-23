import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.08 9.02a6.001 6.001 0 0 1 11.84 0 4.5 4.5 0 0 1 4.077 4.31 4.74 4.74 0 0 0-3.747-1.83h-3.5a4.75 4.75 0 0 0-4.417 6.5H6.5a4.5 4.5 0 0 1-.42-8.98M22 16.25a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 18.25 14l.154.005a2.25 2.25 0 0 1-.154 4.495l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V20l.2-.005A3.75 3.75 0 0 0 22 16.25m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007a.75.75 0 0 0-.102-1.493l-.154-.005A2.25 2.25 0 0 1 14.75 14l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 14.75 17h3.5l.102-.007A.75.75 0 0 0 19 16.25"/>`,
  'regular': `<path d="M12 5.5a4.5 4.5 0 0 0-4.495 4.285.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h3.507c.027.527.14 1.032.326 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6.001 6.001 0 0 1 11.84 0 4.5 4.5 0 0 1 4.077 4.31 4.76 4.76 0 0 0-2.005-1.5A3 3 0 0 0 17.5 10.5h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5m10 10.75a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 18.25 14l.154.005a2.25 2.25 0 0 1-.154 4.495l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V20l.2-.005A3.75 3.75 0 0 0 22 16.25m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007a.75.75 0 0 0-.102-1.493l-.154-.005A2.25 2.25 0 0 1 14.75 14l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 14.75 17h3.5l.102-.007A.75.75 0 0 0 19 16.25"/>`
} as const;

export default function CloudLinkIcon({ 
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

  const gradientId = 'cloudlinkicon_gradient';
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