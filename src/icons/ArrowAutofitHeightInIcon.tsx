import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16.957 10.207 2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793V4a1 1 0 1 0-2 0v3.086l-.793-.793a1 1 0 1 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0M4 6.5A2.5 2.5 0 0 1 6.5 4h4a1 1 0 1 1 0 2h-4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h4a1 1 0 1 1 0 2h-4A2.5 2.5 0 0 1 4 17.5zm15.457 9.793-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 1.414 1.414l.793-.793V20a1 1 0 1 0 2 0v-3.086l.793.793a1 1 0 0 0 1.414-1.414"/>`,
  'regular': `<path d="m16.78 9.78 2.5-2.5a.75.75 0 0 0-1.06-1.06L17 7.44V3.75a.75.75 0 0 0-1.5 0v3.69l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0M4 6.25A2.25 2.25 0 0 1 6.25 4h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h4a.75.75 0 0 1 0 1.5h-4A2.25 2.25 0 0 1 4 17.75zm15.28 10.47-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v3.69a.75.75 0 0 0 1.5 0v-3.69l1.22 1.22a.75.75 0 1 0 1.06-1.06"/>`
} as const;

export default function ArrowAutofitHeightInIcon({ 
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

  const gradientId = 'arrowautofitheightinicon_gradient';
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