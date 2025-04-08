import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.495 14.501v7.498H7.5v-7.498zm6.76-1.5h-3.501a.75.75 0 0 0-.75.75v3.502c0 .414.335.75.75.75h3.501a.75.75 0 0 0 .75-.75v-3.502a.75.75 0 0 0-.75-.75m-.75 1.5v2.002h-2.002v-2.002zm-8.34-7.499H3.501v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005a2.33 2.33 0 0 0 2.327-2.173l.006-.16zm6.165 0H9.666v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005a2.33 2.33 0 0 0 2.327-2.173l.006-.16zm6.167 0h-4.665l.001 1.165c0 1.18.878 2.157 2.016 2.311l.157.016.16.005a2.333 2.333 0 0 0 2.327-2.173l.005-.16zM9.061 3.5H6.326L4.47 5.502h3.977zm4.308 0h-2.738l-.616 2.002h3.97zm4.304 0H14.94l.615 2.002h3.976zM2.202 5.742 5.45 2.24a.75.75 0 0 1 .446-.233L6 2h12a.75.75 0 0 1 .475.169l.075.07 3.273 3.53.03.038c.102.136.148.29.148.44l-.002 1.92c0 .994-.378 1.9-1 2.58V21.25a.75.75 0 0 1-.648.743l-.102.007-8.253-.001v-8.248a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v8.248L3.752 22a.75.75 0 0 1-.744-.648l-.006-.102L3 10.748a3.82 3.82 0 0 1-.995-2.384L2 8.167V6.29a.73.73 0 0 1 .096-.408l.05-.076z"/>`,
  'regular': `<path d="M18 2a.75.75 0 0 1 .475.169l.075.07 3.273 3.53.03.038c.102.136.148.29.148.44l-.002 1.92c0 .994-.378 1.9-1 2.58V21.25a.75.75 0 0 1-.648.743l-.102.007H3.752a.75.75 0 0 1-.744-.648l-.006-.102L3 10.748a3.82 3.82 0 0 1-.993-2.353L2 8.167V6.29a.73.73 0 0 1 .096-.408l.065-.095.04-.046L5.45 2.24a.75.75 0 0 1 .446-.233L6 2zm-2.918 8.442-.012.018A3.83 3.83 0 0 1 12 12a3.83 3.83 0 0 1-3.084-1.556A3.83 3.83 0 0 1 5.834 12c-.469 0-.918-.084-1.334-.238l.001 8.738H6v-6.748a.75.75 0 0 1 .649-.743L6.75 13h4.496a.75.75 0 0 1 .743.648l.007.102v6.748h7.502v-8.737a3.83 3.83 0 0 1-4.416-1.32M10.495 14.5H7.5v5.998h2.995zm6.76-1.5a.75.75 0 0 1 .743.648l.007.102v3.502a.75.75 0 0 1-.648.743l-.102.007h-3.501a.75.75 0 0 1-.743-.648l-.007-.102V13.75a.75.75 0 0 1 .648-.743l.102-.007zm-.75 1.5h-2.002v2.002h2.001zm-8.34-7.498H3.501v1.165l.007.17.028.232.033.156.05.172.054.148.04.094q.047.102.103.198l.103.162.054.074.129.156.142.144.096.085.042.034c.315.25.695.422 1.112.483l.18.019.16.005a2.33 2.33 0 0 0 2.327-2.173l.006-.16zm6.165 0H9.666v1.165c0 1.18.878 2.157 2.017 2.311l.156.016.16.005a2.33 2.33 0 0 0 2.327-2.173l.006-.16zm6.167 0h-4.665l.001 1.165c0 1.18.878 2.157 2.016 2.311l.157.016.16.005c.564 0 1.081-.2 1.485-.534l.09-.078.116-.113.146-.17q.081-.103.15-.216l.104-.186.063-.138.058-.155.03-.096.038-.152.028-.157.018-.167.006-.17zM9.062 3.499H6.327L4.47 5.502h3.977zm4.307 0h-2.738l-.616 2.003h3.97zm4.303 0h-2.734l.616 2.003h3.976z"/>`
} as const;

export default function BuildingShopIcon({ 
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

  const gradientId = 'buildingshopicon_gradient';
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