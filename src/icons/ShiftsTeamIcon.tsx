import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-4.99c.166-.382.244-.787.244-1.187a2.32 2.32 0 0 0-1.327-2.101 2.75 2.75 0 0 0-3.83-3.948A3.25 3.25 0 0 0 3 12.011V6.25A3.25 3.25 0 0 1 6.25 3zm-6 3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h4.498a.75.75 0 0 0 0-1.5H12.5V6.75a.75.75 0 0 0-.75-.75m-7 11a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m0 6c2.679 0 3.75-1.569 3.75-3.125C8.5 18.84 7.78 18 6.893 18H2.607C1.72 18 1 18.84 1 19.875 1 21.437 2.071 23 4.75 23m6.75-7.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M8.916 22c.404-.66.582-1.405.582-2.125a3.14 3.14 0 0 0-.32-1.375h1.54c.71 0 1.286.588 1.286 1.313 0 1.09-.857 2.187-3 2.187z"/>`,
  'regular': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-4.99c.166-.382.244-.787.244-1.187q0-.159-.02-.313h4.766a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v5.26a3.2 3.2 0 0 0-1.5.5V6.25A3.25 3.25 0 0 1 6.25 3zm-6 3a.75.75 0 0 1 .743.648l.007.102V12h3.748a.75.75 0 0 1 .102 1.493l-.102.007H11.75a.75.75 0 0 1-.743-.648L11 12.75v-6a.75.75 0 0 1 .75-.75m-7 11a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m0 6c2.679 0 3.75-1.569 3.75-3.125C8.5 18.84 7.78 18 6.893 18H2.607C1.72 18 1 18.84 1 19.875 1 21.437 2.071 23 4.75 23m6.75-7.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M8.916 22c.404-.66.582-1.405.582-2.125a3.14 3.14 0 0 0-.32-1.375h1.54c.71 0 1.286.588 1.286 1.313 0 1.09-.857 2.187-3 2.187z"/>`
} as const;

export default function ShiftsTeamIcon({ 
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

  const gradientId = 'shiftsteamicon_gradient';
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