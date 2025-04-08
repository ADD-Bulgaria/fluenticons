import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m3.613 2.21.094.083 18 18a1 1 0 0 1-1.32 1.497l-.094-.083-3.068-3.068a7 7 0 0 1-1.893.353l-.331.008H9.405l1.304 1.303.077.087A1 1 0 0 1 9.39 21.8l-.095-.083-3.005-3.005-.077-.087a1 1 0 0 1-.006-1.232l.083-.095 3.005-3.005.088-.078a1 1 0 0 1 1.232-.006l.095.084.077.087a1 1 0 0 1 .006 1.232l-.083.095-1.294 1.292h5.586q.281 0 .553-.03L6.348 7.761A5 5 0 0 0 4 12.001c0 .918.248 1.779.68 2.519l.135.218a1 1 0 0 1-1.627 1.164A6.95 6.95 0 0 1 2 12a6.99 6.99 0 0 1 2.908-5.679L2.293 3.707a1 1 0 0 1 1.32-1.498M20 7.681c.32 0 .603.15.787.382l.053.075.017.027A6.96 6.96 0 0 1 22 12.001c0 1.977-.82 3.762-2.138 5.035l-1.415-1.414A5 5 0 0 0 20 12.001c0-.926-.252-1.793-.69-2.537l-.138-.22A1 1 0 0 1 20 7.683m-5.375-5.47.087.077 3.006 3.005a1 1 0 0 1 .077 1.327l-.078.087-3.005 3.006a1 1 0 0 1-1.492-1.327l.078-.088 1.297-1.298H9.826L7.911 5.085q.416-.065.848-.08l.24-.004h5.598l-1.299-1.298a1 1 0 0 1-.078-1.327l.078-.087a1 1 0 0 1 1.327-.078"/>`,
  'regular': `<path d="m3.196 2.147.084.073 18.5 18.5a.75.75 0 0 1-.976 1.133l-.084-.073-3.509-3.508q-.655.18-1.358.219l-.353.009H8.564l1.9 1.9.066.076a.75.75 0 0 1-1.043 1.056l-.084-.072-3.182-3.182-.067-.077a.75.75 0 0 1-.006-.899l.073-.085 3.182-3.182.077-.067a.75.75 0 0 1 .899-.006l.084.073.068.077a.75.75 0 0 1 .005.899l-.073.085L8.558 17H15.5q.213 0 .422-.017L6.4 7.46a5 5 0 0 0-1.598 7.904.75.75 0 1 1-1.11 1.007A6.47 6.47 0 0 1 2 12a6.5 6.5 0 0 1 3.287-5.652L2.22 3.28a.75.75 0 0 1 .976-1.133M19.75 7.378c.22 0 .416.094.553.244A6.47 6.47 0 0 1 22 12c0 2.057-.955 3.89-2.446 5.081l-1.069-1.07A5 5 0 0 0 20.5 12c0-1.306-.5-2.495-1.32-3.386a.75.75 0 0 1 .57-1.236m-5.217-4.975.077.067 3.182 3.182a.75.75 0 0 1 .067.984l-.067.076-3.182 3.182a.75.75 0 0 1-1.128-.984l.068-.076L15.38 7H9.473l-1.48-1.48a7 7 0 0 1 .274-.016L8.5 5.5h7.021L13.55 3.53a.75.75 0 0 1-.067-.984l.068-.076a.75.75 0 0 1 .983-.067"/>`
} as const;

export default function ArrowRepeatAllOffIcon({ 
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

  const gradientId = 'arrowrepeatallofficon_gradient';
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