import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20m-20-.5a4.5 4.5 0 1 0 4.5 4.5c0-1.305-.44-2.423-1.184-3.205-.733-.772-1.833-1.295-3.316-1.295M24 35a7 7 0 0 0 7-7c0-1.87-.637-3.628-1.871-4.927C27.886 21.764 26.111 21 24 21a6.99 6.99 0 0 0-5.497 2.665c.05-2.377.629-4.432 1.574-5.874.968-1.478 2.292-2.291 3.923-2.291 1.526 0 2.773.71 3.717 1.994a1.25 1.25 0 0 0 2.014-1.481C28.387 14.185 26.434 13 24 13c-2.62 0-4.67 1.37-6.014 3.42C16.662 18.44 16 21.135 16 24c0 3.657.786 6.408 2.242 8.27C19.73 34.174 21.802 35 24 35"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24 33.665 6.5 24 6.5M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m20-.5a4.5 4.5 0 1 0 4.5 4.5c0-1.305-.44-2.423-1.184-3.205-.733-.772-1.833-1.295-3.316-1.295M24 35c-2.197 0-4.27-.826-5.758-2.73C16.786 30.408 16 27.657 16 24c0-2.866.662-5.56 1.986-7.58C19.33 14.37 21.38 13 24 13c2.434 0 4.387 1.185 5.731 3.013a1.25 1.25 0 0 1-2.014 1.481C26.773 16.21 25.526 15.5 24 15.5c-1.63 0-2.955.813-3.923 2.29-.945 1.443-1.524 3.498-1.574 5.875A6.99 6.99 0 0 1 24 21c2.111 0 3.886.764 5.129 2.073C30.363 24.373 31 26.13 31 28a7 7 0 0 1-7 7"/>`
} as const;

export default function NumberCircle6Icon({ 
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

  const gradientId = 'numbercircle6icon_gradient';
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