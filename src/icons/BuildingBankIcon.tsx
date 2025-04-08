import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.346 4.447a2.25 2.25 0 0 0-2.692 0L6.71 16.349c-1.35 1.007-.637 3.152 1.046 3.152h32.489c1.684 0 2.396-2.145 1.047-3.152zM24 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 38.251A5.25 5.25 0 0 1 11.25 33h25.5c2.9 0 5.25 2.35 5.25 5.25v1.5c0 .69-.56 1.249-1.25 1.249H7.25A1.25 1.25 0 0 1 6 39.75zM14 31h-4v-9.5h4zm4-9.5V31h4v-9.5zm8 0V31h4v-9.5zm8 0V31h4v-9.5z"/>`,
  'regular': `<path d="M24 14.001a2 2 0 1 0 0-4 2 2 0 0 0 0 4m1.346-9.554a2.25 2.25 0 0 0-2.692 0L6.71 16.349c-1.35 1.007-.637 3.152 1.046 3.152H9v12.005a5.25 5.25 0 0 0-3 4.744v3.5c0 .69.56 1.25 1.25 1.25h33.5c.69 0 1.25-.56 1.25-1.25v-3.5a5.25 5.25 0 0 0-3-4.744V19.5h1.244c1.684 0 2.396-2.145 1.047-3.152zM36.5 31H32V19.5h4.5zm-7 0h-4.25V19.5h4.25zm-6.75 0H18.5V19.5h4.25zM16 31h-4.5V19.5H16zm-5.986-14L24 6.561l13.985 10.44zM8.5 36.251a2.75 2.75 0 0 1 2.75-2.75h25.5a2.75 2.75 0 0 1 2.75 2.75v2.25h-31z"/>`
} as const;

export default function BuildingBankIcon({ 
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

  const gradientId = 'buildingbankicon_gradient';
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