import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m0 5.25a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1m-2.293-3.543a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 0-1.414 1.414L15.586 11H6a1 1 0 1 0 0 2h9.586l-3.293 3.293a1 1 0 0 0 1.414 1.414z"/>`,
  'regular': `<path d="M2.75 4.5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0v-13a.75.75 0 0 1 .75-.75m18.5 0a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 1 .75-.75m0 3.467a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V8.717a.75.75 0 0 1 .75-.75m0 4.333a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V13.05a.75.75 0 0 1 .75-.75m0 4.333a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0v-.867a.75.75 0 0 1 .75-.75m-2.47-4.353a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L16.44 11H5.75a.75.75 0 0 0 0 1.5h10.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06z"/>`
} as const;

export default function PaddingRightIcon({ 
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

  const gradientId = 'paddingrighticon_gradient';
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