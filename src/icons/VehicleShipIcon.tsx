import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 2a.75.75 0 0 0-.75.75V5H5.75a.75.75 0 0 0-.75.75v4.765l-1.46.534a.75.75 0 0 0-.423 1.02l2.335 5.019a1.75 1.75 0 0 1 2.22 1.143q0 .006.009.027.018.053.067.165c.068.15.171.344.308.527.276.367.564.55.944.55s.668-.182.943-.55a2.8 2.8 0 0 0 .384-.718 1.75 1.75 0 0 1 3.342-.005l.01.028q.018.053.067.165c.069.151.172.345.31.529.278.37.567.551.944.551s.665-.182.943-.55a3 3 0 0 0 .386-.721 1.75 1.75 0 0 1 2.294-1.114l2.468-5.031a.75.75 0 0 0-.421-1.037L19 10.451V5.75a.75.75 0 0 0-.75-.75H16V2.75a.75.75 0 0 0-.75-.75zm5.75 3h-5V3.5h5zm3 1.5v3.416l-4.397-1.569a3.25 3.25 0 0 0-2.21.01L6.5 9.964V6.5zm1.227 12.064-.003-.01a.75.75 0 0 0-1.441-.023v.002l-.004.009-.02.058q-.03.082-.096.232c-.09.199-.228.46-.42.718-.388.515-.94.95-1.743.95s-1.356-.435-1.743-.95a3.9 3.9 0 0 1-.538-1.009l-.003-.009a.75.75 0 0 0-1.435.001v.001l-.004.01-.02.057a3.8 3.8 0 0 1-.514.95c-.386.514-.937.949-1.743.949s-1.358-.435-1.744-.95a3.8 3.8 0 0 1-.535-1.007l-.003-.011a.75.75 0 0 0-1.441.02l-.003.009-.018.054a3.3 3.3 0 0 1-.504.922c-.384.49-.996.963-2.002.963a.75.75 0 0 0 0 1.5c1.574 0 2.587-.777 3.183-1.537L6 20.374l.056.076C6.608 21.185 7.556 22 9 22s2.392-.815 2.943-1.55l.057-.078.058.079C12.61 21.185 13.558 22 15 22s2.39-.815 2.942-1.55l.055-.075q.032.044.066.087c.595.761 1.61 1.538 3.187 1.538a.75.75 0 0 0 0-1.5c-1.012 0-1.623-.473-2.005-.962a3.3 3.3 0 0 1-.518-.974"/>`,
  'regular': `<path d="M8.75 2a.75.75 0 0 0-.75.75V5H5.75a.75.75 0 0 0-.75.75v4.765l-1.46.534a.75.75 0 0 0-.423 1.02l2.335 5.019a1.75 1.75 0 0 1 1.924.581l-2.554-5.492 6.587-2.412a1.75 1.75 0 0 1 1.19-.005l6.775 2.418-2.622 5.345a1.75 1.75 0 0 1 1.871-.408l2.468-5.031a.75.75 0 0 0-.421-1.037L19 10.451V5.75a.75.75 0 0 0-.75-.75H16V2.75a.75.75 0 0 0-.75-.75zm5.75 3h-5V3.5h5zm3 1.5v3.416l-4.397-1.569a3.25 3.25 0 0 0-2.21.01L6.5 9.964V6.5zm1.227 12.064-.003-.01a.75.75 0 0 0-1.441-.023v.002l-.004.009-.02.058q-.03.082-.096.232c-.09.199-.228.46-.42.718-.388.515-.94.95-1.743.95s-1.356-.435-1.743-.95a3.9 3.9 0 0 1-.538-1.009l-.003-.009a.75.75 0 0 0-1.435.001v.001l-.004.01-.02.057a3.8 3.8 0 0 1-.514.95c-.386.514-.937.949-1.743.949s-1.358-.435-1.744-.95a3.8 3.8 0 0 1-.535-1.007l-.003-.011a.75.75 0 0 0-1.441.02l-.003.009-.018.054a3.3 3.3 0 0 1-.504.922c-.384.49-.996.963-2.002.963a.75.75 0 0 0 0 1.5c1.574 0 2.587-.777 3.183-1.537L6 20.374l.056.076C6.608 21.185 7.556 22 9 22s2.392-.815 2.943-1.55l.057-.078.058.079C12.61 21.185 13.558 22 15 22s2.39-.815 2.942-1.55l.055-.075q.032.044.066.087c.595.761 1.61 1.538 3.187 1.538a.75.75 0 0 0 0-1.5c-1.012 0-1.623-.473-2.005-.962a3.3 3.3 0 0 1-.518-.974"/>`
} as const;

export default function VehicleShipIcon({ 
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

  const gradientId = 'vehicleshipicon_gradient';
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