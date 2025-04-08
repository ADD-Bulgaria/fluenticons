import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.763 2.038a.75.75 0 0 1 .474 0l3.75 1.25A.75.75 0 0 1 16.5 4v5a.75.75 0 0 1-.513.712L12.75 10.79V13h1.75a2.25 2.25 0 0 1 2.25 2.25v.845A3.001 3.001 0 0 1 16 22a3 3 0 0 1-.75-5.905v-.845a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v.845A3.001 3.001 0 0 1 8 22a3 3 0 0 1-.75-5.905v-.845A2.25 2.25 0 0 1 9.5 13h1.75v-2.21L8.013 9.713A.75.75 0 0 1 7.5 9V4a.75.75 0 0 1 .513-.712zM9.788 5.513a.75.75 0 0 0 .475.949l.987.329v.959a.75.75 0 0 0 1.5 0v-.96l.987-.328a.75.75 0 0 0-.474-1.424L12 5.46l-1.263-.42a.75.75 0 0 0-.949.474"/>`,
  'regular': `<path d="M9.788 5.513a.75.75 0 0 1 .95-.475L12 5.46l1.263-.42a.75.75 0 0 1 .474 1.423l-.987.329v.959a.75.75 0 0 1-1.5 0v-.96l-.987-.328a.75.75 0 0 1-.475-.95m2.45-3.475a.75.75 0 0 0-.475 0l-3.75 1.25A.75.75 0 0 0 7.5 4v5c0 .323.207.61.513.712l3.237 1.079V13H9.5a2.25 2.25 0 0 0-2.25 2.25v.845a3.001 3.001 0 1 0 1.5 0v-.845a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v.845A3.001 3.001 0 0 0 16 22a3 3 0 0 0 .75-5.905v-.845A2.25 2.25 0 0 0 14.5 13h-1.75v-2.21l3.237-1.078A.75.75 0 0 0 16.5 9V4a.75.75 0 0 0-.513-.712zM9 8.46V4.541l3-1 3 1v3.918l-3 1zM8 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/>`
} as const;

export default function CubeTreeIcon({ 
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

  const gradientId = 'cubetreeicon_gradient';
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