import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h6v10.5a1.5 1.5 0 0 1-1.5 1.5H9.73l2.576-2.576.02-.02.347-.348a4.605 4.605 0 0 0-5.63-7.202A4.6 4.6 0 0 0 4 11.2V3.5A1.5 1.5 0 0 1 5.5 2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM2.062 13.216a3.605 3.605 0 0 1 4.972-.12A3.605 3.605 0 0 1 13.017 16h-2.042l-.738-.737a1.75 1.75 0 0 0-2.545.074l-.494.556-.742-1.114a1.75 1.75 0 0 0-3.021.188L2.918 16H1.014c-.065-1 .284-2.02 1.048-2.784M3.248 19.5 6.5 22.754a.75.75 0 0 0 1.061 0l3.254-3.254h-2.14l-.367.413a1.75 1.75 0 0 1-2.764-.192l-.147-.221zm2.376-4.166a.75.75 0 0 0-1.295.08L3.536 17H1.75a.75.75 0 0 0 0 1.5H4a.75.75 0 0 0 .67-.415l.423-.844 1.283 1.925a.75.75 0 0 0 1.185.082l1.471-1.655.688.687c.14.141.331.22.53.22h2a.75.75 0 0 0 0-1.5h-1.69l-1.03-1.03a.75.75 0 0 0-1.09.032l-1.355 1.524z"/>`,
  'regular': `<path d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v9.75a.75.75 0 0 1-.75.75h-6.52L9.73 22h8.02A2.25 2.25 0 0 0 20 19.75V9.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25v6.95a4.6 4.6 0 0 1 1.5.046zM17.44 8.5H14a.5.5 0 0 1-.5-.5V4.56zM3.121 14.276a2.105 2.105 0 0 1 2.977 0l.403.403a.75.75 0 0 0 1.06 0l.367-.367A2.105 2.105 0 0 1 11.513 16h1.504a3.605 3.605 0 0 0-5.983-2.904A3.605 3.605 0 0 0 1.014 16h1.505a2.1 2.1 0 0 1 .603-1.724M5.37 19.5H3.248L6.5 22.754a.75.75 0 0 0 1.061 0l3.254-3.254h-2.12l-1.663 1.663zm.255-4.166a.75.75 0 0 0-1.295.08L3.536 17H1.75a.75.75 0 0 0 0 1.5H4a.75.75 0 0 0 .67-.415l.423-.844 1.283 1.925a.75.75 0 0 0 1.185.082l1.462-1.645.687.713a.75.75 0 0 0 .557.23l2-.046a.75.75 0 0 0-.034-1.5l-1.671.038L9.54 15.98a.75.75 0 0 0-1.1.023l-1.355 1.524z"/>`
} as const;

export default function DocumentHeartPulseIcon({ 
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

  const gradientId = 'documentheartpulseicon_gradient';
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