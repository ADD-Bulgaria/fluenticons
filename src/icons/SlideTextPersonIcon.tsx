import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h17.266a8 8 0 0 1-.016-.5v-.502A5 5 0 0 1 31 34h1.101A6.98 6.98 0 0 1 30 29a6.97 6.97 0 0 1 1.375-4.167 1.24 1.24 0 0 1-.625.167h-17.5a1.25 1.25 0 1 1 0-2.5h17.5a1.25 1.25 0 0 1 1.174 1.68A7 7 0 0 1 44 29V12.75A4.75 4.75 0 0 0 39.25 8zm4.5 23.5a1.25 1.25 0 1 1 0-2.5h13.5a1.25 1.25 0 1 1 0 2.5zM12 17.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25M42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`,
  'regular': `<path d="M13.25 16a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zM12 23.75c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 0 1 1.174 1.68q-.295.31-.549.653a1.24 1.24 0 0 1-.625.167h-17.5c-.69 0-1.25-.56-1.25-1.25M26.228 37.5H8.75a2.25 2.25 0 0 1-2.25-2.25v-22.5a2.25 2.25 0 0 1 2.25-2.25h30.5a2.25 2.25 0 0 1 2.25 2.25v10.888A6.99 6.99 0 0 1 44 29V12.75A4.75 4.75 0 0 0 39.25 8H8.75A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h17.266a8 8 0 0 1-.016-.5v-.502c0-.522.08-1.025.228-1.498M12 30.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25M42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`
} as const;

export default function SlideTextPersonIcon({ 
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

  const gradientId = 'slidetextpersonicon_gradient';
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