import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.33 7.557A8.02 8.02 0 0 1 12 4c2.034 0 3.89.755 5.304 2H17a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v.846A10 10 0 0 0 12 2a10.02 10.02 0 0 0-8.33 4.443 1 1 0 1 0 1.66 1.114M5 19.154V20a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.304A8 8 0 0 0 12 20c2.78 0 5.23-1.41 6.67-3.557a1 1 0 0 1 1.66 1.114A10.02 10.02 0 0 1 12 22a10 10 0 0 1-7-2.846M10 7a1 1 0 0 0-2 0v1H7a1 1 0 0 0 0 2h1v3a3 3 0 0 0 3 3h3v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-6a1 1 0 0 1-1-1zm4 3.882V13h2v-2.118A2.88 2.88 0 0 0 13.118 8H11v2h2.118c.487 0 .882.395.882.882"/>`,
  'regular': `<path d="M4.702 7.636A8.5 8.5 0 0 1 11.999 3.5a8.48 8.48 0 0 1 6.481 3h-1.73a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-1.5 0v1.636A9.98 9.98 0 0 0 11.999 2a10 10 0 0 0-8.584 4.865.75.75 0 0 0 1.287.771M4.5 18.616v1.634a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H5.517a8.48 8.48 0 0 0 6.482 3 8.5 8.5 0 0 0 7.296-4.136.75.75 0 1 1 1.287.771A10 10 0 0 1 11.999 22 9.98 9.98 0 0 1 4.5 18.617m5-11.866a.75.75 0 0 0-1.5 0V8H6.75a.75.75 0 0 0 0 1.5H8v3.75A2.75 2.75 0 0 0 10.75 16h3.75v1.25a.75.75 0 0 0 1.5 0V16h1.25a.75.75 0 0 0 0-1.5h-6.5c-.69 0-1.25-.56-1.25-1.25zm5 4v2.75H16v-2.75A2.75 2.75 0 0 0 13.25 8H10.5v1.5h2.75c.69 0 1.25.56 1.25 1.25"/>`
} as const;

export default function CropArrowRotateIcon({ 
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

  const gradientId = 'croparrowrotateicon_gradient';
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