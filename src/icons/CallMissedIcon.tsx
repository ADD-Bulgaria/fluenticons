import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42.304 20.174c2.574-3.7 1.916-9.049-2.593-10.99C35.947 7.561 30.606 6 24.001 6S12.053 7.562 8.29 9.183c-4.509 1.942-5.168 7.29-2.593 10.99a4.25 4.25 0 0 0 3.986 1.795l3.166-.372A5.25 5.25 0 0 0 17.23 18l.713-2.201c.23-.712.66-1.11 1.102-1.208 1.277-.286 3.088-.443 4.95-.445 1.864-.002 3.678.151 4.96.44.443.1.872.5 1.103 1.213L30.77 18a5.25 5.25 0 0 0 4.381 3.596l3.166.372a4.25 4.25 0 0 0 3.986-1.794M25 29.25a1.25 1.25 0 0 0-2.5 0v5.5c0 .69.56 1.25 1.25 1.25h3.5a1.25 1.25 0 0 0 0-2.5H25zM24 44c6.076 0 11-4.925 11-11s-4.924-11-11-11-11 4.925-11 11 4.925 11 11 11m0-2.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17"/>`,
  'regular': `<path d="M39.609 8.605c4.72 2.315 5.399 7.99 2.92 12.147a4.94 4.94 0 0 1-4.748 2.38l-3.431-.356a5.25 5.25 0 0 1-4.525-3.846l-.83-3.058c-.211-.776-.667-1.23-1.151-1.343-2.191-.515-5.51-.506-7.69.003-.484.113-.939.565-1.15 1.34l-.83 3.058a5.25 5.25 0 0 1-4.524 3.846l-3.431.356a4.93 4.93 0 0 1-4.748-2.38c-2.48-4.157-1.8-9.832 2.92-12.147A35.35 35.35 0 0 1 24 5c6.542 0 11.846 1.76 15.609 3.605m.772 10.866c1.953-3.274 1.175-7.126-1.873-8.621A32.85 32.85 0 0 0 24 7.5a32.85 32.85 0 0 0-14.51 3.35c-3.047 1.495-3.826 5.347-1.873 8.62a2.44 2.44 0 0 0 2.343 1.176l3.43-.356a2.75 2.75 0 0 0 2.371-2.015l.83-3.058c.366-1.347 1.336-2.732 2.994-3.12 2.548-.595 6.258-.607 8.83-.002 1.657.39 2.626 1.776 2.991 3.122l.83 3.058a2.75 2.75 0 0 0 2.37 2.015l3.432.356a2.44 2.44 0 0 0 2.342-1.175M25 29.25a1.25 1.25 0 1 0-2.5 0v5.5c0 .69.56 1.25 1.25 1.25h3.5a1.25 1.25 0 1 0 0-2.5H25zM24 44c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11m0-2.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17"/>`
} as const;

export default function CallMissedIcon({ 
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

  const gradientId = 'callmissedicon_gradient';
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