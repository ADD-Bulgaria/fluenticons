import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m22.5 24 16.233-11.325c2.221-1.55 5.267.04 5.267 2.747v17.156c0 2.708-3.046 4.297-5.267 2.747z"/><path fill-opacity=".75" d="m22.5 24 16.233-11.325c2.221-1.55 5.267.04 5.267 2.747v17.156c0 2.708-3.046 4.297-5.267 2.747z"/><path d="M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5A6.25 6.25 0 0 1 24.75 38h-14.5A6.25 6.25 0 0 1 4 31.75z"/><path d="M8 30a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H12a4 4 0 0 1-4-4" opacity=".5"/><path d="M12.026 28C10.907 28 10 28.922 10 30.059s.907 2.059 2.026 2.059h4.051c1.119 0 2.026-.922 2.026-2.06 0-1.136-.907-2.058-2.026-2.058zm9.948 4.118c1.12 0 2.026-.922 2.026-2.06C24 28.923 23.093 28 21.974 28s-2.025.922-2.025 2.059.906 2.059 2.025 2.059"/>`,
  'filled': `<path d="M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5A6.25 6.25 0 0 1 24.75 38h-14.5A6.25 6.25 0 0 1 4 31.75zm34.907 19.168L33 31.339v-14.68l5.907-4.078c2.156-1.488 5.097.055 5.097 2.675v17.487c0 2.62-2.941 4.163-5.097 2.675"/>`,
  'regular': `<path d="M10.25 10A6.25 6.25 0 0 0 4 16.25v15.5A6.25 6.25 0 0 0 10.25 38h15.5A6.25 6.25 0 0 0 32 31.75v-1.101l6.907 4.769c2.156 1.488 5.096-.055 5.096-2.675V15.256c0-2.62-2.94-4.163-5.096-2.675L32 17.351V16.25A6.25 6.25 0 0 0 25.75 10zM32 20.388l8.327-5.75a.75.75 0 0 1 1.176.618v17.487a.75.75 0 0 1-1.176.617L32 27.61zM6.5 16.25a3.75 3.75 0 0 1 3.75-3.75h15.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.75 3.75h-15.5a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function VideoIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'videoicon_gradient';
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