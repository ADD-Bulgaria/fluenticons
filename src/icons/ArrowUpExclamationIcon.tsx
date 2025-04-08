import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 4.56v16.69a.75.75 0 0 1-1.5 0V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06zM3.125 5.878a3.875 3.875 0 1 1 7.75 0c0 2.95-1.204 6.564-1.81 8.204A2.185 2.185 0 0 1 7.003 15.5a2.19 2.19 0 0 1-2.065-1.423c-.606-1.647-1.813-5.28-1.813-8.199M4.5 19.502a2.501 2.501 0 1 1 5.002 0 2.501 2.501 0 0 1-5.002 0"/>`,
  'regular': `<path d="M18 4.56v16.69a.75.75 0 0 1-1.5 0V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06zM3.125 5.878a3.875 3.875 0 1 1 7.75 0c0 2.95-1.204 6.564-1.81 8.204A2.185 2.185 0 0 1 7.003 15.5a2.19 2.19 0 0 1-2.065-1.423c-.606-1.647-1.813-5.28-1.813-8.199M7 3.502a2.375 2.375 0 0 0-2.375 2.375c0 2.624 1.114 6.03 1.72 7.682.096.26.35.44.658.44.306 0 .56-.18.655-.438.606-1.64 1.718-5.03 1.718-7.684A2.375 2.375 0 0 0 7 3.502m-2.5 16a2.501 2.501 0 1 1 5.002 0 2.501 2.501 0 0 1-5.002 0m2.501-1.001a1.001 1.001 0 1 0 0 2.002 1.001 1.001 0 0 0 0-2.002"/>`
} as const;

export default function ArrowUpExclamationIcon({ 
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

  const gradientId = 'arrowupexclamationicon_gradient';
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