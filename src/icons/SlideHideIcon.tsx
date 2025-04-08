import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3A4.75 4.75 0 0 0 2 7.75v7A2.25 2.25 0 0 0 4.25 17h.25V8.75A3.25 3.25 0 0 1 7.75 5.5H19v-.25A2.25 2.25 0 0 0 16.75 3zm12.504 3.5h.496a2.25 2.25 0 0 1 2.245 2.096L22 8.75v1.004a.75.75 0 0 1-1.493.101l-.007-.101V8.75a.75.75 0 0 0-.648-.743L19.75 8h-.496a.75.75 0 0 1-.102-1.493zm-13.004 5a.75.75 0 0 1 .743.649l.007.102v2.494a.75.75 0 0 1-1.493.102l-.007-.102v-2.494a.75.75 0 0 1 .75-.75m.743 5.643a.75.75 0 0 0-1.493.102v1.005l.005.154A2.25 2.25 0 0 0 7.75 20.5h.5l.102-.007A.75.75 0 0 0 8.25 19h-.5l-.102-.007A.75.75 0 0 1 7 18.25v-1.005zM22 17.246a.75.75 0 1 0-1.5 0v1.005a.75.75 0 0 1-.75.75h-1.003a.75.75 0 0 0 0 1.5h1.003A2.25 2.25 0 0 0 22 18.25zM14.753 19h1.495a.75.75 0 0 1 .102 1.493l-.102.007h-1.495a.75.75 0 0 1-.102-1.493zm-2.507 0h-1.495l-.102.007a.75.75 0 0 0 .102 1.493h1.495l.102-.007A.75.75 0 0 0 12.246 19m9.747-6.851a.75.75 0 0 0-1.493.102v2.494l.007.102A.75.75 0 0 0 22 14.745v-2.494zM9.503 7.25a.75.75 0 0 0-.75-.75H7.75A2.25 2.25 0 0 0 5.5 8.75v1.004a.75.75 0 0 0 1.5 0V8.75A.75.75 0 0 1 7.75 8h1.003a.75.75 0 0 0 .75-.75m5.746-.75h1.503a.75.75 0 0 1 .102 1.493L16.752 8h-1.503a.75.75 0 0 1-.102-1.493zm-2.504 0H11.25l-.102.007A.75.75 0 0 0 11.25 8h1.495l.102-.007a.75.75 0 0 0-.102-1.493"/>`,
  'regular': `<path d="M6.75 3A4.75 4.75 0 0 0 2 7.75v7A2.25 2.25 0 0 0 4.25 17h.25v-1.5h-.25a.75.75 0 0 1-.75-.75v-7A3.25 3.25 0 0 1 6.75 4.5h10a.75.75 0 0 1 .75.75v.25H19v-.25A2.25 2.25 0 0 0 16.75 3zm12.504 3.5h.496a2.25 2.25 0 0 1 2.245 2.096L22 8.75v1.004a.75.75 0 0 1-1.493.101l-.007-.101V8.75a.75.75 0 0 0-.648-.743L19.75 8h-.496a.75.75 0 0 1-.102-1.493zm-13.004 5a.75.75 0 0 1 .743.649l.007.102v2.494a.75.75 0 0 1-1.493.102l-.007-.102v-2.494a.75.75 0 0 1 .75-.75m.743 5.643a.75.75 0 0 0-1.493.102v1.005l.005.154A2.25 2.25 0 0 0 7.75 20.5h.5l.102-.007A.75.75 0 0 0 8.25 19h-.5l-.102-.007A.75.75 0 0 1 7 18.25v-1.005zM22 17.246a.75.75 0 1 0-1.5 0v1.005a.75.75 0 0 1-.75.75h-1.003a.75.75 0 0 0 0 1.5h1.003A2.25 2.25 0 0 0 22 18.25zM14.753 19h1.495a.75.75 0 0 1 .102 1.493l-.102.007h-1.495a.75.75 0 0 1-.102-1.493zm-2.507 0h-1.495l-.102.007a.75.75 0 0 0 .102 1.493h1.495l.102-.007A.75.75 0 0 0 12.246 19m9.747-6.851a.75.75 0 0 0-1.493.102v2.494l.007.102A.75.75 0 0 0 22 14.745v-2.494zM9.503 7.25a.75.75 0 0 0-.75-.75H7.75A2.25 2.25 0 0 0 5.5 8.75v1.004a.75.75 0 0 0 1.5 0V8.75A.75.75 0 0 1 7.75 8h1.003a.75.75 0 0 0 .75-.75m5.746-.75h1.503a.75.75 0 0 1 .102 1.493L16.752 8h-1.503a.75.75 0 0 1-.102-1.493zm-2.504 0H11.25l-.102.007A.75.75 0 0 0 11.25 8h1.495l.102-.007a.75.75 0 0 0-.102-1.493"/>`
} as const;

export default function SlideHideIcon({ 
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

  const gradientId = 'slidehideicon_gradient';
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