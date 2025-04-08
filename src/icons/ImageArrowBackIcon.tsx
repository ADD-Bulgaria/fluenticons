import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.646-2.146a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.708L8.293 6H6.25A2.25 2.25 0 0 0 4 8.25v.25a.5.5 0 0 1-1 0v-.25A3.25 3.25 0 0 1 6.25 5h2.043zM15.752 7.5a.752.752 0 1 1 0 1.504.752.752 0 0 1 0-1.504M13 6.5a6.5 6.5 0 0 1-10 5.478v5.772c0 .627.178 1.213.485 1.71l6.939-6.812.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117 6.939 6.811A3.24 3.24 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-5.772A6.47 6.47 0 0 1 13 6.5m2.752-.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504m-4.277 7.718.083-.071a.75.75 0 0 1 .874-.007l.093.078 6.928 6.8A3.24 3.24 0 0 1 17.75 21H6.25a3.24 3.24 0 0 1-1.703-.481z"/>`,
  'regular': `<path d="M1 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.646-2.146a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.708L8.293 6H6.25A2.25 2.25 0 0 0 4 8.25v.25a.5.5 0 0 1-1 0v-.25A3.25 3.25 0 0 1 6.25 5h2.043zM3 11.978c.463.297.967.536 1.5.709v5.063q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702q.102-.28.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75h-5.063a6.5 6.5 0 0 0-.709-1.5h5.772A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm15.33 7.423-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099M15.253 6.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504"/>`
} as const;

export default function ImageArrowBackIcon({ 
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

  const gradientId = 'imagearrowbackicon_gradient';
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