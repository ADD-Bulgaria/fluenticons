import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.25 2A3.25 3.25 0 0 0 4 5.25v17.5A3.25 3.25 0 0 0 7.25 26h9.568l-2.157-2.157a2.25 2.25 0 1 1 3.182-3.182l1.407 1.407 4.409-4.409q.16-.16.341-.28V5.25A3.25 3.25 0 0 0 20.75 2zm3.25 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 6.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m0 5.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M12.75 8h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5M12 14a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 12 14m.75 4.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m7.03 7.28 6-6a.75.75 0 1 0-1.06-1.06l-5.47 5.47-2.468-2.468a.75.75 0 0 0-1.06 1.06l2.998 2.998a.75.75 0 0 0 1.06 0"/>`,
  'regular': `<path d="M4 5.25A3.25 3.25 0 0 1 7.25 2h13.5A3.25 3.25 0 0 1 24 5.25v12.129q-.181.12-.341.28L22.5 18.818V5.25a1.75 1.75 0 0 0-1.75-1.75H7.25A1.75 1.75 0 0 0 5.5 5.25v17.5c0 .966.784 1.75 1.75 1.75h8.068l1.5 1.5H7.25A3.25 3.25 0 0 1 4 22.75zm6.5 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 6.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m0 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M12.75 8a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM12 14a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 12 14m.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm13.03 1.28-6 6a.75.75 0 0 1-1.06 0l-2.998-2.998a.75.75 0 0 1 1.06-1.06l2.468 2.467 5.47-5.47a.75.75 0 1 1 1.06 1.061"/>`
} as const;

export default function TasksAppIcon({ 
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

  const gradientId = 'tasksappicon_gradient';
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