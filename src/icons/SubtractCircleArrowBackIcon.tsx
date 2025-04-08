import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.979 9.589a8 8 0 1 0-7.39 7.39A5.5 5.5 0 0 1 12.206 9.5H5.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .448.722A5.5 5.5 0 0 1 14.5 9c.892 0 1.734.212 2.479.589M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.396-2.604a.5.5 0 0 0-.708 0l-1.75 1.75a.5.5 0 0 0-.002.705l1.752 1.753a.5.5 0 0 0 .708-.708l-.897-.896h1.543c.966 0 1.75.784 1.75 1.75v.25a.5.5 0 0 0 1 0v-.25a2.75 2.75 0 0 0-2.75-2.75h-1.543l.897-.896a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M5.5 8.5a.5.5 0 0 0 0 1h6.706q.357-.165.742-.278A.5.5 0 0 0 12.5 8.5zm10.497.706Q16 9.104 16 9a7 7 0 1 0-6.794 6.997q.146.514.383.982a8 8 0 1 1 7.39-7.39 5.5 5.5 0 0 0-.982-.383M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.396-2.604a.5.5 0 0 0-.708 0l-1.75 1.75a.5.5 0 0 0-.002.705l1.752 1.753a.5.5 0 0 0 .708-.708l-.897-.896h1.543c.966 0 1.75.784 1.75 1.75v.25a.5.5 0 0 0 1 0v-.25a2.75 2.75 0 0 0-2.75-2.75h-1.543l.897-.896a.5.5 0 0 0 0-.708"/>`
} as const;

export default function SubtractCircleArrowBackIcon({ 
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

  const gradientId = 'subtractcirclearrowbackicon_gradient';
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