import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.802 26H6.455a4.456 4.456 0 0 1-3.257-7.499l1.38-1.48a3.88 3.88 0 0 0-.092-5.392L3.13 10.274a.75.75 0 0 1 1.06-1.06l1.355 1.354a5.38 5.38 0 0 1 .129 7.477l-1.38 1.48a2.958 2.958 0 0 0 2.16 4.975h.988c-.006-.37-.006-.852.013-1.413.044-1.311.19-3.074.603-4.849.412-1.765 1.103-3.603 2.277-5.013 1.063-1.276 2.51-2.184 4.427-2.371V5.669A3.67 3.67 0 0 1 18.43 2a1.48 1.48 0 0 1 1.479 1.48v.952h2.152c1.1 0 2.123.57 2.703 1.506l.753 1.216c1.29 2.082-.156 4.761-2.57 4.857v11.415A2.574 2.574 0 0 1 20.376 26h-1.074v-2.574a4.397 4.397 0 0 0-4.396-4.399h-1.52a.75.75 0 0 0 0 1.5h1.52c1.6 0 2.897 1.298 2.897 2.899z"/>`,
  'regular': `<path d="M8.523 26h11.852a2.574 2.574 0 0 0 2.573-2.574V12.01c2.413-.096 3.86-2.775 2.57-4.857l-.754-1.216a3.18 3.18 0 0 0-2.703-1.506h-2.152V3.48A1.48 1.48 0 0 0 18.43 2a3.67 3.67 0 0 0-3.667 3.669v5.185c-1.917.187-3.364 1.095-4.427 2.371-1.174 1.41-1.865 3.248-2.277 5.013-.413 1.775-.56 3.538-.603 4.85a29 29 0 0 0-.013 1.412h-.988a2.957 2.957 0 0 1-2.16-4.975l1.38-1.48a5.383 5.383 0 0 0-.13-7.477L4.192 9.213a.75.75 0 1 0-1.06 1.06l1.355 1.356a3.88 3.88 0 0 1 .093 5.392l-1.38 1.48A4.459 4.459 0 0 0 6.454 26zM18.41 3.5v1.682c0 .415.335.75.75.75h2.9c.583 0 1.123.301 1.43.796l.753 1.217c.695 1.12-.11 2.569-1.429 2.569h-.616a.75.75 0 0 0-.75.75v12.162c0 .593-.48 1.074-1.073 1.074h-1.074v-1.074a4.397 4.397 0 0 0-4.396-4.399h-1.52a.75.75 0 0 0 0 1.5h1.52c1.6 0 2.897 1.298 2.897 2.899V24.5h-8.86a27 27 0 0 1 .012-1.363c.042-1.254.181-2.912.565-4.558.386-1.655 1.006-3.238 1.969-4.393.94-1.129 2.217-1.868 4.025-1.868a.75.75 0 0 0 .75-.75v-5.9c0-1.19.959-2.157 2.147-2.168"/>`
} as const;

export default function AnimalCatIcon({ 
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

  const gradientId = 'animalcaticon_gradient';
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