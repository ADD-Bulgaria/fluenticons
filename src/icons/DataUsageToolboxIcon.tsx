import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.25 1.996A2.75 2.75 0 0 1 20 4.746v6.607a2.8 2.8 0 0 0-.75-.104H16V6.73a.74.74 0 0 0-.75-.73.74.74 0 0 0-.75.73v4.82A2.75 2.75 0 0 0 13 14v.05a2.5 2.5 0 0 0-1.255.67l-.03-3.004a.73.73 0 0 0-.74-.719.73.73 0 0 0-.725.734l.035 3.547a.73.73 0 0 0 .74.72l.026-.002Q11 16.24 11 16.5v3.497H4.75A2.75 2.75 0 0 1 2 17.246v-12.5a2.75 2.75 0 0 1 2.75-2.75zM6.75 8a.75.75 0 0 0-.75.747v6.507c0 .412.336.746.75.746s.75-.334.75-.746V8.746A.75.75 0 0 0 6.75 8M14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5"/>`,
  'regular': `<path d="M17.25 1.996A2.75 2.75 0 0 1 20 4.746v6.607a2.8 2.8 0 0 0-.75-.104h-.75V4.746c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H11v1.5H4.75A2.75 2.75 0 0 1 2 17.246v-12.5a2.75 2.75 0 0 1 2.75-2.75zM16 6.73v4.52h-.25c-.45 0-.875.108-1.25.3V6.73a.74.74 0 0 1 .75-.73c.38 0 .694.275.743.63zm-4.285 4.986.03 3.004a2.5 2.5 0 0 0-.694 1.277h-.026a.73.73 0 0 1-.732-.62l-.008-.099-.035-3.547a.73.73 0 0 1 .725-.734.73.73 0 0 1 .732.62zM6.75 8c.38 0 .693.281.743.646l.007.101v6.507a.75.75 0 0 1-.75.746.75.75 0 0 1-.743-.645L6 15.253V8.746C6 8.334 6.336 8 6.75 8M14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5"/>`
} as const;

export default function DataUsageToolboxIcon({ 
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

  const gradientId = 'datausagetoolboxicon_gradient';
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