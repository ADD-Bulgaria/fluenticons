import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 2a3.5 3.5 0 0 0-1 6.855v5.395a.75.75 0 0 0 1.5 0V13h6.25A3.75 3.75 0 0 0 17 9.25v-.285a3.5 3.5 0 1 0-1.5-.11v.395a2.25 2.25 0 0 1-2.25 2.25H7V8.965A3.5 3.5 0 0 0 6.5 2M5.341 16.885a.75.75 0 0 0-.872-1.22 3.53 3.53 0 0 0-1.231 1.587.75.75 0 1 0 1.4.54 2 2 0 0 1 .703-.908m3.19-1.22a.75.75 0 0 0-.872 1.22 2 2 0 0 1 .704.906.75.75 0 1 0 1.4-.539 3.5 3.5 0 0 0-1.232-1.588m-3.754 3.854a.75.75 0 1 0-1.294.759 3.5 3.5 0 0 0 1.474 1.37.75.75 0 0 0 .662-1.346 2 2 0 0 1-.842-.783m4.74.759a.75.75 0 0 0-1.294-.759 2 2 0 0 1-.842.783.75.75 0 0 0 .662 1.346 3.5 3.5 0 0 0 1.474-1.37"/>`,
  'regular': `<path d="M6.5 2a3.5 3.5 0 0 0-1 6.855v5.395a.75.75 0 0 0 1.5 0V13h6.25A3.75 3.75 0 0 0 17 9.25v-.285a3.5 3.5 0 1 0-1.5-.11v.395a2.25 2.25 0 0 1-2.25 2.25H7V8.965A3.5 3.5 0 0 0 6.5 2m-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m12-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5.341 16.885a.75.75 0 0 0-.872-1.22 3.53 3.53 0 0 0-1.231 1.587.75.75 0 1 0 1.4.54 2 2 0 0 1 .703-.908m3.19-1.22a.75.75 0 0 0-.872 1.22 2 2 0 0 1 .704.906.75.75 0 1 0 1.4-.539 3.5 3.5 0 0 0-1.232-1.588m-3.754 3.854a.75.75 0 1 0-1.294.759 3.5 3.5 0 0 0 1.474 1.37.75.75 0 0 0 .662-1.346 2 2 0 0 1-.842-.783m4.74.759a.75.75 0 0 0-1.294-.759 2 2 0 0 1-.842.783.75.75 0 0 0 .662 1.346 3.5 3.5 0 0 0 1.474-1.37"/>`
} as const;

export default function BranchForkHintIcon({ 
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

  const gradientId = 'branchforkhinticon_gradient';
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