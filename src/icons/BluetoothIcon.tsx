import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.89 4.13a1.5 1.5 0 0 1 1.613.255l10 9a1.5 1.5 0 0 1 .03 2.203L25.678 24l8.855 8.413a1.5 1.5 0 0 1-.03 2.202l-10 9A1.5 1.5 0 0 1 22 42.5V27.494l-7.467 7.093a1.5 1.5 0 1 1-2.066-2.175L21.322 24l-8.855-8.412a1.5 1.5 0 1 1 2.066-2.175L22 20.505V5.5a1.5 1.5 0 0 1 .89-1.37M25 27.494v11.638l6.29-5.662zm0-6.988 6.29-5.976L25 8.868z"/>`,
  'regular': `<path d="M23.242 4.108c.45-.2.977-.117 1.344.213l10 9a1.25 1.25 0 0 1 .037 1.824L25.54 24l9.082 8.855a1.25 1.25 0 0 1-.037 1.824l-10 9a1.25 1.25 0 0 1-2.086-.929V26.965l-7.877 7.68a1.25 1.25 0 0 1-1.746-1.79L21.96 24l-9.082-8.855a1.25 1.25 0 0 1 1.746-1.79l7.877 7.68V5.25c0-.494.29-.941.741-1.142M25 26.965v12.978l6.922-6.23zm0-5.93 6.922-6.748L25 8.057z"/>`
} as const;

export default function BluetoothIcon({ 
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

  const gradientId = 'bluetoothicon_gradient';
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