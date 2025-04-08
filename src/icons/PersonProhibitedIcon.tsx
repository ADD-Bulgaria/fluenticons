import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C7.859 29.177 10.802 30 14 30c1.047 0 2.067-.088 3.04-.255A8.98 8.98 0 0 1 14 23c0-1.85.558-3.57 1.516-5zM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0-2a5.5 5.5 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23 28.5m3.118-10.032-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65"/>`,
  'light': `<path d="M9 9a7 7 0 1 1 14 0A7 7 0 0 1 9 9m7-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m.375 15H7.5A3.5 3.5 0 0 0 4 21.5v.667C4 24.317 6.766 30 16 30q.64 0 1.238-.035-.466-.453-.865-.968Q16.189 29 16 29c-8.766 0-11-5.316-11-6.833V21.5A2.5 2.5 0 0 1 7.5 19h8.204q.303-.524.671-1M23.5 31a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0-2a5.5 5.5 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23.5 29m3.118-10.032-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65"/>`,
  'regular': `<path d="M21 9A7 7 0 1 1 7 9a7 7 0 0 1 14 0m-2 0A5 5 0 1 0 9 9a5 5 0 0 0 10 0M5.5 18A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C7.859 29.177 10.802 30 14 30c1.047 0 2.067-.088 3.04-.255a9 9 0 0 1-1.568-1.81q-.72.064-1.472.065c-2.877 0-5.434-.744-7.241-1.894C4.939 24.95 4 23.472 4 22v-.5A1.5 1.5 0 0 1 5.5 20h9.012a9 9 0 0 1 1.004-2zM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m0-2a5.5 5.5 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23 28.5m3.118-10.032-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65"/>`
} as const;

export default function PersonProhibitedIcon({ 
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

  const gradientId = 'personprohibitedicon_gradient';
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