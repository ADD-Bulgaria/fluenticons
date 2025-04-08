import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.17 4.163a1.5 1.5 0 0 0-1.34 0l-12 6a1.5 1.5 0 0 0-.83 1.342v23.456c0 .516.265.996.702 1.27l12 7.54A1.5 1.5 0 0 0 26 42.5V30.432l11.17-5.585a1.5 1.5 0 0 0 0-2.684l-9.316-4.658 9.317-4.658a1.5 1.5 0 0 0 0-2.684z"/>`,
  'regular': `<path d="M23.83 4.158a1.5 1.5 0 0 1 1.34 0l12 6.001a1.5 1.5 0 0 1 0 2.684l-9.316 4.659 9.317 4.659a1.5 1.5 0 0 1 0 2.683L26 30.43V42.5a1.5 1.5 0 0 1-2.298 1.27l-12-7.54A1.5 1.5 0 0 1 11 34.96V11.5a1.5 1.5 0 0 1 .83-1.34zM14 12.428v21.703l9 5.655V29.503a1.5 1.5 0 0 1 .83-1.342l9.316-4.658-9.317-4.66a1.5 1.5 0 0 1 0-2.683l9.317-4.66L24.5 7.178z"/>`
} as const;

export default function FluentIcon({ 
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

  const gradientId = 'fluenticon_gradient';
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