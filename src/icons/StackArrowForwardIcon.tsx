import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m1.854-8.354a.5.5 0 0 0-.708.708l.647.646H17.25A3.25 3.25 0 0 0 14 8.25v.25a.5.5 0 0 0 1 0v-.25A2.25 2.25 0 0 1 17.25 6h2.043l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM4 4h7.498A6.5 6.5 0 0 0 17 12.981V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 8.981q.782-.061 1.5-.294v.813a4 4 0 0 1-4 4h-9A2 2 0 0 1 4.563 16H15.5a2.5 2.5 0 0 0 2.5-2.5zm4-1.79c-.444.426-.949.79-1.5 1.077v1.982a4.25 4.25 0 0 1-4.25 4.25H7.063A2 2 0 0 0 9 20h7.25A5.75 5.75 0 0 0 22 14.25z"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m1.854-8.354a.5.5 0 0 0-.708.708l.647.646H17.25A3.25 3.25 0 0 0 14 8.25v.25a.5.5 0 0 0 1 0v-.25A2.25 2.25 0 0 1 17.25 6h2.043l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM17 13v-.019a6.5 6.5 0 0 1-1.5-.294V13a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h7.076a6.5 6.5 0 0 1 .422-1.5H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2m1-.019q.782-.061 1.5-.294v.813a4 4 0 0 1-4 4h-9A2 2 0 0 1 4.563 16H15.5a2.5 2.5 0 0 0 2.5-2.5zm4-1.79c-.444.426-.949.79-1.5 1.077v1.982a4.25 4.25 0 0 1-4.25 4.25H7.063A2 2 0 0 0 9 20h7.25A5.75 5.75 0 0 0 22 14.25z"/>`
} as const;

export default function StackArrowForwardIcon({ 
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

  const gradientId = 'stackarrowforwardicon_gradient';
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