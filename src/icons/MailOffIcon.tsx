import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25a3.25 3.25 0 0 0-1.454 2.394l8.078 4.231 2.422 2.422-.168.087a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005 1.785 1.785a.75.75 0 0 0 1.061-1.06zm12.02 9.898 6.262 6.262A3.24 3.24 0 0 0 22 16.75V8.608zM7.182 4l7.007 7.007 7.795-4.083A3.25 3.25 0 0 0 18.75 4z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25A3.25 3.25 0 0 0 2 7.25v9.5l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005 1.785 1.785a.75.75 0 0 0 1.061-1.06zM17.44 18.5H5.25l-.144-.006A1.75 1.75 0 0 1 3.5 16.75V9.374l8.15 4.29.097.042a.75.75 0 0 0 .602-.042l.166-.088zm-7.357-7.357L3.5 7.68v-.43l.006-.144a1.75 1.75 0 0 1 1.068-1.47zM20.5 7.678l-6.316 3.325 1.11 1.11 5.206-2.74v7.377l-.006.143q-.015.183-.066.354l1.134 1.133A3.24 3.24 0 0 0 22 16.75v-9.5l-.005-.184A3.25 3.25 0 0 0 18.75 4H7.182l1.5 1.5H18.75l.143.006A1.75 1.75 0 0 1 20.5 7.25z"/>`
} as const;

export default function MailOffIcon({ 
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

  const gradientId = 'mailofficon_gradient';
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