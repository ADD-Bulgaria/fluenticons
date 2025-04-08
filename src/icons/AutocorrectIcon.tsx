import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.165 7.903a1 1 0 0 1 1.67 0L20.187 13H19.5a6.5 6.5 0 1 0 5.6 3.198l-.04-.075-.371-.623h4.061a1.25 1.25 0 1 0 0-2.5h-5.572l-4.253-6.47c-1.383-2.103-4.467-2.103-5.85 0L2.206 23.065a1.25 1.25 0 0 0 2.09 1.373zM15.5 19.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>`,
  'light': `<path d="M13.895 7.15c.983-1.534 3.226-1.534 4.21 0L21.852 13H19.5a6.5 6.5 0 1 0 5.256 2.675L23.682 14H29.5a.5.5 0 1 0 0-1h-6.46l-4.095-6.389c-1.377-2.148-4.516-2.148-5.893 0L2.079 23.731a.5.5 0 0 0 .842.54zm10.037 9.092.384.6a5.5 5.5 0 1 1-.385-.6"/>`,
  'regular': `<path d="M14.74 7.686a1.5 1.5 0 0 1 2.52 0L20.697 13H19.5a6.5 6.5 0 1 0 5.308 2.746L24.342 15H29a1 1 0 1 0 0-2h-5.923L18.94 6.6c-1.379-2.133-4.499-2.133-5.878 0l-10.9 16.855A1 1 0 1 0 3.84 24.54zM15 19.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`
} as const;

export default function AutocorrectIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'autocorrecticon_gradient';
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