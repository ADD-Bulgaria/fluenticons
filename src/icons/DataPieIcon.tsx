import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M15 7.012a1 1 0 0 0-1.047-1C7.855 6.3 3 11.333 3 17.5 3 23.851 8.149 29 14.5 29c6.168 0 11.201-4.855 11.487-10.953A1 1 0 0 0 24.988 17H17.5a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M18.047 3.013A1 1 0 0 0 17 4.012V14a1 1 0 0 0 1 1h9.988a1 1 0 0 0 1-1.047C28.71 8.037 23.962 3.29 18.046 3.013"/>`,
  'filled': `<path d="M17.31 3.288a1 1 0 0 1 .737-.275c5.916.277 10.663 5.024 10.94 10.94A1 1 0 0 1 27.988 15H18a1 1 0 0 1-1-1V4.012a1 1 0 0 1 .31-.724m-2.62 3a1 1 0 0 1 .31.724V14.5a2.5 2.5 0 0 0 2.5 2.5h7.488a1 1 0 0 1 1 1.047C25.7 24.145 20.667 29 14.5 29 8.149 29 3 23.851 3 17.5 3 11.332 7.855 6.299 13.953 6.013a1 1 0 0 1 .737.275"/>`,
  'regular': `<path d="M18.047 3.013A1 1 0 0 0 17 4.012V14a1 1 0 0 0 1 1h9.988a1 1 0 0 0 1-1.047C28.71 8.037 23.962 3.29 18.046 3.013M19 13V5.118A9.51 9.51 0 0 1 26.882 13zm-4-5.988a1 1 0 0 0-1.047-1C7.855 6.3 3 11.333 3 17.5 3 23.851 8.149 29 14.5 29c6.168 0 11.201-4.855 11.487-10.953A1 1 0 0 0 24.988 17H17.5a2.5 2.5 0 0 1-2.5-2.5zM5 17.5c0-4.736 3.466-8.663 8-9.382V14.5a4.5 4.5 0 0 0 4.5 4.5h6.382c-.719 4.534-4.646 8-9.382 8A9.5 9.5 0 0 1 5 17.5"/>`
} as const;

export default function DataPieIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'datapieicon_gradient';
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