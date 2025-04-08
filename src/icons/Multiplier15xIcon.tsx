import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.9 14.055A1.5 1.5 0 0 1 12 15.5v17a1.5 1.5 0 1 1-3 0V19.672a15.4 15.4 0 0 1-2.728 2.114 1.5 1.5 0 0 1-1.544-2.572c1.373-.824 2.502-1.943 3.299-2.886a16 16 0 0 0 1.125-1.502l.052-.082.01-.017h.001a1.5 1.5 0 0 1 1.686-.672M21 14a1.5 1.5 0 0 0-1.485 1.288l-1 7a1.5 1.5 0 0 0 1.62 1.706l5.015-.456a3.99 3.99 0 1 1 .36 7.962h-.921a4.75 4.75 0 0 1-3.359-1.391l-.67-.67a1.5 1.5 0 0 0-2.12 2.122l.669.67a7.75 7.75 0 0 0 5.48 2.269h.922a6.99 6.99 0 0 0 6.989-6.99c0-4.109-3.529-7.332-7.622-6.96l-3.125.284.548-3.834H30a1.5 1.5 0 0 0 0-3zm15.56 10.44a1.5 1.5 0 0 0-2.12 2.12L36.878 29l-2.44 2.44a1.5 1.5 0 0 0 2.122 2.12L39 31.122l2.44 2.44a1.5 1.5 0 0 0 2.12-2.122L41.122 29l2.44-2.44a1.5 1.5 0 0 0-2.122-2.12L39 26.878zM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`,
  'regular': `<path d="M11.5 15.25a1.25 1.25 0 0 0-2.321-.643l-.003.004-.015.025-.067.106a18 18 0 0 1-1.275 1.742c-.874 1.054-1.976 2.124-3.086 2.628a1.25 1.25 0 0 0 1.035 2.276c1.25-.568 2.36-1.535 3.232-2.465V32.75a1.25 1.25 0 0 0 2.5 0zm10-1.25a1.25 1.25 0 0 0-1.244 1.126l-.75 7.5a1.25 1.25 0 0 0 1.392 1.365l4.452-.53a4.159 4.159 0 1 1 .491 8.289h-.484a4.64 4.64 0 0 1-3.435-1.52l-.747-.82a1.25 1.25 0 1 0-1.85 1.68l.747.822a7.14 7.14 0 0 0 5.285 2.338h.484a6.66 6.66 0 0 0 6.66-6.659c0-3.99-3.485-7.084-7.447-6.612l-2.905.346.482-4.825h7.62a1.25 1.25 0 0 0 0-2.5zm14.634 10.366a1.25 1.25 0 1 0-1.768 1.768L37.232 29l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768L39 30.768l2.866 2.866a1.25 1.25 0 0 0 1.768-1.768L40.768 29l2.866-2.866a1.25 1.25 0 0 0-1.768-1.768L39 27.232zM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`
} as const;

export default function Multiplier15xIcon({ 
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

  const gradientId = 'multiplier15xicon_gradient';
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