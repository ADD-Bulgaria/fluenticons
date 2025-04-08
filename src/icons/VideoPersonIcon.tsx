import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30 20a6 6 0 1 1-12 0 6 6 0 0 1 12 0M4 11.75A3.75 3.75 0 0 1 7.75 8h32.5A3.75 3.75 0 0 1 44 11.75v24.5A3.75 3.75 0 0 1 40.25 40H7.75A3.75 3.75 0 0 1 4 36.25zm3.75-1.25c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25A3.25 3.25 0 0 1 17.25 28h13.5A3.25 3.25 0 0 1 34 31.25v6.25h6.25c.69 0 1.25-.56 1.25-1.25v-24.5c0-.69-.56-1.25-1.25-1.25z"/>`,
  'regular': `<path d="M24 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7M4 11.75A3.75 3.75 0 0 1 7.75 8h32.5A3.75 3.75 0 0 1 44 11.75v24.5A3.75 3.75 0 0 1 40.25 40H7.75A3.75 3.75 0 0 1 4 36.25zm3.75-1.25c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25A3.25 3.25 0 0 1 17.25 28h13.5A3.25 3.25 0 0 1 34 31.25v6.25h6.25c.69 0 1.25-.56 1.25-1.25v-24.5c0-.69-.56-1.25-1.25-1.25zm23.75 27v-6.25a.75.75 0 0 0-.75-.75h-13.5a.75.75 0 0 0-.75.75v6.25z"/>`
} as const;

export default function VideoPersonIcon({ 
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

  const gradientId = 'videopersonicon_gradient';
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