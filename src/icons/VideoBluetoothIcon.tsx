import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.42 12.83a3.25 3.25 0 0 0-3.334-.614A6.25 6.25 0 0 1 12.251 7h14.5A6.25 6.25 0 0 1 33 13.25v15.5A6.25 6.25 0 0 1 26.75 35h-8.578a3.25 3.25 0 0 0-.944-4l-3.91-3 3.91-3a3.25 3.25 0 0 0 .191-4.998zm31.488 19.588L35 28.339v-14.68l5.907-4.078c2.156-1.488 5.096.055 5.096 2.675v17.487c0 2.62-2.94 4.163-5.096 2.675M8.084 14.319A1.25 1.25 0 0 0 6 15.25v9.654l-3.489-2.677A1.25 1.25 0 1 0 .989 24.21L5.928 28 .989 31.79a1.25 1.25 0 1 0 1.522 1.983l3.49-2.677v9.654a1.25 1.25 0 0 0 2.083.93l8-7.171a1.25 1.25 0 0 0-.073-1.922L10.034 28l5.977-4.586a1.25 1.25 0 0 0 .073-1.923zm5.21 19.334L8.5 37.95v-7.977zM8.5 18.049l4.794 4.298L8.5 26.026z"/>`,
  'regular': `<path d="M12.25 7a6.25 6.25 0 0 0-6.164 5.216 3.25 3.25 0 0 1 2.535.087 3.75 3.75 0 0 1 3.63-2.803h15.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.75 3.75h-9.434a3.25 3.25 0 0 1-.144 2.5h9.578A6.25 6.25 0 0 0 34 28.75v-1.101l6.907 4.769c2.155 1.488 5.096-.055 5.096-2.675V12.256c0-2.62-2.94-4.163-5.096-2.675L34 14.351V13.25A6.25 6.25 0 0 0 27.75 7zM34 17.388l8.328-5.75a.75.75 0 0 1 1.176.618v17.487a.75.75 0 0 1-1.176.617l-8.327-5.75zM8.085 14.32A1.25 1.25 0 0 0 6 15.25v9.654l-3.489-2.677A1.25 1.25 0 1 0 .989 24.21L5.928 28 .989 31.79a1.25 1.25 0 1 0 1.522 1.983l3.49-2.677v9.654a1.25 1.25 0 0 0 2.083.93l8-7.171a1.25 1.25 0 0 0-.073-1.922L10.034 28l5.977-4.586a1.25 1.25 0 0 0 .073-1.923zm5.21 19.334L8.5 37.95v-7.977zM8.5 18.049l4.794 4.298L8.5 26.026z"/>`
} as const;

export default function VideoBluetoothIcon({ 
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

  const gradientId = 'videobluetoothicon_gradient';
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