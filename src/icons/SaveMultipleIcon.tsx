import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 3H7v3.25A2.25 2.25 0 0 0 9.25 8.5h2.5A2.25 2.25 0 0 0 14 6.25V3.265a3.3 3.3 0 0 1 1.013.687l2.035 2.035c.61.61.952 1.437.952 2.299v6.964A2.75 2.75 0 0 1 15.25 18H15v-4.75A2.25 2.25 0 0 0 12.75 11h-4.5A2.25 2.25 0 0 0 6 13.25V18h-.25A2.75 2.75 0 0 1 3 15.25v-9.5A2.75 2.75 0 0 1 5.75 3M7.5 18h6v-4.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75zm1-15h4v3.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75zm2.25 18a4.74 4.74 0 0 1-3.464-1.5h8.964a3.25 3.25 0 0 0 3.25-3.25V8.44l.548.548c.61.609.952 1.436.952 2.298v4.964A4.75 4.75 0 0 1 16.25 21z"/>`,
  'regular': `<path d="M5.75 18A2.75 2.75 0 0 1 3 15.25v-9.5A2.75 2.75 0 0 1 5.75 3h6.964a3.25 3.25 0 0 1 2.299.952l2.035 2.035c.61.61.952 1.437.952 2.299v6.964A2.75 2.75 0 0 1 15.25 18zM4.5 5.75v9.5c0 .69.56 1.25 1.25 1.25H6v-3.25A2.25 2.25 0 0 1 8.25 11h4.5A2.25 2.25 0 0 1 15 13.25v3.25h.25c.69 0 1.25-.56 1.25-1.25V8.286c0-.465-.184-.91-.513-1.238L14 5.061V6.25a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 7 6.25V4.5H5.75c-.69 0-1.25.56-1.25 1.25m9 10.75v-3.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v3.25zm-5-10.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V4.5h-4zM10.75 21a4.74 4.74 0 0 1-3.464-1.5h8.964a3.25 3.25 0 0 0 3.25-3.25V8.44l.548.548c.61.609.952 1.436.952 2.298v4.964A4.75 4.75 0 0 1 16.25 21z"/>`
} as const;

export default function SaveMultipleIcon({ 
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

  const gradientId = 'savemultipleicon_gradient';
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