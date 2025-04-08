import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M37.096 39.116A19.92 19.92 0 0 1 24 44a19.92 19.92 0 0 1-13.096-4.884l12.39-12.325a1 1 0 0 1 1.411 0zm1.784-1.752L26.468 25.02a3.5 3.5 0 0 0-4.936 0L9.12 37.364A19.93 19.93 0 0 1 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20c0 5.137-1.937 9.822-5.12 13.364M35 17a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24c0 4.45 1.66 8.51 4.395 11.599l10.637-10.58a3.5 3.5 0 0 1 4.936 0l10.637 10.58A17.43 17.43 0 0 0 41.5 24c0-9.665-7.835-17.5-17.5-17.5m11.318 30.848L24.705 26.79a1 1 0 0 0-1.41 0L12.682 37.348A17.43 17.43 0 0 0 24 41.5a17.43 17.43 0 0 0 11.318-4.152M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m26.5-4.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 2.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"/>`
} as const;

export default function ImageCircleIcon({ 
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

  const gradientId = 'imagecircleicon_gradient';
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