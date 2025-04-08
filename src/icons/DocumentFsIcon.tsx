import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 5h3.25L10 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 9 4.5V1H5.5A1.5 1.5 0 0 0 4 2.5v6.591c.208.074.4.188.561.348.19.19.317.424.384.678l.05-.023.069-.03c.071-.233.198-.447.375-.625A1.5 1.5 0 0 1 6.5 9c.373 0 .725.135 1 .382A1.5 1.5 0 0 1 8.5 9a1.49 1.49 0 0 1 1.436 1.064c.233.07.447.197.625.375.283.283.439.66.439 1.061 0 .373-.135.725-.382 1 .247.275.382.627.382 1a1.49 1.49 0 0 1-1.064 1.436q-.007.019-.016.035L9.907 15H12.5a1.5 1.5 0 0 0 1.5-1.5V6zm-1 7H9v-1h.5a.5.5 0 1 0 0-1H9v-.5a.5.5 0 1 0-1 0v.5H7v-.5a.5.5 0 1 0-1 0v.5h-.5a.5.5 0 1 0 0 1h.509l.006 1H5.5a.5.5 0 1 0 0 1h.521v.5a.5.5 0 1 0 1 0V14H8v.5a.5.5 0 1 0 1 0V14h.5a.5.5 0 1 0 0-1M8 13h-.985l-.006-1H8zm-4.146-2.146a.504.504 0 0 0 0-.708A.5.5 0 0 0 3.5 10h-2a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0V13h1a.5.5 0 1 0 0-1H2v-1h1.5a.5.5 0 0 0 .354-.146"/>`,
  'regular': `<path d="m13.561 4.354-2.915-2.915A1.5 1.5 0 0 0 9.586 1H6a2 2 0 0 0-2 2v5.829c.42.129.777.41 1 .788V3a1 1 0 0 1 1-1h3v2.5A1.5 1.5 0 0 0 10.5 6H13v7a1 1 0 0 1-1 1h-.828a1.73 1.73 0 0 1-.81 1H12a2 2 0 0 0 2-2V5.414a1.5 1.5 0 0 0-.439-1.06M10.5 5a.5.5 0 0 1-.5-.5V2.207L12.793 5zm-1 8H9v-1h.5a.5.5 0 0 0 0-1H9v-.5a.5.5 0 0 0-1 0v.5H7v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.509l.006 1H5.5a.5.5 0 0 0 0 1h.521v.5a.5.5 0 0 0 1 0V14H8v.5a.5.5 0 0 0 1 0V14h.5a.5.5 0 0 0 0-1M8 13h-.985l-.006-1H8zm-4.146-2.146A.5.5 0 0 0 3.5 10h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V13h1a.5.5 0 0 0 0-1H2v-1h1.5a.5.5 0 0 0 .354-.146"/>`
} as const;

export default function DocumentFsIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentfsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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