import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.551 2.442c.854-.478 1.943-.59 2.984-.326.507.128.94.457 1.2.91l.898 1.566a2.5 2.5 0 0 1-.829 3.354l-.79.502c-.327.207-.447.524-.372.775.268.898.861 1.894 1.513 2.576.194.204.55.252.898.049l.437-.255a2.5 2.5 0 0 1 3.44.938l.805 1.435c.263.47.306 1.031.12 1.536-.371 1.003-1.086 1.812-1.965 2.217-.893.411-1.938.394-2.884-.237-1.498-.998-3.303-2.678-4.938-5.48-1.656-2.84-2.073-5.257-2.026-7.059.03-1.153.64-2.015 1.509-2.501m9.192-.38a.5.5 0 1 0-.486.874l.384.214a8.5 8.5 0 0 1 4.33 6.584l.032.315a.5.5 0 1 0 .994-.1l-.031-.314a9.5 9.5 0 0 0-4.84-7.36zm-1.172 2.68a.5.5 0 0 1 .686-.171l.124.074A6.5 6.5 0 0 1 15.45 9.15l.044.267a.5.5 0 1 1-.986.164l-.045-.266a5.5 5.5 0 0 0-2.595-3.813l-.124-.074a.5.5 0 0 1-.172-.686"/>`,
  'regular': `<path d="M6.535 2.116c-1.04-.264-2.13-.152-2.984.326-.87.486-1.48 1.348-1.51 2.501-.046 1.802.371 4.22 2.027 7.058 1.635 2.803 3.44 4.483 4.938 5.481.946.631 1.991.648 2.884.237.88-.405 1.594-1.214 1.965-2.217a1.84 1.84 0 0 0-.12-1.536l-.954-1.702a2.5 2.5 0 0 0-3.074-1.114l-.666.255c-.323.123-.62.066-.788-.1-.565-.555-.969-1.308-1.152-2.12-.058-.256.06-.558.342-.771l.601-.454a2.5 2.5 0 0 0 .663-3.239l-.972-1.695a1.93 1.93 0 0 0-1.2-.91M3.041 4.97c.02-.774.412-1.327.998-1.655.602-.337 1.424-.44 2.25-.23a.93.93 0 0 1 .579.439l.971 1.695a1.5 1.5 0 0 1-.397 1.943l-.601.454c-.52.392-.88 1.064-.716 1.789.222.982.713 1.913 1.427 2.614.522.512 1.266.542 1.846.32l.666-.255a1.5 1.5 0 0 1 1.845.668l.953 1.703c.12.214.14.47.055.7-.29.785-.835 1.374-1.445 1.655-.597.275-1.272.267-1.911-.16-1.371-.914-3.07-2.481-4.63-5.153C3.37 8.817 3 6.583 3.042 4.97m9.702-2.908a.5.5 0 1 0-.486.874l.384.214a8.5 8.5 0 0 1 4.33 6.584l.032.315a.5.5 0 1 0 .994-.1l-.031-.314a9.5 9.5 0 0 0-4.84-7.36zm-1.172 2.68a.5.5 0 0 1 .686-.171l.124.074A6.5 6.5 0 0 1 15.45 9.15l.044.267a.5.5 0 1 1-.986.165l-.045-.267a5.5 5.5 0 0 0-2.595-3.812l-.124-.075a.5.5 0 0 1-.172-.686"/>`
} as const;

export default function CallConnectingIcon({ 
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

  const gradientId = 'callconnectingicon_gradient';
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