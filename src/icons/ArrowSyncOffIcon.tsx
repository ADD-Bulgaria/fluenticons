import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.885 3.75a6.24 6.24 0 0 0-3.116.897L5.683 3.56a7.7 7.7 0 0 1 3.665-1.285l-.585-.586A.75.75 0 0 1 9.823.63l2.122 2.121a.75.75 0 0 1 0 1.06L9.823 5.934a.75.75 0 0 1-1.06-1.06zM4.178 4.884a7.75 7.75 0 0 0 1.18 11.322.75.75 0 1 0 .9-1.2 6.25 6.25 0 0 1-1.016-9.059l8.81 8.811a6.23 6.23 0 0 1-3.937 1.49l1.122-1.123a.75.75 0 0 0-1.06-1.06l-2.122 2.121a.75.75 0 0 0 0 1.06l2.122 2.122a.75.75 0 1 0 1.06-1.06l-.585-.586a7.7 7.7 0 0 0 4.463-1.9l2.031 2.03a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.708zm11.174 8.346 1.086 1.086a7.753 7.753 0 0 0-1.796-10.524.75.75 0 0 0-.9 1.2q.354.265.677.588a6.25 6.25 0 0 1 .933 7.65"/>`,
  'regular': `<path d="M11.414 3.635a.5.5 0 0 0 0-.707L9.293.807a.5.5 0 0 0-.707.707l.997.997a7.5 7.5 0 0 0-3.72 1.23l.724.724a6.5 6.5 0 0 1 3.48-.966q.037 0 .073-.004L8.586 5.049a.5.5 0 0 0 .707.707zm-7.06 1.426a7.5 7.5 0 0 0 1.154 10.945.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 5.063 5.77l9.165 9.165A6.48 6.48 0 0 1 9.934 16.5l-.074.004 1.554-1.554a.5.5 0 1 0-.707-.707l-2.121 2.121a.5.5 0 0 0 0 .707l2.121 2.121a.5.5 0 0 0 .707-.707l-.997-.997a7.47 7.47 0 0 0 4.521-1.843l2.208 2.209a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708zm10.95-.365a7.5 7.5 0 0 1 .954 9.44l-.724-.724a6.503 6.503 0 0 0-1.641-8.62.5.5 0 1 1 .6-.8q.424.318.81.704"/>`
} as const;

export default function ArrowSyncOffIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'arrowsyncofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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