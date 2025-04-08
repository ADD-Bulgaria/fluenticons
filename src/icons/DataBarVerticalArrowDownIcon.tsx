import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.251 3a2.25 2.25 0 0 0-2.249 2.25v5.924a6.52 6.52 0 0 1 4.498.558V5.25A2.25 2.25 0 0 0 18.251 3m-4.25 6.25v2.772A6.5 6.5 0 0 0 11 17.5a6.47 6.47 0 0 0 1.012 3.485q-.128.015-.261.015a2.25 2.25 0 0 1-2.249-2.25v-9.5a2.25 2.25 0 1 1 4.498 0M5.25 11A2.25 2.25 0 0 0 3 13.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-5-3a.5.5 0 0 0-1 0v4.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L18 19.293z"/>`,
  'regular': `<path d="M18.251 3a2.25 2.25 0 0 0-2.249 2.25v5.924q.722-.172 1.498-.174h.002V5.25a.749.749 0 1 1 1.498 0v5.924c.528.125 1.03.314 1.5.558V5.25A2.25 2.25 0 0 0 18.251 3m-4.25 6.25v2.772a6.5 6.5 0 0 0-1.5 1.324V9.25a.75.75 0 0 0-1.499 0v8.09a7 7 0 0 0 0 .322v1.09c0 .224.098.425.254.562.173.598.43 1.16.756 1.672q-.128.015-.261.015a2.25 2.25 0 0 1-2.249-2.25v-9.5a2.25 2.25 0 1 1 4.498 0M5.25 11A2.25 2.25 0 0 0 3 13.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11m0 1.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m17.75 5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-5-3a.5.5 0 0 0-1 0v4.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L18 19.293z"/>`
} as const;

export default function DataBarVerticalArrowDownIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'databarverticalarrowdownicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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