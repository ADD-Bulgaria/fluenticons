import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 2.75a.75.75 0 0 0-1.5 0c0 1.27.928 1.917 1.506 2.32l.064.044c.68.476.93.705.93 1.136a.75.75 0 0 0 1.5 0c0-1.27-.928-1.917-1.506-2.32l-.064-.044C5.75 3.41 5.5 3.18 5.5 2.75M4.821 8A1.82 1.82 0 0 0 3 9.821V14a8 8 0 0 0 15.419 3h1.331a3.25 3.25 0 0 0 0-6.5H19v-.679A1.82 1.82 0 0 0 17.179 8zm14.929 7.5h-.89A8 8 0 0 0 19 14v-2h.75a1.75 1.75 0 1 1 0 3.5M8.75 2a.75.75 0 0 1 .75.75c0 .431.25.66.93 1.136l.064.044C11.072 4.333 12 4.98 12 6.25a.75.75 0 0 1-1.5 0c0-.431-.25-.66-.93-1.136l-.064-.044C8.928 4.667 8 4.02 8 2.75A.75.75 0 0 1 8.75 2m4.75.75a.75.75 0 0 0-1.5 0c0 1.27.928 1.917 1.506 2.32l.064.044c.68.476.93.705.93 1.136a.75.75 0 0 0 1.5 0c0-1.27-.928-1.917-1.506-2.32l-.064-.044c-.68-.476-.93-.705-.93-1.136"/>`,
  'regular': `<path d="M5.5 2.75a.75.75 0 0 0-1.5 0c0 1.27.928 1.917 1.506 2.32l.064.044c.68.476.93.705.93 1.136a.75.75 0 0 0 1.5 0c0-1.27-.928-1.917-1.506-2.32l-.064-.044C5.75 3.41 5.5 3.18 5.5 2.75M3 9.821A1.82 1.82 0 0 1 4.821 8H17.18A1.82 1.82 0 0 1 19 9.821v.679h.75a3.25 3.25 0 0 1 0 6.5h-1.331A8.003 8.003 0 0 1 3 14zm14.5 0a.32.32 0 0 0-.321-.321H4.82a.32.32 0 0 0-.321.321V14a6.5 6.5 0 1 0 13 0zM19.75 12H19v2a8 8 0 0 1-.14 1.5h.89a1.75 1.75 0 1 0 0-3.5m-11-10a.75.75 0 0 1 .75.75c0 .431.25.66.93 1.136l.064.044C11.072 4.333 12 4.98 12 6.25a.75.75 0 0 1-1.5 0c0-.431-.25-.66-.93-1.136l-.064-.044C8.928 4.667 8 4.02 8 2.75A.75.75 0 0 1 8.75 2m4.75.75a.75.75 0 0 0-1.5 0c0 1.27.928 1.917 1.506 2.32l.064.044c.68.476.93.705.93 1.136a.75.75 0 0 0 1.5 0c0-1.27-.928-1.917-1.506-2.32l-.064-.044c-.68-.476-.93-.705-.93-1.136"/>`
} as const;

export default function DrinkCoffeeIcon({ 
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

  const gradientId = 'drinkcoffeeicon_gradient';
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