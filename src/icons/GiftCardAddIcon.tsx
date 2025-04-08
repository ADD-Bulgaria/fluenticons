import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 2H5a3 3 0 0 0-3 3v3h2.708A2.5 2.5 0 0 1 8 4.708zM2 9.5V14a3 3 0 0 0 3 3h3v-6.44l-1.72 1.72a.75.75 0 0 1-1.06-1.06L6.94 9.5zM9.5 17h1.519A6.5 6.5 0 0 1 22 12.81V9.5H10.56l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 10.56zM22 8h-9.208A2.5 2.5 0 0 0 9.5 4.708V2H19a3 3 0 0 1 3 3zM10.5 8h-1V7a1 1 0 1 1 1 1M8 8H7a1 1 0 1 1 1-1.008zm15 9.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`,
  'regular': `<path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7.81a6.5 6.5 0 0 0-1.5-1.078V9.5h-9.94l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 10.56v4.94h1.813c-.154.478-.255.98-.294 1.5H5a3 3 0 0 1-3-3zm3-1.5A1.5 1.5 0 0 0 3.5 5v3h1.208A2.5 2.5 0 0 1 8 4.708V3.5zm4.5 0v1.208A2.5 2.5 0 0 1 12.792 8H20.5V5A1.5 1.5 0 0 0 19 3.5zM8 15.5v-4.94l-1.72 1.72a.75.75 0 0 1-1.06-1.06L6.94 9.5H3.5V14A1.5 1.5 0 0 0 5 15.5zM10.5 8a1 1 0 1 0-1-1v1zM8 6.996A1 1 0 1 0 7 8h1zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function GiftCardAddIcon({ 
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

  const gradientId = 'giftcardaddicon_gradient';
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