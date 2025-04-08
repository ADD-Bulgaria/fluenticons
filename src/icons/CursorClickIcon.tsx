import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.25 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 9.25 2M4.47 3.97a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06L4.47 5.03a.75.75 0 0 1 0-1.06m9.56 0a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06l1.75-1.75a.75.75 0 0 1 1.06 0M2.5 8.75A.75.75 0 0 1 3.25 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m6 .737c0-1.127 1.322-1.735 2.177-1.001l8.461 7.252c.91.78.392 2.271-.805 2.32l-3.84.153c-.413.016-.801.2-1.077.507l-2.614 2.922c-.807.903-2.302.331-2.302-.88z"/>`,
  'regular': `<path d="M9.25 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 9.25 2M4.47 3.97a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06L4.47 5.03a.75.75 0 0 1 0-1.06m9.56 0a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06l1.75-1.75a.75.75 0 0 1 1.06 0M2.5 8.75A.75.75 0 0 1 3.25 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m8.177-.264C9.822 7.752 8.5 8.36 8.5 9.487v11.274c0 1.21 1.495 1.782 2.302.88l2.614-2.923c.276-.308.664-.49 1.077-.507l3.84-.154c1.197-.048 1.715-1.539.805-2.32zM10 20.287V9.881l7.812 6.696-3.38.135a3.03 3.03 0 0 0-2.133 1.006z"/>`
} as const;

export default function CursorClickIcon({ 
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

  const gradientId = 'cursorclickicon_gradient';
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