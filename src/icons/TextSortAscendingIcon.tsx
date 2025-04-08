import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 1a1 1 0 0 1 .92.606l3 7a1 1 0 1 1-1.839.788L8.484 8H5.517l-.598 1.394a1 1 0 1 1-1.838-.788l3-7A1 1 0 0 1 7.001 1m0 3.539L6.374 6h1.253zM18.5 3a1 1 0 1 0-2 0v15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L18.5 18.586zM4 14a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v6H8v-3a1 1 0 0 0-2 0v3H4z"/>`,
  'regular': `<path d="M7 2a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L8.892 9H5.108l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 7 2m0 2.636L5.76 7.5h2.48zM3.5 13.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v6.75H7.75v-3.75a.75.75 0 0 0-1.5 0v3.75H3.5zM17.25 2a.75.75 0 0 1 .75.75v16.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function TextSortAscendingIcon({ 
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

  const gradientId = 'textsortascendingicon_gradient';
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