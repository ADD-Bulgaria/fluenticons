import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm.5 4.5c-.405 0-.75-.317-.75-.722v-.055c0-.393.305-.721.698-.723h.052C12.963 6 18 11.037 18 17.25v.052a.71.71 0 0 1-.723.698h-.055c-.405 0-.722-.345-.722-.75A9.75 9.75 0 0 0 6.75 7.5M13.294 18h-.09c-.399 0-.704-.351-.704-.75a5.75 5.75 0 0 0-5.75-5.75c-.399 0-.75-.305-.75-.704v-.09c0-.38.287-.701.666-.705L6.75 10A7.25 7.25 0 0 1 14 17.334c-.005.379-.327.666-.706.666M7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`,
  'regular': `<path d="M6.75 7.5c-.405 0-.75-.317-.75-.722v-.055c0-.393.305-.721.698-.723h.052C12.963 6 18 11.037 18 17.25v.052a.71.71 0 0 1-.723.698h-.055c-.405 0-.722-.345-.722-.75A9.75 9.75 0 0 0 6.75 7.5"/><path d="M13.294 18c.38 0 .701-.287.705-.666L14 17.25A7.25 7.25 0 0 0 6.666 10c-.379.005-.666.327-.666.706v.09c0 .399.351.704.75.704a5.75 5.75 0 0 1 5.75 5.75c0 .399.305.75.704.75zM9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function RssIcon({ 
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

  const gradientId = 'rssicon_gradient';
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