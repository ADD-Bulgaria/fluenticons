import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.748 2.105.182 2.105-.912zM19.5 21v-2.333l-1.372-2.439a1 1 0 0 1-.128-.49v-4.167a1 1 0 0 1 1-1V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.571a1 1 0 0 1 1 1v4.167a1 1 0 0 1-.128.49L24.5 18.667V21a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1m4-12.5h-3v2.071h3z"/>`,
  'regular': `<path d="M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.094-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.17 1.197-.473zM15 5.392l-4.516 4.234a3.25 3.25 0 0 1-2.223.879H5.25a1.75 1.75 0 0 0-1.75 1.75v3.492c0 .966.784 1.75 1.75 1.75h3.012c.825 0 1.62.314 2.222.878L15 22.607zM19.5 21v-2.333l-1.372-2.439a1 1 0 0 1-.128-.49v-4.167a1 1 0 0 1 1-1V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.571a1 1 0 0 1 1 1v4.167a1 1 0 0 1-.128.49L24.5 18.667V21a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1m4-12.5h-3v2.071h3z"/>`
} as const;

export default function SpeakerUsbIcon({ 
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

  const gradientId = 'speakerusbicon_gradient';
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