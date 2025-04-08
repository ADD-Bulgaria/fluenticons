import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.75A2.25 2.25 0 0 1 4.25 4.5h19.5A2.25 2.25 0 0 1 26 6.75v14.5a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 21.25zm3.5 4.5c0 .414.336.75.75.75a7.25 7.25 0 0 1 7.255 7.248.75.75 0 0 0 1.5 0c0-4.837-3.92-8.748-8.755-8.748a.75.75 0 0 0-.75.75m.75 2.749a.75.75 0 0 0 0 1.5 3.75 3.75 0 0 1 3.749 3.749.75.75 0 0 0 1.5 0 5.25 5.25 0 0 0-5.249-5.25m.5 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M6.25 13.999a.75.75 0 0 0 0 1.5 3.75 3.75 0 0 1 3.749 3.749.75.75 0 0 0 1.5 0 5.25 5.25 0 0 0-5.249-5.25M5.5 11.25a.75.75 0 0 1 .75-.75c4.834 0 8.755 3.912 8.755 8.748a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 6.25 12a.75.75 0 0 1-.75-.75M6.75 20a1.25 1.25 0 1 0 0-2.501 1.25 1.25 0 0 0 0 2.5M4.25 4.5A2.25 2.25 0 0 0 2 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25h19.5A2.25 2.25 0 0 0 26 21.25V6.75a2.25 2.25 0 0 0-2.25-2.25zM3.5 6.75A.75.75 0 0 1 4.25 6h19.5a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function CastIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'casticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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