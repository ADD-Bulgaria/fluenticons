import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.039 38.156c-.383 3.36 2.464 6.2 5.822 5.81l23.386-2.721c3.529-.41 5.026-4.712 2.516-7.226l-2.75-2.751 9.453-9.452a5.25 5.25 0 0 0 .003-7.421l-8.833-8.85a5.25 5.25 0 0 0-7.427-.003l-9.465 9.46-2.843-2.787c-2.526-2.478-6.797-.963-7.198 2.553z"/>`,
  'regular': `<path d="M9.861 43.965c-3.358.39-6.205-2.45-5.822-5.809l2.664-23.387c.4-3.517 4.672-5.032 7.198-2.554l2.843 2.787 9.465-9.46a5.25 5.25 0 0 1 7.427.004l8.833 8.849a5.25 5.25 0 0 1-.004 7.421l-9.451 9.452 2.749 2.751c2.51 2.514 1.013 6.815-2.516 7.226zM6.522 38.44a2.75 2.75 0 0 0 3.05 3.043l23.386-2.72c1.453-.17 2.07-1.94 1.036-2.976l-3.632-3.635a1.25 1.25 0 0 1 0-1.768l10.336-10.335a2.75 2.75 0 0 0 .002-3.887l-8.834-8.849a2.75 2.75 0 0 0-3.89-.002l-10.34 10.335a1.25 1.25 0 0 1-1.759.009L12.151 14c-1.04-1.02-2.799-.396-2.964 1.052z"/>`
} as const;

export default function ArrowOutlineDownLeftIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'arrowoutlinedownlefticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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