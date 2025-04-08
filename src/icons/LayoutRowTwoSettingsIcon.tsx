import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5V15h17.535a9 9 0 0 1 2.965-.5 9 9 0 0 1 2.965.5H29V7.5A4.5 4.5 0 0 0 24.5 3zM3 17h14.275a8.97 8.97 0 0 0-2.775 6.5c0 2.071.7 3.98 1.875 5.5H7.5A4.5 4.5 0 0 1 3 24.5zm15.843 2.536a1.52 1.52 0 0 1-1.117 1.928l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.892l-.496 1.724a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.351a7.5 7.5 0 0 0 .04-3.189l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.724a7.5 7.5 0 0 0-2.75-1.596l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25.5 23.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'light': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.875a9 9 0 0 1-.671-1H7.5A3.5 3.5 0 0 1 4 24.5v-8h13.843a9 9 0 0 1 1.53-1H4v-8A3.5 3.5 0 0 1 7.5 4h17A3.5 3.5 0 0 1 28 7.5v8.204q.524.303 1 .671V7.5A4.5 4.5 0 0 0 24.5 3zm11.343 16.536a1.52 1.52 0 0 1-1.117 1.928l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.892l-.496 1.724a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.351a7.5 7.5 0 0 0 .04-3.189l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.724a7.5 7.5 0 0 0-2.75-1.596l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25.5 23.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.875a9 9 0 0 1-1.17-2H7.5A2.5 2.5 0 0 1 5 24.5V17h12.275a9 9 0 0 1 3.26-2H5V7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v7.706c.72.304 1.39.698 2 1.17V7.5A4.5 4.5 0 0 0 24.5 3zm11.343 16.536a1.52 1.52 0 0 1-1.117 1.928l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.892l-.496 1.724a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.351a7.5 7.5 0 0 0 .04-3.189l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.724a7.5 7.5 0 0 0-2.75-1.596l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25.5 23.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function LayoutRowTwoSettingsIcon({ 
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

  const gradientId = 'layoutrowtwosettingsicon_gradient';
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