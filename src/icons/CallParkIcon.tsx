import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.54 12.486C4.377 7.13 9.077 3.75 14.01 3.75h.152a5.25 5.25 0 0 1 4.955 3.516l1.572 4.489a5.25 5.25 0 0 1-1.904 6.006l-2.767 1.977c-.812.58-1.022 1.343-.792 1.903 1.007 2.45 3.3 5.758 5.16 7.675.453.468 1.224.629 2.07.319l2.958-1.085a5.25 5.25 0 0 1 5.852 1.582l2.415 2.917a5.17 5.17 0 0 1 .428 5.988c-2.637 4.315-8.15 6.452-12.644 3.377A40 40 0 0 1 9.418 29.375c-3.67-6.356-4.743-12.384-4.879-16.89M29.25 4C28.56 4 28 4.56 28 5.25v17.5a1.25 1.25 0 1 0 2.5 0V16.5h5.25a6.25 6.25 0 0 0 0-12.5zm6.5 10H30.5V6.5h5.25a3.75 3.75 0 0 1 0 7.5"/>`,
  'regular': `<path d="M14.01 3.75c-4.932 0-9.632 3.38-9.47 8.736.135 4.505 1.208 10.533 4.878 16.889a40 40 0 0 0 12.047 13.04c4.494 3.074 10.007.937 12.644-3.378a5.17 5.17 0 0 0-.428-5.988l-2.64-3.188a5.25 5.25 0 0 0-5.237-1.766l-3.421.799c-.768.179-1.416.009-1.799-.377-1.694-1.708-3.634-4.677-4.457-6.983-.195-.545.008-1.27.718-1.861l2.324-1.937a5.25 5.25 0 0 0 1.595-5.767l-1.647-4.703a5.25 5.25 0 0 0-4.955-3.516zm-6.972 8.66c-.106-3.538 3.005-6.16 6.971-6.16h.153a2.75 2.75 0 0 1 2.596 1.842l1.646 4.703a2.75 2.75 0 0 1-.835 3.02l-2.324 1.937c-1.234 1.028-2.13 2.784-1.473 4.622.957 2.681 3.107 5.958 5.038 7.904 1.156 1.165 2.78 1.368 4.14 1.05l3.422-.798a2.75 2.75 0 0 1 2.744.925l2.639 3.188c.726.878.814 2.119.22 3.09-2.1 3.437-6.094 4.674-9.098 2.618a37.5 37.5 0 0 1-11.294-12.226c-3.426-5.933-4.42-11.54-4.545-15.714M29.25 4C28.56 4 28 4.56 28 5.25v17.5a1.25 1.25 0 1 0 2.5 0V16.5h5.25a6.25 6.25 0 0 0 0-12.5zm6.5 10H30.5V6.5h5.25a3.75 3.75 0 0 1 0 7.5"/>`
} as const;

export default function CallParkIcon({ 
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

  const gradientId = 'callparkicon_gradient';
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