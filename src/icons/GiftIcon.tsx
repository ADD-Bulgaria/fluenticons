import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M20 12.5v6.25a3.25 3.25 0 0 1-3.066 3.245L16.75 22h-9.5a3.25 3.25 0 0 1-3.245-3.066L4 18.75V12.5z"/><path d="M19.75 7c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 0 1-1 1.225H4c-.57-.116-1-.62-1-1.225v-3.5C3 7.56 3.56 7 4.25 7z"/><path d="M11.25 22V12h1.5v10z"/><path d="M11.25 13V8h1.5v5z"/><path fill-rule="evenodd" d="M9.5 8.5A3.25 3.25 0 1 1 12 3.173 3.25 3.25 0 1 1 14.5 8.5zM7.75 5.25a1.75 1.75 0 1 1 3.5 0V7H9.5a1.75 1.75 0 0 1-1.75-1.75m5 1.75h1.75a1.75 1.75 0 1 0-1.75-1.75z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.5 8.5A3.25 3.25 0 1 1 12 3.173 3.25 3.25 0 1 1 14.5 8.5zM7.75 5.25a1.75 1.75 0 1 1 3.5 0V7H9.5a1.75 1.75 0 0 1-1.75-1.75m5 1.75h1.75a1.75 1.75 0 1 0-1.75-1.75z" clip-rule="evenodd"/>`,
  'filled': `<path d="M11.25 13v9h-4A3.25 3.25 0 0 1 4 18.75V13zM20 13v5.75A3.25 3.25 0 0 1 16.75 22h-4v-9zM14.5 2a3.25 3.25 0 0 1 2.738 5.002L19.75 7c.69 0 1.25.466 1.25 1.042v2.916c0 .576-.56 1.042-1.25 1.042l-7-.001V7h-1.5v4.999l-7 .001C3.56 12 3 11.534 3 10.958V8.042C3 7.466 3.56 7 4.25 7l2.512.002A3.25 3.25 0 0 1 12 3.174 3.24 3.24 0 0 1 14.5 2m-5 1.5a1.75 1.75 0 0 0-.144 3.494L9.5 7h1.75V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5m5 0a1.75 1.75 0 0 0-1.75 1.75V7h1.75a1.75 1.75 0 1 0 0-3.5"/>`,
  'regular': `<path d="M14.5 2a3.25 3.25 0 0 1 2.739 5h2.511c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 0 1-1 1.225v5.775a3.25 3.25 0 0 1-3.066 3.245L16.75 22h-9.5a3.25 3.25 0 0 1-3.245-3.066L4 18.75v-5.775c-.57-.116-1-.62-1-1.225v-3.5C3 7.56 3.56 7 4.25 7h2.511a3.25 3.25 0 0 1 5.24-3.827A3.24 3.24 0 0 1 14.5 2m-3.25 10.999H5.5v5.751a1.75 1.75 0 0 0 1.606 1.744l.144.006h4zm7.25 0h-5.75V20.5h4a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM11.25 8.5H4.5v3l6.75-.001zm8.25 3v-3h-6.75v2.999zm-5-8a1.75 1.75 0 0 0-1.75 1.75v1.749h1.774l.12-.005A1.75 1.75 0 0 0 14.5 3.5m-5 0a1.75 1.75 0 0 0-.144 3.494l.12.005h1.774V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5"/>`
} as const;

export default function GiftIcon({ 
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

  const gradientId = 'gifticon_gradient';
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