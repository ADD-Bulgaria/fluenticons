import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m21.193 4.131 1.498-1.517a1 1 0 0 1 1.42-.005l1.186 1.188a1 1 0 0 1 .005 1.41l-1.508 1.526zM20.139 5.2l-4.193 4.247-.192-.192c-1.546-1.546-4.152-1.123-5.13.832l-.51 1.021a.916.916 0 0 1-.999.489l-.089-.018a5.6 5.6 0 0 0-5.582 2.133 7.22 7.22 0 0 0 .671 9.44l.734.733a7.22 7.22 0 0 0 9.44.67 5.6 5.6 0 0 0 2.132-5.581l-.017-.089a.916.916 0 0 1 .488-.998l1.021-.511c1.955-.978 2.378-3.584.833-5.13l-.2-.198L22.74 7.8zm-9.553 12.215a2 2 0 1 1 2.828-2.829 2 2 0 0 1-2.828 2.828"/>`,
  'regular': `<path d="M13.56 16.56a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12m8.351-14.133a1.75 1.75 0 0 1 2.475 0l1.187 1.187a1.75 1.75 0 0 1 0 2.475l-6.517 6.517c1.164 1.563.668 3.864-1.143 4.77l-1.021.51a.916.916 0 0 0-.488.999l.017.088a5.6 5.6 0 0 1-2.132 5.583 7.22 7.22 0 0 1-9.44-.671l-.734-.734a7.22 7.22 0 0 1-.67-9.44 5.6 5.6 0 0 1 5.581-2.132l.089.017a.916.916 0 0 0 .999-.488l.51-1.021c.906-1.811 3.207-2.308 4.77-1.144zm1.414 1.06a.25.25 0 0 0-.353 0l-1.239 1.239 1.564 1.517 1.216-1.215a.25.25 0 0 0 0-.353zm-1.088 3.817-1.564-1.518-4.724 4.724a.75.75 0 0 1-1.06 0l-.196-.195a1.703 1.703 0 0 0-2.727.443l-.51 1.02a2.416 2.416 0 0 1-2.635 1.29l-.089-.018a4.1 4.1 0 0 0-4.088 1.561 5.72 5.72 0 0 0 .532 7.479l.734.734a5.72 5.72 0 0 0 7.479.531 4.1 4.1 0 0 0 1.561-4.087l-.017-.089a2.416 2.416 0 0 1 1.288-2.634l1.021-.511a1.703 1.703 0 0 0 .443-2.727l-.195-.195a.75.75 0 0 1 0-1.061z"/>`
} as const;

export default function GuitarIcon({ 
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

  const gradientId = 'guitaricon_gradient';
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