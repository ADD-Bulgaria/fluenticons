import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 15.75v.5A1.75 1.75 0 0 1 17.25 18H2.75A1.75 1.75 0 0 1 1 16.25v-.5a.75.75 0 1 1 1.5 0v.5a.25.25 0 0 0 .25.25h14.5a.25.25 0 0 0 .25-.25v-.5a.75.75 0 1 1 1.5 0M3.833 10.376a4.17 4.17 0 0 1 2.527-.61c.37.02.74.074 1.1.162a.97.97 0 0 0-.55-.757 2.64 2.64 0 0 0-1.261-.234 2.8 2.8 0 0 0-1.068.234.75.75 0 1 1-.671-1.342 4.3 4.3 0 0 1 1.69-.391 4.14 4.14 0 0 1 1.99.391A2.69 2.69 0 0 1 9 10.457V14.5a.75.75 0 1 1-1.5.056 3.73 3.73 0 0 1-2.945.569 2.61 2.61 0 0 1-.722-4.749m1.111 3.3a2.92 2.92 0 0 0 2.556-1V11.5a4.5 4.5 0 0 0-1.216-.235 2.68 2.68 0 0 0-1.619.361 1.112 1.112 0 0 0 .279 2.05M11 14.5V4a.75.75 0 1 1 1.5 0v4.657A2.7 2.7 0 0 1 14.25 8a3.28 3.28 0 0 1 3 3.5 3.28 3.28 0 0 1-3 3.5 2.7 2.7 0 0 1-1.75-.657v.157a.75.75 0 1 1-1.5 0m1.75-3a1.8 1.8 0 0 0 1.5 2 1.8 1.8 0 0 0 1.5-2 1.8 1.8 0 0 0-1.5-2 1.8 1.8 0 0 0-1.5 2"/>`,
  'regular': `<path d="M11.5 15a.5.5 0 0 0 .5-.5v-.391A2.76 2.76 0 0 0 14 15a3.28 3.28 0 0 0 3-3.5A3.28 3.28 0 0 0 14 8a2.77 2.77 0 0 0-2 .891V4a.5.5 0 0 0-1 0v10.5a.5.5 0 0 0 .5.5M14 9a2.29 2.29 0 0 1 2 2.5 2.29 2.29 0 0 1-2 2.5 2.29 2.29 0 0 1-2-2.5A2.29 2.29 0 0 1 14 9m-9.129 5.884A3.72 3.72 0 0 0 8 14.089v.411a.5.5 0 0 0 1 0v-4.038a2.445 2.445 0 0 0-1.276-2.409 3.9 3.9 0 0 0-1.868-.365 4 4 0 0 0-1.58.365.5.5 0 0 0 .448.894 3.1 3.1 0 0 1 1.17-.26 2.9 2.9 0 0 1 1.382.26A1.35 1.35 0 0 1 8 10.265a5.7 5.7 0 0 0-1.4-.249 3.92 3.92 0 0 0-2.375.568 2.361 2.361 0 0 0 .646 4.3m-.094-3.467a2.93 2.93 0 0 1 1.769-.4c.498.025.989.13 1.454.308v1.464a3.24 3.24 0 0 1-2.871 1.129 1.361 1.361 0 0 1-.352-2.501M19 16v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 16.5V16a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V16a.5.5 0 0 1 1 0"/>`
} as const;

export default function TextWholeWordIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'textwholewordicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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