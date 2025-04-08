import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 4a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0V7a3 3 0 0 0-3-3m1 7a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0zm-6 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M19 7v4q0 .087-.015.17a6.5 6.5 0 0 1 1.868.76c.095-.293.147-.605.147-.93V7a3 3 0 1 0-6 0v4q0 .246.039.482A6.5 6.5 0 0 1 17 11.02V7a1 1 0 1 1 2 0m4 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.5.5a.5.5 0 0 0 0-1h-4.793l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L15.707 18z"/>`,
  'regular': `<path d="M10 4a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0V7a3 3 0 0 0-3-3m1.5 7a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 1 1 3 0zM5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M19.5 7v4q0 .156-.03.304c.488.155.952.366 1.383.626.095-.293.147-.605.147-.93V7a3 3 0 1 0-6 0v4q0 .246.039.482.696-.286 1.463-.406L16.5 11V7a1.5 1.5 0 0 1 3 0M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.5.5a.5.5 0 0 0 0-1h-4.793l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L15.707 18z"/>`
} as const;

export default function DecimalArrowLeftIcon({ 
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

  const gradientId = 'decimalarrowlefticon_gradient';
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