import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.11 17.24a7 7 0 0 0 3.414 4.837l-2.473.82a2 2 0 0 1-2.322-.831l-.431-.684a2 2 0 0 1 .224-2.424zM17 10a6 6 0 1 1 0 12 6 6 0 0 1 0-12M7 1q.32 0 .634.033l-.351.115c-.387.107-.8.292-1.184.537C3.995 3.03 3.367 5.82 4.7 7.92c1.335 2.102 4.126 2.711 6.233 1.365.344-.22.655-.484.933-.783l1.128-1.21A6 6 0 1 1 7 1m5.797.648.107.13.091.133.648 1.02a2 2 0 0 1-.114 2.307l-.11.129-2.289 2.457c-.213.23-.458.441-.737.62-1.641 1.048-3.812.575-4.85-1.059-1.036-1.633-.546-3.808 1.095-4.858a3.6 3.6 0 0 1 .958-.429l3.085-1.015a2 2 0 0 1 2.116.565M10.35 3.06a.75.75 0 0 0-.26.944l.054.097.261.39.069.087a.75.75 0 0 0 1.233-.825l-.055-.097-.261-.39-.069-.087a.75.75 0 0 0-.972-.119"/>`,
  'regular': `<path d="M17 10a6 6 0 1 1-1.684 11.76q-.217.106-.434.181l-.209.065-2.614.868a2.75 2.75 0 0 1-3.092-.996l-.101-.148-.43-.684a2.75 2.75 0 0 1 .18-3.185l.127-.148 1.97-2.131a4 4 0 0 1 .332-.324A6 6 0 0 1 17 10m-5.854 7.323-1.302 1.408a1.25 1.25 0 0 0-.208 1.393l.068.123.431.683c.283.45.815.666 1.325.555l.126-.035 1.858-.616a6 6 0 0 1-2.298-3.51M17 11.5a4.5 4.5 0 0 0-4.127 2.702l-.064.157-.084.234-.072.24a5 5 0 0 0-.112.556l-.03.286A5 5 0 0 0 12.5 16l.005.212a4.5 4.5 0 0 0 2.638 3.888l.002-.001q.235.107.484.188l.092.027.15.043q.177.045.36.078l.184.027a5 5 0 0 0 .508.037L17 20.5a4.5 4.5 0 1 0 0-9M7 1c.753 0 1.474.139 2.139.392l.797-.255a2.75 2.75 0 0 1 2.888.784l.123.147.133.188.525.805a2.75 2.75 0 0 1-.06 3.084l-.12.161-.136.154-.293.308L13 7a6 6 0 1 1-6-6M5.73 2.682l-.152.047A4.502 4.502 0 0 0 7 11.5a4.5 4.5 0 0 0 4.179-2.826q-.383.402-.854.696c-1.918 1.197-4.46.654-5.68-1.222-1.185-1.82-.688-4.221 1.085-5.466m4.802-.152-.138.036-2.953.945a2.7 2.7 0 0 0-.724.315c-1.22.761-1.58 2.327-.815 3.504.773 1.187 2.4 1.534 3.63.768q.23-.144.43-.332l.131-.13 2.09-2.188.093-.105a1.25 1.25 0 0 0 .139-1.347l-.067-.116-.507-.78-.084-.117-.08-.093a1.25 1.25 0 0 0-1.005-.38zm.398 1.154.068.087.25.374a.75.75 0 0 1-1.178.922l-.068-.088-.25-.373a.75.75 0 0 1 1.178-.922"/>`
} as const;

export default function SurfaceEarbudsIcon({ 
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

  const gradientId = 'surfaceearbudsicon_gradient';
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