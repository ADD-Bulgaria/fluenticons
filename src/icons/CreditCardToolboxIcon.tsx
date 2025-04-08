import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 8.25A3.25 3.25 0 0 1 5.25 5h13.5A3.25 3.25 0 0 1 22 8.25V9.5H2zM15.75 11H2v4.75A3.25 3.25 0 0 0 5.25 19H11v-2.75a2.5 2.5 0 0 1 2-2.45v-.05A2.75 2.75 0 0 1 15.75 11m-2.25 3.75h.5v-1c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v1h.5a1.5 1.5 0 0 1 1.5 1.5V18h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-1.75a1.5 1.5 0 0 1 1.5-1.5m2.25-1.25a.25.25 0 0 0-.25.25v1h4v-1a.25.25 0 0 0-.25-.25zm3.25 6V19h-3v.5a.5.5 0 0 1-1 0V19h-3v2.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V19h-3v.5a.5.5 0 0 1-1 0"/>`,
  'regular': `<path d="M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19H11v-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75V11H22V8.25A3.25 3.25 0 0 0 18.75 5zM20.5 8.25V9.5h-17V8.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75m-7 6.5h.5v-1c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v1h.5a1.5 1.5 0 0 1 1.5 1.5V18h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-1.75a1.5 1.5 0 0 1 1.5-1.5m2.25-1.25a.25.25 0 0 0-.25.25v1h4v-1a.25.25 0 0 0-.25-.25zm3.25 6V19h-3v.5a.5.5 0 0 1-1 0V19h-3v2.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V19h-3v.5a.5.5 0 0 1-1 0"/>`
} as const;

export default function CreditCardToolboxIcon({ 
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

  const gradientId = 'creditcardtoolboxicon_gradient';
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