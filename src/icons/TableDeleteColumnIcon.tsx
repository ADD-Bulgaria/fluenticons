import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.25 25.25v-7.727q.039-.034.076-.072l.674-.674.674.674q.037.038.076.072v7.727a.75.75 0 0 1-1.5 0m.076-14.45-.076-.073V2.75a.75.75 0 0 1 1.5 0v7.977l-.076.072-.674.674zm-1.856 4.67a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L12.94 14zM4 25a1 1 0 0 1-1-1v-5.5h6v2.75A3.75 3.75 0 0 1 5.25 25zm5-14v6H3v-6zm0-4.25V9.5H3V4a1 1 0 0 1 1-1h1.25A3.75 3.75 0 0 1 9 6.75M22.75 3A3.75 3.75 0 0 0 19 6.75V9.5h6V4a1 1 0 0 0-1-1zM25 11h-6v6h6zm-6 10.25V18.5h6V24a1 1 0 0 1-1 1h-1.25A3.75 3.75 0 0 1 19 21.25"/>`,
  'regular': `<path d="M13.25 25.25v-7.727q.039-.034.076-.072l.674-.674.674.674q.037.038.076.072v7.727a.75.75 0 0 1-1.5 0m.076-14.45-.076-.073V2.75a.75.75 0 0 1 1.5 0v7.977l-.076.072-.674.674zm-1.856 4.67a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L12.94 14zM3.75 3a.75.75 0 0 0 0 1.5h1.5A2.25 2.25 0 0 1 7.5 6.75V9.5H3.75a.75.75 0 0 0 0 1.5H7.5v6H3.75a.75.75 0 0 0 0 1.5H7.5v2.75a2.25 2.25 0 0 1-2.25 2.25h-1.5a.75.75 0 0 0 0 1.5h1.5A3.75 3.75 0 0 0 9 21.25V6.75A3.75 3.75 0 0 0 5.25 3zm19 0A3.75 3.75 0 0 0 19 6.75v14.5A3.75 3.75 0 0 0 22.75 25h2.5a.75.75 0 0 0 0-1.5h-2.5a2.25 2.25 0 0 1-2.25-2.25V18.5h4.75a.75.75 0 0 0 0-1.5H20.5v-6h4.75a.75.75 0 0 0 0-1.5H20.5V6.75a2.25 2.25 0 0 1 2.25-2.25h2.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function TableDeleteColumnIcon({ 
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

  const gradientId = 'tabledeletecolumnicon_gradient';
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