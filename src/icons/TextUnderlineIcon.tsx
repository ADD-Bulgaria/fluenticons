import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10.5a1 1 0 1 0 2 0V6h6v9.5a1 1 0 1 0 2 0zM7 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M17 4.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0V5.5h7v10.25a.75.75 0 0 0 1.5 0zm.3 13.75H6.6c-.3 0-.6.3-.6.7 0 .5.4.8.8.8h10.7c.3 0 .6-.3.6-.7 0-.5-.4-.8-.8-.8"/>`
} as const;

export default function TextUnderlineIcon({ 
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

  const gradientId = 'textunderlineicon_gradient';
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