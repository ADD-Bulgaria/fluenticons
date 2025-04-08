import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.612 8.623a21 21 0 0 1-.934 1.143.894.894 0 0 1-1.356 0 21 21 0 0 1-.988-1.215c-.277-.37-.557-.773-.811-1.191-.575-.944-1.023-1.966-1.023-2.86a3.5 3.5 0 1 1 7 0c0 .894-.448 1.916-1.023 2.86l-.006.01c-.27.442-.567.867-.86 1.253m-.895-2.526a1.75 1.75 0 1 0-1.434-3.193 1.75 1.75 0 0 0 1.434 3.193m-7.07 7.443 4.04-4.189a17 17 0 0 1-.88-1.249L4.05 15.108A3.75 3.75 0 0 0 3 17.71v4.539A2.75 2.75 0 0 0 5.75 25h16.5A2.75 2.75 0 0 0 25 22.25v-4.54a3.75 3.75 0 0 0-1.05-2.602l-6.757-7.006a17 17 0 0 1-.88 1.249l2.707 2.806c-1.705.13-3.225.745-4.58 1.292q-.46.187-.895.355c-1.076.41-2.047.702-3.021.701-.89 0-1.83-.245-2.878-.965"/>`,
  'regular': `<path d="M15.612 8.623a21 21 0 0 1-.934 1.143.894.894 0 0 1-1.356 0 21 21 0 0 1-.988-1.215c-.277-.37-.557-.773-.811-1.191-.575-.944-1.023-1.966-1.023-2.86a3.5 3.5 0 1 1 7 0c0 .894-.448 1.916-1.023 2.86l-.006.01c-.27.442-.567.867-.86 1.253m-.895-2.526a1.75 1.75 0 1 0-1.434-3.193 1.75 1.75 0 0 0 1.434 3.193m-7.07 7.443 4.04-4.189a17 17 0 0 1-.88-1.249L4.05 15.108A3.75 3.75 0 0 0 3 17.71v4.539A2.75 2.75 0 0 0 5.75 25h16.5A2.75 2.75 0 0 0 25 22.25v-4.54a3.75 3.75 0 0 0-1.05-2.602l-6.757-7.006a17 17 0 0 1-.88 1.249l2.707 2.806c-1.705.13-3.225.745-4.58 1.292q-.46.187-.895.355c-1.076.41-2.047.702-3.021.701-.89 0-1.83-.245-2.878-.965m-1.054 1.092c1.357.988 2.655 1.373 3.93 1.373 1.26.001 2.446-.375 3.557-.8q.498-.19.98-.385c1.79-.716 3.464-1.385 5.429-1.14l2.38 2.469c.405.42.631.98.631 1.562v4.539c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-4.54c0-.582.226-1.142.63-1.561z"/>`
} as const;

export default function MountainLocationTopIcon({ 
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

  const gradientId = 'mountainlocationtopicon_gradient';
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