import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 6a1 1 0 0 0-1-1H7l-.217.005A5 5 0 0 0 7 14.999h2l.116-.007A1 1 0 0 0 8.999 13H7l-.176-.005A3 3 0 0 1 7 7h2l.116-.007A1 1 0 0 0 9.999 6m11.998 4a5 5 0 0 0-5-5h-2l-.116.007A1 1 0 0 0 15 7h2l.176.005a3 3 0 0 1 2.823 2.994v.013c.696.06 1.377.34 1.927.843a5 5 0 0 0 .073-.856m-4.229.637q-.15.11-.289.239a1 1 0 0 1-.365.117l-.116.006H7a1 1 0 0 1-.116-1.993L7 9h9.999a1 1 0 0 1 .77 1.637m.33 1.032-5.902 5.902a2.7 2.7 0 0 0-.707 1.247l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L21.33 14.9a2.285 2.285 0 0 0-3.233-3.232"/>`,
  'regular': `<path d="M10 5.75A.75.75 0 0 0 9.25 5H7l-.25.006A5 5 0 0 0 7 15h2.25l.11-.008a.75.75 0 0 0-.11-1.492H7l-.206-.006A3.5 3.5 0 0 1 7 6.5h2.25l.11-.008A.75.75 0 0 0 10 5.75M21.997 10a5 5 0 0 0-5-5h-2.25l-.11.008a.75.75 0 0 0 .11 1.492h2.25l.206.006a3.5 3.5 0 0 1 3.293 3.588c.518.126 1.01.38 1.428.76a5 5 0 0 0 .073-.855m-5-.75H7l-.102.006A.75.75 0 0 0 7 10.75h9.999l.101-.006A.75.75 0 0 0 17 9.25m1.1 2.419-5.901 5.902a2.7 2.7 0 0 0-.707 1.247l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L21.33 14.9a2.285 2.285 0 0 0-3.233-3.232"/>`
} as const;

export default function LinkEditIcon({ 
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

  const gradientId = 'linkediticon_gradient';
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