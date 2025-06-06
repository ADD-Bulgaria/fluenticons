import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M3.5 1A2.5 2.5 0 0 0 1 3.5v9A2.5 2.5 0 0 0 3.5 15h10a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 13.5 1zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M4 25.5v-9h1v9c0 .59.146 1.148.405 1.636l9.82-9.905a2.5 2.5 0 0 1 3.55 0l9.82 9.905A3.5 3.5 0 0 0 29 25.5v-17A3.5 3.5 0 0 0 25.5 5h-8V4h8A4.5 4.5 0 0 1 30 8.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 4 25.5M8.5 29h17c.978 0 1.862-.4 2.497-1.047l-9.932-10.018a1.5 1.5 0 0 0-2.13 0L6.003 27.953A3.5 3.5 0 0 0 8.5 29M26 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>`
} as const;

export default function ImageAltTextIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'imagealttexticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}