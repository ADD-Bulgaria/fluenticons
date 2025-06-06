import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m10 37.763-.156.084a1.25 1.25 0 0 1-1.197-2.195c2.982-1.627 5.664-2.006 8.319-1.516 2.585.478 5.062 1.769 7.657 3.283 4.752 2.771 10.291 2.031 13.395-.186a1.25 1.25 0 1 1 1.453 2.034c-3.895 2.783-10.496 3.584-16.107.311-2.587-1.509-4.734-2.592-6.852-2.983-2.007-.37-4.064-.131-6.512 1.168m26-2.78q.298-.095.587-.203a12.4 12.4 0 0 0 2.887-1.513 1.25 1.25 0 1 0-1.453-2.034c-3.104 2.217-8.643 2.957-13.395.186-2.595-1.514-5.072-2.805-7.658-3.283-2.655-.49-5.336-.11-8.32 1.516a1.25 1.25 0 0 0 1.198 2.195c2.517-1.373 4.62-1.63 6.668-1.252 2.118.391 4.266 1.474 6.852 2.983 4.17 2.433 8.887 2.615 12.634 1.406M24 13.08a10.92 10.92 0 0 0-9.933 6.379 14 14 0 0 1 3.358.219c3.052.564 5.858 2.062 8.463 3.581 3.103 1.81 6.578 1.745 9.031.808V24c0-6.03-4.888-10.92-10.92-10.92M13.097 24.613a8.8 8.8 0 0 1 3.42-.018q.606.112 1.218.297c1.735.523 3.54 1.465 5.634 2.686 5.611 3.273 12.212 2.472 16.108-.311a1.25 1.25 0 1 0-1.453-2.034C35.826 26.802 32.41 27.63 28.915 27a13 13 0 0 1-2.475-.703 13 13 0 0 1-1.812-.878c-2.27-1.324-4.45-2.479-6.693-3.067a14 14 0 0 0-1.326-.277c-2.538-.392-5.11.024-7.959 1.577a1.25 1.25 0 0 0 1.198 2.195c1.159-.632 2.23-1.028 3.248-1.234M24.074 44a1 1 0 0 1-.164 0zM11.607 9.895l-.101-.09a1.25 1.25 0 0 0-1.667 1.858l2.148 2.148.102.09a1.25 1.25 0 0 0 1.666-1.858zm26.628 1.666a1.25 1.25 0 0 0-1.859-1.666l-2.148 2.148-.09.102a1.25 1.25 0 0 0 1.858 1.666l2.148-2.148zM25.244 5.12a1.25 1.25 0 0 0-2.494.128v3.038l.007.127a1.25 1.25 0 0 0 2.493-.127V5.247z"/>`,
  'regular': `<path d="m10 37.763-.156.084a1.25 1.25 0 0 1-1.197-2.195c2.982-1.627 5.664-2.006 8.319-1.516 2.585.478 5.062 1.769 7.657 3.283 4.752 2.771 10.291 2.031 13.395-.186a1.25 1.25 0 1 1 1.453 2.034c-3.895 2.783-10.496 3.584-16.107.311-2.587-1.509-4.734-2.592-6.852-2.983-2.007-.37-4.064-.131-6.512 1.168m26-2.78q.298-.095.587-.203a12.4 12.4 0 0 0 2.887-1.513 1.25 1.25 0 1 0-1.453-2.034c-3.104 2.217-8.643 2.957-13.395.186-2.595-1.514-5.072-2.805-7.658-3.283-2.655-.49-5.336-.11-8.32 1.516a1.25 1.25 0 0 0 1.198 2.195c2.517-1.373 4.62-1.63 6.668-1.252 2.118.391 4.266 1.474 6.852 2.983 4.17 2.433 8.887 2.615 12.634 1.406m-22.903-10.37a8.7 8.7 0 0 1 2.496-.144q.464.041.924.126c2.118.391 4.265 1.475 6.852 2.983 5.611 3.273 12.212 2.472 16.108-.311a1.25 1.25 0 1 0-1.453-2.034c-3.105 2.217-8.644 2.957-13.396.186-2.595-1.514-5.072-2.805-7.657-3.283-2.655-.49-5.337-.11-8.32 1.516a1.25 1.25 0 0 0 1.198 2.195c1.159-.632 2.23-1.028 3.248-1.234M32.42 24q0 .331-.025.656a10 10 0 0 0 2.525-.589V24c0-6.03-4.888-10.92-10.92-10.92a10.92 10.92 0 0 0-9.932 6.379q1.386-.078 2.765.122A8.42 8.42 0 0 1 32.419 24m-8.345 20a1 1 0 0 1-.164 0zM11.607 9.895l-.101-.09a1.25 1.25 0 0 0-1.667 1.858l2.148 2.148.102.09a1.25 1.25 0 0 0 1.666-1.858zm26.628 1.666a1.25 1.25 0 0 0-1.859-1.666l-2.148 2.148-.09.102a1.25 1.25 0 0 0 1.858 1.666l2.148-2.148zM25.244 5.12a1.25 1.25 0 0 0-2.494.128v3.038l.007.127a1.25 1.25 0 0 0 2.493-.127V5.247z"/>`
} as const;

export default function WeatherHazeIcon({ 
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

  const gradientId = 'weatherhazeicon_gradient';
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