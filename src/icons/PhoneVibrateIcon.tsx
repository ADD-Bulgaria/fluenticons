import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.5 16h-2.5a.75.75 0 0 0-.103 1.493l.102.007h2.5a.75.75 0 0 0 0-1.5m6.878-10.428a1 1 0 0 1 1.25.45l.05.107.582 1.456a3 3 0 0 1-.266 2.743l-.12.171-.15.202a1 1 0 0 0-.17.848l.041.123.582 1.457a1 1 0 0 1-1.807.848l-.05-.106-.582-1.456a3 3 0 0 1 .266-2.743l.12-.171.15-.202a1 1 0 0 0 .17-.848l-.04-.123-.583-1.457a1 1 0 0 1 .557-1.3m-17.5 0a1 1 0 0 1 1.25.45l.05.107.582 1.456a3 3 0 0 1-.266 2.743l-.12.171-.15.202a1 1 0 0 0-.17.848l.041.123.583 1.457a1 1 0 0 1-1.808.848l-.05-.106-.582-1.456a3 3 0 0 1 .266-2.743l.12-.171.15-.202a1 1 0 0 0 .17-.848l-.04-.123L2.07 8.87a1 1 0 0 1 .557-1.3"/>`,
  'regular': `<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.335.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75m-2.502 14a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5zm7.403-9.37.044.091.583 1.457a2.75 2.75 0 0 1-.244 2.515l-.11.156-.15.202a1.25 1.25 0 0 0-.207 1.077l.046.137.582 1.457a.75.75 0 0 1-1.348.649l-.044-.093-.583-1.456a2.75 2.75 0 0 1 .244-2.514l.11-.157.15-.202a1.25 1.25 0 0 0 .207-1.077l-.046-.137-.582-1.456a.75.75 0 0 1 1.287-.74zm-16.5 0 .044.091.583 1.457a2.75 2.75 0 0 1-.244 2.515l-.11.156-.15.202a1.25 1.25 0 0 0-.207 1.077l.046.137.582 1.457a.75.75 0 0 1-1.348.649l-.044-.093-.583-1.456a2.75 2.75 0 0 1 .244-2.514l.11-.157.15-.202a1.25 1.25 0 0 0 .207-1.077l-.046-.137-.582-1.456a.75.75 0 0 1 1.287-.74z"/>`
} as const;

export default function PhoneVibrateIcon({ 
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

  const gradientId = 'phonevibrateicon_gradient';
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