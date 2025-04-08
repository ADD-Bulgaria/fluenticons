import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 3.558V5a1 1 0 1 0 2 0V3.558A8.504 8.504 0 0 1 20.442 11H19a1 1 0 1 0 0 2h1.44c-.224 1.817-1.044 3.448-2.24 4.74a.75.75 0 1 0 1.1 1.02C20.943 16.985 22 14.633 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.633 1.057 4.985 2.7 6.76a.75.75 0 1 0 1.1-1.02C4.604 16.449 3.784 14.818 3.56 13H5a1 1 0 1 0 0-2H3.558a8.46 8.46 0 0 1 1.766-4.262l.969.97a1 1 0 0 0 1.414-1.415l-.969-.969A8.46 8.46 0 0 1 11 3.558m5.759 3.076a.646.646 0 0 0-.807.015l-.218.183a396 396 0 0 0-2.351 1.99c-.656.56-1.327 1.14-1.863 1.613a40 40 0 0 0-.689.62 5 5 0 0 0-.42.424 1.837 1.837 0 0 0 .312 2.619 1.934 1.934 0 0 0 2.677-.306c.088-.108.205-.296.325-.497.128-.215.285-.49.459-.798.347-.62.768-1.392 1.175-2.145a372 372 0 0 0 1.439-2.697l.131-.249a.61.61 0 0 0-.17-.772"/>`,
  'regular': `<path d="M6.543 5.483a8.46 8.46 0 0 1 4.707-1.95V5.25a.75.75 0 0 0 1.5 0V3.533a8.5 8.5 0 0 1 7.735 7.967H18.75a.75.75 0 0 0 0 1.5h1.694c-.26 2.312-1.423 4.248-3.168 5.668a.75.75 0 0 0 .948 1.164c2.226-1.813 3.67-4.394 3.77-7.485a1 1 0 0 0 .004-.156L22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 3.252 1.523 5.954 3.77 7.826a.75.75 0 0 0 .96-1.152C5.02 17.248 3.827 15.307 3.558 13H5.25a.75.75 0 0 0 0-1.5H3.514c.11-1.882.831-3.6 1.969-4.957L6.72 7.78a.75.75 0 0 0 1.06-1.06zM16.76 6.634a.646.646 0 0 0-.807.015l-.218.183a396 396 0 0 0-2.351 1.99c-.656.56-1.327 1.14-1.863 1.613a40 40 0 0 0-.689.62 5 5 0 0 0-.42.424 1.837 1.837 0 0 0 .312 2.619 1.934 1.934 0 0 0 2.677-.306c.088-.108.205-.296.325-.497.128-.215.285-.49.459-.798.347-.62.768-1.392 1.175-2.145a372 372 0 0 0 1.439-2.697l.131-.249a.61.61 0 0 0-.17-.772"/>`
} as const;

export default function TopSpeedIcon({ 
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

  const gradientId = 'topspeedicon_gradient';
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