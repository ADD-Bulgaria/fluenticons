import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42.304 20.174c2.574-3.7 1.916-9.049-2.593-10.99C35.947 7.561 30.606 6 24.001 6S12.053 7.562 8.29 9.183c-4.509 1.942-5.168 7.29-2.593 10.99a4.25 4.25 0 0 0 3.986 1.795l3.166-.372A5.25 5.25 0 0 0 17.23 18l.713-2.201c.23-.712.66-1.11 1.102-1.208 1.277-.286 3.088-.443 4.95-.445 1.864-.002 3.678.151 4.96.44.443.1.872.5 1.103 1.213L30.77 18a5.25 5.25 0 0 0 4.381 3.596l3.166.372a4.25 4.25 0 0 0 3.986-1.794M24 44c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.924 11-11 11m0-2.5a8.5 8.5 0 0 0 6.83-13.561l-11.891 11.89A8.46 8.46 0 0 0 24 41.5m-6.829-3.438L29.062 26.17a8.5 8.5 0 0 0-11.89 11.89"/>`,
  'regular': `<path d="M42.528 20.752c2.48-4.157 1.8-9.832-2.92-12.147A35.35 35.35 0 0 0 24 5 35.35 35.35 0 0 0 8.39 8.605c-4.72 2.315-5.399 7.99-2.92 12.147a4.93 4.93 0 0 0 4.749 2.38l3.43-.356a5.25 5.25 0 0 0 4.526-3.846l.83-3.058c.21-.775.665-1.227 1.15-1.34 2.179-.51 5.498-.518 7.689-.003.484.114.94.567 1.15 1.343l.83 3.058a5.25 5.25 0 0 0 4.526 3.846l3.43.356a4.94 4.94 0 0 0 4.748-2.38m-4.02-9.902c3.047 1.495 3.826 5.347 1.873 8.62a2.44 2.44 0 0 1-2.343 1.176l-3.43-.356a2.75 2.75 0 0 1-2.37-2.015l-.83-3.058c-.366-1.346-1.335-2.732-2.992-3.122-2.572-.605-6.282-.593-8.83.003-1.658.387-2.628 1.772-2.994 3.12l-.83 3.057a2.75 2.75 0 0 1-2.37 2.015l-3.431.356a2.44 2.44 0 0 1-2.343-1.175c-1.953-3.274-1.174-7.126 1.873-8.621A32.85 32.85 0 0 1 24 7.5a32.85 32.85 0 0 1 14.508 3.35M24 44c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11m0-2.5a8.5 8.5 0 0 0 6.83-13.561l-11.892 11.89A8.46 8.46 0 0 0 24 41.5m5.061-15.33a8.5 8.5 0 0 0-11.89 11.89z"/>`
} as const;

export default function CallProhibitedIcon({ 
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

  const gradientId = 'callprohibitedicon_gradient';
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