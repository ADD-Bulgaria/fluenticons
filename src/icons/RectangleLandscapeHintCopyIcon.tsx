import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.514 6.253c0-.967.784-1.75 1.75-1.75h1a.75.75 0 0 0 0-1.5h-1a3.25 3.25 0 0 0-3.25 3.25v.506a.75.75 0 1 0 1.5 0zm5.25-3.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-.75 13.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m8.5-2.5a1.75 1.75 0 0 1-1.75 1.75h-1a.75.75 0 0 0 0 1.5h1a3.25 3.25 0 0 0 3.25-3.25v-.487a.75.75 0 0 0-1.5 0zm-1.75-9.25c.967 0 1.75.783 1.75 1.75v.506a.75.75 0 0 0 1.5 0v-.506a3.25 3.25 0 0 0-3.25-3.25h-1a.75.75 0 0 0 0 1.5zm-11.25 9.25c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 1 0 1.5h-1a3.25 3.25 0 0 1-3.25-3.25v-.487a.75.75 0 0 1 1.5 0zM2 9.6a5.1 5.1 0 0 1 3-4.649v8.799A4.25 4.25 0 0 0 9.25 18h11.8a5.1 5.1 0 0 1-4.65 3H9.25A7.25 7.25 0 0 1 2 13.75zm5.5-.338a.75.75 0 0 0-1.5 0l.014 1.494a.75.75 0 0 0 1.5 0zm13.75-.75a.75.75 0 0 1 .75.75l.014 1.494a.75.75 0 0 1-1.5 0L20.5 9.262a.75.75 0 0 1 .75-.75"/>`,
  'regular': `<path d="M7.5 6.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 0 0-1.5h-1A3.25 3.25 0 0 0 6 6.25v.49a.75.75 0 0 0 1.5 0zm-1.5 3a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zm14.5 0a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zM18.75 4.5c.967 0 1.75.784 1.75 1.75v.49a.75.75 0 1 0 1.5 0v-.49A3.25 3.25 0 0 0 18.75 3h-1a.75.75 0 1 0 0 1.5zm-6-1.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-3.5 12.5a1.75 1.75 0 0 1-1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 0 9.25 17h1a.75.75 0 0 0 0-1.5zm11.25-1.75a1.75 1.75 0 0 1-1.75 1.75h-1a.75.75 0 1 0 0 1.5h1A3.25 3.25 0 0 0 22 13.75v-.5a.75.75 0 0 0-1.5 0zm-8.5 2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75M2 9.6c0-1.412.573-2.69 1.5-3.612v7.762a5.75 5.75 0 0 0 5.75 5.75h10.763A5.08 5.08 0 0 1 16.4 21H9.25A7.25 7.25 0 0 1 2 13.75z"/>`
} as const;

export default function RectangleLandscapeHintCopyIcon({ 
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

  const gradientId = 'rectanglelandscapehintcopyicon_gradient';
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