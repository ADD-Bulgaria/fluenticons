import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.346 4.447a2.25 2.25 0 0 0-2.692 0L6.71 16.349c-1.35 1.007-.637 3.152 1.046 3.152h32.489c1.684 0 2.396-2.145 1.047-3.152zM24 14.002a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 38.25C6 35.35 8.35 33 11.25 33h11.892A8.4 8.4 0 0 0 22 37.25c0 1.35.315 2.625.872 3.75H7.25C6.56 41 6 40.44 6 39.75zm20-8.146a7.8 7.8 0 0 1 4-1.103v-7.5h-4zm8-1.103h4v-7.5h-4zm-20 2h-4v-9.5h4zm4-9.5v9.5h4v-9.5zm12.25 9.5a6.25 6.25 0 1 0 0 12.499h1.5a1.25 1.25 0 1 0 0-2.5h-1.5a3.75 3.75 0 1 1 0-7.5h1.5a1.25 1.25 0 1 0 0-2.5zm9.5 0a6.25 6.25 0 1 1 0 12.499h-1.5a1.25 1.25 0 1 1 0-2.5h1.5a3.75 3.75 0 1 0 0-7.5h-1.5a1.25 1.25 0 1 1 0-2.5zM29 37.25c0-.691.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M24 14.002a2 2 0 1 0 0-4 2 2 0 0 0 0 4m1.346-9.555a2.25 2.25 0 0 0-2.692 0L6.71 16.349c-1.35 1.007-.637 3.152 1.046 3.152H9v12.005a5.25 5.25 0 0 0-3 4.744v3.5c0 .69.56 1.25 1.25 1.25h15.622a8.4 8.4 0 0 1-.78-2.5H8.5v-2.25a2.75 2.75 0 0 1 2.75-2.75h11.622a8.2 8.2 0 0 1 2.378-2.888V19.5h4.25v9.516A8 8 0 0 1 30 29h2v-9.5h4.5V29H39v-9.5h1.244c1.684 0 2.396-2.145 1.047-3.152zM22.75 31H18.5V19.5h4.25zM16 31h-4.5V19.5H16zm-5.986-14L24 6.561l13.985 10.44zM30.25 31a6.25 6.25 0 1 0 0 12.499h1.5a1.25 1.25 0 1 0 0-2.5h-1.5a3.75 3.75 0 1 1 0-7.5h1.5a1.25 1.25 0 1 0 0-2.5zm9.5 0a6.25 6.25 0 1 1 0 12.499h-1.5a1.25 1.25 0 1 1 0-2.5h1.5a3.75 3.75 0 1 0 0-7.5h-1.5a1.25 1.25 0 1 1 0-2.5zM29 37.25c0-.691.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function BuildingBankLinkIcon({ 
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

  const gradientId = 'buildingbanklinkicon_gradient';
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