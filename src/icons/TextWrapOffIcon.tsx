import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L3.94 5H3a1 1 0 0 0 0 2h2.94l4 4H3a1 1 0 1 0 0 2h8.94l2.322 2.323-1.97 1.97a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.415-1.414L15.414 19h2.525l2.78 2.78a.75.75 0 0 0 1.061-1.06zM14.181 11H19a4 4 0 0 1 2.39 7.208l-1.445-1.445A2 2 0 0 0 19 13h-2.819zm-4-4-2-2H21a1 1 0 1 1 0 2zM2 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L3.94 5H2.75a.75.75 0 0 0 0 1.5h2.69l5 5H2.75a.75.75 0 0 0 0 1.5h9.19l3.033 3.034a.75.75 0 0 0-.753.186l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72h3.879l2.28 2.28a.75.75 0 0 0 1.061-1.06zM16.94 18h-2.378l.72-.72a.75.75 0 0 0 .185-.753zM19 11.5h-4.319l1.5 1.5H19a2.5 2.5 0 0 1 1.601 4.42l1.064 1.063A4 4 0 0 0 19 11.5M8.182 5l1.5 1.5H21.25a.75.75 0 0 0 0-1.5zM2 18.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function TextWrapOffIcon({ 
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

  const gradientId = 'textwrapofficon_gradient';
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