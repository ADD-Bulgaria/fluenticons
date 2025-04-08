import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.854 15.146a2.85 2.85 0 0 1 .685 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m8.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M12.5 5.252V2H5.75a.75.75 0 0 0-.75.75V11h8.252q.197-.248.301-.548l.009-.026.45-1.384.004-.012a1.544 1.544 0 0 1 2.913 0l.004.012.45 1.385c.07.209.177.403.315.573H19V2.75a.75.75 0 0 0-.75-.75H16.5v4.251a.75.75 0 0 1-1.5 0V2h-1v3.252a.75.75 0 0 1-1.5 0M10.365 12.5H5v1.752a2.25 2.25 0 0 0 2.25 2.25H10V20a2 2 0 1 0 4 0v-2.165l-.41-1.262-.001-.001a1.84 1.84 0 0 0-1.16-1.165l-1.386-.45-.012-.005a1.544 1.544 0 0 1-.666-2.452"/>`,
  'regular': `<path d="M13.854 15.146a2.85 2.85 0 0 1 .685 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m8.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M5 2.75A.75.75 0 0 1 5.75 2h12.5a.75.75 0 0 1 .75.75v8.985l-.456-.149A1.84 1.84 0 0 1 17.5 10.7V3.5h-1v2.751a.75.75 0 0 1-1.5 0V3.5h-1v1.752a.75.75 0 0 1-1.5 0V3.5h-6V11h6.752q-.06.075-.127.143a1.84 1.84 0 0 1-.703.445l-1.38.449-.011.004c-.26.091-.49.25-.666.46H6.5v1.75c0 .414.336.75.75.75h3a.75.75 0 0 1 .75.75V19.5a1 1 0 1 0 2 0v-3.78a1.84 1.84 0 0 1 .589.852v.001l.45 1.385.005.012c.09.258.249.486.456.662v.868a2.5 2.5 0 0 1-5 0v-3H7.25A2.25 2.25 0 0 1 5 14.25z"/>`
} as const;

export default function PaintBrushSparkleIcon({ 
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

  const gradientId = 'paintbrushsparkleicon_gradient';
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