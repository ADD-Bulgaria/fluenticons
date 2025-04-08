import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.225 5.526a1.5 1.5 0 1 0-2.95-.551L17.406 15H7.25a1.5 1.5 0 1 0 0 3h9.594l-2.24 12H5.25a1.5 1.5 0 1 0 0 3h8.794l-1.769 9.475a1.5 1.5 0 1 0 2.95.55L17.095 33h10.95l-1.77 9.475a1.5 1.5 0 1 0 2.95.55L31.095 33h9.655a1.5 1.5 0 0 0 0-3h-9.094l2.24-12h8.854a1.5 1.5 0 0 0 0-3h-8.294l1.768-9.474a1.5 1.5 0 1 0-2.948-.551L31.404 15H20.456zM28.604 30h-10.95l2.24-12h10.95z"/>`,
  'regular': `<path d="M21.979 5.48a1.25 1.25 0 0 0-2.458-.46L17.658 15H7.25a1.25 1.25 0 0 0 0 2.5h9.942L14.858 30H5.25a1.25 1.25 0 0 0 0 2.5h9.142l-1.87 10.02a1.25 1.25 0 0 0 2.457.46l1.956-10.48h11.457l-1.87 10.02a1.25 1.25 0 0 0 2.457.46l1.956-10.48h9.815a1.25 1.25 0 1 0 0-2.5h-9.348l2.333-12.5h9.015a1.25 1.25 0 1 0 0-2.5h-8.548l1.777-9.52a1.25 1.25 0 0 0-2.458-.46L31.658 15H20.202zM28.859 30H17.401l2.333-12.5h11.457z"/>`
} as const;

export default function NumberSymbolIcon({ 
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

  const gradientId = 'numbersymbolicon_gradient';
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