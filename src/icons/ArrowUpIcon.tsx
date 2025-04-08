import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44.25a1.5 1.5 0 0 1-1.5-1.5V10.915L10.32 23.302a1.5 1.5 0 1 1-2.14-2.104L22.928 6.201l.02-.02a1.5 1.5 0 0 1 2.145.042L39.82 21.198a1.5 1.5 0 1 1-2.139 2.104L25.5 10.915V42.75a1.5 1.5 0 0 1-1.5 1.5"/>`,
  'regular': `<path d="M24 44c-.69 0-1.25-.56-1.25-1.25V10.304L10.14 23.126a1.25 1.25 0 1 1-1.782-1.752L23.097 6.386l.026-.027a1.25 1.25 0 0 1 1.009-.352 1.25 1.25 0 0 1 .785.393l14.724 14.974a1.25 1.25 0 1 1-1.782 1.752l-12.61-12.822V42.75c0 .69-.559 1.25-1.25 1.25"/>`
} as const;

export default function ArrowUpIcon({ 
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

  const gradientId = 'arrowupicon_gradient';
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