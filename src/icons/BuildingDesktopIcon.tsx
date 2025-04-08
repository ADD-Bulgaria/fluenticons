import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h7.5A3.25 3.25 0 0 1 16 5.25V8a1 1 0 0 0 1 1 3 3 0 0 1 3 3v.5h-2.75a4.75 4.75 0 0 0-4.75 4.75v5.5c0 .814.205 1.58.566 2.25H5.25A3.25 3.25 0 0 1 2 21.75zM17.25 16c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zm9.5 10H25v2h1a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h1v-2h-1.75A3.25 3.25 0 0 1 14 22.75v-5.5A3.25 3.25 0 0 1 17.25 14h9.5A3.25 3.25 0 0 1 30 17.25v5.5A3.25 3.25 0 0 1 26.75 26M21 28h2v-2h-2zM8 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M5.25 2A3.25 3.25 0 0 0 2 5.25v16.5A3.25 3.25 0 0 0 5.25 25H13q.033 0 .065-.002A4.7 4.7 0 0 1 12.507 23H5.25C4.56 23 4 22.44 4 21.75V5.25C4 4.56 4.56 4 5.25 4h7.5c.69 0 1.25.56 1.25 1.25V8a3 3 0 0 0 3 3 1 1 0 0 1 1 1v.5h2V12a3 3 0 0 0-3-3 1 1 0 0 1-1-1V5.25A3.25 3.25 0 0 0 12.75 2zm12 12h9.5A3.25 3.25 0 0 1 30 17.25v5.5A3.25 3.25 0 0 1 26.75 26H25v2h1a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h1v-2h-1.75A3.25 3.25 0 0 1 14 22.75v-5.5A3.25 3.25 0 0 1 17.25 14M21 28h2v-2h-2zm5.75-4c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-9.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25zM8 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function BuildingDesktopIcon({ 
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

  const gradientId = 'buildingdesktopicon_gradient';
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