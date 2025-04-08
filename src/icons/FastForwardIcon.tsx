import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.637 4.857c-1.066-.845-2.635-.086-2.635 1.273v4.57L5.636 4.858c-1.065-.845-2.634-.086-2.634 1.273V21.87c0 1.359 1.57 2.118 2.634 1.273l7.366-5.84v4.565c0 1.359 1.57 2.118 2.634 1.273l9.637-7.64a1.917 1.917 0 0 0 0-3.004z"/>`,
  'regular': `<path d="M13 10.697V6.131c0-1.36 1.57-2.118 2.636-1.273l9.636 7.641a1.917 1.917 0 0 1 0 3.004l-9.637 7.64c-1.065.845-2.634.086-2.634-1.273v-4.568l-7.366 5.84c-1.065.845-2.634.086-2.634-1.273V6.13c0-1.36 1.57-2.118 2.634-1.273zm0 4.691v-2.776l-8.297-6.58a.1.1 0 0 0-.064-.028.13.13 0 0 0-.068.013.13.13 0 0 0-.053.045.1.1 0 0 0-.017.068v15.739a.12.12 0 0 0 .017.068q.017.025.053.044a.13.13 0 0 0 .068.014.1.1 0 0 0 .064-.028zm1.704-9.355a.1.1 0 0 0-.065-.028.13.13 0 0 0-.068.013.13.13 0 0 0-.053.045.1.1 0 0 0-.017.068V21.87c0 .034.009.054.018.067q.015.026.052.045a.13.13 0 0 0 .068.014.1.1 0 0 0 .065-.028l9.636-7.64a.417.417 0 0 0 0-.653z"/>`
} as const;

export default function FastForwardIcon({ 
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

  const gradientId = 'fastforwardicon_gradient';
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