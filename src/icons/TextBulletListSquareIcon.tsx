import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6z"/><path d="M17 15.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-18c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25m1.25 6.75a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM19 31.75c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25"/>`,
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zm11 3.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-18c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25m1.25 6.75a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM19 31.75c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25"/>`,
  'regular': `<path d="M17 15.75a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-18c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25m1.25 6.75a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM19 31.75c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v23.5a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function TextBulletListSquareIcon({ 
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

  const gradientId = 'textbulletlistsquareicon_gradient';
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