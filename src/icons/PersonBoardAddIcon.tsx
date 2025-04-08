import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v13A4.5 4.5 0 0 0 7.5 25h6.723a9 9 0 0 1-.099-3.5H14c-1.623 0-3.186-.3-4.382-.979-1.23-.697-2.118-1.835-2.118-3.396C7.5 15.951 8.451 15 9.625 15h8.75q.215 0 .419.041A9.03 9.03 0 0 1 25 14.223V7.5A4.5 4.5 0 0 0 20.5 3zm0 23.5h7.206c.304.72.698 1.39 1.17 2h-4.877a4.5 4.5 0 0 1-3.745-2.005q.122.005.245.005m21-15.5v4.875a9 9 0 0 0-2-1.17V7.5q0-.123-.006-.246A4.5 4.5 0 0 1 28.5 11m-18-1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m12.5 21a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"/>`,
  'regular': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v13A4.5 4.5 0 0 0 7.5 25h6.723A9 9 0 0 1 14 23H7.5A2.5 2.5 0 0 1 5 20.5v-13A2.5 2.5 0 0 1 7.5 5h13A2.5 2.5 0 0 1 23 7.5V14c.687 0 1.357.077 2 .223V7.5A4.5 4.5 0 0 0 20.5 3zm0 23.5h7.206c.304.72.698 1.39 1.17 2h-4.877a4.5 4.5 0 0 1-3.745-2.005q.122.005.245.005m21-15.5v4.875a9 9 0 0 0-2-1.17V7.5q0-.123-.006-.246A4.5 4.5 0 0 1 28.5 11m-10.375 3c.614 0 1.174.233 1.596.616A9 9 0 0 0 17.343 16H9.875a.375.375 0 0 0-.375.375c0 1.02.438 1.752 1.18 2.266.78.54 1.936.859 3.32.859q.37 0 .719-.03a9 9 0 0 0-.594 2.03H14c-1.654 0-3.247-.376-4.459-1.215-1.248-.865-2.041-2.196-2.041-3.91A2.375 2.375 0 0 1 9.875 14zM12.5 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M14 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m9 24.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"/>`
} as const;

export default function PersonBoardAddIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'personboardaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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