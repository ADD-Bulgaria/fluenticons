import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v9a.25.25 0 0 1-.25.25.263.263 0 0 1-.258-.25A4 4 0 1 0 18.854 20h-.808A3.045 3.045 0 0 0 15 23.045v.205q0 .377.066.75H5.75A3.75 3.75 0 0 1 2 20.25zm6 2v8.5a.75.75 0 0 0 1.5 0V16h2a3.5 3.5 0 1 0 0-7H8.75a.75.75 0 0 0-.75.75m1.5 4.75h2a2 2 0 1 0 0-4h-2zm15 2.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2.5 6.25c0 1.868-1.571 3.75-5.5 3.75S16 25.125 16 23.25v-.205c0-1.13.916-2.045 2.046-2.045h6.909c1.13 0 2.045.915 2.045 2.045z"/>`,
  'regular': `<path d="M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v9a.25.25 0 0 1-.25.25.263.263 0 0 1-.258-.25 4 4 0 0 0-.992-2.396V7.75a2.25 2.25 0 0 0-2.25-2.25H5.75A2.25 2.25 0 0 0 3.5 7.75v12.5a2.25 2.25 0 0 0 2.25 2.25h9.299a3 3 0 0 0-.049.545v.205q0 .377.066.75H5.75A3.75 3.75 0 0 1 2 20.25zM21.5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 7c3.929 0 5.5-1.882 5.5-3.75v-.205c0-1.13-.916-2.045-2.046-2.045h-6.908c-1.13 0-2.046.915-2.046 2.045v.205c0 1.875 1.571 3.75 5.5 3.75M8.75 9a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0V16h2a3.5 3.5 0 1 0 0-7zm2.75 5.5h-2v-4h2a2 2 0 1 1 0 4"/>`
} as const;

export default function ShareScreenPersonPIcon({ 
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

  const gradientId = 'sharescreenpersonpicon_gradient';
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