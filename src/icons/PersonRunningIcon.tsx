import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 4.5a2 2 0 1 1 2.612 1.905L15.707 8H17.5a1.5 1.5 0 0 1 0 3h-3.223c-.63 0-1.234-.25-1.68-.696l-.097-.097-1.043 1.043 1.397 1.396A.5.5 0 0 1 13 13v3.5a1.5 1.5 0 0 1-3 0v-1.793L8.453 13.16l-1.002.752a2.94 2.94 0 0 1-1.765.588H2.5a1.5 1.5 0 0 1 0-3h4.25A2.25 2.25 0 0 0 9 9.25V8h1a.5.5 0 0 0 0-1H8.5a.5.5 0 0 0-.5.5v1.75a1.25 1.25 0 1 1-2.5 0V7A2.5 2.5 0 0 1 8 4.5z"/>`,
  'regular': `<path d="M13.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.326.62A2.5 2.5 0 1 0 11 4.5H8A2.5 2.5 0 0 0 5.5 7v1.75c0 .688.397 1.283.974 1.569L5.793 11H2.75a1.75 1.75 0 1 0 0 3.5h2.936c.637 0 1.256-.207 1.765-.588l1.002-.752L10 14.707v1.543a1.75 1.75 0 1 0 3.5 0V13a.5.5 0 0 0-.146-.354L11.707 11l.793-.793.097.097c.446.446 1.05.696 1.68.696h2.973a1.75 1.75 0 1 0 0-3.5h-1.543zm-1.048.365 1.368 1.369a.5.5 0 0 0 .354.146h1.75a.75.75 0 0 1 0 1.5h-2.973c-.365 0-.715-.145-.973-.403l-.45-.45a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 0 .707l1.854 1.853v3.043a.75.75 0 0 1-1.5 0V14.5a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 8.2 12.1l-1.349 1.012a1.94 1.94 0 0 1-1.165.388H2.75a.75.75 0 0 1 0-1.5H6a.5.5 0 0 0 .354-.146l1.439-1.44A1.75 1.75 0 0 0 9 8.75V8h1a.5.5 0 0 0 0-1H8.5a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V7A1.5 1.5 0 0 1 8 5.5h3.208a2.5 2.5 0 0 0 2.57 1.485"/>`
} as const;

export default function PersonRunningIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'personrunningicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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