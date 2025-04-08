import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m13.5-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M33 19.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M18.452 34.681A11.7 11.7 0 0 0 24 36a11.72 11.72 0 0 0 9.816-5.1 1.249 1.249 0 1 0-2.13-1.307A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907 1.248 1.248 0 1 0-2.13 1.307 11.7 11.7 0 0 0 4.269 3.781"/>`,
  'regular': `<path d="M17.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M33 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M18.452 34.681A11.7 11.7 0 0 0 24 36a11.72 11.72 0 0 0 9.816-5.1 1.249 1.249 0 1 0-2.13-1.307A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907 1.248 1.248 0 1 0-2.13 1.307 11.7 11.7 0 0 0 4.269 3.781M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24"/>`
} as const;

export default function EmojiIcon({ 
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

  const gradientId = 'emojiicon_gradient';
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