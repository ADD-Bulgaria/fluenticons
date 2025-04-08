import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.099 4.38a1.25 1.25 0 1 0 .485 2.453 17.7 17.7 0 0 1 6.833 0 1.25 1.25 0 1 0 .485-2.452 20.2 20.2 0 0 0-7.803 0m-5.821 5.067a1.25 1.25 0 1 0-1.39-2.078 20.1 20.1 0 0 0-5.518 5.518 1.25 1.25 0 1 0 2.077 1.39 17.6 17.6 0 0 1 4.83-4.83M35.113 7.37a1.25 1.25 0 0 0-1.391 2.078 17.6 17.6 0 0 1 4.83 4.83 1.25 1.25 0 1 0 2.078-1.39 20.1 20.1 0 0 0-5.517-5.518M6.834 20.583a1.25 1.25 0 0 0-2.453-.485 20.2 20.2 0 0 0 0 7.804 1.25 1.25 0 0 0 2.452-.485 17.7 17.7 0 0 1 0-6.834m36.786-.485a1.25 1.25 0 0 0-2.453.485 17.7 17.7 0 0 1 0 6.834 1.25 1.25 0 0 0 2.453.485 20.2 20.2 0 0 0 0-7.804M9.447 33.722a1.25 1.25 0 1 0-2.077 1.391 20.1 20.1 0 0 0 5.517 5.518 1.25 1.25 0 0 0 1.39-2.078 17.6 17.6 0 0 1-4.83-4.83m31.184 1.391a1.25 1.25 0 1 0-2.078-1.39 17.6 17.6 0 0 1-4.83 4.83 1.25 1.25 0 0 0 1.39 2.078 20.1 20.1 0 0 0 5.518-5.518m-20.047 6.054a1.25 1.25 0 1 0-.485 2.452 20.2 20.2 0 0 0 7.803 0 1.25 1.25 0 1 0-.485-2.452 17.7 17.7 0 0 1-6.833 0M39 24c0 8.284-6.715 15-15 15S9 32.284 9 24 15.716 9 24 9c8.285 0 15 6.716 15 15m-18.5-4.25a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0M29.75 22a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m-14.049 7.27a1.25 1.25 0 0 0-.162 1.76A10.98 10.98 0 0 0 24 35a10.98 10.98 0 0 0 8.461-3.97 1.25 1.25 0 1 0-1.922-1.599A8.48 8.48 0 0 1 24 32.5a8.48 8.48 0 0 1-6.539-3.069 1.25 1.25 0 0 0-1.76-.162"/>`,
  'regular': `<path d="M20.099 4.38a1.25 1.25 0 1 0 .485 2.453 17.7 17.7 0 0 1 6.833 0 1.25 1.25 0 1 0 .485-2.452 20.2 20.2 0 0 0-7.803 0m-5.821 5.067a1.25 1.25 0 1 0-1.39-2.078 20.1 20.1 0 0 0-5.518 5.518 1.25 1.25 0 1 0 2.077 1.39 17.6 17.6 0 0 1 4.83-4.83M35.113 7.37a1.25 1.25 0 0 0-1.391 2.078 17.6 17.6 0 0 1 4.83 4.83 1.25 1.25 0 1 0 2.078-1.39 20.1 20.1 0 0 0-5.517-5.518M6.834 20.583a1.25 1.25 0 0 0-2.453-.485 20.2 20.2 0 0 0 0 7.804 1.25 1.25 0 0 0 2.452-.485 17.7 17.7 0 0 1 0-6.834m36.786-.485a1.25 1.25 0 0 0-2.453.485 17.7 17.7 0 0 1 0 6.834 1.25 1.25 0 0 0 2.453.485 20.2 20.2 0 0 0 0-7.804M9.447 33.722a1.25 1.25 0 1 0-2.077 1.391 20.1 20.1 0 0 0 5.517 5.518 1.25 1.25 0 0 0 1.39-2.078 17.6 17.6 0 0 1-4.83-4.83m31.184 1.391a1.25 1.25 0 1 0-2.078-1.39 17.6 17.6 0 0 1-4.83 4.83 1.25 1.25 0 0 0 1.39 2.078 20.1 20.1 0 0 0 5.518-5.518m-20.047 6.054a1.25 1.25 0 1 0-.485 2.452 20.2 20.2 0 0 0 7.803 0 1.25 1.25 0 1 0-.485-2.452 17.7 17.7 0 0 1-6.833 0M18.25 22a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M32 19.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m-14.539 9.681a1.25 1.25 0 1 0-1.922 1.599A10.98 10.98 0 0 0 24 35a10.98 10.98 0 0 0 8.461-3.97 1.25 1.25 0 1 0-1.922-1.599A8.48 8.48 0 0 1 24 32.5a8.48 8.48 0 0 1-6.539-3.069"/>`
} as const;

export default function EmojiHintIcon({ 
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

  const gradientId = 'emojihinticon_gradient';
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