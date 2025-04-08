import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.262 3.029A1 1 0 0 1 6.024 4v8a1 1 0 0 1-2 0V6.5q-.22.165-.47.332a1 1 0 0 1-1.109-1.664 6.6 6.6 0 0 0 1.367-1.19 4 4 0 0 0 .324-.44l.007-.011a1 1 0 0 1 1.12-.498M18 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0zM4 15.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5.5v1.503h1.75a.75.75 0 0 1 0 1.5H5.5v1.728a.75.75 0 0 1-1.5 0zm6.25-.75a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V19.5h.75a2.25 2.25 0 1 0 0-4.5zm1.5 3H11v-1.5h.75a.75.75 0 0 1 0 1.5m3.5-.875c0-1.174.951-2.125 2.125-2.125H18a2 2 0 0 1 2 2 .75.75 0 0 1-1.5 0 .5.5 0 0 0-.5-.5h-.625a.625.625 0 1 0 0 1.25h.5a2.125 2.125 0 0 1 0 4.25h-.625a2 2 0 0 1-2-2 .75.75 0 0 1 1.5 0 .5.5 0 0 0 .5.5h.625a.625.625 0 1 0 0-1.25h-.5a2.125 2.125 0 0 1-2.125-2.125M8.129 6.179a1 1 0 0 0 1.29-.535l.031-.054a1.1 1.1 0 0 1 .191-.225c.173-.156.5-.365 1.109-.365.425 0 .747.13.945.297.182.155.305.375.305.703 0 .549-.172.865-.422 1.124-.303.313-.723.554-1.324.897-.546.312-1.251.716-1.798 1.33C7.87 10.01 7.5 10.864 7.5 12a1 1 0 0 0 1 1H13a1 1 0 1 0 0-2H9.723q.1-.179.227-.32c.297-.333.717-.591 1.296-.922l.103-.059c.51-.29 1.16-.66 1.667-1.186C13.61 7.898 14 7.091 14 6c0-.915-.38-1.694-1.013-2.23-.616-.52-1.42-.77-2.237-.77-1.14 0-1.939.417-2.454.885a3.1 3.1 0 0 0-.665.864 2 2 0 0 0-.059.129s-.208.52 0 0a1 1 0 0 0 .557 1.3"/>`,
  'regular': `<path d="M5.996 3.75a.75.75 0 0 0-1.36-.435l-.002.002-.01.012a6 6 0 0 1-.185.247 14 14 0 0 1-.535.647c-.455.517-1.017 1.07-1.54 1.384a.75.75 0 0 0 .772 1.286c.489-.293.959-.704 1.36-1.107v6.464a.75.75 0 0 0 1.5 0zm3.492 1.636a.75.75 0 0 1-1.478-.26v-.001l.001-.002v-.005l.003-.01a1 1 0 0 1 .025-.112q.024-.1.082-.252c.078-.2.21-.462.428-.724C9.008 3.47 9.784 3 11 3a3 3 0 0 1 3 3c0 1.022-.361 1.776-.9 2.364-.475.518-1.088.902-1.605 1.226l-.096.06c-.574.36-1.038.666-1.374 1.062a2.1 2.1 0 0 0-.427.788h3.652a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75c0-1.075.347-1.878.881-2.509.508-.598 1.17-1.016 1.72-1.362l.029-.018c.575-.36 1.03-.646 1.364-1.01.305-.333.506-.733.506-1.351A1.5 1.5 0 0 0 11 4.5c-.784 0-1.133.28-1.299.48a1.1 1.1 0 0 0-.21.396zm8.506-2.384A2.994 2.994 0 0 0 15 5.996v4.01A2.994 2.994 0 0 0 17.994 13h.012A2.994 2.994 0 0 0 21 10.006v-4.01a2.994 2.994 0 0 0-2.994-2.994zM16.5 5.996c0-.825.669-1.494 1.494-1.494h.012c.825 0 1.494.669 1.494 1.494v4.01c0 .825-.669 1.494-1.494 1.494h-.012a1.494 1.494 0 0 1-1.494-1.494zM4 15.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5.5v1.503h1.75a.75.75 0 0 1 0 1.5H5.5v1.728a.75.75 0 0 1-1.5 0zm6.25-.75a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V19.5h.75a2.25 2.25 0 1 0 0-4.5zm1.5 3H11v-1.5h.75a.75.75 0 0 1 0 1.5m3.5-.875c0-1.174.951-2.125 2.125-2.125H18a2 2 0 0 1 2 2 .75.75 0 0 1-1.5 0 .5.5 0 0 0-.5-.5h-.625a.625.625 0 1 0 0 1.25h.5a2.125 2.125 0 0 1 0 4.25h-.625a2 2 0 0 1-2-2 .75.75 0 0 1 1.5 0 .5.5 0 0 0 .5.5h.625a.625.625 0 1 0 0-1.25h-.5a2.125 2.125 0 0 1-2.125-2.125"/>`
} as const;

export default function Fps120Icon({ 
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

  const gradientId = 'fps120icon_gradient';
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