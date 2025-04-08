import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.055 17.228a6 6 0 1 0 0-10.456A7.97 7.97 0 0 1 22.999 12a7.97 7.97 0 0 1-1.944 5.228M24 42a9 9 0 0 1-2.28-.292A10.98 10.98 0 0 0 25.998 33v-9.25a5.73 5.73 0 0 0-1.39-3.75h4.643a3.75 3.75 0 0 1 3.75 3.75V33a9 9 0 0 1-9 9m6.054-24.77a6 6 0 1 0 0-10.462A7.97 7.97 0 0 1 32.002 12c0 2-.734 3.828-1.947 5.23M33 42c-.787 0-1.55-.101-2.278-.29a10.98 10.98 0 0 0 4.28-8.71v-9.25A5.73 5.73 0 0 0 33.61 20h4.639A3.75 3.75 0 0 1 42 23.75V33a9 9 0 0 1-9 9M9.75 20A3.75 3.75 0 0 0 6 23.75V33a9 9 0 1 0 18 0v-9.25A3.75 3.75 0 0 0 20.25 20zM15 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/>`,
  'regular': `<path d="M24.001 18c-1.07 0-2.076-.28-2.946-.772a8 8 0 0 0 1.321-2.127 3.5 3.5 0 1 0 0-6.201 8 8 0 0 0-1.321-2.128A6 6 0 1 1 24.002 18m0 21.5-.126-.001a11 11 0 0 1-2.155 2.21c.729.19 1.493.291 2.281.291a9 9 0 0 0 9-9v-9.25a3.75 3.75 0 0 0-3.75-3.75h-4.643a5.7 5.7 0 0 1 1.255 2.5h3.388c.69 0 1.25.56 1.25 1.25V33a6.5 6.5 0 0 1-6.5 6.5m9-21.5c-1.07 0-2.074-.28-2.943-.77a8 8 0 0 0 1.322-2.128 3.5 3.5 0 1 0 0-6.205 8 8 0 0 0-1.322-2.126A6 6 0 1 1 33.003 18m0 21.5-.122-.001a11 11 0 0 1-2.156 2.21A9 9 0 0 0 42.002 33v-9.249a3.75 3.75 0 0 0-3.75-3.75h-4.639a5.7 5.7 0 0 1 1.255 2.5h3.384c.69 0 1.25.56 1.25 1.25V33a6.5 6.5 0 0 1-6.5 6.5M6 23.75A3.75 3.75 0 0 1 9.75 20h10.5A3.75 3.75 0 0 1 24 23.75V33a9 9 0 1 1-18 0zm3.75-1.25c-.69 0-1.25.56-1.25 1.25V33a6.5 6.5 0 1 0 13 0v-9.25c0-.69-.56-1.25-1.25-1.25zM11.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M15 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12"/>`
} as const;

export default function PeopleQueueIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'peoplequeueicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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