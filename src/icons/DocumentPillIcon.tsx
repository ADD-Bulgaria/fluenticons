import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H5.5A1.5 1.5 0 0 0 4 3.5v17A1.5 1.5 0 0 0 5.5 22h5.967q.106 0 .208-.015a3.87 3.87 0 0 1 .587-4.722l5-5A3.86 3.86 0 0 1 20 11.129V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m8.53 4.97a2.87 2.87 0 0 0-4.06 0l-5 5a2.871 2.871 0 1 0 4.06 4.06l5-5a2.87 2.87 0 0 0 0-4.06m-3 1.06a1.371 1.371 0 1 1 1.94 1.94L19 17.94 17.06 16zm-2 4.94a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0"/>`,
  'regular': `<path d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v1.43c.479-.2.99-.301 1.5-.301V9.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h5.434a3.9 3.9 0 0 1-.523-1.5H6.25a.75.75 0 0 1-.75-.75zM17.44 8.5H14a.5.5 0 0 1-.5-.5V4.56zm4.59 4.47a2.87 2.87 0 0 0-4.06 0l-5 5a2.871 2.871 0 1 0 4.06 4.06l5-5a2.87 2.87 0 0 0 0-4.06m-3 1.06a1.371 1.371 0 1 1 1.94 1.94L19 17.94 17.06 16zm-2 4.94a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function DocumentPillIcon({ 
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

  const gradientId = 'documentpillicon_gradient';
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