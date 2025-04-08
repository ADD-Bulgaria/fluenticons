import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 9a3.75 3.75 0 0 0-3.75 3.75v15.207l-.484.445a6.25 6.25 0 1 0 8.467 0l-.483-.445V12.75A3.75 3.75 0 0 0 24 9m-6.75 3.75a6.75 6.75 0 0 1 13.5 0v13.925a9.25 9.25 0 1 1-13.5 0zM28 33a4 4 0 1 1-5.5-3.71V18.5a1.5 1.5 0 0 1 3 0v10.79A4 4 0 0 1 28 33"/>`,
  'regular': `<path d="M24 8.5a3.5 3.5 0 0 0-3.5 3.5v15.787l-.458.376a6.25 6.25 0 1 0 7.916 0l-.458-.376V12A3.5 3.5 0 0 0 24 8.5M18 12a6 6 0 0 1 12 0v14.631a8.75 8.75 0 1 1-12 0zm10 21a4 4 0 1 1-5.25-3.8V18.25a1.25 1.25 0 1 1 2.5 0V29.2A4 4 0 0 1 28 33"/>`
} as const;

export default function TemperatureIcon({ 
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

  const gradientId = 'temperatureicon_gradient';
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