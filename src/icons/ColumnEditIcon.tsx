import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.25 3a.75.75 0 0 0 0 1.5h.5C4.44 4.5 5 5.06 5 5.75v12.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 3.75 3zM8 5.75A2.75 2.75 0 0 1 10.75 3h2.5A2.75 2.75 0 0 1 16 5.75v8.605l-3.51 3.51a3.7 3.7 0 0 0-.97 1.712L11.166 21h-.415A2.75 2.75 0 0 1 8 18.25zm11 5.733V5.75c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 0 0 0-1.5h-.5a2.75 2.75 0 0 0-2.75 2.75v7.105l.893-.893q.281-.28.607-.48m.1 1.186-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`,
  'regular': `<path d="M3.25 3a.75.75 0 0 0 0 1.5h.5C4.44 4.5 5 5.06 5 5.75v12.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 3.75 3zm7.5 0A2.75 2.75 0 0 0 8 5.75v12.5A2.75 2.75 0 0 0 10.75 21h.415l.356-1.423.02-.077h-.791c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v10.105l1.5-1.5V5.75A2.75 2.75 0 0 0 13.25 3zM19 11.483q-.325.198-.607.48l-.893.892V5.75A2.75 2.75 0 0 1 20.25 3h.5a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25zm.1 1.186-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`
} as const;

export default function ColumnEditIcon({ 
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

  const gradientId = 'columnediticon_gradient';
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