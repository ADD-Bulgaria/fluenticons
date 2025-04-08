import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.246 14.001c.967 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.251v-3.5c0-.966.784-1.75 1.75-1.75zm11.004 0c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-5.496a1.75 1.75 0 0 1-1.75-1.75v-3.5c0-.966.783-1.75 1.75-1.75zm0-11.005c.966 0 1.75.784 1.75 1.75v5.503A1.75 1.75 0 0 1 20.25 12H3.75A1.75 1.75 0 0 1 2 10.25V4.746a1.75 1.75 0 0 1 1.606-1.744l.144-.006z"/>`,
  'regular': `<path d="M9.255 14.005c.966 0 1.75.783 1.75 1.75v3.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.254v-3.498c0-.967.784-1.75 1.75-1.75zm10.995 0c.966 0 1.75.783 1.75 1.75v3.498a1.75 1.75 0 0 1-1.75 1.75h-5.505a1.75 1.75 0 0 1-1.75-1.75v-3.498c0-.967.784-1.75 1.75-1.75zm-10.995 1.5H3.75a.25.25 0 0 0-.25.25v3.498c0 .139.112.25.25.25h5.505a.25.25 0 0 0 .25-.25v-3.498a.25.25 0 0 0-.25-.25m10.995 0h-5.505a.25.25 0 0 0-.25.25v3.498c0 .139.112.25.25.25h5.505a.25.25 0 0 0 .25-.25v-3.498a.25.25 0 0 0-.25-.25M20.25 3c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 12H3.75A1.75 1.75 0 0 1 2 10.25v-5.5a1.75 1.75 0 0 1 1.606-1.744L3.75 3zm0 1.5H3.75l-.057.007a.25.25 0 0 0-.193.243v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25"/>`
} as const;

export default function BroadActivityFeedIcon({ 
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

  const gradientId = 'broadactivityfeedicon_gradient';
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