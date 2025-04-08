import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H9.49l3.17-3.17a4.467 4.467 0 0 0-5.645-6.87A4.47 4.47 0 0 0 4 11.235V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM7.015 22.75a.75.75 0 0 1-.53-.22l-4.41-4.408a3.467 3.467 0 1 1 4.904-4.903l.036.036.036-.036a3.467 3.467 0 1 1 4.902 4.903L7.545 22.53a.75.75 0 0 1-.53.22"/>`,
  'regular': `<path d="M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.31a4.5 4.5 0 0 0-1.5-.075V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.06.007c.214.015.426.056.623.138.058.024.112.056.166.087l.05.029.048.024q.041.019.08.044c.078.053.148.116.22.18q.016.015.036.03.025.018.048.04l5.83 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H9.49l1.5-1.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5zM6.484 22.53a.747.747 0 0 0 1.061 0l4.408-4.408a3.467 3.467 0 1 0-4.902-4.903l-.036.036-.036-.036a3.467 3.467 0 1 0-4.903 4.903z"/>`
} as const;

export default function DocumentHeartIcon({ 
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

  const gradientId = 'documenthearticon_gradient';
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