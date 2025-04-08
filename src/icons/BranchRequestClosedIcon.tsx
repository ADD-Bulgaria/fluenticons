import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0zM18 15a3 3 0 1 1-3.5-2.959V8.5a.5.5 0 0 1 1 0v3.541A3 3 0 0 1 18 15M13.354 2.646a.5.5 0 0 0-.708.708L14.293 5l-1.647 1.646a.5.5 0 0 0 .708.708L15 5.707l1.646 1.647a.5.5 0 0 0 .708-.708L15.707 5l1.647-1.646a.5.5 0 0 0-.708-.708L15 4.293z"/>`,
  'regular': `<path d="M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2.5 2.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0zM5 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3 2a3 3 0 0 1 2.5-2.959V8.5a.5.5 0 0 1 1 0v3.541A3 3 0 1 1 12 15m1.354-12.354a.5.5 0 0 0-.708.708L14.293 5l-1.647 1.646a.5.5 0 0 0 .708.708L15 5.707l1.646 1.647a.5.5 0 0 0 .708-.708L15.707 5l1.647-1.646a.5.5 0 0 0-.708-.708L15 4.293z"/>`
} as const;

export default function BranchRequestClosedIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'branchrequestclosedicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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