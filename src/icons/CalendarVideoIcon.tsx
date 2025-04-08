import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1.25 5A3.75 3.75 0 0 1 5 1.25h10A3.75 3.75 0 0 1 18.75 5zm0 1.5V15A3.75 3.75 0 0 0 5 18.75h2v-2.5A4.25 4.25 0 0 1 11.25 12h7.5V6.5zm10.5 6.5A3.75 3.75 0 0 0 8 16.75v6.5A3.75 3.75 0 0 0 11.75 27h6.5A3.75 3.75 0 0 0 22 23.261l3.25 2.262c1.161.807 2.75-.023 2.75-1.437v-8.172c0-1.414-1.59-2.244-2.75-1.437L22 16.738A3.75 3.75 0 0 0 18.25 13z"/>`,
  'regular': `<path d="M5 1.25A3.75 3.75 0 0 0 1.25 5v10A3.75 3.75 0 0 0 5 18.75h2v-1.5H5A2.25 2.25 0 0 1 2.75 15V7.5h14.5V12h1.5V5A3.75 3.75 0 0 0 15 1.25zM17.25 6H2.75V5A2.25 2.25 0 0 1 5 2.75h10A2.25 2.25 0 0 1 17.25 5zM8 16.75A3.75 3.75 0 0 1 11.75 13h6.5A3.75 3.75 0 0 1 22 16.739l3.25-2.262c1.16-.807 2.75.023 2.75 1.437v8.172c0 1.414-1.589 2.244-2.75 1.437L22 23.26A3.75 3.75 0 0 1 18.25 27h-6.5A3.75 3.75 0 0 1 8 23.25zm14 4.684 4.107 2.857a.25.25 0 0 0 .393-.205v-8.172a.25.25 0 0 0-.393-.205L22 18.566zM11.75 14.5a2.25 2.25 0 0 0-2.25 2.25v6.5a2.25 2.25 0 0 0 2.25 2.25h6.5a2.25 2.25 0 0 0 2.25-2.25v-6.5a2.25 2.25 0 0 0-2.25-2.25z"/>`
} as const;

export default function CalendarVideoIcon({ 
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

  const gradientId = 'calendarvideoicon_gradient';
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