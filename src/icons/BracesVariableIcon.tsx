import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 6A6.5 6.5 0 0 0 7 12.5v6.86c0 1.485-.984 2.79-2.412 3.198a1.5 1.5 0 0 0 .021 2.89A3.33 3.33 0 0 1 7 28.64v6.86a6.5 6.5 0 0 0 6.5 6.5 1.5 1.5 0 0 0 0-3 3.5 3.5 0 0 1-3.5-3.5v-6.86c0-1.805-.764-3.47-2.026-4.64A6.32 6.32 0 0 0 10 19.36V12.5A3.5 3.5 0 0 1 13.5 9a1.5 1.5 0 0 0 0-3m4.178 7.57a1.5 1.5 0 1 0-2.355 1.86L22.09 24l-6.766 8.57a1.5 1.5 0 1 0 2.355 1.86L24 26.42l6.323 8.01a1.5 1.5 0 1 0 2.355-1.86L25.912 24l6.766-8.57a1.5 1.5 0 0 0-2.355-1.86L24 21.58zM34.5 6a6.5 6.5 0 0 1 6.5 6.5v6.86c0 1.485.985 2.79 2.413 3.198a1.5 1.5 0 0 1-.021 2.89A3.33 3.33 0 0 0 41 28.64v6.86a6.5 6.5 0 0 1-6.5 6.5 1.5 1.5 0 0 1 0-3 3.5 3.5 0 0 0 3.5-3.5v-6.86c0-1.805.765-3.47 2.026-4.64A6.32 6.32 0 0 1 38 19.36V12.5A3.5 3.5 0 0 0 34.5 9a1.5 1.5 0 0 1 0-3"/>`,
  'regular': `<path d="M13.25 6A6.25 6.25 0 0 0 7 12.25v7.665c0 1.37-.946 2.559-2.28 2.867a1.25 1.25 0 0 0 .022 2.441A2.94 2.94 0 0 1 7 28.085v7.664a6.25 6.25 0 0 0 6.25 6.25 1.25 1.25 0 0 0 0-2.5 3.75 3.75 0 0 1-3.75-3.75v-7.664A5.44 5.44 0 0 0 7.654 24 5.44 5.44 0 0 0 9.5 19.915V12.25a3.75 3.75 0 0 1 3.75-3.75 1.25 1.25 0 0 0 0-2.5m4.484 7.979a1.25 1.25 0 1 0-1.968 1.542L22.413 24l-6.645 8.479a1.25 1.25 0 1 0 1.967 1.542L24 26.026l6.267 7.995a1.25 1.25 0 1 0 1.967-1.542L25.588 24l6.646-8.479a1.25 1.25 0 0 0-1.968-1.542L24 21.974zM34.75 6A6.25 6.25 0 0 1 41 12.25v7.665c0 1.37.946 2.559 2.281 2.867a1.25 1.25 0 0 1-.022 2.441A2.94 2.94 0 0 0 41 28.085v7.664a6.25 6.25 0 0 1-6.25 6.25 1.25 1.25 0 0 1 0-2.5 3.75 3.75 0 0 0 3.75-3.75v-7.664A5.44 5.44 0 0 1 40.346 24a5.44 5.44 0 0 1-1.846-4.085V12.25a3.75 3.75 0 0 0-3.75-3.75 1.25 1.25 0 1 1 0-2.5"/>`
} as const;

export default function BracesVariableIcon({ 
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

  const gradientId = 'bracesvariableicon_gradient';
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