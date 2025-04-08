import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.365 4.858c1.065-.845 2.634-.086 2.634 1.273v4.57l7.365-5.841C23.43 4.015 25 4.774 25 6.133v15.739c0 1.359-1.57 2.117-2.634 1.273L15 17.305v4.565c0 1.359-1.57 2.118-2.634 1.273l-9.637-7.64a1.917 1.917 0 0 1 0-3.004z"/>`,
  'regular': `<path d="m15 17.304 7.365 5.84c1.065.844 2.634.085 2.634-1.274V6.13c0-1.36-1.57-2.118-2.634-1.273l-7.366 5.84V6.131c0-1.36-1.57-2.118-2.635-1.273l-9.636 7.641a1.917 1.917 0 0 0 0 3.004l9.637 7.64c1.065.845 2.634.086 2.634-1.273zm0-4.691 8.297-6.58a.1.1 0 0 1 .064-.028.13.13 0 0 1 .068.013.13.13 0 0 1 .053.045.1.1 0 0 1 .017.068V21.87a.1.1 0 0 1-.017.067.13.13 0 0 1-.053.045.13.13 0 0 1-.068.014.1.1 0 0 1-.064-.028l-8.298-6.579zm-1.703-6.58a.1.1 0 0 1 .064-.028.13.13 0 0 1 .068.013.13.13 0 0 1 .053.045.1.1 0 0 1 .017.068V21.87a.1.1 0 0 1-.018.067.13.13 0 0 1-.052.045.13.13 0 0 1-.068.014.1.1 0 0 1-.065-.028l-9.636-7.64a.417.417 0 0 1 0-.653z"/>`
} as const;

export default function RewindIcon({ 
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

  const gradientId = 'rewindicon_gradient';
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