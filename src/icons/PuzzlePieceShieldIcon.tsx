import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m5 11.904.06.021c.287.1.594.1.882 0a6.8 6.8 0 0 0 2.263-1.343C9.139 9.735 10 8.417 10 6.517V4.194c0-.556-.296-.997-.698-1.25A1.999 1.999 0 0 1 13 4h2.5A1.5 1.5 0 0 1 17 5.5V8h-1a2 2 0 0 0 0 4h1v2.5a1.5 1.5 0 0 1-1.5 1.5H13a2 2 0 1 1-4 0H6.5A1.5 1.5 0 0 1 5 14.5zm.88-9.745c.508.533 1.484 1.38 2.684 1.553A.5.5 0 0 1 9 4.194v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.228 0C4.785 10.772 2 9.64 2 6.517V4.194a.5.5 0 0 1 .436-.482c1.2-.174 2.175-1.02 2.683-1.553a.535.535 0 0 1 .762 0"/>`,
  'regular': `<path d="m5 11.904.06.021a1.34 1.34 0 0 0 .94-.02V14.5a.5.5 0 0 0 .5.5h3.25v.75a1.25 1.25 0 1 0 2.5 0V15h3.25a.5.5 0 0 0 .5-.5v-2.25h-.75a2.25 2.25 0 0 1 0-4.5H16V5.5a.5.5 0 0 0-.5-.5h-3.25v-.75a1.25 1.25 0 0 0-2.35-.593 1.5 1.5 0 0 0-.691-.768A2.25 2.25 0 0 1 13.237 4H15.5A1.5 1.5 0 0 1 17 5.501v3.25h-1.75a1.25 1.25 0 0 0 0 2.5H17v3.25a1.5 1.5 0 0 1-1.5 1.5h-2.263a2.25 2.25 0 0 1-4.473 0H6.5A1.5 1.5 0 0 1 5 14.5zm.88-9.745c.508.533 1.484 1.38 2.684 1.553A.5.5 0 0 1 9 4.194v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.228 0C4.785 10.772 2 9.64 2 6.517V4.194a.5.5 0 0 1 .436-.482c1.2-.174 2.175-1.02 2.683-1.553a.535.535 0 0 1 .762 0"/>`
} as const;

export default function PuzzlePieceShieldIcon({ 
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

  const gradientId = 'puzzlepieceshieldicon_gradient';
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