import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M46 13c0 6.075-4.925 11-11 11s-11-4.925-11-11S28.925 2 35 2s11 4.925 11 11M35 5a1 1 0 0 0-1 1v11.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L36 17.586V6a1 1 0 0 0-1-1m0 21c3.493 0 6.664-1.378 9-3.62v10.37A4.25 4.25 0 0 1 39.75 37H31v3.5h2.75a1.25 1.25 0 1 1 0 2.5h-19.5a1.25 1.25 0 1 1 0-2.5H17V37H8.25A4.25 4.25 0 0 1 4 32.75V9.25A4.25 4.25 0 0 1 8.25 5h16.502A12.94 12.94 0 0 0 22 13c0 7.18 5.82 13 13 13m-6.5 14.5V37h-9v3.5z"/>`,
  'regular': `<path d="M46 13c0 6.075-4.925 11-11 11s-11-4.925-11-11S28.925 2 35 2s11 4.925 11 11M35 5a1 1 0 0 0-1 1v11.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L36 17.586V6a1 1 0 0 0-1-1m6.5 27.75v-8.49a13 13 0 0 0 2.5-1.88v10.37A4.25 4.25 0 0 1 39.75 37H31v3.5h2.75a1.25 1.25 0 1 1 0 2.5h-19.5a1.25 1.25 0 1 1 0-2.5H17V37H8.25A4.25 4.25 0 0 1 4 32.75V9.25A4.25 4.25 0 0 1 8.25 5h16.502a13 13 0 0 0-1.535 2.5H8.25A1.75 1.75 0 0 0 6.5 9.25v23.5c0 .967.784 1.75 1.75 1.75h31.5a1.75 1.75 0 0 0 1.75-1.75m-13 7.75V37h-9v3.5z"/>`
} as const;

export default function DesktopArrowDownIcon({ 
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

  const gradientId = 'desktoparrowdownicon_gradient';
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