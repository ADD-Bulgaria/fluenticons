import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.49 15.648a.75.75 0 0 0-1.486 0l-.007.102v3.502l.005.175a2.75 2.75 0 0 0 2.578 2.57l.167.005h3.5l.102-.006a.75.75 0 0 0 0-1.487l-.102-.007h-3.5l-.128-.006a1.25 1.25 0 0 1-1.115-1.116l-.007-.128V15.75zm18.5 0a.75.75 0 0 0-1.493.102v3.502l-.006.128a1.25 1.25 0 0 1-1.244 1.122h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.168-.005a2.75 2.75 0 0 0 2.582-2.745V15.75zM8.997 2.75a.75.75 0 0 0-.75-.75h-3.5l-.167.005A2.75 2.75 0 0 0 1.997 4.75v3.502l.007.102a.75.75 0 0 0 1.493-.102V4.75l.007-.128A1.25 1.25 0 0 1 4.747 3.5h3.5l.102-.007a.75.75 0 0 0 .648-.743m10.418-.745L19.247 2h-3.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.5l.128.006a1.25 1.25 0 0 1 1.116 1.116l.006.128v3.502l.007.102a.75.75 0 0 0 1.486 0l.007-.102V4.75l-.005-.174a2.75 2.75 0 0 0-2.577-2.571M8.5 13.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-2.29-1.757-.008.021v.002a.75.75 0 0 1-.965.436c-.598-.224-.438-.969-.436-.974l.006-.015a3 3 0 0 1 .087-.2c.06-.129.148-.306.27-.516a7.6 7.6 0 0 1 1.18-1.527C7.466 7.85 9.275 6.75 12 6.75s4.535 1.1 5.655 2.22a7.6 7.6 0 0 1 1.18 1.527 6 6 0 0 1 .358.716l.006.015.002.005v.002l.001.002a.75.75 0 0 1-.439.965.76.76 0 0 1-.965-.438l-.008-.02s-.023-.055-.044-.1a5 5 0 0 0-.206-.391 6 6 0 0 0-.945-1.223c-.88-.88-2.32-1.78-4.595-1.78s-3.715.9-4.595 1.78a6 6 0 0 0-.945 1.223 5 5 0 0 0-.25.49"/>`,
  'regular': `<path d="M8.247 2a.75.75 0 0 1 .102 1.493l-.102.007h-3.5a1.25 1.25 0 0 0-1.243 1.122l-.007.128v3.502a.75.75 0 0 1-1.493.102l-.007-.102V4.75A2.75 2.75 0 0 1 4.58 2.005L4.747 2zM3.49 15.648a.75.75 0 0 0-1.486 0l-.007.102v3.502l.005.175a2.75 2.75 0 0 0 2.578 2.57l.167.005h3.5l.102-.006a.75.75 0 0 0 0-1.487l-.102-.007h-3.5l-.128-.006a1.25 1.25 0 0 1-1.115-1.116l-.007-.128V15.75zm18.5 0a.75.75 0 0 0-1.493.102v3.502l-.006.128a1.25 1.25 0 0 1-1.244 1.122h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.168-.005a2.75 2.75 0 0 0 2.582-2.745V15.75zM19.415 2.005 19.247 2h-3.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.5l.128.006a1.25 1.25 0 0 1 1.116 1.116l.006.128v3.502l.007.102a.75.75 0 0 0 1.486 0l.007-.102V4.75l-.005-.174a2.75 2.75 0 0 0-2.577-2.571M6.202 11.764l.008-.02.044-.1c.043-.09.11-.226.206-.391.194-.332.5-.777.945-1.223.88-.88 2.32-1.78 4.595-1.78s3.715.9 4.595 1.78c.445.446.751.891.945 1.223a5 5 0 0 1 .25.49l.008.021c.15.38.579.583.965.438a.75.75 0 0 0 .44-.965l-.001-.002-.001-.002-.002-.005-.006-.015a3 3 0 0 0-.087-.2 6 6 0 0 0-.27-.516 7.6 7.6 0 0 0-1.18-1.527C16.534 7.85 14.725 6.75 12 6.75s-4.535 1.1-5.655 2.22a7.6 7.6 0 0 0-1.18 1.527 6 6 0 0 0-.358.716l-.006.015c-.002.005-.162.75.436.974a.75.75 0 0 0 .964-.436zM12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>`
} as const;

export default function EyeTrackingIcon({ 
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

  const gradientId = 'eyetrackingicon_gradient';
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