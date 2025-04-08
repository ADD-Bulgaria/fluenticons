import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708L3.414 4.12A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.51 0 .983-.152 1.379-.414l1.267 1.268a.5.5 0 0 0 .708-.708zm11.905 13.32a1 1 0 0 1-.259.034h-9a1 1 0 0 1-1-1V7h1.793zM15.5 7v6.379l1.475 1.475Q17 14.68 17 14.5v-9A2.5 2.5 0 0 0 14.5 3h-9q-.18 0-.354.025L9.121 7z"/>`,
  'regular': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708L3.414 4.12A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.51 0 .983-.152 1.379-.414l1.267 1.268a.5.5 0 0 0 .708-.708zm12.293 13.708A1.5 1.5 0 0 1 14.5 16h-9A1.5 1.5 0 0 1 4 14.5V7h2.293zM16 7v6.879l.975.975Q17 14.68 17 14.5v-9A2.5 2.5 0 0 0 14.5 3h-9q-.18 0-.354.025L9.121 7z"/>`
} as const;

export default function WindowHeaderHorizontalOffIcon({ 
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

  const gradientId = 'windowheaderhorizontalofficon_gradient';
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