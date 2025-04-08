import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.499 2h.002A4.01 4.01 0 0 1 20.5 5.999v2.52l1.384 1.66A.5.5 0 0 1 21.5 11h-10a.5.5 0 0 1-.384-.82L12.5 8.519v-2.52A4.01 4.01 0 0 1 16.499 2M5.75 5h5.853a5 5 0 0 0-.103.996v2.16L10.348 9.54A1.5 1.5 0 0 0 11.5 12h2.17A3 3 0 0 0 17 13.959v4.791A2.25 2.25 0 0 1 14.75 21h-9a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 5.75 5m9.754 7.732a2 2 0 0 1-.727-.732h3.446a1.984 1.984 0 0 1-2.719.732"/>`,
  'regular': `<path d="M16.499 2h.002A4.01 4.01 0 0 1 20.5 5.999v2.52l1.384 1.66A.5.5 0 0 1 21.5 11h-10a.5.5 0 0 1-.384-.82L12.5 8.519v-2.52A4.01 4.01 0 0 1 16.499 2M5.75 5h5.853a5 5 0 0 0-.103.996V6.5h-5v13h8.25a.75.75 0 0 0 .75-.75v-4.92a3 3 0 0 0 1.5.129v4.791A2.25 2.25 0 0 1 14.75 21h-9a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 5.75 5m9.754 7.732a2 2 0 0 1-.727-.732h3.446a1.984 1.984 0 0 1-2.719.732"/>`
} as const;

export default function DualScreenClosedAlertIcon({ 
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

  const gradientId = 'dualscreenclosedalerticon_gradient';
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