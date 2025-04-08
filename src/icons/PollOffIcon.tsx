import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m27.165 28.58 1.128 1.127a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414L12 13.415V25.5a3.5 3.5 0 1 0 7 0v-5.086l3 3V25.5a3.5 3.5 0 0 0 5.165 3.08M22 18.464l7 7V12.5a3.5 3.5 0 1 0-7 0zm-10-10 7 7V6.5a3.5 3.5 0 1 0-7 0zM2 18.5a3.5 3.5 0 0 1 7 0v7a3.5 3.5 0 1 1-7 0z"/>`,
  'regular': `<path d="m27.165 28.58 1.128 1.127a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414L12 13.415V25.5a3.5 3.5 0 1 0 7 0v-5.086l3 3V25.5a3.5 3.5 0 0 0 5.165 3.08m-1.581-1.582L24 25.414v.086a1.5 1.5 0 0 0 1.584 1.498M17 18.415V25.5a1.5 1.5 0 0 1-3 0V15.415zM17 6.5v6.966l2 2V6.5a3.5 3.5 0 1 0-7 0v1.966l2 2V6.5a1.5 1.5 0 0 1 3 0m5 11.965 2 2V12.5a1.5 1.5 0 0 1 3 0v10.965l2 2V12.5a3.5 3.5 0 1 0-7 0zM5.5 15A3.5 3.5 0 0 0 2 18.5v7a3.5 3.5 0 0 0 7 0v-7A3.5 3.5 0 0 0 5.5 15M4 18.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0z"/>`
} as const;

export default function PollOffIcon({ 
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

  const gradientId = 'pollofficon_gradient';
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