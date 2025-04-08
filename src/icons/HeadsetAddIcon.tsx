import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6a6.5 6.5 0 0 0 1.5-.174V15a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-4.022A6.47 6.47 0 0 0 17.5 13M12.022 3c-.305.476-.55.994-.723 1.544A5.5 5.5 0 0 0 6.5 10v1H9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7q-.26 0-.5-.063v.313a2.25 2.25 0 0 0 2.096 2.245l.154.005h1.128a2.251 2.251 0 1 1 0 1.5H8.75a3.75 3.75 0 0 1-3.745-3.55L5 17.25V10a7 7 0 0 1 7-7z"/>`,
  'regular': `<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm-.5 6a6.5 6.5 0 0 0 1.5-.174V15a2 2 0 0 1-1.85 1.994L17 17h-2a1 1 0 0 1-.993-.883L14 16v-4.022c.463.297.967.536 1.5.709V15.5H17a.5.5 0 0 0 .492-.41L17.5 15zM12.022 3c-.305.476-.55.994-.723 1.544A5.5 5.5 0 0 0 6.5 10v1H9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6.5v.25a2.25 2.25 0 0 0 2.096 2.245l.154.005h1.128a2.251 2.251 0 1 1 0 1.5H8.75a3.75 3.75 0 0 1-3.745-3.55L5 17.25V10a7 7 0 0 1 7-7zM12 19.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-3.5-7h-2v3h2z"/>`
} as const;

export default function HeadsetAddIcon({ 
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

  const gradientId = 'headsetaddicon_gradient';
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