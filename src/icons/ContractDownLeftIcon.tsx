import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 8.5a3.75 3.75 0 0 0-3.75 3.75V24h10.25c2.9 0 5.25 2.35 5.25 5.25V39.5h11.75a3.75 3.75 0 0 0 3.75-3.75v-7.885a1.25 1.25 0 1 1 2.5 0v7.885A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5A6.25 6.25 0 0 1 12.25 6h7.885a1.25 1.25 0 1 1 0 2.5zM42 19.75c0 .69-.56 1.25-1.25 1.25h-12.5c-.69 0-1.25-.56-1.25-1.25V7.25a1.25 1.25 0 1 1 2.5 0v9.482L39.866 6.366a1.25 1.25 0 0 1 1.768 1.768L31.268 18.5h9.482c.69 0 1.25.56 1.25 1.25"/>`,
  'regular': `<path d="M41.634 8.134a1.25 1.25 0 0 0-1.768-1.768L29.5 16.732V7.25a1.25 1.25 0 0 0-2.5 0v12.5c0 .69.56 1.25 1.25 1.25h12.5a1.25 1.25 0 1 0 0-2.5h-9.482zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h7.885a1.25 1.25 0 1 0 0-2.5H12.25A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-7.884a1.25 1.25 0 0 0-2.5 0v7.884a3.75 3.75 0 0 1-3.75 3.75H24V29.25c0-2.9-2.35-5.25-5.25-5.25H8.5zm0 14.25h10.25a2.75 2.75 0 0 1 2.75 2.75V39.5h-9.25a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function ContractDownLeftIcon({ 
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

  const gradientId = 'contractdownlefticon_gradient';
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