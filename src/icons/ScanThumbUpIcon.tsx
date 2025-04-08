import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35a3.75 3.75 0 0 1-3.75-3.75v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 1 1 0-2.5zM23.352 12.758c.404-.518 1.044-1.008 1.94-1.008 1.357 0 2.34.825 2.919 1.847.567.999.826 2.283.826 3.614 0 .792-.147 1.657-.37 2.539H30c.17 0 .407.015.618.034.194.018.474.05.69.104 2.145.544 3.362 2.632 2.817 4.756l-1.57 6.12c-.815 3.173-4.045 5.09-7.23 4.314l-8.233-2.005a3.49 3.49 0 0 1-2.602-2.717l-.684-3.508a2.98 2.98 0 0 1 1.872-3.359l1.255-.477a4.6 4.6 0 0 0 2.242-1.815l2.777-4.316c.037-.15.077-.344.13-.595l.067-.327c.098-.467.225-1.032.4-1.575.17-.527.418-1.132.803-1.626"/>`,
  'regular': `<path d="M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35a3.75 3.75 0 0 1-3.75-3.75v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 1 1 0-2.5zM23.207 12.796a2.52 2.52 0 0 1 2.085-1.046c1.357 0 2.34.825 2.919 1.847.567.999.826 2.283.826 3.614 0 .792-.147 1.657-.37 2.539H30c.17 0 .407.015.618.034.194.018.474.05.69.104 2.145.544 3.362 2.632 2.817 4.756l-1.57 6.12c-.815 3.173-4.045 5.09-7.23 4.314l-8.233-2.005a3.49 3.49 0 0 1-2.602-2.717l-.684-3.508a2.98 2.98 0 0 1 1.872-3.359l1.255-.477a4.6 4.6 0 0 0 2.242-1.815l2.861-4.448a1 1 0 0 0 .066-.177c.038-.131.075-.3.115-.516.021-.12.046-.266.072-.427.056-.341.122-.747.2-1.093.118-.527.312-1.192.718-1.74m1.47 3.708c-.082.445-.213 1.093-.538 1.598l-2.861 4.448a7.1 7.1 0 0 1-3.456 2.799l-1.255.477a.48.48 0 0 0-.308.543l.685 3.508a.99.99 0 0 0 .739.767l8.234 2.005c1.868.455 3.745-.672 4.216-2.507l1.57-6.12c.205-.795-.218-1.51-1.01-1.71q-.01-.004-.083-.013a5 5 0 0 0-.61-.049h-3a1.25 1.25 0 0 1-1.189-1.636c.456-1.401.726-2.546.726-3.403 0-1.047-.21-1.868-.5-2.38-.278-.49-.543-.581-.745-.581h-.022q-.024 0-.03.003t-.012.014l-.012.017c-.084.114-.188.353-.288.798-.063.284-.105.545-.152.833-.03.181-.06.373-.1.589"/>`
} as const;

export default function ScanThumbUpIcon({ 
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

  const gradientId = 'scanthumbupicon_gradient';
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