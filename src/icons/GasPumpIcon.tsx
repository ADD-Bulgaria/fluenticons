import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3A2.75 2.75 0 0 0 4 5.75V20.5h-.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H17v-1.803a2.745 2.745 0 0 0 4-2.442v-5.838a2.75 2.75 0 0 0-.55-1.65L19.35 7.3a.75.75 0 0 0-1.2.9l1.1 1.467c.162.216.25.48.25.75v5.838a1.245 1.245 0 1 1-2.49 0V14.5a1 1 0 0 0-.01-.121V5.75A2.75 2.75 0 0 0 14.25 3zM7 6.75A.75.75 0 0 1 7.75 6h5.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75z"/>`,
  'regular': `<path d="M7.75 6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h4v3zM6.75 3A2.75 2.75 0 0 0 4 5.75V20.5h-.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H17v-1.803a2.745 2.745 0 0 0 4-2.442v-5.838a2.75 2.75 0 0 0-.55-1.65L19.35 7.3a.75.75 0 0 0-1.2.9l1.1 1.467c.162.216.25.48.25.75v5.838a1.245 1.245 0 1 1-2.49 0V14.5a1 1 0 0 0-.01-.121V5.75A2.75 2.75 0 0 0 14.25 3zm8.75 17.5h-10V5.75c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25z"/>`
} as const;

export default function GasPumpIcon({ 
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

  const gradientId = 'gaspumpicon_gradient';
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