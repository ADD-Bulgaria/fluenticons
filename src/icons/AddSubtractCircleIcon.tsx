import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M27.25 29.5a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 0 0 0-2.5zM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m0-2.5a17.43 17.43 0 0 1-11.46-4.273L37.228 12.54A17.43 17.43 0 0 1 41.5 24c0 9.665-7.835 17.5-17.5 17.5M12.25 17.25c0-.69.56-1.25 1.25-1.25h3v-2.75a1.25 1.25 0 0 1 2.5 0V16h2.75a1.25 1.25 0 1 1 0 2.5H19v2.75a1.25 1.25 0 1 1-2.5 0V18.5h-3c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M26 30.75c0-.69.56-1.25 1.25-1.25h7.5a1.25 1.25 0 1 1 0 2.5h-7.5c-.69 0-1.25-.56-1.25-1.25m-7-17.5a1.25 1.25 0 0 0-2.5 0V16h-3a1.25 1.25 0 1 0 0 2.5h3v2.75a1.25 1.25 0 1 0 2.5 0V18.5h2.75a1.25 1.25 0 1 0 0-2.5H19zM24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20m0-2.5c9.665 0 17.5-7.835 17.5-17.5 0-4.383-1.611-8.389-4.273-11.46L12.54 37.228A17.43 17.43 0 0 0 24 41.5m-13.227-6.04L35.46 10.772A17.43 17.43 0 0 0 24 6.5C14.335 6.5 6.5 14.335 6.5 24c0 4.383 1.611 8.389 4.273 11.46"/>`
} as const;

export default function AddSubtractCircleIcon({ 
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

  const gradientId = 'addsubtractcircleicon_gradient';
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