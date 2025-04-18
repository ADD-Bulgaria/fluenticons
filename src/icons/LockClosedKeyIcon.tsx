import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 7V6a4 4 0 0 0-8 0v1h-.75A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21H11v-.086a2 2 0 0 1 .586-1.414l3.448-3.448A4.5 4.5 0 0 1 20 11.027v-.777A3.25 3.25 0 0 0 16.75 7zM9.5 7V6a2.5 2.5 0 0 1 5 0v1zm4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 5a3.5 3.5 0 1 0-3.387-2.613l-3.82 3.82a1 1 0 0 0-.293.707V22.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm.5-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`,
  'regular': `<path d="M13.5 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 2a4 4 0 0 0-4 4v1h-.75A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21H11v-.086a2 2 0 0 1 .586-1.414H7.25a1.75 1.75 0 0 1-1.75-1.75v-7.5c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v.861a4.5 4.5 0 0 1 1.5-.084v-.777A3.25 3.25 0 0 0 16.75 7H16V6a4 4 0 0 0-4-4M9.5 6a2.5 2.5 0 0 1 5 0v1h-5zm10 13a3.5 3.5 0 1 0-3.387-2.613l-3.82 3.82a1 1 0 0 0-.293.707V22.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm.5-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`
} as const;

export default function LockClosedKeyIcon({ 
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

  const gradientId = 'lockclosedkeyicon_gradient';
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