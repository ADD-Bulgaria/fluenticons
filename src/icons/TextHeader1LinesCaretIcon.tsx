import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 1 1 2 0v6.993a1 1 0 1 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m14.557 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M3 19a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m11-5c0 .55.45 1 1 1s1-.45 1-1V3a1.004 1.004 0 0 0-1.89-.46c-.5 1-1.53 1.55-1.56 1.56-.49.25-.69.85-.44 1.34a.99.99 0 0 0 1.394.42c.092-.05.275-.15.496-.3z"/>`,
  'regular': `<path d="M14.5 2.75a.75.75 0 0 0-1.42-.335c-.27.537-.683.957-1.049 1.25a4.6 4.6 0 0 1-.614.413l-.005.002a.75.75 0 0 0 .673 1.34h.002l.003-.001.006-.003.018-.01.057-.03q.072-.04.19-.112a6 6 0 0 0 .607-.428L13 4.81v5.44a.75.75 0 0 0 1.5 0zM2.75 2a.75.75 0 0 1 .75.75V5.5h4V2.752a.75.75 0 0 1 1.5 0v7.492a.75.75 0 0 1-1.5 0V7h-4v3.25a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 2.75 2m14.807 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2.75 19a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM2 14.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function TextHeader1LinesCaretIcon({ 
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

  const gradientId = 'textheader1linescareticon_gradient';
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