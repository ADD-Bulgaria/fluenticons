import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1 6h24v4.515A8.96 8.96 0 0 0 23 14a9 9 0 0 0-3.107.55A1 1 0 0 0 19 14h-6a1 1 0 1 0 0 2h4.343A8.98 8.98 0 0 0 14 23c0 2.305.867 4.408 2.292 6H9.5A5.5 5.5 0 0 1 4 23.5zm14.343 8.037a1.52 1.52 0 0 1-1.117 1.927l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.893l-.496 1.723a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.35a7.5 7.5 0 0 0 .04-3.19l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.723a7.5 7.5 0 0 0-2.75-1.597l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25 23a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'light': `<path d="M3 8V6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.236v5.28a9 9 0 0 0-1-.58v-4.107c-.313.11-.65.171-1 .171H6c-.35 0-.687-.06-1-.17V23.5A4.5 4.5 0 0 0 9.5 28h6.015q.354.528.777 1H9.5A5.5 5.5 0 0 1 4 23.5V10.236C3.386 9.686 3 8.888 3 8m3-4a2 2 0 0 0-2 2v2a1.997 1.997 0 0 0 2 2h20a2 2 0 0 0 1.191-.393l.012-.009.006-.004C27.689 9.228 28 8.65 28 8V6a2 2 0 0 0-2-2zm12.873 11q.543-.28 1.127-.488V14.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1zm-.53 4.037a1.52 1.52 0 0 1-1.117 1.927l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.893l-.496 1.723a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.35a7.5 7.5 0 0 0 .04-3.19l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.723a7.5 7.5 0 0 0-2.75-1.597l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25 23a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M13 14a1 1 0 1 0 0 2h4.343a9 9 0 0 1 2.55-1.45A1 1 0 0 0 19 14zM9.5 27h5.435c.362.728.82 1.4 1.357 2H9.5A5.5 5.5 0 0 1 4 23.5V10.236C3.386 9.686 3 8.888 3 8V6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.236v5.28a9 9 0 0 0-2-1.004V11H6v12.5A3.5 3.5 0 0 0 9.5 27M6 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm12.343 14.037a1.52 1.52 0 0 1-1.117 1.927l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.893l-.496 1.723a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.35a7.5 7.5 0 0 0 .04-3.19l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.723a7.5 7.5 0 0 0-2.75-1.597l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25 23a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function ArchiveSettingsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'archivesettingsicon_gradient';
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