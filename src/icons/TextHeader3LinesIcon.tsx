import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.574 3.812c-.52-.167-1.367.014-1.832.533a1 1 0 0 1-1.41.076 1 1 0 0 1-.076-1.412c1-1.117 2.672-1.504 3.926-1.102 1.674.536 2.735 2.516 1.589 4.222a3 3 0 0 1-.295.373q.156.167.295.373c1.146 1.706.085 3.686-1.589 4.223-1.254.401-2.925.014-3.926-1.102a1 1 0 0 1 .075-1.413 1 1 0 0 1 1.41.076c.466.52 1.313.7 1.832.534a.98.98 0 0 0 .617-.536.68.68 0 0 0-.077-.666c-.28-.417-.74-.482-1.467-.488h-.133a1 1 0 0 1 0-2l.086-.001h.047c.727-.006 1.187-.072 1.467-.489a.68.68 0 0 0 .077-.666.98.98 0 0 0-.617-.535M4 3a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V7.5h3v2.495a1 1 0 1 0 2 0V3.002a1 1 0 1 0-2 0V5.5H4zM3 19a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M3.5 2.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0V7h4v3.244a.75.75 0 0 0 1.5 0V2.752a.75.75 0 1 0-1.5 0V5.5h-4zm-1.5 17a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 14a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM14.586 3.577c-.684-.206-1.72.015-2.292.616a.75.75 0 0 1-1.088-1.033c.983-1.034 2.616-1.38 3.813-1.019.812.245 1.462.802 1.778 1.52.324.734.276 1.6-.255 2.345q-.208.29-.453.496.245.206.453.496c.53.746.579 1.611.255 2.345-.316.718-.966 1.275-1.778 1.52-1.197.362-2.83.015-3.813-1.019a.75.75 0 1 1 1.088-1.033c.572.601 1.608.823 2.291.616.429-.13.715-.405.84-.688.117-.266.11-.57-.105-.871-.394-.552-1.06-.611-1.836-.616h-.129a.75.75 0 0 1 0-1.5h.129c.776-.005 1.442-.063 1.836-.616.214-.301.222-.604.104-.87-.124-.284-.41-.56-.838-.689"/>`
} as const;

export default function TextHeader3LinesIcon({ 
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

  const gradientId = 'textheader3linesicon_gradient';
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