import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.107 9.168a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06zM19.5 5.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-.5 4.976v10.769a.75.75 0 0 1-1.188.609l-5.81-4.181-5.812 4.18a.75.75 0 0 1-1.188-.608V6.249a3.25 3.25 0 0 1 3.25-3.25H11.6a5.5 5.5 0 0 0 7.35 7.426z"/>`,
  'regular': `<path d="M19.107 9.168a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06zM19.5 5.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-.5 4.976v10.769a.75.75 0 0 1-1.188.609l-5.81-4.181-5.812 4.18a.75.75 0 0 1-1.188-.608V6.249a3.25 3.25 0 0 1 3.25-3.25H11.6c-.238.466-.412.97-.51 1.5H8.252a1.75 1.75 0 0 0-1.75 1.75v13.532l5.061-3.64a.75.75 0 0 1 .876 0l5.061 3.64V10.91a5.5 5.5 0 0 0 1.45-.484z"/>`
} as const;

export default function BookmarkSearchIcon({ 
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

  const gradientId = 'bookmarksearchicon_gradient';
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