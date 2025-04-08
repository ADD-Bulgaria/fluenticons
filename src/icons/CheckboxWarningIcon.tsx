import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4.804a2.5 2.5 0 0 1 .216-.62l3.996-7.997c.921-1.844 3.553-1.844 4.474 0L21 14.905V6.25A3.25 3.25 0 0 0 17.75 3zm11.03 6.28-6.754 6.747a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216 6.223-6.217a.75.75 0 1 1 1.06 1.062m-1.119 3.55-3.996 7.998A1.5 1.5 0 0 0 13.508 23H21.5a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.132-1.107-2.686 0m1.844 2.666v3.001a.5.5 0 0 1-1.001 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4.804a2.5 2.5 0 0 1 .216-.62l.44-.88H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v5.742q.135.18.24.391L21 14.905V6.25A3.25 3.25 0 0 0 17.75 3zm11.03 6.28a.75.75 0 1 0-1.06-1.06l-6.223 6.216L7.78 12.22a.75.75 0 0 0-1.06 1.06l2.745 2.746a.75.75 0 0 0 1.06 0zm-1.119 3.55-3.996 7.998A1.5 1.5 0 0 0 13.508 23H21.5a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.132-1.107-2.686 0m1.844 2.666v3.001a.5.5 0 0 1-1.001 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`
} as const;

export default function CheckboxWarningIcon({ 
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

  const gradientId = 'checkboxwarningicon_gradient';
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