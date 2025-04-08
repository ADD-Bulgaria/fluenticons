import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.75C2 4.784 2.784 4 3.75 4h13.5c.966 0 1.75.784 1.75 1.75V11h-3a2 2 0 0 0-2 2v3H3.75A1.75 1.75 0 0 1 2 14.25zm3 .5a.75.75 0 0 1-.75.75h-1v1.5h1A2.25 2.25 0 0 0 6.5 6.25v-1H5zm5.5 6.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m-6.25.5a.75.75 0 0 1 .75.75v1h1.5v-1a2.25 2.25 0 0 0-2.25-2.25h-1V13zm12.5-6a.75.75 0 0 1-.75-.75v-1h-1.5v1a2.25 2.25 0 0 0 2.25 2.25h1V7zM4.401 17.5H14V19H7a3 3 0 0 1-2.599-1.5M22 9v2h-1.5V6.401A3 3 0 0 1 22 9m-5.5 3a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5zm.5 4.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1M16.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"/>`,
  'regular': `<path d="M10.5 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6M9 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M2 6.25A2.25 2.25 0 0 1 4.25 4h12.5A2.25 2.25 0 0 1 19 6.25V11h-1.5V8.5h-.75a2.25 2.25 0 0 1-2.25-2.25V5.5h-8v.75A2.25 2.25 0 0 1 4.25 8.5H3.5v3h.75a2.25 2.25 0 0 1 2.25 2.25v.75H14V16H4.25A2.25 2.25 0 0 1 2 13.75zm2.25-.75a.75.75 0 0 0-.75.75V7h.75A.75.75 0 0 0 5 6.25V5.5zM17.5 7v-.75a.75.75 0 0 0-.75-.75H16v.75c0 .414.336.75.75.75zm-14 6.75c0 .414.336.75.75.75H5v-.75a.75.75 0 0 0-.75-.75H3.5zm.901 3.75H14V19H7a3 3 0 0 1-2.599-1.5M22 11V9a3 3 0 0 0-1.5-2.599V11zm-5.5 1a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5zm.5 4.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1m3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1M16.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"/>`
} as const;

export default function MoneyCalculatorIcon({ 
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

  const gradientId = 'moneycalculatoricon_gradient';
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