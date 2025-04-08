import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path fill-opacity=".5" d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path d="M26 15V4l14 14H29a3 3 0 0 1-3-3"/><path fill-opacity=".9" d="M16.25 23a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5zM15 30.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M16.25 35a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5z"/>`,
  'filled': `<path d="M24 15.25V4H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V19H27.75A3.75 3.75 0 0 1 24 15.25M16.25 23h15.5a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5M15 30.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M16.25 35h15.5a1.25 1.25 0 1 1 0 2.5h-15.5a1.25 1.25 0 1 1 0-2.5M26.5 15.25V4.464L39.462 16.5H27.75c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M16.25 23a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5zM15 30.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M16.25 35a1.25 1.25 0 1 0 0 2.5h15.5a1.25 1.25 0 1 0 0-2.5zM8 8.25A4.25 4.25 0 0 1 12.25 4h13.336a2.25 2.25 0 0 1 1.59.659l12.165 12.164c.422.422.659.994.659 1.591V39.75A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75zm4.25-1.75a1.75 1.75 0 0 0-1.75 1.75v31.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75V19h-9.75A3.75 3.75 0 0 1 24 15.25V6.5zm15.5 10h7.732L26.5 7.518v7.732c0 .69.56 1.25 1.25 1.25"/>`
} as const;

export default function DocumentTextIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'documenttexticon_gradient';
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