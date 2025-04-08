import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 6a2.5 2.5 0 0 0-5 0zM10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-.508 6.095A7.5 7.5 0 0 0 14.401 26h-3.889a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zm16 14.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6.5-.707-2.646-2.647a.5.5 0 0 0-.708.708l2.647 2.646-2.647 2.646a.5.5 0 0 0 .708.708l2.646-2.647 2.646 2.647a.5.5 0 0 0 .708-.708L20.207 20.5l2.647-2.646a.5.5 0 0 0-.708-.708z"/>`,
  'regular': `<path d="M16.5 6a2.5 2.5 0 0 0-5 0zM10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-.508 6.095a7.4 7.4 0 0 0-1.467-.452l.47-5.643H6.565l1.207 14.478a2.75 2.75 0 0 0 2.74 2.522h2.643a7.5 7.5 0 0 0 1.246 1.5h-3.889a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zm16 14.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6.5-.707-2.646-2.647a.5.5 0 0 0-.708.708l2.647 2.646-2.647 2.646a.5.5 0 0 0 .708.708l2.646-2.647 2.646 2.647a.5.5 0 0 0 .708-.708L20.207 20.5l2.647-2.646a.5.5 0 0 0-.708-.708z"/>`
} as const;

export default function DeleteDismissIcon({ 
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

  const gradientId = 'deletedismissicon_gradient';
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