import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.56 4.174A6 6 0 0 0 12 6.682a6 6 0 0 0-3.56-2.508 4 4 0 0 1 7.12 0M4.057 14.042a8.004 8.004 0 0 1 6.985-6.985 5 5 0 1 0-6.986 6.986m15.886 0a5 5 0 1 0-6.986-6.986 8.004 8.004 0 0 1 6.986 6.986M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-2.5-8.75a.75.75 0 0 1 .75-.75h4.25a.75.75 0 0 1 .495 1.313v.001l-.013.011-.053.05a9.6 9.6 0 0 0-.925 1.048c-.557.731-1.188 1.77-1.53 3.024a.75.75 0 1 1-1.448-.394c.408-1.496 1.152-2.707 1.783-3.538L12.82 14h-2.57a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M14.148 4.72a2.5 2.5 0 0 0-4.296 0 6 6 0 0 0-1.412-.546 4 4 0 0 1 7.12 0 6 6 0 0 0-1.412.546M9.384 7.437a8 8 0 0 1 1.658-.38 5 5 0 1 0-6.986 6.986 8 8 0 0 1 .381-1.659 3.5 3.5 0 0 1 4.947-4.947m10.56 6.605a5 5 0 1 0-6.986-6.986 8 8 0 0 1 1.658.381 3.5 3.5 0 0 1 4.947 4.947q.276.797.38 1.658M9.5 13.25a.75.75 0 0 1 .75-.75h4.25a.75.75 0 0 1 .495 1.313v.001l-.013.011-.053.05a9.6 9.6 0 0 0-.925 1.048c-.557.731-1.188 1.77-1.53 3.024a.75.75 0 1 1-1.448-.394c.408-1.496 1.152-2.707 1.783-3.538L12.82 14h-2.57a.75.75 0 0 1-.75-.75M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11"/>`
} as const;

export default function LotteryIcon({ 
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

  const gradientId = 'lotteryicon_gradient';
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