import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 9c7.814 0 14.233 5.976 14.936 13.607 1.09.346 2.12.832 3.064 1.437V24c0-9.941-8.059-18-18-18-4.61 0-8.816 1.734-12 4.584V7.5a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3h-3.698A14.94 14.94 0 0 1 24 9m2.693 16a13 13 0 0 1 4.884-2.544A1.5 1.5 0 0 0 30.5 22H25v-7.5a1.5 1.5 0 0 0-3 0v9a1.5 1.5 0 0 0 1.5 1.5zm-2.65 17a13 13 0 0 1-1.436-3.064C14.976 38.233 9 31.814 9 24q.002-1.162.171-2.275a1.5 1.5 0 0 0-2.966-.45Q6.001 22.61 6 24c0 9.941 8.059 18 18 18zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L35 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L33.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L35 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L36.414 35z"/>`,
  'regular': `<path d="M24 8.5c8.15 0 14.832 6.291 15.453 14.283.9.328 1.753.752 2.547 1.26V24c0-9.941-8.059-18-18-18a17.94 17.94 0 0 0-12.5 5.048V8.25a1.25 1.25 0 1 0-2.5 0v6.5c0 .69.56 1.25 1.25 1.25h6.5a1.25 1.25 0 1 0 0-2.5h-4.152c2.834-3.076 6.893-5 11.402-5m3.334 16a13 13 0 0 1 4.355-2.075A1.25 1.25 0 0 0 30.75 22H25v-7.75a1.25 1.25 0 1 0-2.5 0v9c0 .69.56 1.25 1.25 1.25zM24.044 42a13 13 0 0 1-1.261-2.547C14.79 38.833 8.5 32.15 8.5 24q.002-1.302.207-2.542a1.25 1.25 0 0 0-2.466-.407A18 18 0 0 0 6 24c0 9.941 8.059 18 18 18zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L35 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L33.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L35 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L36.414 35z"/>`
} as const;

export default function HistoryDismissIcon({ 
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

  const gradientId = 'historydismissicon_gradient';
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