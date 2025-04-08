import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.25 2.002a.75.75 0 0 1 .743.648l.007.102v.752a3 3 0 0 1-.53 1.704 3.75 3.75 0 0 1 2.521 3.29h.256a2.25 2.25 0 0 0 2.24-2.259l-.006-1.485a.75.75 0 0 1 1.5-.007l.007 1.486a3.75 3.75 0 0 1-3.536 3.76l-.214.006L17 9.998V11.5h4.253a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743l-.102.007H17V15h.238l.214.007a3.75 3.75 0 0 1 3.531 3.56l.005.2-.007 1.485a.75.75 0 0 1-1.493.095l-.007-.102.007-1.485a2.25 2.25 0 0 0-2.087-2.254l-.154-.005h-.476a5.002 5.002 0 0 1-9.542 0H6.74A2.25 2.25 0 0 0 4.5 18.76l.005 1.485a.75.75 0 1 1-1.5.007L3 18.766a3.75 3.75 0 0 1 3.535-3.76l.215-.005L7 15v-2H2.75a.75.75 0 0 1-.743-.648L2 12.251a.75.75 0 0 1 .648-.744l.102-.006L7 11.5V9.998h-.25l-.215-.005a3.75 3.75 0 0 1-3.53-3.56L3 6.232l.006-1.486A.75.75 0 0 1 4.5 4.652l.006.102L4.5 6.239a2.25 2.25 0 0 0 2.087 2.254l.154.006h.268A3.75 3.75 0 0 1 9.53 5.206a2.97 2.97 0 0 1-.524-1.494L9 3.504v-.752a.75.75 0 0 1 1.493-.102l.007.102v.752a1.5 1.5 0 0 0 2.993.145l.007-.145v-.752a.75.75 0 0 1 .75-.75"/>`,
  'regular': `<path d="M10.5 2.752a.75.75 0 0 0-1.5 0v.752c0 .633.196 1.22.53 1.703a3.75 3.75 0 0 0-2.52 3.284h-.257a2.25 2.25 0 0 1-2.24-2.26l.006-1.485a.75.75 0 1 0-1.5-.006l-.007 1.485a3.75 3.75 0 0 0 3.735 3.766H7v1.51H2.75a.75.75 0 0 0 0 1.5H7v1.992h-.253a3.75 3.75 0 0 0-3.735 3.765l.007 1.486a.75.75 0 0 0 1.5-.006l-.007-1.486a2.25 2.25 0 0 1 2.241-2.26h.473a5.002 5.002 0 0 0 9.548 0h.473a2.25 2.25 0 0 1 2.24 2.26l-.006 1.486a.75.75 0 0 0 1.5.006l.006-1.486a3.75 3.75 0 0 0-3.734-3.765H17V13h4.251a.75.75 0 0 0 0-1.5H17V9.99h.253a3.75 3.75 0 0 0 3.735-3.766L20.98 4.74a.75.75 0 1 0-1.5.006l.006 1.486a2.25 2.25 0 0 1-2.24 2.259h-.256a3.75 3.75 0 0 0-2.52-3.284c.333-.484.529-1.07.529-1.703v-.752a.75.75 0 0 0-1.5 0v.752a1.5 1.5 0 0 1-3 0zm-2 6.002a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25v6.247a3.5 3.5 0 1 1-7 0z"/>`
} as const;

export default function BugIcon({ 
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

  const gradientId = 'bugicon_gradient';
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