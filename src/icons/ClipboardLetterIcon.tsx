import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m3.5-1.5h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h4.919a1.75 1.75 0 0 1-.016-1.465l1.55-3.463.03-.071 2.67-5.966a1.75 1.75 0 0 1 3.194 0L20 14.171V6.25A2.25 2.25 0 0 0 17.75 4h-1.764a2.25 2.25 0 0 0-2.236-2m3.935 9.444a.75.75 0 0 0-1.37 0l-2.677 5.985-.014.03-1.559 3.485a.75.75 0 1 0 1.37.612l1.367-3.056h4.396l1.367 3.056a.75.75 0 1 0 1.37-.612l-1.56-3.485-.013-.03zM17 13.587 18.527 17h-3.054z"/>`,
  'regular': `<path d="M15.986 4a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h4.919a1.75 1.75 0 0 1-.016-1.465l.015-.035H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v4.599q.054.09.097.186L20 14.171V6.25A2.25 2.25 0 0 0 17.75 4zm.009.096L16 4.25q0-.078-.005-.154M10.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m7.435 7.944a.75.75 0 0 0-1.37 0l-2.677 5.985-.014.03-1.559 3.485a.75.75 0 1 0 1.37.612l1.367-3.056h4.396l1.367 3.056a.75.75 0 1 0 1.37-.612l-1.56-3.485-.013-.03zM17 13.587 18.527 17h-3.054z"/>`
} as const;

export default function ClipboardLetterIcon({ 
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

  const gradientId = 'clipboardlettericon_gradient';
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