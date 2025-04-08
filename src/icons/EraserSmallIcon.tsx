import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.651 2.638a2.25 2.25 0 0 1 3.19.023l4.91 5.008a2.25 2.25 0 0 1-.007 3.158l-2.257 2.281a4.5 4.5 0 0 0-5.368 5.424l-1.784 1.803a2.25 2.25 0 0 1-3.176.023l-5.1-5.008a2.25 2.25 0 0 1-.006-3.204zM4.108 13.212a.75.75 0 0 0 .003 1.068l5.099 5.008a.75.75 0 0 0 1.058-.008l1.468-1.483-6.099-6.1zM17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>`,
  'regular': `<path d="M15.84 2.661a2.25 2.25 0 0 0-3.19-.023l-9.598 9.508a2.25 2.25 0 0 0 .007 3.204l5.1 5.008a2.25 2.25 0 0 0 3.175-.023l1.785-1.803a4.5 4.5 0 0 1 .022-2.155l-.35.353-6.088-6.088 7.003-6.938a.75.75 0 0 1 1.064.007l4.91 5.009a.75.75 0 0 1-.003 1.052l-3.345 3.38a4.5 4.5 0 0 1 2.154-.044l2.257-2.28a2.25 2.25 0 0 0 .008-3.159zM5.638 11.697l6.099 6.1-1.468 1.483a.75.75 0 0 1-1.059.008l-5.1-5.008a.75.75 0 0 1-.002-1.068zm11.965 2.304A3.5 3.5 0 1 1 14 17.511V17.5a3.5 3.5 0 0 1 3.602-3.5"/>`
} as const;

export default function EraserSmallIcon({ 
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

  const gradientId = 'erasersmallicon_gradient';
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