import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 4.5a2.5 2.5 0 1 0-1.706 2.371 8.8 8.8 0 0 1-.558 1.84c-.48 1.118-1.173 2.06-2.046 3.04a.75.75 0 0 0 1.12.998c.927-1.041 1.735-2.121 2.304-3.446.571-1.33.886-2.865.886-4.803m1 0a3.5 3.5 0 0 0 2.96 3.459 7 7 0 0 1-.143.357c-.42.98-1.037 1.83-1.874 2.77a1.75 1.75 0 0 0 2.614 2.328c.946-1.063 1.816-2.213 2.443-3.64v7.476A3.75 3.75 0 0 1 22.25 21h-5.941l-6.535 4.715C8.616 26.55 7 25.723 7 24.295V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h7.587a3.5 3.5 0 0 0 2.623 4.959 7 7 0 0 1-.143.357c-.42.98-1.037 1.83-1.874 2.77a1.75 1.75 0 0 0 2.614 2.328c.963-1.082 1.847-2.253 2.476-3.716C19.666 8.225 20 6.552 20 4.5M23.5 2A2.5 2.5 0 0 1 26 4.5c0 1.938-.315 3.474-.886 4.803-.57 1.325-1.377 2.405-2.304 3.446a.75.75 0 0 1-1.12-.998c.873-.98 1.565-1.922 2.046-3.04a8.8 8.8 0 0 0 .558-1.84q-.377.127-.794.129a2.5 2.5 0 0 1 0-5"/>`,
  'regular': `<path d="M19 4.5a2.5 2.5 0 1 0-1.706 2.371 8.8 8.8 0 0 1-.558 1.84c-.48 1.118-1.173 2.06-2.046 3.04a.75.75 0 0 0 1.12.998c.927-1.041 1.735-2.121 2.304-3.446.571-1.33.886-2.865.886-4.803m5.5 12.75v-4.972A12.2 12.2 0 0 0 26 9.773v7.477A3.75 3.75 0 0 1 22.25 21h-5.941l-6.535 4.715C8.616 26.55 7 25.723 7 24.295V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h7.587A3.5 3.5 0 0 0 13 4.5H5.75A2.25 2.25 0 0 0 3.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25H8.5v4.796c0 .203.23.322.396.202l6.928-4.998h6.426a2.25 2.25 0 0 0 2.25-2.25M23.5 2A2.5 2.5 0 0 1 26 4.5c0 1.938-.315 3.474-.886 4.803-.57 1.325-1.377 2.405-2.304 3.446a.75.75 0 0 1-1.12-.998c.873-.98 1.565-1.922 2.046-3.04a8.8 8.8 0 0 0 .558-1.84q-.377.127-.794.129a2.5 2.5 0 0 1 0-5"/>`
} as const;

export default function CommentQuoteIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'commentquoteicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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