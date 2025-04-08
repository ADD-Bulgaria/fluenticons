import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"/><path d="M6.711 6.515a5.824 5.824 0 0 1 7.6 2.746l.098.209 1.288 2.892 1.698 1.47c.093.08.173.173.266.324l.059.115a1.25 1.25 0 0 1-.637 1.649L6.756 20.49A1.25 1.25 0 0 1 5 19.347l-.001-2.343-1.242-2.791A5.82 5.82 0 0 1 6.71 6.515m9.151-4.421c2.086 1.14 3.652 2.602 4.682 4.387s1.515 3.872 1.459 6.248a.75.75 0 0 1-1.5-.036c.05-2.111-.372-3.927-1.258-5.462-.886-1.536-2.249-2.809-4.102-3.821a.75.75 0 1 1 .72-1.316m-.237 3.6c.967.527 1.742 1.295 2.316 2.29.574.994.851 2.049.824 3.15a.75.75 0 1 1-1.5-.037c.02-.821-.185-1.604-.623-2.364s-1.014-1.328-1.735-1.722a.75.75 0 0 1 .718-1.317"/>`,
  'filled': `<path d="m10.429 19.924 3.562-1.512a1.999 1.999 0 0 1-3.562 1.512m5.432-17.83c2.086 1.14 3.652 2.603 4.682 4.387s1.515 3.872 1.459 6.248a.75.75 0 0 1-1.5-.035c.05-2.112-.372-3.928-1.258-5.463s-2.249-2.808-4.102-3.82a.75.75 0 1 1 .72-1.317m-9.15 4.421a5.824 5.824 0 0 1 7.6 2.746l.098.21 1.288 2.891 1.698 1.47c.093.08.173.174.266.325l.059.114a1.25 1.25 0 0 1-.637 1.65L6.756 20.49A1.25 1.25 0 0 1 5 19.347l-.001-2.343-1.242-2.792A5.82 5.82 0 0 1 6.71 6.515m8.913-.82c.967.527 1.742 1.294 2.316 2.289s.851 2.05.824 3.15a.75.75 0 1 1-1.5-.036c.02-.822-.185-1.605-.623-2.364-.438-.76-1.014-1.33-1.735-1.722a.75.75 0 0 1 .718-1.317"/>`,
  'regular': `<path d="m10.429 19.924 3.562-1.512a1.999 1.999 0 0 1-3.562 1.512m5.432-17.83c2.086 1.14 3.652 2.603 4.682 4.387s1.515 3.872 1.459 6.248a.75.75 0 0 1-1.5-.035c.05-2.112-.372-3.928-1.258-5.463s-2.249-2.808-4.102-3.82a.75.75 0 1 1 .72-1.317m-9.15 4.421a5.824 5.824 0 0 1 7.6 2.746l.098.21 1.288 2.891 1.698 1.47c.093.08.173.174.266.325l.059.114a1.25 1.25 0 0 1-.637 1.65L6.756 20.49A1.25 1.25 0 0 1 5 19.347l-.001-2.343-1.242-2.792A5.82 5.82 0 0 1 6.71 6.515m-1.584 7.088 1.372 3.083v2.277l9.616-4.255-1.653-1.43-1.417-3.183-.085-.182a4.32 4.32 0 0 0-5.638-2.027 4.32 4.32 0 0 0-2.195 5.717m10.497-7.908c.967.527 1.742 1.294 2.316 2.289s.851 2.05.824 3.15a.75.75 0 1 1-1.5-.036c.02-.822-.185-1.605-.623-2.364-.438-.76-1.014-1.33-1.735-1.722a.75.75 0 0 1 .718-1.317"/>`
} as const;

export default function AlertUrgentIcon({ 
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

  const gradientId = 'alerturgenticon_gradient';
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