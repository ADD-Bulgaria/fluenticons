import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.002 12.002C22.002 6.478 17.524 2 12 2S2 6.478 2 12.002c0 5.523 4.477 10.001 10.001 10.001s10.002-4.478 10.002-10.001m-14.25-2a1.25 1.25 0 1 1 2.498 0 1.25 1.25 0 0 1-2.499 0m6 0a1.25 1.25 0 1 1 2.498 0 1.25 1.25 0 0 1-2.499 0M15.75 14h.6a.75.75 0 0 1 0 1.5h-.6c-.618 0-1.337.16-1.998.418-.669.26-1.197.588-1.472.862a.75.75 0 1 1-1.06-1.06c.475-.476 1.212-.898 1.989-1.2.784-.306 1.69-.52 2.541-.52"/>`,
  'regular': `<path d="M10.25 10a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m6 0a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m-.5 4c-.85 0-1.757.213-2.541.519-.777.302-1.514.724-1.99 1.2a.75.75 0 1 0 1.061 1.06c.275-.274.803-.602 1.473-.862.66-.257 1.379-.418 1.997-.418h.6a.75.75 0 0 0 0-1.5zm6.252-2c0-5.524-4.478-10.002-10.002-10.002S2 6.476 2 12c-.001 5.523 4.476 10 10 10s10.002-4.477 10.002-10M3.499 12a8.502 8.502 0 1 1 17.003 0 8.502 8.502 0 0 1-17.003 0"/>`
} as const;

export default function EmojiSadSlightIcon({ 
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

  const gradientId = 'emojisadslighticon_gradient';
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