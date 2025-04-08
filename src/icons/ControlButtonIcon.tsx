import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zM7.75 8A2.75 2.75 0 0 0 5 10.75v2.5A2.75 2.75 0 0 0 7.75 16h.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 0 0 0-1.5zm3.75.75a.75.75 0 0 0-1.5 0V11h-.25a.75.75 0 0 0 0 1.5H10V14a2 2 0 0 0 2 2h.25a.75.75 0 0 0 0-1.5H12a.5.5 0 0 1-.5-.5v-1.5h.75a.75.75 0 0 0 0-1.5h-.75zm8 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm-4 4.25a.5.5 0 0 1 .5-.5h.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0z"/>`,
  'regular': `<path d="M7.75 8A2.75 2.75 0 0 0 5 10.75v2.5A2.75 2.75 0 0 0 7.75 16h.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 0 0 0-1.5zm3.75.75a.75.75 0 0 0-1.5 0V11h-.25a.75.75 0 0 0 0 1.5H10V14a2 2 0 0 0 2 2h.25a.75.75 0 0 0 0-1.5H12a.5.5 0 0 1-.5-.5v-1.5h.75a.75.75 0 0 0 0-1.5h-.75zm8 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm-4 4.25a.5.5 0 0 1 .5-.5h.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0zM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zM3.5 7.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function ControlButtonIcon({ 
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

  const gradientId = 'controlbuttonicon_gradient';
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