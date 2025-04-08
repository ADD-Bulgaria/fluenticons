import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16.97 18.056 1.187-1.174a8.707 8.707 0 1 0-12.314 0q.444.444 1.102 1.09l3.491 3.396a2.25 2.25 0 0 0 3.128 0 658 658 0 0 0 3.406-3.312M12 7a.75.75 0 0 1 .75.75V10h2.5a.75.75 0 0 1 0 1.5h-2.5v2.25a.75.75 0 0 1-1.5 0V11.5h-2.5a.75.75 0 0 1 0-1.5h2.5V7.75A.75.75 0 0 1 12 7"/>`,
  'regular': `<path d="M8 10.75a.75.75 0 0 1 .75-.75h2.5V7.75a.75.75 0 0 1 1.5 0V10h2.5a.75.75 0 0 1 0 1.5h-2.5v2.25a.75.75 0 0 1-1.5 0V11.5h-2.5a.75.75 0 0 1-.75-.75M5.843 4.568a8.707 8.707 0 0 1 12.314 12.314l-1.187 1.174q-1.312 1.287-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.49-3.396q-.66-.646-1.103-1.09a8.707 8.707 0 0 1 0-12.314m11.254 1.06A7.207 7.207 0 1 0 6.904 15.822L8.39 17.29q1.228 1.201 3.088 3a.75.75 0 0 0 1.043 0l3.395-3.3q.703-.691 1.18-1.168a7.207 7.207 0 0 0 0-10.192"/>`
} as const;

export default function LocationAddIcon({ 
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

  const gradientId = 'locationaddicon_gradient';
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