import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.707 2.293a1 1 0 0 0-1.414 0L4 3.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414M11 17.5q0 .249.018.493H10A1 1 0 0 1 9.883 16l.117-.007h1.175A6.5 6.5 0 0 0 11 17.5m6.5-6.5a6.47 6.47 0 0 1 3.466 1h.038l.116-.007A1 1 0 0 0 21.005 10H10l-.117.007A1 1 0 0 0 10 12h4.034a6.47 6.47 0 0 1 3.466-1m3.504-7H10l-.117.007A1 1 0 0 0 10 6h11.004l.116-.007A1 1 0 0 0 21.005 4M6.707 15.293a1 1 0 0 0-1.414 0L4 16.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414m-1.414-6.5a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 1.414-1.414l.293.293zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`,
  'regular': `<path d="M6.78 3.78a.75.75 0 0 0-1.06-1.06L3.75 4.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM11 17.5q0 .514.078 1.007H9.75a.75.75 0 0 1-.102-1.493l.102-.007h1.268A7 7 0 0 0 11 17.5m6.5-6.5a6.47 6.47 0 0 1 3.466 1h.284l.102-.007a.75.75 0 0 0-.102-1.493H9.75l-.102.007A.75.75 0 0 0 9.75 12h4.284a6.47 6.47 0 0 1 3.466-1m3.75-7H9.75l-.102.007A.75.75 0 0 0 9.75 5.5h11.5l.102-.007A.75.75 0 0 0 21.25 4M6.78 16.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0-7.56a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97a.75.75 0 0 1 1.06 0M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function TaskListAddIcon({ 
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

  const gradientId = 'tasklistaddicon_gradient';
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