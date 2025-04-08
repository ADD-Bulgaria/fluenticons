import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h5.95q.121-.235.313-.427l1.073-1.073H9.5v-13h9.25c.966 0 1.75.784 1.75 1.75v3.861a4.5 4.5 0 0 1 1.5.647V7.25A3.25 3.25 0 0 0 18.75 4zM23 15.5a3.5 3.5 0 0 1-3.5 3.5H18v1a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-1v.5a.5.5 0 0 1-.5.5h-1.75a.75.75 0 0 1-.75-.75v-1.44a.75.75 0 0 1 .22-.53l3.75-3.75a.8.8 0 0 1 .15-.116A3.5 3.5 0 1 1 23 15.5m-3 .5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v4.508a4.5 4.5 0 0 0-1.5-.646V7.25a1.75 1.75 0 0 0-1.75-1.75H9.5v13h3.086l-1.073 1.073a1.8 1.8 0 0 0-.314.427H5.25A3.25 3.25 0 0 1 2 16.75zM8 5.5H5.25A1.75 1.75 0 0 0 3.5 7.25v9.5c0 .966.784 1.75 1.75 1.75H8zm15 10a3.5 3.5 0 0 1-3.5 3.5H18v1a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-1v.5a.5.5 0 0 1-.5.5h-1.75a.75.75 0 0 1-.75-.75v-1.44a.75.75 0 0 1 .22-.53l3.75-3.75a.8.8 0 0 1 .15-.116A3.5 3.5 0 1 1 23 15.5m-3 .5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function PanelLeftKeyIcon({ 
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

  const gradientId = 'panelleftkeyicon_gradient';
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