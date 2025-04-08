import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.5 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.5 16H3.75A1.75 1.75 0 0 1 2 14.25v-4.5a1.75 1.75 0 0 1 1.606-1.744L3.75 8zm10.75 0c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 20.25 16H14.5a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75z"/>`,
  'regular': `<path d="M9.282 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.282 16H3.75A1.75 1.75 0 0 1 2 14.25v-4.5a1.75 1.75 0 0 1 1.606-1.744L3.75 8zM20.25 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 20.25 16h-5.532a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75zM9.282 9.5H3.75l-.057.007a.25.25 0 0 0-.193.243v4.5c0 .138.112.25.25.25h5.532a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25m10.968 0h-5.532a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h5.532a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25"/>`
} as const;

export default function MatchAppLayoutIcon({ 
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

  const gradientId = 'matchapplayouticon_gradient';
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