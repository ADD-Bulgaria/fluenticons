import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 9c.552 0 1 .446 1 .995v1.054a2.46 2.46 0 0 0-1.737 1.334L15 12.91V9.995c0-.55.448-.995 1-.995m3-2v4.493a2.5 2.5 0 0 1 .738.89L21 14.91V7a1 1 0 0 0-2 0m-7.733 13.38L13 16.913V13a1 1 0 1 0-2 0v7c0 .213.067.41.18.573q.039-.096.087-.192M8 15c.552 0 1 .445 1 .994v4.012c0 .549-.448.994-1 .994s-1-.445-1-.994v-4.012A.997.997 0 0 1 8 15m-4 3c.552 0 1 .44 1 .984v1.032A.99.99 0 0 1 4 21c-.552 0-1-.44-1-.984v-1.032A.99.99 0 0 1 4 18m12.157-5.17-3.997 7.998A1.5 1.5 0 0 0 13.503 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0M18 15.496v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1"/>`,
  'regular': `<path d="M3.75 18.002a.75.75 0 0 1 .743.649l.007.102v1.5a.75.75 0 0 1-1.493.102L3 20.253v-1.5a.75.75 0 0 1 .75-.75m8-6a.75.75 0 0 1 .743.647l.007.102v5.16l-1.233 2.47q-.075.151-.13.305a.75.75 0 0 1-.13-.331L11 20.253v-7.502a.75.75 0 0 1 .75-.75m3.513.379A2.46 2.46 0 0 1 16.5 11.2V9.75l-.007-.102A.75.75 0 0 0 15 9.75v3.156zm4.475 0 .756 1.515-.011-7.153-.008-.102a.745.745 0 0 0-.74-.641.746.746 0 0 0-.735.758l.008 4.738c.293.221.545.516.73.885M7.75 14.998a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102L7 20.248v-4.5a.75.75 0 0 1 .75-.75m8.407-2.17-3.997 8A1.5 1.5 0 0 0 13.503 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-8c-.553-1.107-2.133-1.107-2.686 0M18 15.494v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 0 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`
} as const;

export default function CellularWarningIcon({ 
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

  const gradientId = 'cellularwarningicon_gradient';
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