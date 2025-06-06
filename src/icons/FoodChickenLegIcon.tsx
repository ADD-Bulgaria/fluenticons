import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30 10.5a8.5 8.5 0 0 0-16.862-1.534c-.777 2.366-1.467 3.695-1.86 4.342l-3.985 3.985A1 1 0 0 0 8 19h.108l-3.024 3.024a3.5 3.5 0 0 0-1.716 6.255q.204.157.361.36a3.5 3.5 0 0 0 6.248-1.736L13 23.878V24a1 1 0 0 0 1.707.707l3.986-3.986c.654-.395 1.992-1.087 4.372-1.865A8.5 8.5 0 0 0 30 10.5M10.937 19H13v2.05l-4.683 4.684A1.08 1.08 0 0 0 8 26.5a1.5 1.5 0 0 1-2.688.916 4 4 0 0 0-.727-.724A1.5 1.5 0 0 1 5.495 24c.283 0 .553-.112.753-.311z"/>`,
  'regular': `<path d="M30 10.5a8.5 8.5 0 0 0-16.862-1.534c-.777 2.366-1.467 3.695-1.86 4.342l-3.985 3.985A1 1 0 0 0 8 19h.108l-3.024 3.024a3.5 3.5 0 0 0-1.716 6.255q.204.156.361.36a3.5 3.5 0 0 0 6.248-1.736L13 23.878V24a1 1 0 0 0 1.707.707l3.987-3.986c.653-.395 1.992-1.087 4.372-1.865A8.5 8.5 0 0 0 30 10.5M13 21.05l-4.683 4.684A1.08 1.08 0 0 0 8 26.5a1.5 1.5 0 0 1-2.688.916 4 4 0 0 0-.727-.724A1.5 1.5 0 0 1 5.495 24c.283 0 .553-.112.753-.311L10.937 19H13zM21.5 4a6.5 6.5 0 0 1 1.145 12.9q-.069.012-.134.033c-2.67.868-4.191 1.663-4.97 2.149a1 1 0 0 0-.178.141L15 21.586V18a1 1 0 0 0-1-1h-3.586l2.36-2.36a1 1 0 0 0 .14-.176c.486-.775 1.28-2.288 2.147-4.944a1 1 0 0 0 .035-.14A6.5 6.5 0 0 1 21.5 4"/>`
} as const;

export default function FoodChickenLegIcon({ 
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

  const gradientId = 'foodchickenlegicon_gradient';
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