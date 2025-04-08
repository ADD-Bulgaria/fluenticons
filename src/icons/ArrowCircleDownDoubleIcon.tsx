import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.25 13.75a.75.75 0 0 1 .072.976l-.072.084-1.971 1.971a.75.75 0 0 1-.977.073l-.084-.073-1.97-1.97a.75.75 0 0 1 .977-1.134l.085.073.69.691V7.75a.75.75 0 0 1 .647-.744L8.75 7a.75.75 0 0 1 .743.648l.007.102v6.69l.69-.69a.75.75 0 0 1 .976-.073zM1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10m15.666 1.677.085.073a.75.75 0 0 1 .072.976l-.072.084-1.971 1.971a.75.75 0 0 1-.977.073l-.084-.073-1.97-1.97a.75.75 0 0 1 .978-1.134l.084.073.69.691V7.75a.75.75 0 0 1 .647-.743L15.25 7a.75.75 0 0 1 .743.649L16 7.75v6.69l.69-.69a.75.75 0 0 1 .976-.072"/>`,
  'regular': `<path d="m11.25 13.75-.085-.073a.75.75 0 0 0-.976.073l-.69.69V7.75l-.007-.102A.75.75 0 0 0 8.75 7l-.102.006A.75.75 0 0 0 8 7.75v6.691l-.69-.69-.084-.074a.75.75 0 0 0-.976 1.133l1.969 1.971.084.073a.75.75 0 0 0 .977-.073l1.97-1.97.073-.085a.75.75 0 0 0-.072-.976M1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10m18.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0m-2.75 1.75-.084-.073a.75.75 0 0 0-.976.073l-.69.69V7.75l-.007-.102a.75.75 0 0 0-.743-.649l-.102.007a.75.75 0 0 0-.648.743v6.692l-.69-.69-.083-.074a.75.75 0 0 0-.977 1.133l1.969 1.971.084.073a.75.75 0 0 0 .977-.073l1.97-1.97.073-.085a.75.75 0 0 0-.072-.976"/>`
} as const;

export default function ArrowCircleDownDoubleIcon({ 
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

  const gradientId = 'arrowcircledowndoubleicon_gradient';
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