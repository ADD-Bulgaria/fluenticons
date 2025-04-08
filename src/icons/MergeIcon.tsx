import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 7a1 1 0 0 1 1-1h2.757a4 4 0 0 1 2.829 1.172l2.95 2.95a3 3 0 0 0 2.12.878h3.928l-3.29-3.289a1 1 0 0 1 1.413-1.414l5 4.996a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 13h-3.969a3 3 0 0 0-2.081.879l-2.95 2.95A4 4 0 0 1 6.757 18H4a1 1 0 1 1 0-2h2.757a2 2 0 0 0 1.415-.586l2.95-2.95q.252-.252.535-.464a5 5 0 0 1-.536-.464l-2.95-2.95A2 2 0 0 0 6.758 8H4a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M3 6.75A.75.75 0 0 1 3.75 6h3.257A3.75 3.75 0 0 1 9.66 7.098l2.95 2.95a3.25 3.25 0 0 0 2.298.952h4.53L15.72 7.28a.75.75 0 1 1 1.06-1.06l4.999 5a.75.75 0 0 1 0 1.06l-4.999 5a.75.75 0 1 1-1.06-1.06l3.718-3.72h-4.47a3.25 3.25 0 0 0-2.357 1.012l-2.68 2.82A3.75 3.75 0 0 1 7.212 17.5H3.75a.75.75 0 0 1 0-1.5h3.462a2.25 2.25 0 0 0 1.631-.7l2.68-2.822q.388-.406.853-.709a4.8 4.8 0 0 1-.828-.66l-2.95-2.95a2.25 2.25 0 0 0-1.59-.659H3.75A.75.75 0 0 1 3 6.75"/>`
} as const;

export default function MergeIcon({ 
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

  const gradientId = 'mergeicon_gradient';
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