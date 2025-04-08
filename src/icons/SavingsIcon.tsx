import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M11.681 2.543C10.807 1.493 9 2.046 9 3.503v4.36c-1.949 1.118-3.477 2.773-4.309 5.015-.072.193-.206.288-.311.31A2.995 2.995 0 0 0 2 16.119v1.76c0 1.417.993 2.64 2.38 2.932.104.022.24.117.311.31.832 2.243 2.36 3.897 4.309 5.016V27a3 3 0 0 0 3 3h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2a3 3 0 0 0 3-3v-2.85c1.863-1.875 3-4.341 3-7.15 0-6.53-6.018-11-13-11h-.214c-.851-.077-1.537-.274-2.271-.737-.779-.49-1.659-1.31-2.834-2.72"/><path d="M12 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.878-4.288a1.793 1.793 0 0 1 2.342-.973l11.005 4.544a1.793 1.793 0 1 1-1.368 3.314l-11.006-4.544a1.793 1.793 0 0 1-.973-2.341"/><path d="M24.316 15.46a5.97 5.97 0 0 0-2.305-11.475 5.97 5.97 0 0 0-5.52 8.245z"/><path fill-opacity=".8" d="M24.316 15.46a5.97 5.97 0 0 0-2.305-11.475 5.97 5.97 0 0 0-5.52 8.245z"/>`,
  'filled': `<path d="M9 3.503c0-1.457 1.807-2.01 2.681-.96 1.175 1.41 2.055 2.23 2.834 2.72a4.6 4.6 0 0 0 1.254.561 7.47 7.47 0 0 0-1.267 4.342c.042 1.93 1.417 3.18 2.655 3.68l5.654 2.285c1.238.5 3.094.557 4.467-.802a7.5 7.5 0 0 0 1.737-2.672A9.9 9.9 0 0 1 30 17c0 2.809-1.137 5.275-3 7.15V27a3 3 0 0 1-3 3h-2a2 2 0 0 1-2-2h-4a2 2 0 0 1-2 2h-2a3 3 0 0 1-3-3v-.863c-1.949-1.119-3.477-2.773-4.309-5.016-.072-.193-.207-.288-.312-.31A2.996 2.996 0 0 1 2 17.88v-1.76c0-1.417.993-2.64 2.38-2.931.105-.022.24-.117.311-.31.832-2.242 2.36-3.897 4.309-5.016zM10.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5-5a6 6 0 1 1 10.222 4.263c-.826.819-1.992.824-2.849.477l-5.654-2.284c-.858-.347-1.692-1.16-1.718-2.323z"/>`,
  'regular': `<path d="M9 3.504c0-1.457 1.807-2.01 2.681-.96 1.175 1.41 2.055 2.23 2.834 2.72a4.6 4.6 0 0 0 1.254.56 7.5 7.5 0 0 0-.89 1.819 6.7 6.7 0 0 1-1.43-.687C12.658 6.459 11.87 5.76 11 4.807V8.46a1 1 0 0 1-.55.893c-1.818.917-3.172 2.303-3.884 4.221-.275.742-.904 1.389-1.775 1.572a.995.995 0 0 0-.791.973v1.76c0 .472.33.879.791.976.871.183 1.5.83 1.775 1.571.712 1.919 2.066 3.305 3.884 4.222a1 1 0 0 1 .55.893V27a1 1 0 0 0 1 1h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a1 1 0 0 0 1-1v-3.275a1 1 0 0 1 .319-.732C27.002 21.428 28 19.36 28 17c0-.739-.1-1.453-.292-2.135a7.5 7.5 0 0 0 1.307-2.208A9.9 9.9 0 0 1 30 17c0 2.81-1.137 5.275-3 7.15V27a3 3 0 0 1-3 3h-2a2 2 0 0 1-2-2h-4a2 2 0 0 1-2 2h-2a3 3 0 0 1-3-3v-.863c-1.949-1.119-3.477-2.773-4.309-5.015-.072-.193-.207-.288-.312-.31A2.996 2.996 0 0 1 2 17.88v-1.76c0-1.418.993-2.64 2.38-2.932.105-.022.24-.116.311-.31.832-2.242 2.36-3.896 4.309-5.015zM22 6a4 4 0 0 0-3.999 4.09c.003.138.117.37.467.511l5.654 2.285c.35.142.594.054.693-.044A4 4 0 0 0 22 6m-6 4a6 6 0 1 1 10.222 4.263c-.826.819-1.992.824-2.849.477l-5.654-2.284c-.858-.347-1.692-1.16-1.718-2.323zm-5.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`
} as const;

export default function SavingsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'savingsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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