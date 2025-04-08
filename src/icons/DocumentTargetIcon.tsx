import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3H11.103a7.02 7.02 0 0 0 3.938-4 2.5 2.5 0 0 0 0-5A7.02 7.02 0 0 0 11 16.96a2.5 2.5 0 0 0-5 0 7 7 0 0 0-1 .476V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M9.5 17a1 1 0 1 0-2 0v1.09a5.51 5.51 0 0 0-4.41 4.41H2a1 1 0 1 0 0 2h1.09a5.51 5.51 0 0 0 4.41 4.41V30a1 1 0 1 0 2 0v-1.09a5.51 5.51 0 0 0 4.41-4.41H15a1 1 0 1 0 0-2h-1.09a5.51 5.51 0 0 0-4.41-4.41zM5 23.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M8 2a3 3 0 0 0-3 3v12.436a7 7 0 0 1 1-.477A2.5 2.5 0 0 1 7 15V5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1H13.862a7 7 0 0 1-2.759 2H24a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2zm16.586 8H20a1 1 0 0 1-1-1V4.414zM9.5 17a1 1 0 1 0-2 0v1.09a5.51 5.51 0 0 0-4.41 4.41H2a1 1 0 1 0 0 2h1.09a5.51 5.51 0 0 0 4.41 4.41V30a1 1 0 1 0 2 0v-1.09a5.51 5.51 0 0 0 4.41-4.41H15a1 1 0 1 0 0-2h-1.09a5.51 5.51 0 0 0-4.41-4.41zM5 23.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function DocumentTargetIcon({ 
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

  const gradientId = 'documenttargeticon_gradient';
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