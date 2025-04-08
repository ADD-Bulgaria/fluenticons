import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22h7.5A2.25 2.25 0 0 0 18 19.75zm-9.5 14a.75.75 0 0 1 .75-.75h5.5l.102.007A.75.75 0 0 1 14.75 19h-5.5l-.102-.007a.75.75 0 0 1-.648-.743M11.993 16a.75.75 0 0 1-.528-.225l-2.45-2.5a.75.75 0 1 1 1.071-1.05l1.164 1.187V9.75a.75.75 0 0 1 1.5 0v3.715l1.275-1.25a.75.75 0 1 1 1.05 1.07l-2.55 2.5a.75.75 0 0 1-.532.215"/>`,
  'regular': `<path d="M18 4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22h7.5A2.25 2.25 0 0 0 18 19.75zM8.25 3.5h7.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75m7.25 14.75a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75M11.993 16a.75.75 0 0 0 .533-.214l2.55-2.5a.75.75 0 1 0-1.051-1.072l-1.275 1.25V9.75a.75.75 0 0 0-1.5 0v3.662l-1.164-1.187a.75.75 0 1 0-1.07 1.05l2.45 2.5a.75.75 0 0 0 .527.225"/>`
} as const;

export default function PhoneFooterArrowDownIcon({ 
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

  const gradientId = 'phonefooterarrowdownicon_gradient';
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