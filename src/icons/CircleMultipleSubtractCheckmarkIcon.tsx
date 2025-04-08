import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.917 6A7 7 0 0 0 6 12.917 6.002 6.002 0 0 1 7 1a6 6 0 0 1 5.917 5M9.124 6H4.5a.5.5 0 0 0 0 1h3.208a8 8 0 0 1 1.416-1M19 13a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-3.146-1.854a.5.5 0 0 0-.708 0L12.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M7 2a5 5 0 0 1 4.916 4.083q.49-.076 1.001-.083A6.002 6.002 0 0 0 1 7a6 6 0 0 0 5 5.917q.007-.51.083-1A5.002 5.002 0 0 1 7 2M4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm11.354 5.854a.5.5 0 0 0-.708-.708L12.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0zM13 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-1a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`
} as const;

export default function CircleMultipleSubtractCheckmarkIcon({ 
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

  const gradientId = 'circlemultiplesubtractcheckmarkicon_gradient';
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