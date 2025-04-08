import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 7.959a3 3 0 1 0-1 0V11h-2A1.5 1.5 0 0 0 6 12.5v.5h8v-.5a1.5 1.5 0 0 0-1.5-1.5h-2zM3 16a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z"/>`,
  'regular': `<path d="M10 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4m.5 4.959a3 3 0 1 0-1 0V11h-2A1.5 1.5 0 0 0 6 12.5v.5H5a2 2 0 0 0-2 2v2.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V15a2 2 0 0 0-2-2h-1v-.5a1.5 1.5 0 0 0-1.5-1.5h-2zM7.5 12h5a.5.5 0 0 1 .5.5v.5H7v-.5a.5.5 0 0 1 .5-.5M5 14h10a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1"/>`
} as const;

export default function JoystickIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'joystickicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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