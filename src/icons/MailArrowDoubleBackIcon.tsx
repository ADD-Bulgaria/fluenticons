import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M20.22 5.22a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zm5.06 0a.75.75 0 0 1 0 1.06L24.06 7.5h2.19A2.75 2.75 0 0 1 29 10.25v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25h-2.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M14.5 8.5a8.99 8.99 0 0 0 3.625 7.22L16 16.864 3.48 10.123l-1.476-.82A4.5 4.5 0 0 1 6.5 5h8.706a9 9 0 0 0-.706 3.5m1.974 10.38 3.724-2.005a9 9 0 0 0 3.302.625 8.97 8.97 0 0 0 6.5-2.775V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5V11.588l.514.286 13.012 7.007a1 1 0 0 0 .948 0"/>`,
  'light': `<path d="M23.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M20.22 5.22a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zm5.06 0a.75.75 0 0 1 0 1.06L24.06 7.5h2.19A2.75 2.75 0 0 1 29 10.25v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25h-2.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M6.5 5h8.706a9 9 0 0 0-.354 1H6.5A3.5 3.5 0 0 0 3 9.5v.706l13 7.222 2.545-1.414q.486.323 1.015.58l-3.317 1.843a.5.5 0 0 1-.486 0L3 11.35V22.5A3.5 3.5 0 0 0 6.5 26h19a3.5 3.5 0 0 0 3.5-3.5v-6.876q.534-.412 1-.9V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"/>`,
  'regular': `<path d="M23.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M20.22 5.22a.75.75 0 0 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zm5.06 0a.75.75 0 0 1 0 1.06L24.06 7.5h2.19A2.75 2.75 0 0 1 29 10.25v.5a.75.75 0 1 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25h-2.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M6.5 5h8.706a9 9 0 0 0-.581 2H6.5A2.5 2.5 0 0 0 4 9.5v.903l12 6.461 2.126-1.144a9 9 0 0 0 2.073 1.155l-3.725 2.006a1 1 0 0 1-.948 0L4 12.674V22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5v-6.204a9 9 0 0 0 2-1.571V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"/>`
} as const;

export default function MailArrowDoubleBackIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'mailarrowdoublebackicon_gradient';
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