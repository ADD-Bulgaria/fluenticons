import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.348 3.84c-.549-1.12-2.144-1.12-2.693 0l-3.2 6.52-7.17 1.05c-1.228.179-1.72 1.686-.834 2.555l5.196 5.096-1.225 7.183c-.209 1.227 1.08 2.16 2.18 1.578l6.4-3.385 6.398 3.385c1.1.582 2.39-.351 2.18-1.578l-1.224-7.183 5.195-5.096c.886-.87.394-2.376-.833-2.556l-7.171-1.048zM2.293 5.162a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m23 3a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414zm-23 16.414a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0m23-4.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"/>`,
  'regular': `<path d="m18.75 11.242-2.749-5.607-2.75 5.607a2 2 0 0 1-1.506 1.098l-6.174.903 4.476 4.39a2 2 0 0 1 .571 1.764L9.564 25.58l5.502-2.91a2 2 0 0 1 1.87 0l5.502 2.91-1.054-6.183a2 2 0 0 1 .571-1.764l4.476-4.39-6.174-.903a2 2 0 0 1-1.506-1.098m-4.095-7.403c.549-1.119 2.144-1.119 2.693 0l3.199 6.522 7.17 1.048c1.228.18 1.72 1.687.834 2.556l-5.195 5.096 1.224 7.183c.21 1.227-1.08 2.16-2.18 1.578l-6.399-3.385-6.399 3.385c-1.1.582-2.389-.351-2.18-1.578l1.225-7.183-5.196-5.096c-.885-.87-.394-2.376.834-2.556l7.17-1.048zM2.293 5.163a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m23 3a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414zm-23 16.414a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0m23-4.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"/>`
} as const;

export default function StarEmphasisIcon({ 
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

  const gradientId = 'staremphasisicon_gradient';
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