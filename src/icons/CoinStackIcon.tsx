import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 7c0 2.761-3.134 5-7 5S5 9.761 5 7s3.134-5 7-5 7 2.239 7 5m-.38 3.37C17.18 11.958 14.752 13 12 13s-5.18-1.043-6.62-2.63A3.74 3.74 0 0 0 5 12c0 2.761 3.134 5 7 5s7-2.239 7-5c0-.57-.134-1.119-.38-1.63m0 5C17.18 16.958 14.752 18 12 18s-5.18-1.043-6.62-2.63A3.74 3.74 0 0 0 5 17c0 2.761 3.134 5 7 5s7-2.239 7-5c0-.57-.134-1.119-.38-1.63"/>`,
  'regular': `<path d="M7.159 3.375C8.429 2.51 10.144 2 12 2s3.57.51 4.841 1.375C18.108 4.236 19 5.505 19 7s-.892 2.764-2.159 3.625C15.571 11.49 13.856 12 12 12s-3.57-.51-4.841-1.375C5.892 9.764 5 8.495 5 7s.892-2.764 2.159-3.625m.843 1.24C7.007 5.292 6.5 6.148 6.5 7s.507 1.708 1.502 2.385c.991.674 2.403 1.115 3.998 1.115s3.007-.441 3.998-1.115C16.993 8.708 17.5 7.852 17.5 7s-.507-1.708-1.502-2.385C15.007 3.941 13.595 3.5 12 3.5s-3.007.441-3.998 1.115m10.622 5.75a7 7 0 0 1-1.204 1.048q.08.293.08.587c0 .852-.507 1.708-1.502 2.385-.991.674-2.403 1.115-3.998 1.115s-3.007-.441-3.998-1.115C7.007 13.708 6.5 12.852 6.5 12q0-.294.08-.587a7 7 0 0 1-1.204-1.048A3.8 3.8 0 0 0 5 12c0 1.495.892 2.764 2.159 3.625C8.429 16.49 10.144 17 12 17s3.57-.51 4.841-1.375C18.108 14.764 19 13.495 19 12c0-.583-.136-1.131-.376-1.635m-1.204 6.048a7 7 0 0 0 1.204-1.048c.24.504.376 1.052.376 1.635 0 1.495-.892 2.764-2.159 3.625C15.571 21.49 13.856 22 12 22s-3.57-.51-4.841-1.375C5.892 19.764 5 18.495 5 17c0-.583.136-1.131.376-1.635a7 7 0 0 0 1.204 1.048q-.08.293-.08.587c0 .852.507 1.708 1.502 2.385.991.674 2.403 1.115 3.998 1.115s3.007-.441 3.998-1.115c.995-.677 1.502-1.533 1.502-2.385q0-.294-.08-.587"/>`
} as const;

export default function CoinStackIcon({ 
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

  const gradientId = 'coinstackicon_gradient';
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