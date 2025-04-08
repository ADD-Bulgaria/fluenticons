import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0M20.5 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 3c.98 0 1.865.403 2.5 1.05V3.5a.5.5 0 0 1 .5-.5M15 8.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 1 1 .764.645A3.5 3.5 0 0 1 17.5 10 3.5 3.5 0 0 1 15 8.95M17.5 13a6.48 6.48 0 0 0 4.499-1.809v4.56a2.25 2.25 0 0 1-2.096 2.246l-.154.005h-4.25V20.5h1.751a.75.75 0 0 1 .102 1.493L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3h7.772A6.5 6.5 0 0 0 17.5 13m-3.502 5.002h-4l.001 2.498h4z"/>`,
  'regular': `<path d="M12 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0M20.5 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 3c.98 0 1.865.403 2.5 1.05V3.5a.5.5 0 0 1 .5-.5M15 8.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 1 1 .764.645A3.5 3.5 0 0 1 17.5 10 3.5 3.5 0 0 1 15 8.95m5.499 6.802v-3.484a6.5 6.5 0 0 0 1.5-1.077v4.56a2.25 2.25 0 0 1-2.096 2.246l-.154.005h-4.25V20.5h1.751a.75.75 0 0 1 .102 1.493L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3h7.772a6.5 6.5 0 0 0-.708 1.5H4.25a.75.75 0 0 0-.743.648L3.5 5.25v10.502c0 .38.282.693.648.743l.102.007h15.499a.75.75 0 0 0 .743-.648zm-6.501 2.25h-4l.001 2.498h4z"/>`
} as const;

export default function DesktopSyncIcon({ 
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

  const gradientId = 'desktopsyncicon_gradient';
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