import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6.5c-.49 0-.924.232-1.201.601A2.25 2.25 0 0 1 7.2 4.398 6 6 0 0 1 18 8v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2h4a1.5 1.5 0 0 0 0-3m-2.25 11a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M9.75 17.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm1.049-10.399A1.5 1.5 0 1 1 12 9.5H8a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8A6 6 0 0 0 7.201 4.398 2.25 2.25 0 1 0 10.8 7.101M12 5c-.978 0-1.85.468-2.4 1.2a.75.75 0 0 1-1.2-.9A4.5 4.5 0 0 1 16.5 8v12a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-8.5A.5.5 0 0 1 8 11h4a3 3 0 1 0 0-6"/>`
} as const;

export default function DoorTagIcon({ 
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

  const gradientId = 'doortagicon_gradient';
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