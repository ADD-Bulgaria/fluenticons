import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16 17.06 4.72 4.72a.75.75 0 1 0 1.06-1.06L3.28 2.22a.75.75 0 0 0-1.06 1.06l4.722 4.723-3.456 3.46a3.25 3.25 0 0 0 .004 4.596l4.462 4.455a3.255 3.255 0 0 0 4.596-.001zm5.05-5.05L18.06 15 9.002 5.94l2.984-2.988a3.25 3.25 0 0 1 2.3-.953h5.465A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298M17 5.502a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>`,
  'regular': `<path d="M6.942 8.003 2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.5a.75.75 0 1 1-1.06 1.06L16 17.06l-3.452 3.453a3.255 3.255 0 0 1-4.596.001L3.49 16.06a3.25 3.25 0 0 1-.004-4.596zM14.94 16 8.003 9.064l-3.468 3.472a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0zm5.05-5.05L17 13.939l1.061 1.06 2.99-2.99A3.25 3.25 0 0 0 22 9.713V4.25A2.25 2.25 0 0 0 19.75 2h-5.464a3.25 3.25 0 0 0-2.3.953L9.002 5.941l1.06 1.06 2.985-2.988a1.75 1.75 0 0 1 1.239-.513h5.465a.75.75 0 0 1 .75.75v5.462c0 .464-.184.91-.513 1.237M17 5.501a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>`
} as const;

export default function TagOffIcon({ 
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

  const gradientId = 'tagofficon_gradient';
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