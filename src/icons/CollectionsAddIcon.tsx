import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.777 2.451a3.74 3.74 0 0 1 1.784 2.14l.515 1.909H11.25l-.198.005h-.014A3.75 3.75 0 0 0 7.5 10.25v7.5l.005.198v.014q.023.374.113.725a3.74 3.74 0 0 1-1.707-.45 3.74 3.74 0 0 1-1.785-2.14L2.13 8.663a3.74 3.74 0 0 1 .32-2.753 3.74 3.74 0 0 1 2.14-1.785l7.434-1.997a3.74 3.74 0 0 1 2.752.322M11.257 7.5l-.17.005A2.75 2.75 0 0 0 8.5 10.25v7.493l.005.17A2.75 2.75 0 0 0 11.25 20.5h.482a6.5 6.5 0 0 1 9.768-8.124v-2.119l-.005-.17A2.75 2.75 0 0 0 18.75 7.5zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.59-3.493L17.5 14l.09.008a.5.5 0 0 1 .402.402l.008.09V17l2.505.001.09.008a.5.5 0 0 1 .402.402l.008.09-.008.09a.5.5 0 0 1-.403.402l-.09.008h-2.503v2.503l-.008.09a.5.5 0 0 1-.402.402l-.09.008-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09V18h-2.503l-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09.008-.09a.5.5 0 0 1 .402-.402l.09-.008H17v-2.5l.008-.09a.5.5 0 0 1 .402-.403"/>`,
  'regular': `<path d="m11.066 8.004.184-.005h7.5a3.25 3.25 0 0 1 3.245 3.065l.005.185v1.56a6.5 6.5 0 0 0-1.5-1.077v-.483a1.75 1.75 0 0 0-1.75-1.75h-7.5a1.75 1.75 0 0 0-1.744 1.606l-.006.144v7.5a1.75 1.75 0 0 0 1.607 1.744l.143.006h.482c.287.55.65 1.055 1.076 1.5H11.25a3.25 3.25 0 0 1-3.245-3.066L8 18.75v-7.5a3.25 3.25 0 0 1 3.066-3.245m4.516-3.771.052.177.693 2.588h-1.553l-.588-2.2a1.75 1.75 0 0 0-2.144-1.238L4.798 5.502a1.75 1.75 0 0 0-1.27 1.995l.032.148 1.942 7.244A1.75 1.75 0 0 0 7 16.176v1.506a3.25 3.25 0 0 1-2.895-2.228l-.052-.176-1.941-7.245a3.25 3.25 0 0 1 2.12-3.928l.178-.052 7.244-1.941a3.25 3.25 0 0 1 3.928 2.12M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.59-3.493L17.5 14l.09.008a.5.5 0 0 1 .402.402l.008.09V17l2.505.001.09.008a.5.5 0 0 1 .402.402l.008.09-.008.09a.5.5 0 0 1-.403.402l-.09.008h-2.503v2.503l-.008.09a.5.5 0 0 1-.402.402l-.09.008-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09V18h-2.503l-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09.008-.09a.5.5 0 0 1 .402-.402l.09-.008H17v-2.5l.008-.09a.5.5 0 0 1 .402-.403"/>`
} as const;

export default function CollectionsAddIcon({ 
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

  const gradientId = 'collectionsaddicon_gradient';
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