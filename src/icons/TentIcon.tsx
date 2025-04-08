import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.002 6.02a1.25 1.25 0 0 0-1.92 0c-2.992 3.59-8.895 7.85-12.29 9.746a1.25 1.25 0 0 0-.628.92L7.434 36.5H5.25a1.25 1.25 0 0 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5h-2.1l-2.73-19.813a1.25 1.25 0 0 0-.63-.92c-3.394-1.897-9.297-6.158-12.288-9.747M17.787 36.5c2.097-3.048 4.261-6.965 6.213-13.152 1.764 5.581 3.732 9.44 6.213 13.152z"/>`,
  'regular': `<path d="M25.002 6.02a1.25 1.25 0 0 0-1.92 0c-2.992 3.59-8.895 7.85-12.29 9.746a1.25 1.25 0 0 0-.628.92L7.434 36.5H5.25a1.25 1.25 0 0 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5h-2.1l-2.73-19.812a1.25 1.25 0 0 0-.63-.92c-3.394-1.897-9.297-6.158-12.288-9.747m8.229 30.455c-3.392-4.795-5.805-9.462-8.026-17.995a1.25 1.25 0 0 0-2.42.004c-2.46 9.589-5.372 14.366-8.053 17.99H9.96l2.595-18.837c3.258-1.903 8.266-5.514 11.486-8.936 3.22 3.422 8.227 7.033 11.485 8.936l2.595 18.838zm-3.035 0H17.804c2.092-3.045 4.25-6.957 6.196-13.128 1.76 5.57 3.724 9.424 6.196 13.128"/>`
} as const;

export default function TentIcon({ 
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

  const gradientId = 'tenticon_gradient';
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