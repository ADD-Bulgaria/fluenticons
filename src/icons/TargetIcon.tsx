import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 13.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/><path d="M16 8.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M11.25 16a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"/><path d="M16.001 3.75C9.235 3.75 3.75 9.235 3.75 16.001s5.485 12.252 12.251 12.252S28.253 22.767 28.253 16 22.767 3.75 16 3.75M6.25 16.001c0-5.385 4.366-9.751 9.751-9.751 5.386 0 9.752 4.366 9.752 9.751 0 5.386-4.366 9.752-9.752 9.752-5.385 0-9.751-4.366-9.751-9.752"/>`,
  'regular': `<path d="M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-7-2a7 7 0 1 1 14 0 7 7 0 0 1-14 0m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M4 16.001C4 9.373 9.373 4 16.001 4s12.002 5.373 12.002 12.001S22.63 28.003 16 28.003C9.373 28.003 4 22.63 4 16M16.001 6C10.478 6 6 10.478 6 16.001c0 5.524 4.478 10.002 10.001 10.002 5.524 0 10.002-4.478 10.002-10.002C26.003 10.478 21.525 6 16 6"/>`
} as const;

export default function TargetIcon({ 
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

  const gradientId = 'targeticon_gradient';
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