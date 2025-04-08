import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h8a3.25 3.25 0 0 1 3.25 3.25V7.5h2.25A3.25 3.25 0 0 1 22 10.75v8A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25V16.5H5.25A3.25 3.25 0 0 1 2 13.25zm13 0a1.75 1.75 0 0 0-1.75-1.75h-8A1.75 1.75 0 0 0 3.5 5.25v8c0 .966.784 1.75 1.75 1.75H7.5v-4.25c0-.637.183-1.231.5-1.733A3.3 3.3 0 0 1 9.017 8a3.24 3.24 0 0 1 1.733-.5H15zm1 9.733-.055.084A3.25 3.25 0 0 1 13.25 16.5H9v2.25c0 .966.784 1.75 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9H16.5v4.25c0 .637-.183 1.231-.5 1.733"/>`,
  'regular': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h8a3.25 3.25 0 0 1 3.25 3.25V7.5h2.25A3.25 3.25 0 0 1 22 10.75v8A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25V16.5H5.25A3.25 3.25 0 0 1 2 13.25zm13 0a1.75 1.75 0 0 0-1.75-1.75h-8A1.75 1.75 0 0 0 3.5 5.25v8c0 .966.784 1.75 1.75 1.75H7.5v-4.25a3.3 3.3 0 0 1 .142-.952A3.26 3.26 0 0 1 10.75 7.5H15zm-6 9.31V15h1.44L15 10.44V9h-.44zM12.44 9h-1.69a2 2 0 0 0-.2.011L9.01 10.55a2 2 0 0 0-.01.2v1.69zm4.06 0v4.25a3.25 3.25 0 0 1-3.25 3.25H9v2.25c0 .966.784 1.75 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9zm-3.94 6h.69A1.75 1.75 0 0 0 15 13.25v-.69z"/>`
} as const;

export default function ShapeIntersectIcon({ 
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

  const gradientId = 'shapeintersecticon_gradient';
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