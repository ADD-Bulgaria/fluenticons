import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.13 4.087A3 3 0 0 1 8.441 3H23.56a3 3 0 0 1 2.312 1.087l4.665 5.638c1.079 1.304.151 3.275-1.541 3.275H3.005c-1.692 0-2.62-1.971-1.54-3.275zM4 15v10.75A3.25 3.25 0 0 0 7.25 29h17.5A3.25 3.25 0 0 0 28 25.75V15zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6.13 4.087A3 3 0 0 1 8.441 3H23.56a3 3 0 0 1 2.312 1.087l4.665 5.638c1.079 1.304.151 3.275-1.541 3.275H28v12.75A3.25 3.25 0 0 1 24.75 29H7.25A3.25 3.25 0 0 1 4 25.75V13h-.994c-1.693 0-2.62-1.971-1.541-3.275zM6 13v12.75c0 .69.56 1.25 1.25 1.25h17.5c.69 0 1.25-.56 1.25-1.25V13zm2.441-8a1 1 0 0 0-.77.362L3.006 11h25.989L24.33 5.362A1 1 0 0 0 23.56 5z"/>`
} as const;

export default function BuildingRetailMoreIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'buildingretailmoreicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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