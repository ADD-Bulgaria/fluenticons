import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 4A2.5 2.5 0 0 1 13 6.5v7a2.5 2.5 0 0 1-2 2.45V12.5A3.5 3.5 0 0 0 7.5 9h-4c-.537 0-1.045.12-1.5.337V6.5A2.5 2.5 0 0 1 4.5 4zm3.5 8.082V7.93l2.77-2.313a.75.75 0 0 1 1.23.575v7.668a.75.75 0 0 1-1.236.57zM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5zm4.02.034a.45.45 0 0 0-.447-.037.5.5 0 0 0-.156.108.5.5 0 0 0-.145.357v3.075a.5.5 0 0 0 .145.358.6.6 0 0 0 .158.11.45.45 0 0 0 .323.02.5.5 0 0 0 .13-.064l2.296-1.567a.47.47 0 0 0 .163-.185.54.54 0 0 0-.003-.487.5.5 0 0 0-.168-.182z"/>`,
  'regular': `<path d="M4.5 4A2.5 2.5 0 0 0 2 6.5v2.837c.31-.148.647-.251 1-.302V6.5A1.5 1.5 0 0 1 4.5 5h7A1.5 1.5 0 0 1 13 6.5v7a1.5 1.5 0 0 1-1.5 1.5H11v1h.5a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4zM14 8.75l3-2.25v7l-3-2.25zM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5zm4.02.034a.45.45 0 0 0-.447-.037.5.5 0 0 0-.156.108.5.5 0 0 0-.145.357v3.075a.5.5 0 0 0 .145.358.6.6 0 0 0 .158.11.45.45 0 0 0 .323.02.5.5 0 0 0 .13-.064l2.296-1.567a.47.47 0 0 0 .163-.185.54.54 0 0 0-.003-.487.5.5 0 0 0-.168-.182z"/>`
} as const;

export default function VideoRecordingIcon({ 
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

  const gradientId = 'videorecordingicon_gradient';
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