import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.206 6.025a6.907 6.907 0 1 1 9.768 9.767l-2.234 2.236.935.998a4.25 4.25 0 0 1-.095 5.912l-3.446 3.446a1.25 1.25 0 0 1-1.768-1.768l3.446-3.446a1.75 1.75 0 0 0 .04-2.435l-.881-.939-20.165 20.168a6 6 0 0 1-2.76 1.572L5.56 43.961a1.25 1.25 0 0 1-1.521-1.521l2.427-9.485a6 6 0 0 1 1.572-2.758z"/>`,
  'regular': `<path d="M41.974 6.025a6.907 6.907 0 0 0-9.768 0L8.038 30.197a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.52l9.487-2.424a6 6 0 0 0 2.76-1.572l20.165-20.168.88.94a1.75 1.75 0 0 1-.039 2.434l-3.446 3.446a1.25 1.25 0 0 0 1.768 1.768l3.446-3.447a4.25 4.25 0 0 0 .095-5.911l-.935-.998 2.234-2.236a6.907 6.907 0 0 0 0-9.767m-8 1.768a4.407 4.407 0 0 1 6.233 6.232l-24.169 24.17a3.5 3.5 0 0 1-1.611.919l-7.443 1.902 1.904-7.441c.156-.61.473-1.166.917-1.61z"/>`
} as const;

export default function PenIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'penicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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