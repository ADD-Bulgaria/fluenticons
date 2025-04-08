import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.962.963A3.24 3.24 0 0 0 2 6.751v10.502a3.25 3.25 0 0 0 3.25 3.25h13.5q.325 0 .63-.061l1.34 1.338a.75.75 0 0 0 1.06-1.06zm9.92 12.04a2.62 2.62 0 0 1-1.659.732l-.166.006h-.75l-.103-.009a.625.625 0 0 1-.516-.524L10 14.373V11.06l1.249 1.25v1.437h.126l.133-.006a1.37 1.37 0 0 0 .807-.365zM8.035 9.096l.968.968v4.306l-.006.092a.625.625 0 0 1-1.237 0l-.007-.092v-1.734H6.272v1.751l-.007.093a.625.625 0 0 1-1.236 0l-.007-.093V9.635l.007-.092a.625.625 0 0 1 1.236 0l.007.092v1.751h1.48l.001-1.768.007-.092a.63.63 0 0 1 .275-.43M22 17.253c0 .46-.096.9-.269 1.296l-3.602-3.601a.623.623 0 0 0 .862-.71l-.03-.096-.74-1.834a1.804 1.804 0 0 0-.872-3.287l-.148-.005H15.63l-.093.006a.625.625 0 0 0-.524.517l-.008.102.002 2.183-8.323-8.323H18.75A3.25 3.25 0 0 1 22 6.75zm-4.2-2.644.011.02-1.552-1.552v-.453H17zm-.599-4.343-.947-.001.002 1.109h.945l.09-.007a.555.555 0 0 0 0-1.094z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.962.963A3.24 3.24 0 0 0 2 6.751v10.502a3.25 3.25 0 0 0 3.25 3.25h13.5q.325 0 .63-.061l1.34 1.338a.75.75 0 0 0 1.06-1.06zm14.662 16.783H5.25a1.75 1.75 0 0 1-1.75-1.75V6.751c0-.596.298-1.122.752-1.438l3.783 3.783a.62.62 0 0 0-.282.522v1.768H6.272v-1.75l-.007-.093a.625.625 0 0 0-1.243.092v4.752l.007.093a.625.625 0 0 0 1.243-.093v-1.75h1.48l.001 1.733.007.092a.625.625 0 0 0 1.243-.092v-4.306l.997.996v3.313l.006.092a.625.625 0 0 0 .619.533h.75l.166-.005a2.62 2.62 0 0 0 1.659-.733zM11.25 12.31l1.066 1.066a1.37 1.37 0 0 1-.94.372l-.126-.001zm5.01.767-1.253-1.253-.002-2.183c0-.314.23-.574.532-.619l.093-.006h1.57a1.804 1.804 0 0 1 1.02 3.292l.74 1.834a.625.625 0 0 1-.832.806l-.318-.319-.01-.02-.8-1.985h-.742zm-.003-1.703h.945a.554.554 0 0 0 .09-1.101l-.09-.007-.947-.001zm4.243 5.943.001-.064V6.751A1.75 1.75 0 0 0 18.75 5H8.182l-1.5-1.5H18.75A3.25 3.25 0 0 1 22 6.75v10.502c0 .46-.096.9-.269 1.296z"/>`
} as const;

export default function HdrOffIcon({ 
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

  const gradientId = 'hdrofficon_gradient';
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