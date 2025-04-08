import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.325 2.618a2 2 0 0 0-3.203.52l-1.73 3.458a1.5 1.5 0 0 1-.784.722l-3.59 1.436a1 1 0 0 0-.335 1.636L6.293 13 3 16.293V17h.707L7 13.707l2.175 2.175a5.5 5.5 0 0 1 7.993-6.193 2 2 0 0 0 .214-3.014zm.225 8.532c-.29.727-.493 1.722-.54 2.85h2.98c-.047-1.128-.25-2.123-.54-2.85-.167-.417-.353-.722-.535-.914-.18-.19-.32-.236-.415-.236s-.235.046-.415.236c-.182.192-.368.497-.535.914m-.72-.83a5 5 0 0 0-.209.459c-.344.862-.565 1.987-.612 3.221h-1.982a4.5 4.5 0 0 1 2.802-3.68m3.34 0q.112.218.208.459c.345.862.565 1.987.612 3.221h1.982a4.5 4.5 0 0 0-2.802-3.68M18.972 15H16.99c-.047 1.234-.267 2.36-.612 3.221q-.096.24-.208.459A4.5 4.5 0 0 0 18.972 15M14.5 19c.094 0 .235-.046.415-.236.182-.192.368-.497.535-.914.29-.727.493-1.722.54-2.85h-2.98c.047 1.128.25 2.123.54 2.85.167.417.353.722.535.913.18.191.32.237.415.237m-1.67-.32A4.5 4.5 0 0 1 10.026 15h1.982c.047 1.234.268 2.36.612 3.221q.096.24.208.459"/>`,
  'regular': `<path d="M10.122 3.138a2 2 0 0 1 3.203-.52l4.057 4.057a2 2 0 0 1-.214 3.014 5.5 5.5 0 0 0-1.189-.488l.436-.218a1 1 0 0 0 .26-1.601l-4.057-4.057a1 1 0 0 0-1.601.26l-1.73 3.458A2.5 2.5 0 0 1 7.98 8.246L4.39 9.682l4.614 4.614a5.6 5.6 0 0 0 .171 1.586L7 13.707 3.707 17H3v-.707L6.293 13l-2.61-2.61a1 1 0 0 1 .335-1.636l3.59-1.436a1.5 1.5 0 0 0 .785-.722zm3.428 8.012c-.29.727-.493 1.722-.54 2.85h2.98c-.047-1.128-.25-2.123-.54-2.85-.167-.417-.353-.722-.535-.914-.18-.19-.32-.236-.415-.236s-.235.046-.415.236c-.182.192-.368.497-.535.914m-.72-.83a5 5 0 0 0-.209.459c-.344.862-.565 1.987-.612 3.221h-1.982a4.5 4.5 0 0 1 2.802-3.68m3.34 0q.112.218.208.459c.345.862.565 1.987.612 3.221h1.982a4.5 4.5 0 0 0-2.802-3.68M18.972 15H16.99c-.047 1.234-.267 2.36-.612 3.221q-.096.24-.208.459A4.5 4.5 0 0 0 18.972 15M14.5 19c.094 0 .235-.046.415-.236.182-.192.368-.497.535-.914.29-.727.493-1.722.54-2.85h-2.98c.047 1.128.25 2.123.54 2.85.167.417.353.722.535.913.18.191.32.237.415.237m-1.67-.32A4.5 4.5 0 0 1 10.026 15h1.982c.047 1.234.268 2.36.612 3.221q.096.24.208.459"/>`
} as const;

export default function PinGlobeIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'pinglobeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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