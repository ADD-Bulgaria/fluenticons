import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502c0 .67-.293 1.273-.758 1.685l-6.186-6.859a1.75 1.75 0 0 0-3.05 1.172l-.002 6.252H11.5V23.5h4.501V25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3zm-6.262 11.05a.75.75 0 0 1 .826.198l7.705 8.544a.75.75 0 0 1-.737 1.23l-4.39-1.09-2.519 3.742a.75.75 0 0 1-1.372-.42l.006-11.504a.75.75 0 0 1 .48-.7"/>`,
  'regular': `<path d="M25.999 18.752c0 .67-.293 1.273-.758 1.685l-1.005-1.114a.75.75 0 0 0 .263-.57V5.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v13.502c0 .415.336.75.75.75l11.753-.001v1.501H11.5V23.5h4.501V25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3h19.499a2.25 2.25 0 0 1 2.25 2.25zm-8.512-4.702a.75.75 0 0 1 .826.198l7.705 8.544a.75.75 0 0 1-.737 1.23l-4.39-1.09-2.519 3.742a.75.75 0 0 1-1.372-.42l.006-11.504a.75.75 0 0 1 .48-.7"/>`
} as const;

export default function DesktopCursorIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'desktopcursoricon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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