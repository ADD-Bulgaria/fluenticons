import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H14.824l6.307-7.192c1.892-2.158.518-5.483-2.224-5.786l1.998-3.551c1.124-2-.32-4.471-2.615-4.471H8.635q-.326 0-.635.068V7a3 3 0 0 1 3-3zm2.5.464V15.25c0 .69.56 1.25 1.25 1.25h11.71zM8.635 24h9.654a1 1 0 0 1 .872 1.49L15.499 32h3c1.29 0 1.978 1.52 1.128 2.489L9.97 45.5c-1.01 1.151-2.884.17-2.514-1.316L8.999 38H3.003a1 1 0 0 1-.905-1.425l5.631-12A1 1 0 0 1 8.635 24"/>`,
  'regular': `<path d="M12.25 4A4.25 4.25 0 0 0 8 8.25v13.818Q8.31 22 8.635 22h1.864V8.25c0-.966.784-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0 0 27.75 19h9.75v20.75a1.75 1.75 0 0 1-1.75 1.75H16.14L13.947 44H35.75A4.25 4.25 0 0 0 40 39.75V18.414a2.25 2.25 0 0 0-.659-1.59L27.176 4.658A2.25 2.25 0 0 0 25.586 4zm23.232 12.5H27.75c-.69 0-1.25-.56-1.25-1.25V7.518zM8.635 24h9.654a1 1 0 0 1 .872 1.49L15.499 32h3c1.29 0 1.978 1.52 1.128 2.489L9.97 45.5c-1.01 1.151-2.884.17-2.514-1.316L8.999 38H3.003a1 1 0 0 1-.905-1.425l5.631-12A1 1 0 0 1 8.635 24"/>`
} as const;

export default function DocumentLightningIcon({ 
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

  const gradientId = 'documentlightningicon_gradient';
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