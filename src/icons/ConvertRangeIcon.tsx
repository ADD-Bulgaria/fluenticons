import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3A2.25 2.25 0 0 0 4 5.25v2.5A2.25 2.25 0 0 0 6.25 10h9.5A2.25 2.25 0 0 0 18 7.75v-2.5A2.25 2.25 0 0 0 15.75 3zm11.103 13.445-.073.084a.75.75 0 0 1-.976.073l-.084-.073-2-2a.75.75 0 0 1-.073-.976l.073-.084 2-2a.75.75 0 0 1 1.133.976l-.073.084-.719.721h1.5a1.25 1.25 0 0 0 1.243-1.122l.007-.128V9.75a.75.75 0 0 1 1.493-.102l.007.102V12a2.75 2.75 0 0 1-2.583 2.745l-.167.005h-1.499l.718.719a.75.75 0 0 1 .073.976M14.274 12l-.787.788-.121.14-.022.029a1.75 1.75 0 0 0 .168 2.28l2.026 2.025.14.121.03.022a1.75 1.75 0 0 0 2.28-.169l.012-.012v2.026a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 4 19.25v-5A2.25 2.25 0 0 1 6.25 12zM8 16.75c0 .414.313.75.7.75h4.6c.387 0 .7-.336.7-.75s-.313-.75-.7-.75H8.7c-.387 0-.7.336-.7.75"/>`,
  'regular': `<path d="M6.25 3A2.25 2.25 0 0 0 4 5.25v2.5A2.25 2.25 0 0 0 6.25 10h9.5A2.25 2.25 0 0 0 18 7.75v-2.5A2.25 2.25 0 0 0 15.75 3zM5.5 5.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75zM8.7 16c-.387 0-.7.336-.7.75s.313.75.7.75h4.6c.387 0 .7-.336.7-.75s-.313-.75-.7-.75zm8.653.445-.073.084a.75.75 0 0 1-.976.073l-.084-.073-2-2a.75.75 0 0 1-.073-.976l.073-.084 2-2a.75.75 0 0 1 1.133.976l-.073.084-.719.721h1.5a1.25 1.25 0 0 0 1.243-1.122l.007-.128V9.75a.75.75 0 0 1 1.493-.102l.007.102V12a2.75 2.75 0 0 1-2.583 2.745l-.167.005h-1.499l.718.719a.75.75 0 0 1 .073.976M18 19.25v-2.026l-.013.012c-.405.406-.96.57-1.487.495v1.519a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h6.823c.056-.192.147-.376.27-.543l.023-.03.12-.14.788-.787H6.25A2.25 2.25 0 0 0 4 14.25v5a2.25 2.25 0 0 0 2.25 2.25h9.5A2.25 2.25 0 0 0 18 19.25"/>`
} as const;

export default function ConvertRangeIcon({ 
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

  const gradientId = 'convertrangeicon_gradient';
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