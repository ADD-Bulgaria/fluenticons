import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 9V2H8a3 3 0 0 0-3 3v10.55a3.5 3.5 0 0 1 2.5-1.05h4A3.5 3.5 0 0 1 15 18v.008a3.75 3.75 0 0 1 3.44 3.069q.06.202.06.423v7.25c0 .438-.075.859-.213 1.25H24a3 3 0 0 0 3-3V12h-7a3 3 0 0 1-3-3m2 0V2.117a3 3 0 0 1 1.293.762l5.828 5.828A3 3 0 0 1 26.883 10H20a1 1 0 0 1-1-1M5.5 18v1.5H4.25a2.25 2.25 0 0 0-2.236 2H2v7.25A2.25 2.25 0 0 0 4.25 31h10.5A2.25 2.25 0 0 0 17 28.75V21.5h-.014a2.25 2.25 0 0 0-2.236-2H13.5V18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5H7V18a.5.5 0 0 1 .5-.5"/>`,
  'regular': `<path d="M5 5a3 3 0 0 1 3-3h10.172a3 3 0 0 1 2.12.879l5.83 5.828A3 3 0 0 1 27 10.828V27a3 3 0 0 1-3 3h-5.713a3.8 3.8 0 0 0 .213-1.25V28H24a1 1 0 0 0 1-1V12h-5a3 3 0 0 1-3-3V4H8a1 1 0 0 0-1 1v9.535a3.5 3.5 0 0 0-2 1.015zm15 5h4.586L19 4.414V9a1 1 0 0 0 1 1M5.5 18v1.5H4.25a2.25 2.25 0 0 0-2.236 2H2v7.25A2.25 2.25 0 0 0 4.25 31h10.5A2.25 2.25 0 0 0 17 28.75V21.5h-.014a2.25 2.25 0 0 0-2.236-2H13.5V18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5H7V18a.5.5 0 0 1 .5-.5"/>`
} as const;

export default function DocumentBriefcaseIcon({ 
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

  const gradientId = 'documentbriefcaseicon_gradient';
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