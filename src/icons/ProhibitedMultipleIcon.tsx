import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.636 6.636a9 9 0 0 1 11.982-.668l-12.65 12.65a9 9 0 0 1 .668-11.982m.746 13.396 12.65-12.65a9.001 9.001 0 0 1-12.65 12.65m13.396-14.81C16.482.926 9.518.926 5.222 5.222s-4.296 11.26 0 15.556 11.26 4.296 15.556 0c4.296-4.295 4.296-11.26 0-15.556M25.001 13c0 6.627-5.373 12-12 12-1.28 0-2.513-.2-3.669-.571A10.95 10.95 0 0 0 15.001 26c6.075 0 11-4.925 11-11 0-2.074-.574-4.013-1.572-5.669.371 1.157.572 2.39.572 3.669"/>`,
  'regular': `<path d="M6.282 6.282c3.532-3.531 9.152-3.701 12.885-.51L5.773 19.168c-3.192-3.733-3.022-9.353.51-12.885m.551 13.945L20.227 6.833c3.192 3.733 3.022 9.353-.51 12.885s-9.151 3.7-12.884.51M20.778 5.222C16.482.926 9.518.926 5.222 5.222s-4.296 11.26 0 15.556 11.26 4.296 15.556 0 4.296-11.26 0-15.556M25 13c0 6.628-5.373 12-12 12-1.12 0-2.204-.153-3.232-.44a10.95 10.95 0 0 0 4.982 1.19c6.075 0 11-4.925 11-11 0-1.793-.43-3.486-1.19-4.982A12 12 0 0 1 25 13"/>`
} as const;

export default function ProhibitedMultipleIcon({ 
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

  const gradientId = 'prohibitedmultipleicon_gradient';
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