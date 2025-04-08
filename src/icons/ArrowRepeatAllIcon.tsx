import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M29.56 5.44a1.5 1.5 0 0 0-2.12 2.12L30.878 11H17C9.82 11 4 16.82 4 24c0 3.34 1.26 6.386 3.33 8.689a1.5 1.5 0 1 0 2.276-1.952l.002-.002A9.96 9.96 0 0 1 7 24c0-5.523 4.477-10 10-10h13.879l-3.44 3.44a1.5 1.5 0 0 0 2.122 2.12l6-6a1.5 1.5 0 0 0 0-2.12zM18.44 42.56a1.5 1.5 0 0 0 2.12-2.12L17.122 37H31c7.18 0 13-5.82 13-13 0-3.34-1.26-6.386-3.33-8.689a1.5 1.5 0 1 0-2.276 1.952l-.002.002A9.96 9.96 0 0 1 41 24c0 5.523-4.477 10-10 10H17.121l3.44-3.44a1.5 1.5 0 0 0-2.122-2.12l-6 6a1.5 1.5 0 0 0 0 2.12z"/>`,
  'regular': `<path d="M29.116 5.349a1.25 1.25 0 1 0-1.732 1.802l4.009 3.855Q31.197 11 31 11H17C9.82 11 4 16.82 4 24a12.95 12.95 0 0 0 3.23 8.576v-.004A1.25 1.25 0 0 0 9.172 31h.002l-.012-.012a1 1 0 0 0-.106-.121A10.46 10.46 0 0 1 6.5 24c0-5.799 4.701-10.5 10.5-10.5h14q.44 0 .87.036l-4.486 4.313a1.25 1.25 0 0 0 1.732 1.802l6.5-6.25a1.25 1.25 0 0 0 0-1.802zM18.884 42.65a1.25 1.25 0 0 0 1.732-1.802l-4.009-3.855Q16.803 37 17 37h14c7.18 0 13-5.82 13-13l-.001-.177a12.95 12.95 0 0 0-3.229-8.4v.005A1.25 1.25 0 0 0 38.828 17h-.002l.012.012q.048.065.106.121A10.46 10.46 0 0 1 41.5 24c0 5.799-4.701 10.5-10.5 10.5H17q-.44 0-.87-.035l4.486-4.314a1.25 1.25 0 0 0-1.732-1.802l-6.5 6.25a1.25 1.25 0 0 0 0 1.802z"/>`
} as const;

export default function ArrowRepeatAllIcon({ 
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

  const gradientId = 'arrowrepeatallicon_gradient';
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