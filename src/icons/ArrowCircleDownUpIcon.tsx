import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-1-5.793-1.646 1.647a.5.5 0 0 1-.708 0L5 12.207a.5.5 0 1 1 .707-.707l.793.793V6.5a.5.5 0 0 1 1 0v5.793l.793-.793a.5.5 0 1 1 .707.707m6-4.414a.5.5 0 0 1-.707.707l-.793-.793V13.5a.5.5 0 0 1-1 0V7.707l-.793.793A.5.5 0 1 1 11 7.793l1.646-1.647a.5.5 0 0 1 .707 0z"/>`,
  'regular': `<path d="M7.354 13.854 9 12.207a.5.5 0 1 0-.707-.707l-.793.793V6.5a.5.5 0 0 0-1 0v5.793l-.793-.793a.5.5 0 1 0-.707.707l1.646 1.647a.5.5 0 0 0 .708 0M15 7.793l-1.646-1.647a.5.5 0 0 0-.708 0L11 7.793a.5.5 0 1 0 .707.707l.793-.793V13.5a.5.5 0 1 0 1 0V7.707l.793.793A.5.5 0 1 0 15 7.793M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14"/>`
} as const;

export default function ArrowCircleDownUpIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'arrowcircledownupicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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