import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7 2.115a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858l-3.528-2.117a.5.5 0 0 0-.757.43zM6.25 4h4.248a6.5 6.5 0 0 0-.422 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V8h5.674c.125.528.314 1.03.558 1.5H4.5V14h4.558c.382 0 .692.31.692.692v.058a2.25 2.25 0 0 0 4.5 0v-.058c0-.382.31-.692.692-.692H19.5v-1.732A6.5 6.5 0 0 0 21 11.19v7.56A3.25 3.25 0 0 1 17.75 22H6.25A3.25 3.25 0 0 1 3 18.75V7.25A3.25 3.25 0 0 1 6.25 4"/>`,
  'regular': `<path d="M22 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7 2.115a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858l-3.528-2.117a.5.5 0 0 0-.757.43zm6 2.575a6.5 6.5 0 0 1-1.5 1.078V14h-4.558a.69.69 0 0 0-.692.692v.058a2.25 2.25 0 0 1-4.5 0v-.058A.69.69 0 0 0 9.058 14H4.5V9.5h6.232a6.5 6.5 0 0 1-.558-1.5H4.5v-.75c0-.966.784-1.75 1.75-1.75h3.826a6.5 6.5 0 0 1 .422-1.5H6.25A3.25 3.25 0 0 0 3 7.25v11.5A3.25 3.25 0 0 0 6.25 22h11.5A3.25 3.25 0 0 0 21 18.75zm-1.5 4.31v3.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h3.825a3.751 3.751 0 0 0 7.35 0z"/>`
} as const;

export default function DrawerPlayIcon({ 
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

  const gradientId = 'drawerplayicon_gradient';
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