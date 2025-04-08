import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.668 6.5h14.081a7.75 7.75 0 0 1 7.75 7.75v24.081A5 5 0 0 0 39 34V14.25C39 8.59 34.41 4 28.75 4H19a5 5 0 0 0-4.331 2.5M14 9a5 5 0 0 0-5 5v28.75a1.25 1.25 0 0 0 1.943 1.04L21.5 36.752l10.557 7.038A1.25 1.25 0 0 0 34 42.75V14a5 5 0 0 0-5-5z"/>`,
  'regular': `<path d="M14.668 6.5A5 5 0 0 1 18.999 4h9.75C34.41 4 39 8.59 39 14.25V34a5 5 0 0 1-2.5 4.331V14.25a7.75 7.75 0 0 0-7.75-7.75zM14 9a5 5 0 0 0-5 5v28.75a1.25 1.25 0 0 0 1.943 1.04L21.5 36.752l10.557 7.038A1.25 1.25 0 0 0 34 42.75V14a5 5 0 0 0-5-5zm-2.5 5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v26.414l-9.307-6.204a1.25 1.25 0 0 0-1.386 0L11.5 40.414z"/>`
} as const;

export default function BookmarkMultipleIcon({ 
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

  const gradientId = 'bookmarkmultipleicon_gradient';
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