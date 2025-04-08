import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m21.41 11.41-2.82-2.82A2 2 0 0 0 17.17 8H6.83a2 2 0 0 0-1.42.59l-2.82 2.82A2 2 0 0 0 2 12.83V14a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2v-1.17a2 2 0 0 0-.59-1.42M17 12a.755.755 0 0 1-.75.75h-8.5a.75.75 0 1 1 0-1.5h8.5A.756.756 0 0 1 17 12"/>`,
  'regular': `<path d="m21.414 11.414-2.828-2.828A2 2 0 0 0 17.172 8H6.828a2 2 0 0 0-1.414.586l-2.828 2.828A2 2 0 0 0 2 12.828V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1.172a2 2 0 0 0-.586-1.414M20.5 14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1.172a.5.5 0 0 1 .146-.353l2.829-2.828a.5.5 0 0 1 .353-.147h10.344a.5.5 0 0 1 .353.146l2.829 2.829a.5.5 0 0 1 .146.354zm-4.25-2.75h-8.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5"/>`
} as const;

export default function PortHdmiIcon({ 
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

  const gradientId = 'porthdmiicon_gradient';
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