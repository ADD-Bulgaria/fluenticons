import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.379 11.5a14.78 14.78 0 0 1-9.973 9.906l-8.812-8.812A14.78 14.78 0 0 1 12.5 2.62zm-7.66-2.28-4.5 4.5a.75.75 0 1 0 1.061 1.06l4.5-4.5a.75.75 0 1 0-1.06-1.06M2.2 14.32l7.48 7.48q-1.186.2-2.43.2h-1A4.25 4.25 0 0 1 2 17.75v-1q.001-1.243.2-2.43M14.217 2.217l7.566 7.566q.216-1.236.217-2.533v-1A4.25 4.25 0 0 0 17.75 2h-1q-1.297.001-2.533.217"/>`,
  'regular': `<path d="M13.72 9.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06zM17.75 2A4.25 4.25 0 0 1 22 6.25v1C22 15.396 15.396 22 7.25 22h-1A4.25 4.25 0 0 1 2 17.75v-1C2 8.604 8.604 2 16.75 2zm2.75 4.25a2.75 2.75 0 0 0-2.75-2.75h-1q-.605 0-1.196.053l4.893 4.893q.053-.591.053-1.196zm-.347 4.024-6.427-6.427a13.27 13.27 0 0 0-9.902 9.977l6.352 6.352a13.27 13.27 0 0 0 9.977-9.902m-16.61 5.391q-.043.537-.043 1.085v1a2.75 2.75 0 0 0 2.75 2.75h1q.548 0 1.085-.044z"/>`
} as const;

export default function SportAmericanFootballIcon({ 
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

  const gradientId = 'sportamericanfootballicon_gradient';
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