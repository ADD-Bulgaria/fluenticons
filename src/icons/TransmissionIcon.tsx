import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2a2.75 2.75 0 0 0-.75 5.396v3.854a.75.75 0 0 0 1.5 0V7.396A2.751 2.751 0 0 0 12 2M5.5 4A2.5 2.5 0 0 0 3 6.5v12a2.5 2.5 0 0 0 5 0V15h1.5v3.5a2.5 2.5 0 0 0 5 0V15H19a2 2 0 0 0 2-2V6.5a2.5 2.5 0 0 0-5 0V10h-2.25v1.5h3.75v-5a1 1 0 1 1 2 0V13a.5.5 0 0 1-.5.5h-6v5a1 1 0 1 1-2 0v-5H6.5v5a1 1 0 1 1-2 0v-12a1 1 0 0 1 2 0v5h3.75V10H8V6.5A2.5 2.5 0 0 0 5.5 4"/>`,
  'regular': `<path d="M12 2a2.75 2.75 0 0 0-.75 5.396v3.854a.75.75 0 0 0 1.5 0V7.396A2.751 2.751 0 0 0 12 2m-1.25 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M3 6.5a2.5 2.5 0 0 1 5 0V10h2.25v1.5H6.5v-5a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5H11v5a1 1 0 1 0 2 0v-5h6a.5.5 0 0 0 .5-.5V6.5a1 1 0 1 0-2 0v5h-3.75V10H16V6.5a2.5 2.5 0 0 1 5 0V13a2 2 0 0 1-2 2h-4.5v3.5a2.5 2.5 0 0 1-5 0V15H8v3.5a2.5 2.5 0 0 1-5 0z"/>`
} as const;

export default function TransmissionIcon({ 
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

  const gradientId = 'transmissionicon_gradient';
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