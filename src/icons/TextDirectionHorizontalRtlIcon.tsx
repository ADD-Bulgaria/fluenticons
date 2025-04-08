import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.25 3a1 1 0 0 0-.923.615l-3.75 9a1 1 0 1 0 1.846.77L14.416 11h3.667l.994 2.385a1 1 0 0 0 1.846-.77l-3.75-9A1 1 0 0 0 16.25 3m0 3.6 1 2.4h-2zM6.707 5.293a1 1 0 0 0-1.414 0L3.366 7.227a1 1 0 0 0-.366.77v.006c0 .31.143.588.366.77l1.927 1.934a1 1 0 0 0 1.414-1.414L6.414 9H11a1 1 0 0 0 0-2H6.414l.293-.293a1 1 0 0 0 0-1.414m-1.414 9a1 1 0 0 1 1.414 1.414L6.414 16H20a1 1 0 0 1 0 2H6.414l.293.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"/>`,
  'regular': `<path d="m20.947 12.97-3.753-9.496a.75.75 0 0 0-1.345-.104l-.05.105-3.747 9.5a.75.75 0 0 0 1.352.643l.043-.092.997-2.526h4.113l.995 2.52a.75.75 0 0 0 .876.454l.098-.031a.75.75 0 0 0 .452-.876zm-4.45-7.178L17.964 9.5h-2.928zM12 7.75a.75.75 0 0 1-.75.75H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06L5.56 7h5.69a.75.75 0 0 1 .75.75m9 9.5a.75.75 0 0 1-.75.75H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h14.69a.75.75 0 0 1 .75.75"/>`
} as const;

export default function TextDirectionHorizontalRtlIcon({ 
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

  const gradientId = 'textdirectionhorizontalrtlicon_gradient';
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