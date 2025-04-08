import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m0-1.5a4.98 4.98 0 0 1-2.965-.974l6.991-6.991A5 5 0 0 1 20.5 12.5m2.965-9.026-6.991 6.991a5 5 0 0 1 6.991-6.991M25 13.5a7.47 7.47 0 0 1-4.5 1.5 7.5 7.5 0 0 1-3.355-.79l-2.799 1.455a.75.75 0 0 1-.692 0L3 10.124v9.626l.005.184A3.25 3.25 0 0 0 6.25 23h15.5l.185-.005A3.25 3.25 0 0 0 25 19.75zM13.427 5H6.25l-.184.005A3.25 3.25 0 0 0 3 8.25v.184l11 5.72 1.706-.886A7.48 7.48 0 0 1 13 7.5c0-.877.15-1.718.427-2.5"/>`,
  'regular': `<path d="M20.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m0-1.5a4.98 4.98 0 0 1-2.965-.974l6.991-6.991A5 5 0 0 1 20.5 12.5m2.965-9.026-6.991 6.991a5 5 0 0 1 6.991-6.991m.035 10.902v5.374l-.006.143A1.75 1.75 0 0 1 21.75 21.5H6.25l-.144-.006A1.75 1.75 0 0 1 4.5 19.75v-8.845l9.154 4.76.111.047c.19.063.4.047.581-.047l2.8-1.455a7.5 7.5 0 0 1-1.44-.942L14 14.155 4.5 9.214V8.25l.006-.144A1.75 1.75 0 0 1 6.25 6.5h6.816a7.5 7.5 0 0 1 .36-1.5H6.25l-.184.005A3.25 3.25 0 0 0 3 8.25v11.5l.005.184A3.25 3.25 0 0 0 6.25 23h15.5l.184-.005A3.25 3.25 0 0 0 25 19.75V13.5a7.5 7.5 0 0 1-1.5.876"/>`
} as const;

export default function MailProhibitedIcon({ 
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

  const gradientId = 'mailprohibitedicon_gradient';
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