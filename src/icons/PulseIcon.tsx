import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.53 5a1.25 1.25 0 0 1 1.173.91l4.354 15.438 3.25-10.468a1.25 1.25 0 0 1 2.331-.147l2.167 4.767h2.945a1.25 1.25 0 1 1 0 2.5H24a1.25 1.25 0 0 1-1.138-.733l-1.141-2.51-3.527 11.364a1.25 1.25 0 0 1-2.397-.032L11.4 10.502l-2.214 6.643A1.25 1.25 0 0 1 8 18H4.25a1.25 1.25 0 1 1 0-2.5h2.849l3.215-9.645A1.25 1.25 0 0 1 11.53 5"/>`,
  'regular': `<path d="M11.52 5a1 1 0 0 1 .944.735l4.578 16.646 3.5-11.668a1 1 0 0 1 1.881-.098L24.667 16H28a1 1 0 1 1 0 2h-4a1 1 0 0 1-.923-.615l-1.424-3.417-3.695 12.32a1 1 0 0 1-1.922-.023L11.43 9.518l-2.477 7.785A1 1 0 0 1 8 18H4a1 1 0 1 1 0-2h3.269l3.278-10.303A1 1 0 0 1 11.52 5"/>`
} as const;

export default function PulseIcon({ 
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

  const gradientId = 'pulseicon_gradient';
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