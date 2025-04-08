import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.8 1.8 0 0 0-.46-.275zM22 7.191l-9.25 3.574v3.35a3 3 0 0 1 .25-.064v-.05a2.75 2.75 0 0 1 2.75-2.75h3.5A2.75 2.75 0 0 1 22 13.989zm-10.75 3.574v4.645c-.16.33-.25.7-.25 1.091v5q0 .065.003.128a4 4 0 0 1-.412-.14l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.192zM2.633 5.828 12 9.447l3.917-1.514-9.543-3.71-3.281 1.33q-.256.104-.46.275M14 15h-.5a1.5 1.5 0 0 0-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 14 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5"/>`,
  'regular': `<path d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.175v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04q.203.083.412.14L11 21.501v-1.465L3.656 17.06a.25.25 0 0 1-.156-.232V7.75l7.75 3.014v4.645a2.5 2.5 0 0 1 1.5-1.294v-3.35l7.75-2.992v3.778a2.75 2.75 0 0 1 1.5 2.438V7.175a1.75 1.75 0 0 0-1.093-1.622zm-2.254 1.39a2.25 2.25 0 0 1 1.69 0l6.593 2.673-2.67 1.03L9.241 4.68zM7.215 5.5l7.477 2.908-2.69 1.039L4.59 6.565zM14 15.001h-.5a1.5 1.5 0 0 0-1.5 1.5v1.5h2.5v-.25a.75.75 0 0 1 1.5 0v.25h3v-.25a.75.75 0 0 1 1.5 0v.25H23v-1.5a1.5 1.5 0 0 0-1.5-1.5H21v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5a1.75 1.75 0 0 0-1.75 1.75zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zm-3.5 7.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5"/>`
} as const;

export default function BoxToolboxIcon({ 
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

  const gradientId = 'boxtoolboxicon_gradient';
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