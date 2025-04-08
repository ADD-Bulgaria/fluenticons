import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.75 3.75a1 1 0 0 0-2 0v7.5a1 1 0 1 0 2 0v-4.5a1 1 0 0 0 0-2zM23 4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V6.75a1 1 0 1 0 0-2zm-9-1a1 1 0 0 1 1 1v.75h.25a1 1 0 1 1 0 2H15V11a1 1 0 1 1-2 0V8.521a1 1 0 0 1-.803.96l-2.5.5a1 1 0 0 1-1.145-1.297l1.5-4.5a1 1 0 1 1 1.898.632l-.955 2.866.81-.162A1 1 0 0 1 13 8.48V4a1 1 0 0 1 1-1M0 4.75a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1c0 1.752-.868 4.452-3.594 5.664a1 1 0 0 1-.812-1.828C1.931 7.992 2.62 6.824 2.877 5.75H1a1 1 0 0 1-1-1M16.5 5a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2h-.5v2.22l.758-.19a1 1 0 0 1 .486 1.94l-2 .5A1 1 0 0 1 16.5 9.5zm-5.316 12.77 4.299-5.159a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414z"/>`,
  'regular': `<path d="M7.75 3.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 1 0 1.5 0V6.5H8A.75.75 0 1 0 8 5h-.25zm14.25 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 1 0 1.5 0V6.5h.25a.75.75 0 0 0 0-1.5H22zM14.25 3a.75.75 0 0 1 .75.75V5h.25a.75.75 0 0 1 0 1.5H15v4.75a.75.75 0 1 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75M1 4.75A.75.75 0 0 1 1.75 4h3a.75.75 0 0 1 .75.75c0 1.69-.838 4.277-3.445 5.436a.75.75 0 1 1-.61-1.371C3.002 8.124 3.726 6.71 3.935 5.5H1.75A.75.75 0 0 1 1 4.75m10.965-.024a.75.75 0 0 0-1.43-.452l-1.5 4.75a.75.75 0 0 0 .862.962l2.5-.5a.75.75 0 0 0-.294-1.471l-1.255.25zm4.535.044a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H18v2.77l1.068-.267a.75.75 0 0 1 .364 1.455l-2 .5a.75.75 0 0 1-.932-.728zm-5.3 13.369-1.92-1.92a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.106-.05l5-6a.75.75 0 0 0-1.152-.96z"/>`
} as const;

export default function TextProofingToolsIcon({ 
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

  const gradientId = 'textproofingtoolsicon_gradient';
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