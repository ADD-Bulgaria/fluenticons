import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M4.25 13A2.25 2.25 0 0 0 2 15.25v.25S2 20 8 20s6-4.5 6-4.5v-.25A2.25 2.25 0 0 0 11.75 13z"/><path d="M4.25 13A2.25 2.25 0 0 0 2 15.25v.25S2 20 8 20s6-4.5 6-4.5v-.25A2.25 2.25 0 0 0 11.75 13z"/><path fill-opacity=".5" d="M4.25 13A2.25 2.25 0 0 0 2 15.25v.25S2 20 8 20s6-4.5 6-4.5v-.25A2.25 2.25 0 0 0 11.75 13z"/><path d="M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-9 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8m9.501 12.002a5.501 5.501 0 1 0-4.812-2.833l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688"/><path d="M15.5 17.001a.5.5 0 1 1 0-1h4.002a.5.5 0 1 1 0 1zm2.001 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"/><path d="M15.5 17.001a.5.5 0 1 1 0-1h4.002a.5.5 0 1 1 0 1zm2.001 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"/>`,
  'filled': `<path d="M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m8 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0M2 15.25A2.25 2.25 0 0 1 4.25 13h7.5c.316 0 .617.065.89.183A6.48 6.48 0 0 0 11 17.5a6.5 6.5 0 0 0 .278 1.887C10.458 19.76 9.39 20 8 20c-6 0-6-4.5-6-4.5zm15.501 7.752a5.501 5.501 0 1 0-4.812-2.833l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688m-2-6a.5.5 0 1 1 0-1.001h4a.5.5 0 1 1 0 1zm2 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"/>`,
  'regular': `<path d="M8 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m13-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M14 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0M2 15.25A2.25 2.25 0 0 1 4.25 13h7.5c.316 0 .617.065.89.183-.354.398-.66.84-.908 1.317H4.25a.75.75 0 0 0-.75.75v.257l.007.08c.007.074.023.188.055.329.066.281.198.656.459 1.029C4.514 17.65 5.578 18.5 8 18.5c1.413 0 2.363-.29 3.008-.67.027.536.119 1.055.268 1.55-.835.38-1.907.62-3.276.62-2.828 0-4.39-1.025-5.208-2.195a4.5 4.5 0 0 1-.778-2.07A3 3 0 0 1 2 15.529zm15.501 7.752a5.501 5.501 0 1 0-4.812-2.833l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688m-2-6a.5.5 0 1 1 0-1.001h4a.5.5 0 1 1 0 1zm2 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"/>`
} as const;

export default function PeopleChatIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'peoplechaticon_gradient';
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