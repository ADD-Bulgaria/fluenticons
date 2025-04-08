import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M21.803 6.086c.899-1.821 3.495-1.821 4.394 0l4.852 9.832 10.85 1.576c2.01.293 2.813 2.762 1.358 4.18l-7.85 7.653 1.853 10.806c.343 2.001-1.758 3.528-3.555 2.583L24 37.614l-9.705 5.102c-1.797.945-3.898-.582-3.555-2.583l1.854-10.806-7.851-7.654c-1.455-1.417-.652-3.886 1.357-4.178l10.85-1.577z"/>`,
  'filled': `<path d="M21.803 6.085c.899-1.82 3.495-1.82 4.394 0l4.852 9.832 10.85 1.577c2.01.292 2.813 2.762 1.358 4.179l-7.85 7.653 1.853 10.807c.343 2-1.758 3.527-3.555 2.582L24 37.613l-9.705 5.102c-1.797.945-3.898-.581-3.555-2.583l1.854-10.806-7.851-7.653c-1.455-1.417-.652-3.887 1.357-4.179l10.85-1.577z"/>`,
  'regular': `<path d="M21.803 6.085c.899-1.82 3.495-1.82 4.394 0l4.852 9.832 10.85 1.577c2.01.292 2.813 2.762 1.358 4.179l-7.85 7.653 1.853 10.807c.343 2-1.758 3.527-3.555 2.582L24 37.613l-9.705 5.102c-1.797.945-3.898-.581-3.555-2.583l1.854-10.806-7.851-7.653c-1.455-1.417-.652-3.887 1.357-4.179l10.85-1.577zM24 7.283l-4.82 9.764a2.45 2.45 0 0 1-1.844 1.34L6.56 19.954l7.798 7.601a2.45 2.45 0 0 1 .704 2.169l-1.84 10.732 9.638-5.067a2.45 2.45 0 0 1 2.28 0l9.638 5.067-1.84-10.732a2.45 2.45 0 0 1 .704-2.169l7.798-7.6-10.776-1.566a2.45 2.45 0 0 1-1.845-1.34z"/>`
} as const;

export default function StarIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'staricon_gradient';
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