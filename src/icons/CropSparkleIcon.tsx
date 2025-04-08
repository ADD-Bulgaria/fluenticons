import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.356 16.993A1.5 1.5 0 0 1 7 15.5V3l-.007-.117A1 1 0 0 0 5 3v2H3l-.117.007A1 1 0 0 0 3 7h2v8.5l.005.192A3.5 3.5 0 0 0 8.5 19h4.676l-.133-.043-.012-.005A1.544 1.544 0 0 1 12.082 17H8.5zM19 13.248l-.067-.206-.004-.012A1.543 1.543 0 0 0 17 12.074V8.5a1.5 1.5 0 0 0-1.355-1.493L15.5 7H8V5h7.5a3.5 3.5 0 0 1 3.495 3.308L19 8.5zm4.214-.676.612.199.013.003a.242.242 0 0 1 0 .456l-.613.198a1.26 1.26 0 0 0-.799.799l-.199.612a.24.24 0 0 1-.368.117.24.24 0 0 1-.088-.117l-.2-.612a1.26 1.26 0 0 0-.798-.802l-.613-.199a.242.242 0 0 1 0-.456l.613-.198a1.26 1.26 0 0 0 .787-.799l.199-.612a.241.241 0 0 1 .456 0l.199.612a1.26 1.26 0 0 0 .799.799m-7.126 6.84a2.85 2.85 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448a2.84 2.84 0 0 0 1.759-1.762l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848"/>`,
  'regular': `<path d="M8.75 18.5h3.62a1.54 1.54 0 0 1-.288-1.5H8.75l-.144-.006A1.75 1.75 0 0 1 7 15.25V2.75l-.007-.102A.75.75 0 0 0 5.5 2.75L5.499 5.5H2.75l-.102.007A.75.75 0 0 0 2.75 7h2.749l.001 8.25.005.184A3.25 3.25 0 0 0 8.75 18.5m9.614-6.217q.072.051.136.108V8.75l-.005-.184A3.25 3.25 0 0 0 15.25 5.5H8V7h7.25l.143.006A1.75 1.75 0 0 1 17 8.75v3.324a1.55 1.55 0 0 1 1.364.21m4.85.289.612.199.013.003a.242.242 0 0 1 0 .456l-.613.198a1.26 1.26 0 0 0-.799.799l-.199.612a.24.24 0 0 1-.368.117.24.24 0 0 1-.088-.117l-.2-.612a1.26 1.26 0 0 0-.798-.802l-.613-.199a.242.242 0 0 1 0-.456l.613-.198a1.26 1.26 0 0 0 .787-.799l.199-.612a.241.241 0 0 1 .456 0l.199.612a1.26 1.26 0 0 0 .799.799m-7.36 6.574a2.85 2.85 0 0 1 .685 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689"/>`
} as const;

export default function CropSparkleIcon({ 
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

  const gradientId = 'cropsparkleicon_gradient';
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