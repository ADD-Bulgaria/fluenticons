import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 18a1 1 0 1 0 2 0V6a1 1 0 0 0-2 0zm16 0a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0zm-5.214-4.2-.085.097-.006.008a1 1 0 0 0 1.511 1.302l2.35-2.348c.274-.179.444-.504.444-.86s-.17-.681-.444-.86L15.2 8.785l-.098-.085-.008-.005a1 1 0 0 0-1.302.096l-.006.007-.085.098-.006.007a1 1 0 0 0 .097 1.302l.794.795h-3.19l-.022.002h-1.96l.801-.802.093-.11.006-.008a1 1 0 0 0-.01-1.177l-.005-.008-.091-.105-.117-.1-.008-.005a1 1 0 0 0-1.177.01l-.008.005-.098.084-2.36 2.359-.065.045-.007.006A1.03 1.03 0 0 0 6 12c0 .356.17.681.443.86L8.8 15.215l.098.085.008.005a1 1 0 0 0 1.399-1.399l-.006-.007-.085-.098-.8-.8h3.19l.022-.001h1.96z"/>`,
  'regular': `<path d="M3 18.25a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0zm16.5 0a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0zm-5.354-4.196a.75.75 0 0 0 1.133.976l2.37-2.367a.77.77 0 0 0 .351-.664.77.77 0 0 0-.35-.664l-2.37-2.367-.085-.073a.75.75 0 0 0-.976.073l-.073.084a.75.75 0 0 0 .073.976l1.221 1.222h-3.784l-.025.002H8.56l1.221-1.222.08-.094a.75.75 0 0 0-.007-.882L9.78 8.97l-.094-.08a.75.75 0 0 0-.882.007l-.085.073-2.37 2.367-.074.053A.79.79 0 0 0 6 12a.77.77 0 0 0 .35.665l2.37 2.367.085.073a.75.75 0 0 0 1.049-1.05l-.073-.084-1.221-1.22h3.784l.025-.001h3.071l-1.221 1.22z"/>`
} as const;

export default function AutoFitWidthIcon({ 
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

  const gradientId = 'autofitwidthicon_gradient';
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