import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M14 4.238a2.25 2.25 0 0 0-3.016-2.115l-6.84 2.475A3.25 3.25 0 0 0 2 7.654v6.108a2.25 2.25 0 0 0 3.016 2.116l7.83-2.834A1.75 1.75 0 0 0 14 11.4z"/><path d="M18 7.238a2.25 2.25 0 0 0-3.016-2.115l-6.84 2.475A3.25 3.25 0 0 0 6 10.654v6.108a2.25 2.25 0 0 0 3.016 2.116l7.83-2.834A1.75 1.75 0 0 0 18 14.4z"/><path d="M22 10.238a2.25 2.25 0 0 0-3.016-2.115l-6.84 2.475A3.25 3.25 0 0 0 10 13.654v6.108a2.25 2.25 0 0 0 3.016 2.116l7.83-2.834A1.75 1.75 0 0 0 22 17.4z"/><path d="M23 19.875C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>`,
  'filled': `<path d="M14 4.252a2.25 2.25 0 0 0-3.016-2.116l-6.84 2.475A3.25 3.25 0 0 0 2 7.667v6.082a2.25 2.25 0 0 0 3 2.121v-5.553c0-1.58.99-2.99 2.474-3.527L14 4.43zm4 3a2.25 2.25 0 0 0-3.016-2.116l-7.17 2.595A2.75 2.75 0 0 0 6 10.317v6.432a2.25 2.25 0 0 0 3 2.122v-5.905a3.25 3.25 0 0 1 2.144-3.056L18 7.429zm4 3a2.25 2.25 0 0 0-3.016-2.116l-7.5 2.714A2.25 2.25 0 0 0 10 12.966v6.783a2.25 2.25 0 0 0 3.016 2.116l.46-.166A3.7 3.7 0 0 1 13 19.875v-.103A2.77 2.77 0 0 1 15.773 17h.277A3.5 3.5 0 1 1 22 14.5zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M11.495 3.547a.75.75 0 0 1 1.005.705v.72l1.5-.543v-.177a2.25 2.25 0 0 0-3.016-2.116l-6.84 2.475A3.25 3.25 0 0 0 2 7.667v6.082a2.25 2.25 0 0 0 3 2.121v-1.595l-.495.18a.75.75 0 0 1-1.005-.706V7.667a1.75 1.75 0 0 1 1.155-1.645zm4 3a.75.75 0 0 1 1.005.705v.72l1.5-.543v-.177a2.25 2.25 0 0 0-3.016-2.116l-7.17 2.595A2.75 2.75 0 0 0 6 10.317v6.432a2.25 2.25 0 0 0 3 2.122v-1.596l-.495.18a.75.75 0 0 1-1.005-.706v-6.432c0-.527.33-.997.825-1.176zm5.005 3.705a.75.75 0 0 0-1.005-.705l-7.5 2.714a.75.75 0 0 0-.495.705v6.783a.75.75 0 0 0 1.005.705l.515-.186c.052.494.2.98.455 1.43l-.46.167A2.25 2.25 0 0 1 10 19.749v-6.783a2.25 2.25 0 0 1 1.484-2.116l7.5-2.714A2.25 2.25 0 0 1 22 10.252V14.5c0-1.19-.593-2.24-1.5-2.873zM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function LayerDiagonalPersonIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'layerdiagonalpersonicon_gradient';
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