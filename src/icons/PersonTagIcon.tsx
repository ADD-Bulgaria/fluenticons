import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 14C9 8.477 13.477 4 19 4s10 4.477 10 10-4.477 10-10 10S9 19.523 9 14M3 32.249A4.25 4.25 0 0 1 7.25 28H21v6.674c0 1.594.633 3.122 1.76 4.249l3.967 3.967C24.407 43.64 21.763 44 19 44c-4.214 0-8.15-.837-11.08-2.62C4.942 39.567 3 36.755 3 33zm20-4.242v6.667c0 1.063.422 2.082 1.174 2.833l7.319 7.32a4.006 4.006 0 0 0 5.666 0l6.668-6.668a4.006 4.006 0 0 0 0-5.666l-7.32-7.32A4 4 0 0 0 33.674 24h-6.667A4.007 4.007 0 0 0 23 28.007M28.5 31a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`,
  'regular': `<path d="M9 14C9 8.477 13.477 4 19 4s10 4.477 10 10-4.477 10-10 10S9 19.523 9 14m10-7.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M3 32.249A4.25 4.25 0 0 1 7.25 28H22v2.5H7.25a1.75 1.75 0 0 0-1.75 1.749V33c0 2.744 1.36 4.808 3.72 6.245C11.63 40.712 15.068 41.5 19 41.5c2.385 0 4.589-.29 6.491-.846l1.978 1.978C24.979 43.558 22.063 44 19 44c-4.214 0-8.15-.837-11.08-2.62C4.942 39.567 3 36.755 3 33zm21-4.242v6.667c0 1.063.422 2.082 1.174 2.833l7.319 7.32a4.006 4.006 0 0 0 5.666 0l6.668-6.668a4.006 4.006 0 0 0 0-5.666l-7.32-7.32A4 4 0 0 0 34.674 24h-6.667A4.007 4.007 0 0 0 24 28.007M29.5 31a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`
} as const;

export default function PersonTagIcon({ 
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

  const gradientId = 'persontagicon_gradient';
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