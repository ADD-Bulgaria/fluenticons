import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 5a8 8 0 0 0-5.662 13.652 1 1 0 1 1-1.416 1.413A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.922 7.065 1 1 0 0 1-1.416-1.413A8 8 0 0 0 12 5m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 6.828 2.828 1 1 0 0 0 1.415 1.415 6 6 0 1 0-8.485 0 1 1 0 1 0 1.414-1.415A3.98 3.98 0 0 1 8 13"/>`,
  'regular': `<path d="M12 4.5a8.5 8.5 0 0 0-6.016 14.505.75.75 0 0 1-1.061 1.06A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.923 7.065.75.75 0 0 1-1.061-1.06A8.5 8.5 0 0 0 12 4.5M12 8a5 5 0 0 0-3.534 8.537.75.75 0 0 1-1.06 1.061 6.5 6.5 0 1 1 9.188 0 .75.75 0 0 1-1.06-1.06A5 5 0 0 0 12 8m0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M11 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>`
} as const;

export default function CommunicationIcon({ 
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

  const gradientId = 'communicationicon_gradient';
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