import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.392.466a.75.75 0 0 1 1.018.297A12.95 12.95 0 0 1 23 7c0 2.258-.576 4.384-1.59 6.236a.75.75 0 0 1-1.316-.72A11.45 11.45 0 0 0 21.501 7c0-2-.51-3.88-1.407-5.516a.75.75 0 0 1 .298-1.018M17.29 3.06a.75.75 0 0 1 .985.393A9 9 0 0 1 19.001 7a9 9 0 0 1-.726 3.545.75.75 0 1 1-1.378-.591A7.5 7.5 0 0 0 17.5 7a7.5 7.5 0 0 0-.604-2.954.75.75 0 0 1 .393-.985m.713 13.188a2.25 2.25 0 0 0-2.248-2.25H4.252a2.25 2.25 0 0 0-2.25 2.25v.92c0 .572.18 1.13.511 1.595C4.056 20.93 6.58 22.001 10 22.001s5.945-1.072 7.49-3.235a2.75 2.75 0 0 0 .513-1.599zM15 7.004a5 5 0 1 0-10 0 5 5 0 0 0 10 0"/>`,
  'regular': `<path d="M20.392.466a.75.75 0 0 1 1.018.297A12.95 12.95 0 0 1 23 7c0 2.258-.576 4.384-1.59 6.236a.75.75 0 0 1-1.316-.72A11.45 11.45 0 0 0 21.501 7c0-2-.51-3.88-1.407-5.516a.75.75 0 0 1 .298-1.018M17.29 3.06a.75.75 0 0 1 .985.393A9 9 0 0 1 19.001 7a9 9 0 0 1-.726 3.545.75.75 0 1 1-1.378-.591A7.5 7.5 0 0 0 17.5 7a7.5 7.5 0 0 0-.604-2.954.75.75 0 0 1 .393-.985m.713 13.188a2.25 2.25 0 0 0-2.248-2.25H4.252a2.25 2.25 0 0 0-2.25 2.25v.577c0 .893.32 1.756.9 2.435 1.565 1.835 3.952 2.74 7.097 2.74s5.533-.905 7.102-2.739a3.75 3.75 0 0 0 .901-2.438zm-13.75-.75h11.502a.75.75 0 0 1 .748.75v.575a2.25 2.25 0 0 1-.54 1.463c-1.257 1.468-3.224 2.214-5.963 2.214s-4.704-.746-5.957-2.214a2.25 2.25 0 0 1-.54-1.46v-.578a.75.75 0 0 1 .75-.75M15 7.005a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-8.5 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>`
} as const;

export default function PersonVoiceIcon({ 
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

  const gradientId = 'personvoiceicon_gradient';
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