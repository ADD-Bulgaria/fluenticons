import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25 21.75A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25zM19.75 14a.75.75 0 0 0-.648-.743L19 13.25H9l-.102.007a.75.75 0 0 0 0 1.486L9 14.75h10l.102-.007A.75.75 0 0 0 19.75 14m0 5.25a.75.75 0 0 0-.648-.743L19 18.5H9l-.102.007a.75.75 0 0 0 0 1.486L9 20h10l.102-.007a.75.75 0 0 0 .648-.743m0-10.5a.75.75 0 0 0-.648-.743L19 8H9l-.102.007a.75.75 0 0 0 0 1.486L9 9.5h10l.102-.007a.75.75 0 0 0 .648-.743"/>`,
  'regular': `<path d="M25 21.75A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25zm-1.5 0V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75M19.75 14a.75.75 0 0 1-.648.743L19 14.75H9a.75.75 0 0 1-.102-1.493L9 13.25h10a.75.75 0 0 1 .75.75m0 5.25a.75.75 0 0 1-.648.743L19 20H9a.75.75 0 0 1-.102-1.493L9 18.5h10a.75.75 0 0 1 .75.75m0-10.5a.75.75 0 0 1-.648.743L19 9.5H9a.75.75 0 0 1-.102-1.493L9 8h10a.75.75 0 0 1 .75.75"/>`
} as const;

export default function CalendarAgendaIcon({ 
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

  const gradientId = 'calendaragendaicon_gradient';
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