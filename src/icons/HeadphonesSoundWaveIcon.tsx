import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24v4h-5.25c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h2A5.75 5.75 0 0 0 44 38.25V24c0-11.046-8.954-20-20-20S4 12.954 4 24v14.25A5.75 5.75 0 0 0 9.75 44h2c.69 0 1.25-.56 1.25-1.25v-13.5c0-.69-.56-1.25-1.25-1.25H6.5zm16.25-.75v21.5a1.25 1.25 0 1 0 2.5 0v-21.5a1.25 1.25 0 1 0-2.5 0M18.25 28c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25M31 29.25a1.25 1.25 0 1 0-2.5 0v9.5a1.25 1.25 0 1 0 2.5 0z"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24v4h-5.25c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h2A5.75 5.75 0 0 0 44 38.25V24c0-11.046-8.954-20-20-20S4 12.954 4 24v14.25A5.75 5.75 0 0 0 9.75 44h2c.69 0 1.25-.56 1.25-1.25v-13.5c0-.69-.56-1.25-1.25-1.25H6.5zm31 6.5h4v7.75a3.25 3.25 0 0 1-3.25 3.25h-.75zm-31 0h4v11h-.75a3.25 3.25 0 0 1-3.25-3.25zm16.25-7.25v21.5a1.25 1.25 0 1 0 2.5 0v-21.5a1.25 1.25 0 1 0-2.5 0M18.25 28c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 1 1-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25M31 29.25a1.25 1.25 0 1 0-2.5 0v9.5a1.25 1.25 0 1 0 2.5 0z"/>`
} as const;

export default function HeadphonesSoundWaveIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'headphonessoundwaveicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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