import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 4a8 8 0 0 0-8 8v12a8 8 0 0 0 8.35 7.993A13.03 13.03 0 0 1 30 22.996V12a8 8 0 0 0-8-8m0 31.25h.002c.032 1.684.384 3.29.998 4.759v2.741a1.25 1.25 0 1 1-2.5 0v-5.08C13.473 36.923 8 30.976 8 23.75a1.25 1.25 0 1 1 2.5 0c0 6.351 5.149 11.5 11.5 11.5M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-13.983-6a1 1 0 0 0-.95.638l-1.706 4.396H28a1 1 0 1 0 0 2h2.045a1 1 0 0 0 .932-.638l.974-2.508 2.605 7.442a1 1 0 0 0 1.88.021l2.195-5.853.475.95a1 1 0 0 0 .877.552l2 .034a1 1 0 1 0 .034-2l-1.394-.024-1.229-2.457a1 1 0 0 0-1.83.096l-2.032 5.416-2.588-7.395a1 1 0 0 0-.927-.67"/>`,
  'regular': `<path d="M14 12a8 8 0 1 1 16 0v10.996a13 13 0 0 0-2.514 1.394q.015-.194.014-.39V12a5.5 5.5 0 1 0-11 0v12a5.5 5.5 0 0 0 6.79 5.348 13 13 0 0 0-.94 2.645A8 8 0 0 1 14 24zm9 28.009a13 13 0 0 1-.998-4.759H22c-6.351 0-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-13.983-6a1 1 0 0 0-.95.638l-1.706 4.396H28a1 1 0 1 0 0 2h2.045a1 1 0 0 0 .932-.638l.974-2.508 2.605 7.442a1 1 0 0 0 1.88.021l2.195-5.853.475.95a1 1 0 0 0 .877.552l2 .034a1 1 0 1 0 .034-2l-1.394-.024-1.229-2.457a1 1 0 0 0-1.83.096l-2.032 5.416-2.588-7.395a1 1 0 0 0-.927-.67"/>`
} as const;

export default function MicPulseIcon({ 
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

  const gradientId = 'micpulseicon_gradient';
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