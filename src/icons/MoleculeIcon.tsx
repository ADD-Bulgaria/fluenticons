import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m14.668 24.752 12-8 1.664 2.496-12 8z"/><path d="m14.668 24.752 12-8 1.664 2.496-12 8z"/><path d="m14.668 24.752 12-8 1.664 2.496-12 8z"/><path d="m14.668 24.752 12-8 1.664 2.496-12 8zm13.662 13.09-12-6 1.34-2.684 12 6z"/><path d="m28.33 37.842-12-6 1.34-2.684 12 6z"/><path d="m28.33 37.842-12-6 1.34-2.684 12 6z"/><path d="m28.33 37.842-12-6 1.34-2.684 12 6z"/><circle cx="32" cy="14" r="10"/><circle cx="12" cy="28" r="8"/><circle cx="32" cy="38" r="6"/><circle cx="32" cy="38" r="6"/>`,
  'filled': `<path d="M32 24c5.523 0 10-4.477 10-10S37.523 4 32 4 22 8.477 22 14a9.96 9.96 0 0 0 1.453 5.195l-5.387 3.589a8 8 0 1 0 .443 9.868l7.682 3.84a6 6 0 1 0 1.12-2.235l-7.682-3.84A8 8 0 0 0 20 28a8 8 0 0 0-.618-3.089l5.634-3.754A9.97 9.97 0 0 0 32 24"/>`,
  'regular': `<path d="M32 24c5.523 0 10-4.477 10-10S37.523 4 32 4 22 8.477 22 14a9.96 9.96 0 0 0 1.453 5.195l-5.387 3.589a8 8 0 1 0 .443 9.868l7.682 3.84a6 6 0 1 0 1.12-2.235l-7.682-3.84A8 8 0 0 0 20 28a8 8 0 0 0-.618-3.089l5.634-3.754A9.97 9.97 0 0 0 32 24m0-2.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m-20 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11M35.5 38a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>`
} as const;

export default function MoleculeIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'moleculeicon_gradient';
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