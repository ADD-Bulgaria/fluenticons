import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.25V8h6.129a.75.75 0 0 0 .53-.22l2.591-2.59-1.53-1.531A2.25 2.25 0 0 0 8.129 3H5.25A3.25 3.25 0 0 0 2 6.25m0 11.5V9.5h6.129a2.25 2.25 0 0 0 1.59-.659L13.062 5.5h.439v3.75c0 .414.336.75.75.75H15v3h-.25a.75.75 0 0 0 0 1.5H15V16h-.25a.75.75 0 0 0 0 1.5H15V21H5.25A3.25 3.25 0 0 1 2 17.75M16.5 21h2.25A3.25 3.25 0 0 0 22 17.75v-9a3.25 3.25 0 0 0-3.25-3.25H18v3.75a.75.75 0 0 1-.75.75h-.75v4.5h.25a.75.75 0 0 1 0 1.5h-.25zm0-15.5H15v3h1.5z"/>`,
  'regular': `<path d="M3.5 8V6.25c0-.966.784-1.75 1.75-1.75h2.879a.75.75 0 0 1 .53.22l1.53 1.53-1.53 1.53a.75.75 0 0 1-.53.22zm1.75-5A3.25 3.25 0 0 0 2 6.25v11.5A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75v-9a3.25 3.25 0 0 0-3.25-3.25h-7.19L9.72 3.659A2.25 2.25 0 0 0 8.129 3zm8.25 4v3.25c0 .414.336.75.75.75H15v2h-.25a.75.75 0 0 0 0 1.5H15V16h-.25a.75.75 0 0 0 0 1.5H15v2H5.25a1.75 1.75 0 0 1-1.75-1.75V9.5h4.629a2.25 2.25 0 0 0 1.59-.659L11.562 7zm3 12.5V16h.25a.75.75 0 0 0 0-1.5h-.25V11h.75a.75.75 0 0 0 .75-.75V7h.75c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75zm0-12.5v2.5H15V7z"/>`
} as const;

export default function FolderZipIcon({ 
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

  const gradientId = 'folderzipicon_gradient';
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