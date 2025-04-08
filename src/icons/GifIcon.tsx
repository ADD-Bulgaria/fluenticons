import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.75 3.5A3.25 3.25 0 0 1 22 6.75v10.503a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.253V6.75A3.25 3.25 0 0 1 5.25 3.5zM8.015 8.871c-1.627 0-2.754 1.41-2.754 3.123s1.128 3.126 2.754 3.126c.887 0 1.703-.427 2.111-1.214l.077-.162.023-.07.018-.075.008-.083v-1.52l-.007-.093a.625.625 0 0 0-.516-.524l-.102-.008H8.625l-.092.006a.63.63 0 0 0-.524.516L8 11.996l.007.092c.04.268.25.48.516.524l.102.009h.376v.733l-.006.015c-.189.32-.552.5-.98.5-.866 0-1.504-.798-1.504-1.875s.637-1.873 1.504-1.873c.421 0 .66.047.96.19a.625.625 0 0 0 .542-1.126c-.483-.232-.905-.314-1.502-.314m4.614.122a.625.625 0 0 0-.618.533l-.007.092v4.762l.007.093a.625.625 0 0 0 1.236 0l.007-.093V9.619l-.007-.092a.625.625 0 0 0-.618-.533M17.622 9l-1.997-.007a.625.625 0 0 0-.62.53l-.007.093v4.748l.006.093c.04.268.25.48.516.524l.103.008.092-.006c.268-.04.48-.25.524-.516l.009-.103-.001-1.115h1.123l.092-.006c.268-.04.48-.25.525-.516l.008-.102-.007-.092a.625.625 0 0 0-.516-.525L17.37 12h-1.123v-1.756l1.37.006.093-.006a.625.625 0 0 0 .005-1.237zl-1.997-.007z"/>`,
  'regular': `<path d="M18.75 3.5A3.25 3.25 0 0 1 22 6.75v10.503a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.253V6.75A3.25 3.25 0 0 1 5.25 3.5zm0 1.5H5.25A1.75 1.75 0 0 0 3.5 6.75v10.503c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.75A1.75 1.75 0 0 0 18.75 5M8.015 8.871c.596 0 1.019.082 1.502.314a.625.625 0 1 1-.541 1.127c-.3-.144-.54-.19-.961-.19-.867 0-1.504.796-1.504 1.872s.638 1.876 1.504 1.876c.428 0 .791-.18.98-.501L9 13.354v-.734h-.376a.625.625 0 0 1-.618-.532L8 11.996c0-.314.231-.574.533-.619l.092-.006h1.002c.314 0 .573.23.618.532l.007.093-.002 1.547-.006.056-.021.09-.02.055c-.377.89-1.241 1.376-2.188 1.376-1.626 0-2.754-1.413-2.754-3.126S6.388 8.87 8.015 8.87m4.614.122c.314 0 .574.232.618.533l.007.092v4.762a.625.625 0 0 1-1.243.093l-.007-.093v-4.76c0-.345.28-.625.625-.625m2.996 0L17.622 9a.625.625 0 0 1 .088 1.244l-.092.006-1.371-.005v1.754h1.123c.314 0 .574.232.618.534l.007.092a.625.625 0 0 1-.533.618l-.092.007-1.123-.001v1.115a.625.625 0 0 1-.532.619l-.092.006a.625.625 0 0 1-.619-.532l-.006-.093V9.616A.625.625 0 0 1 15.532 9z"/>`
} as const;

export default function GifIcon({ 
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

  const gradientId = 'gificon_gradient';
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