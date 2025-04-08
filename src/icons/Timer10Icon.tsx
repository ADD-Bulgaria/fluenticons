import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 5a8.5 8.5 0 0 1 8.376 7.046A4.25 4.25 0 0 0 16 14.248v-.498a1.75 1.75 0 0 0-2.303-1.66l-.947.315V8.75l-.007-.102a.75.75 0 0 0-1.486 0l-.007.102v4.5l.006.089a1.75 1.75 0 0 0 1.244 2.644v6.002A8.5 8.5 0 1 1 12 5m7.17.123.082.061 1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061-1.149-1a.75.75 0 0 1 .903-1.193M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5zm.438 10.642a.75.75 0 0 1 .312.608v8.5a.75.75 0 0 1-1.5 0v-7.46l-.513.172a.75.75 0 0 1-.474-1.423l1.5-.5a.75.75 0 0 1 .675.103M16.5 16.25a3.25 3.25 0 0 1 6.5 0v3.5a3.25 3.25 0 0 1-6.5 0zm3.25-1.75A1.75 1.75 0 0 0 18 16.25v3.5a1.75 1.75 0 1 0 3.5 0v-3.5a1.75 1.75 0 0 0-1.75-1.75"/>`,
  'regular': `<path d="M12 5a8.5 8.5 0 0 1 8.376 7.046 4.3 4.3 0 0 0-1.517.048 7 7 0 1 0-6.359 8.389v1.502A8.5 8.5 0 1 1 12 5m.75 7.405V8.75l-.007-.102a.75.75 0 0 0-1.493.102v4.5l.006.089c.208-.341.532-.613.94-.75zm6.397-7.291.083.06 1.158.964a.75.75 0 0 1-.877 1.212l-.082-.06-1.159-.964a.75.75 0 0 1 .877-1.212M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5zm.438 10.642a.75.75 0 0 1 .312.608v8.5a.75.75 0 0 1-1.5 0v-7.46l-.513.172a.75.75 0 0 1-.474-1.423l1.5-.5a.75.75 0 0 1 .675.103M16.5 16.25a3.25 3.25 0 0 1 6.5 0v3.5a3.25 3.25 0 0 1-6.5 0zm3.25-1.75A1.75 1.75 0 0 0 18 16.25v3.5a1.75 1.75 0 1 0 3.5 0v-3.5a1.75 1.75 0 0 0-1.75-1.75"/>`
} as const;

export default function Timer10Icon({ 
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

  const gradientId = 'timer10icon_gradient';
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