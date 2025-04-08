import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.105 2.778a3.25 3.25 0 0 0-4.21 0l-9.75 8.287A3.25 3.25 0 0 0 3 13.541v12.96A2.5 2.5 0 0 0 5.5 29h9.922A2.9 2.9 0 0 1 15 27.5v-9.25h.011c.071-.808.48-1.474.972-1.972.534-.54 1.232-.96 1.976-1.278 1.495-.64 3.455-1 5.541-1 2.067 0 4.01.353 5.5.983V13.54a3.25 3.25 0 0 0-1.145-2.476zM29 22.018c-1.49.63-3.433.983-5.5.983-2.086 0-4.046-.36-5.54-1a7 7 0 0 1-1.46-.827V27.5c0 .546.34 1.059.936 1.5 1.21.897 3.473 1.5 6.064 1.5 3.866 0 7-1.343 7-3v-6.327a7 7 0 0 1-1.46.827zm-11.865-2.267-.085-.082c-.354-.36-.55-.754-.55-1.168q0-.127.024-.25c.296-1.54 3.306-2.75 6.976-2.75 2.231 0 4.218.447 5.5 1.144.94.51 1.5 1.155 1.5 1.856 0 .446-.227.87-.635 1.25-.232.217-.524.42-.865.606-1.282.697-3.269 1.144-5.5 1.144-2.825 0-5.26-.717-6.365-1.75"/>`,
  'regular': `<path d="M16.81 4.301a1.25 1.25 0 0 0-1.62 0L5.44 12.59a1.25 1.25 0 0 0-.44.952v12.96a.5.5 0 0 0 .5.5H15v.5c0 .567.167 1.07.422 1.5H5.5A2.5 2.5 0 0 1 3 26.5V13.54a3.25 3.25 0 0 1 1.145-2.476l9.75-8.287a3.25 3.25 0 0 1 4.21 0l9.75 8.287A3.25 3.25 0 0 1 29 13.541v1.443c-.6-.254-1.274-.463-2-.622v-.82a1.25 1.25 0 0 0-.44-.953zm.627 24.7c-.596-.441-.937-.954-.937-1.5v-6.327c.436.33.936.603 1.46.827 1.494.64 3.454 1 5.54 1 1.234 0 2.424-.126 3.5-.361.726-.16 1.4-.368 2-.622l.04-.017a7 7 0 0 0 1.46-.827V27.5c0 1.657-3.134 3-7 3-2.591 0-4.853-.603-6.064-1.5M29 20.357c-.55.298-1.228.551-2 .742-1.03.256-2.225.402-3.5.402-3.866 0-7-1.343-7-3s3.134-3 7-3c1.275 0 2.47.146 3.5.401.772.192 1.45.444 2 .743.94.51 1.5 1.155 1.5 1.856 0 .7-.56 1.345-1.5 1.856"/>`
} as const;

export default function HomeDatabaseIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'homedatabaseicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}