import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m17.802 7.77.157-.83c.157-.822-.145-1.698-.805-2.28-1.568-1.384-3.83-2.16-7.162-2.156-3.326.004-5.89.784-7.316 2.168a2.26 2.26 0 0 0-.577 2.28l.248.83A1.735 1.735 0 0 0 4.169 8.99l1.628-.163C6.496 8.757 6.802 8.17 7 7.5c.296-1.004.5-1.75.5-1.75.762-.285 1.486-.5 2.5-.5s1.752.194 2.5.5c0 0 .196.745.5 1.75.224.74.753 1.261 1.467 1.33l1.637.158c.823.08 1.55-.442 1.698-1.219M14.5 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M10 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"/>`,
  'regular': `<path d="M10 2c3.332-.004 5.586 1.276 7.154 2.66.66.582.962 1.458.805 2.28l-.157.83c-.148.776-.875 1.298-1.698 1.218l-1.637-.158c-.714-.069-1.243-.59-1.467-1.33-.304-1.005-.5-1.75-.5-1.75a6.2 6.2 0 0 0-2.5-.5c-1.014 0-1.738.215-2.5.5 0 0-.204.746-.5 1.75-.198.671-.504 1.257-1.203 1.327L4.17 8.99a1.735 1.735 0 0 1-1.822-1.21L2.1 6.952a2.26 2.26 0 0 1 .577-2.28C4.101 3.287 6.673 2.003 10 2m3.475 3.527.026.095.098.358c.086.306.208.736.358 1.23.137.45.39.604.606.625l1.637.158c.346.033.575-.177.62-.41l.157-.83a1.45 1.45 0 0 0-.485-1.344C15.067 4.152 13.04 2.996 10.002 3c-3.076.004-5.396 1.192-6.629 2.39a1.25 1.25 0 0 0-.316 1.277l.248.829c.091.306.42.534.764.5l1.628-.164c.039-.004.052-.012.054-.013a.2.2 0 0 0 .05-.05c.07-.088.153-.256.24-.551A116 116 0 0 0 6.5 5.615l.027-.097c.102-.367.458-.622.623-.705.819-.306 1.67-.563 2.85-.563a7.2 7.2 0 0 1 2.88.575c.151.062.482.284.587.671l.002.007zM14.5 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M10 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"/>`
} as const;

export default function CallExclamationIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'callexclamationicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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