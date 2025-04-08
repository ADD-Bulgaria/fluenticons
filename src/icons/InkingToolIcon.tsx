import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.018 2a2 2 0 0 0-2 2v.812Q2 4.904 2 5v2a3 3 0 0 0 3 3h.504l.003.005h20.986l.003-.005H27a3 3 0 0 0 3-3V4a2 2 0 0 0-2-2zm9 24c.021.82.216 1.716.622 2.454.429.78 1.195 1.535 2.344 1.55h.032c1.148-.015 1.915-.77 2.344-1.55.406-.738.6-1.634.622-2.454zm6.942-3.096 5.52-10.899H6.52l5.515 10.898A2 2 0 0 0 13.818 24h4.358a2 2 0 0 0 1.784-1.096"/>`,
  'regular': `<path d="M4.018 2.951a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h.461l6.555 12.952a2 2 0 0 0 1.11.98v.006a18 18 0 0 0-.128 1.959c0 .86.193 1.822.624 2.606.429.78 1.196 1.535 2.344 1.549h.032c1.148-.014 1.915-.768 2.344-1.549.431-.784.624-1.746.624-2.606a18 18 0 0 0-.128-1.967 2 2 0 0 0 1.104-.977L26.52 9.95h.498a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1zM16.855 24l.015.125c.066.555.114 1.19.114 1.723 0 .6-.14 1.214-.377 1.643-.226.412-.442.506-.607.512-.165-.006-.381-.1-.607-.512-.236-.429-.377-1.044-.377-1.643 0-.533.048-1.168.114-1.723l.015-.125zM24.28 9.95 18.176 22h-4.358L7.721 9.95z"/>`
} as const;

export default function InkingToolIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'inkingtoolicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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