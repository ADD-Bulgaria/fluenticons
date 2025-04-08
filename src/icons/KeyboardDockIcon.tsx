import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.995 4.75a2.25 2.25 0 0 0-2.25-2.25H4.25A2.25 2.25 0 0 0 2 4.75v9.505a2.25 2.25 0 0 0 2.25 2.25h7v2.934l-.84-.84a.75.75 0 1 0-1.061 1.06l2.12 2.121a.75.75 0 0 0 1.061 0l2.121-2.12a.75.75 0 1 0-1.06-1.061l-.841.84v-2.934h6.995a2.25 2.25 0 0 0 2.25-2.25zM6.75 12h10.5l.102.007a.75.75 0 0 1 0 1.486l-.102.007H6.75l-.102-.007a.75.75 0 0 1 0-1.486zm8.75-2.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-2.995 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m2.995 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>`,
  'regular': `<path d="M17.252 12h-10.5l-.101.007a.75.75 0 0 0 .101 1.493h10.5l.102-.007A.75.75 0 0 0 17.252 12m.25-2.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-5.995 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-7.505-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2.995 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3-1.75a2.25 2.25 0 0 0-2.25-2.25H4.253a2.25 2.25 0 0 0-2.25 2.25v9.505a2.25 2.25 0 0 0 2.25 2.25h6.998V18h.002v1.44l-.84-.842-.085-.072a.75.75 0 0 0-.976 1.133l2.121 2.121.084.073a.75.75 0 0 0 .394.145h.105l.103-.014a.75.75 0 0 0 .375-.204l2.121-2.121.073-.084a.75.75 0 0 0-.073-.977l-.084-.072a.75.75 0 0 0-.977.072l-.84.841v-2.934h6.995a2.25 2.25 0 0 0 2.25-2.25zM12.75 15.005V15h-1.5v.005H4.252a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 .75-.75h15.496a.75.75 0 0 1 .75.75v9.505a.75.75 0 0 1-.75.75z"/>`
} as const;

export default function KeyboardDockIcon({ 
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

  const gradientId = 'keyboarddockicon_gradient';
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