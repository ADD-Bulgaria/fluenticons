import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v4.508a4.5 4.5 0 0 0-1.5-.646V10.5h-11v8h3.086l-1.073 1.073a1.8 1.8 0 0 0-.314.427H5.25A3.25 3.25 0 0 1 2 16.75zM9.5 9h11V7.25a1.75 1.75 0 0 0-1.75-1.75H9.5zm10 10a3.5 3.5 0 1 0-3.38-2.586.8.8 0 0 0-.15.116l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .414.336.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`,
  'regular': `<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h5.95q.121-.235.313-.427l1.073-1.073H9.5v-8h11v.611a4.5 4.5 0 0 1 1.5.647V7.25A3.25 3.25 0 0 0 18.75 4zM20.5 9h-11V5.5h9.25c.966 0 1.75.784 1.75 1.75zM8 5.5v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75zM19.5 19a3.5 3.5 0 1 0-3.38-2.586.8.8 0 0 0-.15.116l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .414.336.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`
} as const;

export default function PanelLeftHeaderKeyIcon({ 
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

  const gradientId = 'panelleftheaderkeyicon_gradient';
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