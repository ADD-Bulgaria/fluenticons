import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.033 6.118A7.631 7.631 0 0 0 2.61 14.499h5.081l2.137-3.74a2.5 2.5 0 0 1 4.407.122l2.16 4.322 1.582-2.174a2.5 2.5 0 0 1 3.622-.45l2.305 1.92h5.551A7.697 7.697 0 0 0 16.86 6.225l-.86.86zm.237 22.565-8.608-9.184h2.481a2.5 2.5 0 0 0 2.17-1.26l.54-.944 1.91 3.822a2.5 2.5 0 0 0 4.259.352l2.43-3.34.947.79A2.5 2.5 0 0 0 23 19.5h2.468l-8.744 9.19a1 1 0 0 1-1.454-.006m-2.376-17.131a1 1 0 0 0-1.751-.067L8.433 16H2.668a1 1 0 1 0 0 2H9a1 1 0 0 0 .857-.485l2.063-3.438 3.186 6.37a1 1 0 0 0 1.703.141l3.371-4.636 2.18 1.816A1 1 0 0 0 23 18h6a1 1 0 1 0 0-2h-5.638l-2.722-2.268a1 1 0 0 0-1.449.18l-3.032 4.17z"/>`,
  'regular': `<path d="M4.374 5.988a7.63 7.63 0 0 1 10.66.13l.966.967.86-.86A7.694 7.694 0 0 1 29.456 14.5h-2.214a5.694 5.694 0 0 0-8.968-6.86l-1.567 1.567a1 1 0 0 1-1.414 0l-1.674-1.674A5.631 5.631 0 0 0 4.86 14.5H2.61a7.63 7.63 0 0 1 1.763-8.511M22.707 19.5h2.76l-8.744 9.19a1 1 0 0 1-1.454-.006L6.661 19.5h2.481q.126 0 .249-.012l6.614 7.056zm-9.814-7.947a1 1 0 0 0-1.751-.067L8.432 16H2.668a1 1 0 1 0 0 2H9a1 1 0 0 0 .857-.485l2.063-3.438 3.186 6.37a1 1 0 0 0 1.703.141l3.371-4.636 2.18 1.816A1 1 0 0 0 23 18h6a1 1 0 1 0 0-2h-5.638l-2.722-2.268a1 1 0 0 0-1.449.18l-3.032 4.17z"/>`
} as const;

export default function HeartPulseIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'heartpulseicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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