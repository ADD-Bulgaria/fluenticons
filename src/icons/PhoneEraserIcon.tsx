import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.578 1.44a1.5 1.5 0 0 1 2.12 0l1.864 1.86a1.5 1.5 0 0 1 0 2.122l-5.138 5.138a1.5 1.5 0 0 1-2.122 0L9.44 8.699a1.5 1.5 0 0 1 0-2.122zm-4.431 5.845a.5.5 0 0 0 0 .707l1.861 1.862a.5.5 0 0 0 .708 0l1.29-1.29-2.57-2.57zM12.6 2.003 12.5 2h-7A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.11a2.5 2.5 0 0 1-3.405-.122L8.733 9.406a2.5 2.5 0 0 1 0-3.536zM10.5 14.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5"/>`,
  'regular': `<path d="M14.578 1.44a1.5 1.5 0 0 1 2.12 0l1.864 1.86a1.5 1.5 0 0 1 0 2.122l-5.138 5.138a1.5 1.5 0 0 1-2.122 0L9.44 8.699a1.5 1.5 0 0 1 0-2.122zm-4.431 5.845a.5.5 0 0 0 0 .707l1.861 1.862a.5.5 0 0 0 .708 0l1.29-1.29-2.57-2.57zm2.385-5.214A2 2 0 0 0 12 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.61a2.5 2.5 0 0 1-1 .528V16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.603zM7.5 14.5A.5.5 0 0 1 8 14h2a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"/>`
} as const;

export default function PhoneEraserIcon({ 
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

  const gradientId = 'phoneerasericon_gradient';
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