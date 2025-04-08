import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42 24.044a13 13 0 0 0-3.064-1.437C38.233 14.976 31.814 9 24 9c-3.938 0-7.52 1.516-10.198 4H17.5a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 9 14.5v-7a1.5 1.5 0 1 1 3 0v3.084A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18zM24 42h.044a13 13 0 0 1-1.437-3.064C14.976 38.233 9 31.814 9 24q.002-1.162.171-2.275a1.5 1.5 0 0 0-2.966-.45Q6.001 22.61 6 24c0 9.941 8.059 18 18 18m0-7c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11m10 6a1 1 0 1 0 2 0v-8a1 1 0 1 0-2 0zm1-13.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/>`,
  'regular': `<path d="M42 24.044a13 13 0 0 0-2.547-1.261C38.833 14.79 32.15 8.5 24 8.5a15.46 15.46 0 0 0-11.402 5h4.152a1.25 1.25 0 1 1 0 2.5h-6.5C9.56 16 9 15.44 9 14.75v-6.5a1.25 1.25 0 1 1 2.5 0v2.798A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18zM24 42h.044a13 13 0 0 1-1.261-2.547C14.79 38.833 8.5 32.15 8.5 24q.002-1.302.207-2.542a1.25 1.25 0 0 0-2.466-.407A18 18 0 0 0 6 24c0 9.941 8.059 18 18 18m0-7c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11m10 6a1 1 0 1 0 2 0v-8a1 1 0 1 0-2 0zm1-13.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/>`
} as const;

export default function ArrowCounterclockwiseInfoIcon({ 
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

  const gradientId = 'arrowcounterclockwiseinfoicon_gradient';
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