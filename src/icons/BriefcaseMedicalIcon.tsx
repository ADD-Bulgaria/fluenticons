import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 5h6a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1m-3 1v2H7.5A4.5 4.5 0 0 0 3 12.5v11A4.5 4.5 0 0 0 7.5 28h17a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 24.5 8H22V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3m6 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"/>`,
  'regular': `<path d="M13 5h6a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1m-3 1v2H7.5A4.5 4.5 0 0 0 3 12.5v11A4.5 4.5 0 0 0 7.5 28h17a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 24.5 8H22V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3m14.5 4a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 23.5v-11A2.5 2.5 0 0 1 7.5 10zM16 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"/>`
} as const;

export default function BriefcaseMedicalIcon({ 
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

  const gradientId = 'briefcasemedicalicon_gradient';
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