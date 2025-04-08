import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.78 3.744c2.34-2.337 6.137-2.328 8.475.01 2.34 2.34 2.346 6.142.004 8.481l-12.038 12.02c-2.34 2.337-6.137 2.328-8.475-.01-2.34-2.34-2.346-6.142-.004-8.48zm1.933 12.908 5.486-5.478a4.5 4.5 0 0 0-.005-6.36 4.5 4.5 0 0 0-6.354-.009l-5.49 5.483zm-5.932 4.628a.75.75 0 0 0-1.06-1.06l-1.978 1.977a1.05 1.05 0 0 1-1.484 0l-.478-.477a.75.75 0 0 0-1.06 1.06l.477.477a2.55 2.55 0 0 0 3.606 0z"/>`,
  'regular': `<path d="M11.781 20.28a.75.75 0 0 0-1.06-1.06l-1.978 1.977a1.05 1.05 0 0 1-1.484 0l-.478-.477a.75.75 0 0 0-1.06 1.06l.477.477a2.55 2.55 0 0 0 3.606 0zM24.255 3.754c-2.338-2.338-6.135-2.347-8.475-.01L3.742 15.764c-2.342 2.34-2.336 6.141.004 8.482 2.338 2.337 6.136 2.346 8.475.01l12.038-12.02c2.342-2.34 2.336-6.142-.004-8.482m-13.967 7.594 6.364 6.364-5.49 5.482a4.5 4.5 0 0 1-6.355-.01 4.5 4.5 0 0 1-.005-6.358zm12.911-.174-5.486 5.478-6.364-6.364 5.49-5.483a4.5 4.5 0 0 1 6.355.01 4.5 4.5 0 0 1 .005 6.359"/>`
} as const;

export default function PillIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'pillicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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