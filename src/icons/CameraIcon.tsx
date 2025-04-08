import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.951 2.504c.776 0 1.498.4 1.909 1.059L20.381 6h2.369A3.25 3.25 0 0 1 26 9.25v12.5A3.25 3.25 0 0 1 22.75 25H5.25A3.25 3.25 0 0 1 2 21.75V9.25A3.25 3.25 0 0 1 5.25 6h2.569L9.2 3.623a2.25 2.25 0 0 1 1.945-1.12zm-2.951 7a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m0 1.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8"/>`,
  'regular': `<path d="M16.951 2.504c.776 0 1.498.4 1.909 1.059L20.381 6h2.369A3.25 3.25 0 0 1 26 9.25v12.5A3.25 3.25 0 0 1 22.75 25H5.25A3.25 3.25 0 0 1 2 21.75V9.25A3.25 3.25 0 0 1 5.25 6h2.569L9.2 3.623a2.25 2.25 0 0 1 1.945-1.12zm0 1.5h-5.805a.75.75 0 0 0-.584.28l-.064.093-1.6 2.75a.75.75 0 0 1-.648.374h-3A1.75 1.75 0 0 0 3.5 9.25v12.5c0 .966.784 1.75 1.75 1.75h17.5a1.75 1.75 0 0 0 1.75-1.75V9.25a1.75 1.75 0 0 0-1.75-1.75h-2.785a.75.75 0 0 1-.636-.353l-1.742-2.791a.75.75 0 0 0-.636-.353M14 9.502a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>`
} as const;

export default function CameraIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'cameraicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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