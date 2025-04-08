import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-8-3v.551a3.5 3.5 0 1 1-.187 4.691C3.55 8.427 3.811 8 4.221 8c.176 0 .339.085.46.213A2.5 2.5 0 1 0 4.5 5h1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0m13.504 5.752a.752.752 0 1 0-1.504 0 .752.752 0 0 0 1.504 0M13 6.5a6.5 6.5 0 0 1-9 6.002v6.248c0 .627.178 1.213.485 1.71l6.939-6.812.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117 6.939 6.811A3.24 3.24 0 0 0 22 18.75V7.25A3.25 3.25 0 0 0 18.75 4h-6.248c.32.77.498 1.614.498 2.5m1.5 2.752a2.252 2.252 0 1 1 4.504 0 2.252 2.252 0 0 1-4.504 0m-2.025 5.466.083-.071a.75.75 0 0 1 .874-.007l.093.078 6.928 6.8A3.24 3.24 0 0 1 18.75 22H7.25a3.24 3.24 0 0 1-1.703-.481z"/>`,
  'regular': `<path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-8-3v.551a3.5 3.5 0 1 1-.187 4.691C3.55 8.427 3.811 8 4.221 8c.176 0 .339.085.46.213A2.5 2.5 0 1 0 4.5 5h1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0m14.75 2h-5.826a6.5 6.5 0 0 0-.422-1.5h6.248A3.25 3.25 0 0 1 22 7.25v11.5A3.25 3.25 0 0 1 18.75 22H7.25A3.25 3.25 0 0 1 4 18.75v-6.248c.474.198.977.34 1.5.422v5.826q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702q.102-.28.104-.595V7.25a1.75 1.75 0 0 0-1.75-1.75m.58 14.901-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099M16.253 7.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504"/>`
} as const;

export default function ImageArrowCounterclockwiseIcon({ 
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

  const gradientId = 'imagearrowcounterclockwiseicon_gradient';
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