import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7 4h10a1 1 0 0 1 .117 1.993L17 6h-4.649l8.01 3.102c.77.298.855 1.33.195 1.764l-.11.064-14 6.965a1 1 0 0 1-.993-1.732l.102-.058 11.97-5.956L6.64 5.933c-.994-.386-.766-1.821.241-1.927zh10zm13 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`,
  'regular': `<path d="M3.75 17.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M6.749 4.005h10.505a.75.75 0 0 1 .101 1.493l-.102.007h-6.502L20.524 9.3a.75.75 0 0 1 .16 1.313l-.095.057L6.1 17.928a.75.75 0 0 1-.76-1.29l.088-.051 12.976-6.5L6.477 5.454c-.74-.288-.575-1.351.167-1.443zh10.505zM19.75 4a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"/>`
} as const;

export default function GestureIcon({ 
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

  const gradientId = 'gestureicon_gradient';
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