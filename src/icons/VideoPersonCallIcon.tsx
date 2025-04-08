import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h21.5A3.25 3.25 0 0 1 30 7.25v6.873l-.134-.064-.515-.238a3.5 3.5 0 0 0-1.351-.32V7.25C28 6.56 27.44 6 26.75 6H5.25C4.56 6 4 6.56 4 7.25v17.5c0 .69.56 1.25 1.25 1.25H8v-3.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.748l-.707-.185a2.98 2.98 0 0 0-3.03.96l-.936 1.109A3.5 3.5 0 0 0 18.552 28H5.25A3.25 3.25 0 0 1 2 24.75zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10m9.55-.287.479-1.378a1.97 1.97 0 0 1 2.693-1.152l.515.238c.84.387 1.544 1.081 1.68 2.003.672 4.515-2.881 10.76-7.07 12.427-.855.34-1.8.07-2.55-.475l-.46-.334a2.03 2.03 0 0 1-.364-2.942l.937-1.11c.368-.436.95-.62 1.503-.476l2.021.53q2.292-1.498 2.424-4.26l-1.463-1.512a1.53 1.53 0 0 1-.345-1.56"/>`,
  'regular': `<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h21.5A3.25 3.25 0 0 1 30 7.25v6.873l-.134-.064-.515-.238a3.5 3.5 0 0 0-1.351-.32V7.25C28 6.56 27.44 6 26.75 6H5.25C4.56 6 4 6.56 4 7.25v17.5c0 .69.56 1.25 1.25 1.25H8v-3.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.748l-.707-.185A3 3 0 0 0 22 23.015V22.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V26h8.788a3.5 3.5 0 0 0-.236 2H5.25A3.25 3.25 0 0 1 2 24.75zM16 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10m9.55-.287.479-1.378a1.97 1.97 0 0 1 2.693-1.152l.515.238c.84.387 1.544 1.081 1.68 2.003.672 4.515-2.881 10.76-7.07 12.427-.855.34-1.8.07-2.55-.475l-.46-.334a2.03 2.03 0 0 1-.364-2.942l.937-1.11c.368-.436.95-.62 1.503-.476l2.021.53q2.292-1.498 2.424-4.26l-1.463-1.512a1.53 1.53 0 0 1-.345-1.56"/>`
} as const;

export default function VideoPersonCallIcon({ 
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

  const gradientId = 'videopersoncallicon_gradient';
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