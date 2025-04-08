import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.068 13.01a2.005 2.005 0 0 0 1.416 2.451l5.46 1.47a1.995 1.995 0 0 0 2.447-1.413l2.54-9.523a2.005 2.005 0 0 0-1.415-2.452l-5.46-1.47a1.995 1.995 0 0 0-2.447 1.413zM5 4.001v5.382l1.772-6.64q.11-.41.334-.742H7a2 2 0 0 0-2 2M2.67 5.506 4 10.469V4.002c0-.338.056-.663.159-.966l-.075.02a2 2 0 0 0-1.414 2.45M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
  'regular': `<path d="M5.068 13.01a2.005 2.005 0 0 0 1.416 2.451l5.46 1.47a1.995 1.995 0 0 0 2.447-1.413l2.54-9.523a2.005 2.005 0 0 0-1.415-2.452l-5.46-1.47a1.995 1.995 0 0 0-2.448 1.413zm1.673 1.485a1.003 1.003 0 0 1-.707-1.226l2.54-9.523a.997.997 0 0 1 1.223-.706l5.461 1.47c.533.143.85.692.708 1.226l-2.54 9.522a.997.997 0 0 1-1.224.707zm-2.74-4.023L2.67 5.506a2 2 0 0 1 1.413-2.45l.076-.02a3 3 0 0 0-.16.966v.187a1 1 0 0 0-.364 1.058L4 6.608zM5 9.384V4.002a2 2 0 0 1 2-2h.106c-.147.221-.262.47-.334.741l-.082.308A1 1 0 0 0 6 4v1.635zM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function PlayingCardsIcon({ 
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

  const gradientId = 'playingcardsicon_gradient';
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