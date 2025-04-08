import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H25.646A4 4 0 0 0 27 40v-7a5 5 0 0 0-4.084-4.916A5 5 0 0 0 18 24h-8c-.711 0-1.388.148-2 .416V7a3 3 0 0 1 3-3zm2.5.464V15.25c0 .69.56 1.25 1.25 1.25h11.712zM10 26a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3h-1v-1a3 3 0 0 0-3-3zm9 4H9v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-9 8h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"/>`,
  'regular': `<path d="M12.25 4A4.25 4.25 0 0 0 8 8.25v16.166A5 5 0 0 1 10 24h.5V8.25c0-.966.784-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0 0 27.75 19h9.75v20.75a1.75 1.75 0 0 1-1.75 1.75h-9.04A4 4 0 0 1 23 44h12.75A4.25 4.25 0 0 0 40 39.75V18.414a2.25 2.25 0 0 0-.659-1.59L27.177 4.658A2.25 2.25 0 0 0 25.586 4zm23.232 12.5H27.75c-.69 0-1.25-.56-1.25-1.25V7.518zM10 26a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3h-1v-1a3 3 0 0 0-3-3zm9 4H9v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-9 8h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"/>`
} as const;

export default function DocumentPrintIcon({ 
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

  const gradientId = 'documentprinticon_gradient';
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