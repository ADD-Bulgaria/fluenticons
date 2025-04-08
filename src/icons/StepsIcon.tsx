import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 3.375C12 2.615 12.616 2 13.375 2h3.75c.76 0 1.375.616 1.375 1.375V9H17V3.5h-3.5v3.625c0 .76-.616 1.375-1.375 1.375H8.5v3.625c0 .76-.616 1.375-1.375 1.375H3.5V17H9v1.5H3.375C2.615 18.5 2 17.884 2 17.125v-3.75C2 12.615 2.616 12 3.375 12H7V8.375C7 7.615 7.616 7 8.375 7H12zm3 8c0-.76.616-1.375 1.375-1.375h3.75c.76 0 1.375.616 1.375 1.375v6.875a3.25 3.25 0 0 1-3.25 3.25h-6.875c-.76 0-1.375-.616-1.375-1.375v-3.75c0-.76.616-1.375 1.375-1.375H15z"/>`,
  'regular': `<path d="M12 3.375C12 2.615 12.616 2 13.375 2h3.75c.76 0 1.375.616 1.375 1.375V9H17V3.5h-3.5v3.625c0 .76-.616 1.375-1.375 1.375H8.5v3.625c0 .76-.616 1.375-1.375 1.375H3.5V17H9v1.5H3.375C2.615 18.5 2 17.884 2 17.125v-3.75C2 12.615 2.616 12 3.375 12H7V8.375C7 7.615 7.616 7 8.375 7H12zM16.375 10c-.76 0-1.375.616-1.375 1.375V15h-3.625c-.76 0-1.375.616-1.375 1.375v3.75c0 .76.616 1.375 1.375 1.375h6.875a3.25 3.25 0 0 0 3.25-3.25v-6.875c0-.76-.616-1.375-1.375-1.375zm.125 5.125V11.5H20v6.75A1.75 1.75 0 0 1 18.25 20H11.5v-3.5h3.625c.76 0 1.375-.616 1.375-1.375"/>`
} as const;

export default function StepsIcon({ 
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

  const gradientId = 'stepsicon_gradient';
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