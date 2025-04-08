import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m20.834 25.5-.412 1.787A3.5 3.5 0 0 1 17.012 30h-2.023a3.5 3.5 0 0 1-3.41-2.713l-.413-1.787z"/><path d="m20.834 25.5-.412 1.787A3.5 3.5 0 0 1 17.012 30h-2.023a3.5 3.5 0 0 1-3.41-2.713l-.413-1.787zM16 2C10.477 2 6 6.477 6 12a9.98 9.98 0 0 0 3.365 7.482c.343.304.561.645.64.986l.93 4.032h10.13l.93-4.032c.079-.34.297-.682.64-.986A9.98 9.98 0 0 0 26 12c0-5.523-4.477-10-10-10"/><path fill-opacity=".2" d="M16 2C10.477 2 6 6.477 6 12a9.98 9.98 0 0 0 3.365 7.482c.343.304.561.645.64.986l.93 4.032h10.13l.93-4.032c.079-.34.297-.682.64-.986A9.98 9.98 0 0 0 26 12c0-5.523-4.477-10-10-10"/><path d="M21.18 24H10.82l.461 2h9.437z"/><path fill-rule="evenodd" d="M30.5 9a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0" clip-rule="evenodd"/><path fill-rule="evenodd" d="M27.53 7.28a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"/>`,
  'filled': `<path d="M23.5 1a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06M16 2q.611 0 1.201.071a9 9 0 0 0 7.18 15.386 10 10 0 0 1-1.746 2.025c-.343.304-.561.645-.64.986L21.18 24H10.82l-.815-3.532c-.079-.34-.297-.682-.64-.986A9.98 9.98 0 0 1 6 12C6 6.477 10.477 2 16 2m-4.719 24 .297 1.287A3.5 3.5 0 0 0 14.988 30h2.023a3.5 3.5 0 0 0 3.41-2.713L20.72 26z"/>`,
  'regular': `<path d="M23.5 1a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06M16 2q.611 0 1.201.071a9 9 0 0 0-1.5 1.934 8 8 0 0 0-5.009 13.98c.568.505 1.067 1.189 1.262 2.034L12.642 23h6.716l.688-2.981c.195-.845.694-1.53 1.262-2.033q.33-.294.627-.622a9 9 0 0 0 2.446.093 10 10 0 0 1-1.746 2.025c-.343.304-.561.645-.64.986l-1.573 6.819A3.5 3.5 0 0 1 17.012 30h-2.023a3.5 3.5 0 0 1-3.41-2.713l-1.574-6.818c-.079-.342-.297-.683-.64-.987A9.98 9.98 0 0 1 6 12C6 6.477 10.477 2 16 2m2.897 23h-5.794l.424 1.837A1.5 1.5 0 0 0 14.99 28h2.022a1.5 1.5 0 0 0 1.462-1.163z"/>`
} as const;

export default function LightbulbCheckmarkIcon({ 
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

  const gradientId = 'lightbulbcheckmarkicon_gradient';
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