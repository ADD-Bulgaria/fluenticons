import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 18.5A2.5 2.5 0 0 0 4.5 21h1A2.5 2.5 0 0 0 8 18.5v-13A2.5 2.5 0 0 0 5.5 3h-1A2.5 2.5 0 0 0 2 5.5zm7 0a2.5 2.5 0 0 0 2.17 2.479l.35-1.402c.163-.648.498-1.24.97-1.712l2.51-2.51V5.5A2.5 2.5 0 0 0 12.5 3h-1A2.5 2.5 0 0 0 9 5.5zM19.5 21h-.852L22 17.648v.852a2.5 2.5 0 0 1-2.5 2.5M22 5.5v5.76a3.29 3.29 0 0 0-3.607.702L16 14.355V5.5A2.5 2.5 0 0 1 18.5 3h1A2.5 2.5 0 0 1 22 5.5m-2.9 7.17-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`,
  'regular': `<path d="M2 18.5A2.5 2.5 0 0 0 4.5 21h1A2.5 2.5 0 0 0 8 18.5v-13A2.5 2.5 0 0 0 5.5 3h-1A2.5 2.5 0 0 0 2 5.5zm2.5 1a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zm4.5-1a2.5 2.5 0 0 0 2.17 2.479l.35-1.402.021-.077H11.5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11.355l1.5-1.5V5.5A2.5 2.5 0 0 0 12.5 3h-1A2.5 2.5 0 0 0 9 5.5zM19.5 21h-.852L22 17.648v.852a2.5 2.5 0 0 1-2.5 2.5M22 5.5v5.76a3.3 3.3 0 0 0-1.5-.253V5.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7.355l-1.5 1.5V5.5A2.5 2.5 0 0 1 18.5 3h1A2.5 2.5 0 0 1 22 5.5m-2.9 7.17-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`
} as const;

export default function ColumnTripleEditIcon({ 
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

  const gradientId = 'columntripleediticon_gradient';
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