import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5zm2 9h31.5v5.145A13 13 0 0 0 35 22c-2.267 0-4.398.58-6.254 1.6q.004-.05.004-.1c0-.69-.56-1.25-1.25-1.25h-7a1.25 1.25 0 1 0 0 2.5h6.503A12.98 12.98 0 0 0 22 35c0 2.472.69 4.782 1.887 6.75H15.5a7.25 7.25 0 0 1-7.25-7.25zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-14.293-3.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L30.414 35H36a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6h-5.586z"/>`,
  'regular': `<path d="M20.5 22.25a1.25 1.25 0 1 0 0 2.5h6.503q.822-.643 1.743-1.15.004-.05.004-.1c0-.69-.56-1.25-1.25-1.25zm-5 17h7.21c.305.88.701 1.717 1.177 2.5H15.5a7.25 7.25 0 0 1-7.25-7.25V17.318a3.75 3.75 0 0 1-2-3.318v-4A3.75 3.75 0 0 1 10 6.25h28A3.75 3.75 0 0 1 41.75 10v4a3.75 3.75 0 0 1-2 3.317v5.578a13 13 0 0 0-2.5-.701V17.75h-26.5V34.5a4.75 4.75 0 0 0 4.75 4.75M10 8.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h28c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-14.293-3.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L30.414 35H36a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6h-5.586z"/>`
} as const;

export default function ArchiveArrowBackIcon({ 
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

  const gradientId = 'archivearrowbackicon_gradient';
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