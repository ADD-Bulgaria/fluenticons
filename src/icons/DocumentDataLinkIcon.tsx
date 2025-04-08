import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3h-7.531a6 6 0 0 0 2.031-4.5 5.98 5.98 0 0 0-1.5-3.969V19a1 1 0 1 0-2 0v1.044a6 6 0 0 0-2.5-.544H12V13a1 1 0 1 0-2 0v6.5H6.5a6 6 0 0 0-1.5.189V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M22 16a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zM8 22a1 1 0 0 0-1-1h-.5a4.5 4.5 0 1 0 0 9H7a1 1 0 1 0 0-2h-.5a2.5 2.5 0 0 1 0-5H7a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5H12a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M8 2a3 3 0 0 0-3 3v14.689a6 6 0 0 1 1.5-.189H7V5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1h-6.044a6 6 0 0 1-1.487 2H24a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2zm2 11v6.5h2V13a1 1 0 1 0-2 0m5 7.044a6 6 0 0 1 2 1.487V19a1 1 0 1 0-2 0zM24.586 10H20a1 1 0 0 1-1-1V4.414zM21 15a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1M8 22a1 1 0 0 0-1-1h-.5a4.5 4.5 0 1 0 0 9H7a1 1 0 1 0 0-2h-.5a2.5 2.5 0 0 1 0-5H7a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5H12a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`
} as const;

export default function DocumentDataLinkIcon({ 
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

  const gradientId = 'documentdatalinkicon_gradient';
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