import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.588 7.014a6.25 6.25 0 0 1 6.824 0l16.02 10.44a1.25 1.25 0 0 1 0 2.094l-16.02 10.44a6.25 6.25 0 0 1-6.824 0L6.5 20.808V31.75a1.25 1.25 0 0 1-2.5 0V18.5c0-.453.242-.852.605-1.07zM11 35.75v-9.623l8.496 5.536a8.25 8.25 0 0 0 9.008 0L37 26.127v9.623q0 .12-.005.238a1.25 1.25 0 0 1-.372.844A17.95 17.95 0 0 1 24 42a17.95 17.95 0 0 1-12.623-5.168 1.25 1.25 0 0 1-.373-.844A6 6 0 0 1 11 35.75"/>`,
  'regular': `<path d="M21.953 9.108a3.75 3.75 0 0 1 4.094 0l14.414 9.393-14.414 9.392a3.75 3.75 0 0 1-4.094 0L7.54 18.501zm5.46-2.094a6.25 6.25 0 0 0-6.825 0L4.605 17.429A1.25 1.25 0 0 0 4 18.5v13.25a1.25 1.25 0 0 0 2.5 0V20.807L11 23.74v12.01q0 .12.005.238c.011.318.145.62.372.844A17.95 17.95 0 0 0 24 42c4.917 0 9.376-1.973 12.623-5.168a1.25 1.25 0 0 0 .373-.844q.004-.119.004-.238V23.74l6.432-4.192a1.25 1.25 0 0 0 0-2.095zM34.5 25.369v10.033A15.44 15.44 0 0 1 24 39.5a15.44 15.44 0 0 1-10.5-4.098V25.369l7.088 4.619a6.25 6.25 0 0 0 6.824 0z"/>`
} as const;

export default function HatGraduationIcon({ 
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

  const gradientId = 'hatgraduationicon_gradient';
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