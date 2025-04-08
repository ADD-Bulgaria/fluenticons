import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v13A4.5 4.5 0 0 0 7.5 25h13a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 20.5 3zm2.125 12h8.75c1.174 0 2.125.951 2.125 2.125 0 1.561-.888 2.7-2.118 3.396-1.196.678-2.759.979-4.382.979s-3.186-.3-4.382-.979c-1.23-.697-2.118-1.835-2.118-3.396C7.5 15.951 8.451 15 9.625 15m.875-5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m.5 19a4.5 4.5 0 0 1-3.746-2.005q.122.005.245.005h14a5 5 0 0 0 5-5v-14q0-.123-.005-.246A4.5 4.5 0 0 1 28.5 11v10.5a7 7 0 0 1-7 7z"/>`,
  'regular': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v13A4.5 4.5 0 0 0 7.5 25h13a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 20.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h13A2.5 2.5 0 0 1 23 7.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 20.5zm6 21a4.5 4.5 0 0 1-3.746-2.005q.122.005.245.005h14a5 5 0 0 0 5-5v-14q0-.123-.005-.246A4.5 4.5 0 0 1 28.5 11v10.5a7 7 0 0 1-7 7zM7.5 16.375A2.375 2.375 0 0 1 9.875 14h8.25a2.375 2.375 0 0 1 2.375 2.375c0 1.714-.793 3.045-2.041 3.91-1.212.839-2.805 1.215-4.459 1.215s-3.247-.376-4.459-1.215C8.293 19.42 7.5 18.089 7.5 16.375M9.875 16a.375.375 0 0 0-.375.375c0 1.02.438 1.752 1.18 2.266.78.54 1.936.859 3.32.859s2.54-.32 3.32-.86c.742-.513 1.18-1.246 1.18-2.265a.375.375 0 0 0-.375-.375zM12.5 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M14 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>`
} as const;

export default function PersonBoardIcon({ 
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

  const gradientId = 'personboardicon_gradient';
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