import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.686 1.852 1.127 13.777A1.5 1.5 0 0 0 2.442 16h7.934a7.3 7.3 0 0 1-.371-2.117v-.008L10 13.593v-2.51c0-.743.589-1.416 1.4-1.416.891 0 1.73-.351 2.555-1.195l-3.64-6.62a1.5 1.5 0 0 0-2.629 0M9 5.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 9 5.75m.75 7a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/><path d="M17 10.347a4.6 4.6 0 0 1-1-.582 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.035-2.095 1.544-3.318 1.544a.41.41 0 0 0-.4.417v2.5l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 13 18q.787.6 1.874.979a.4.4 0 0 0 .254 0c2.56-.89 3.873-2.712 3.873-5.394v-2.501L18.992 11a.405.405 0 0 0-.392-.333 4.1 4.1 0 0 1-1.6-.32"/>`,
  'regular': `<path d="M10.315 1.852a1.5 1.5 0 0 0-2.629 0L1.127 13.777A1.5 1.5 0 0 0 2.442 16h7.934a7 7 0 0 1-.257-1H2.442a.5.5 0 0 1-.439-.74l6.56-11.926a.5.5 0 0 1 .875 0l3.735 6.79a4.7 4.7 0 0 0 .782-.652z"/><path d="M9 6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 9 6m0 7.5A.75.75 0 1 0 9 12a.75.75 0 0 0 0 1.5m7-3.735q.484.366 1 .582a4.1 4.1 0 0 0 1.6.32c.193 0 .355.143.392.333l.008.084v2.5c0 2.683-1.313 4.506-3.873 5.395a.4.4 0 0 1-.254 0Q13.785 18.6 13 18a4.8 4.8 0 0 1-1.555-2q-.4-.954-.44-2.15L11 13.585v-2.501c0-.23.18-.417.4-.417 1.223 0 2.323-.51 3.318-1.545a.39.39 0 0 1 .566 0q.348.364.716.643"/>`
} as const;

export default function WarningShieldIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'warningshieldicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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