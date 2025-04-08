import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4c.331 0 .65.132.884.366l.235.233c1.135 1.125 4.249 4.21 7.173 8.228C35.42 17.124 38.5 22.71 38.5 28.25c0 5.376-1.599 9.357-4.312 11.99C31.485 42.865 27.829 44 24 44s-7.485-1.136-10.188-3.76C11.1 37.608 9.5 33.627 9.5 28.25c0-5.535 3.013-11.057 6.113-15.328 2.89-3.981 5.996-7.061 7.235-8.29l.268-.266A1.25 1.25 0 0 1 24 4"/>`,
  'regular': `<path d="M24 4c.331 0 .65.132.884.366l.235.233c1.135 1.125 4.249 4.21 7.173 8.228C35.42 17.124 38.5 22.71 38.5 28.25c0 5.376-1.599 9.357-4.312 11.99C31.485 42.865 27.829 44 24 44s-7.485-1.136-10.188-3.76C11.1 37.608 9.5 33.627 9.5 28.25c0-5.535 3.013-11.057 6.113-15.328 2.89-3.981 5.996-7.061 7.235-8.29l.268-.266A1.25 1.25 0 0 1 24 4m-6.363 10.39C14.612 18.558 12 23.536 12 28.25c0 4.874 1.437 8.143 3.553 10.197C17.68 40.51 20.65 41.5 24 41.5s6.32-.99 8.447-3.053C34.563 36.393 36 33.124 36 28.25c0-4.71-2.67-9.75-5.73-13.952-2.368-3.255-4.87-5.875-6.27-7.284-1.448 1.455-3.984 4.098-6.363 7.377"/>`
} as const;

export default function DropIcon({ 
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

  const gradientId = 'dropicon_gradient';
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