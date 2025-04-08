import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.25 2A3.25 3.25 0 0 0 4 5.25v14.5A2.25 2.25 0 0 0 6.25 22h9a2.25 2.25 0 0 0 2.25-2.25V18h1.25A3.25 3.25 0 0 0 22 14.75v-5.5A3.25 3.25 0 0 0 18.75 6H17.5v-.75A3.25 3.25 0 0 0 14.25 2zm11.5 14.5H17.5v-9h1.25c.966 0 1.75.784 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75M16 6H5.5v-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75zm-7.5 4v7A.75.75 0 0 1 7 17v-7a.75.75 0 0 1 1.5 0m3 0v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0m3 0v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0"/>`,
  'regular': `<path d="M8.5 10A.75.75 0 0 0 7 10v7a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0zM4 5.25A3.25 3.25 0 0 1 7.25 2h7a3.25 3.25 0 0 1 3.25 3.25V6h1.25A3.25 3.25 0 0 1 22 9.25v5.5A3.25 3.25 0 0 1 18.75 18H17.5v1.75A2.25 2.25 0 0 1 15.25 22h-9A2.25 2.25 0 0 1 4 19.75zM16 7.5H5.5v12.25c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75zm1.5 9h1.25a1.75 1.75 0 0 0 1.75-1.75v-5.5a1.75 1.75 0 0 0-1.75-1.75H17.5zM16 5.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5.5 5.25V6H16z"/>`
} as const;

export default function DrinkBeerIcon({ 
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

  const gradientId = 'drinkbeericon_gradient';
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