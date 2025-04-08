import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.854 15.146a2.85 2.85 0 0 1 .685 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689M16 6v2.093a1.544 1.544 0 0 0-1.984.937l-.004.012-.451 1.387a1.84 1.84 0 0 1-1.139 1.16l-1.38.447-.011.005a1.544 1.544 0 0 0 0 2.912l.011.004 1.386.45c.264.088.505.236.704.43A4 4 0 0 1 8 12V6.001a4 4 0 1 1 8 0m-3.75 11.5a5.3 5.3 0 0 0 1.564-.237l.226.695.004.012c.089.252.242.476.442.65a6.7 6.7 0 0 1-1.735.362l-.001 2.268a.75.75 0 0 1-1.493.102l-.007-.102v-2.268a6.75 6.75 0 0 1-6.246-6.496L5 12.25v-.5a.75.75 0 0 1 1.493-.102l.007.102v.5a5.25 5.25 0 0 0 5.034 5.246l.216.004zm9.767 1.465.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999"/>`,
  'regular': `<path d="M13.854 15.146a2.85 2.85 0 0 1 .685 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689M16 6v2.093a1.54 1.54 0 0 0-1.5.252V6a2.5 2.5 0 0 0-5 0v6c0 .563.186 1.082.5 1.5a1.54 1.54 0 0 0 1.03 1.453l.013.004 1.385.45c.264.088.505.236.704.43A4 4 0 0 1 8 12V6.001a4 4 0 1 1 8 0m-3.75 11.5a5.3 5.3 0 0 0 1.564-.237l.226.695.004.012c.089.252.242.476.442.65a6.7 6.7 0 0 1-1.735.362l-.001 2.268a.75.75 0 0 1-1.493.102l-.007-.102v-2.268a6.75 6.75 0 0 1-6.246-6.496L5 12.25v-.5a.75.75 0 0 1 1.493-.102l.007.102v.5a5.25 5.25 0 0 0 5.034 5.246l.216.004zm9.767 1.465.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999"/>`
} as const;

export default function MicSparkleIcon({ 
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

  const gradientId = 'micsparkleicon_gradient';
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