import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39 7.25a1.25 1.25 0 1 0-2.5 0V9h-1.75a1.25 1.25 0 0 0 0 2.5h1.75v1.75a1.25 1.25 0 0 0 2.5 0V11.5h1.75a1.25 1.25 0 1 0 0-2.5H39zm-24 4a1.25 1.25 0 1 0-2.5 0V13h-1.75a1.25 1.25 0 0 0 0 2.5h1.75v1.75a1.25 1.25 0 0 0 2.5 0V15.5h1.75a1.25 1.25 0 1 0 0-2.5H15zM33.75 30c.69 0 1.25.56 1.25 1.25V33h1.75a1.25 1.25 0 1 1 0 2.5H35v1.75a1.25 1.25 0 1 1-2.5 0V35.5h-1.75a1.25 1.25 0 0 1 0-2.5h1.75v-1.75c0-.69.56-1.25 1.25-1.25m-1.143-14.596a4.75 4.75 0 0 0-6.717 0l-1.36 1.359 6.718 6.717 1.359-1.358a4.75 4.75 0 0 0 0-6.718m-3.126 9.844-6.718-6.717L5.396 35.898a4.75 4.75 0 0 0 6.717 6.718z"/>`,
  'regular': `<path d="M37.75 6c.69 0 1.25.56 1.25 1.25V9h1.75a1.25 1.25 0 0 1 0 2.5H39v1.75a1.25 1.25 0 0 1-2.5 0V11.5h-1.75a1.25 1.25 0 1 1 0-2.5h1.75V7.25c0-.69.56-1.25 1.25-1.25M15 11.25a1.25 1.25 0 0 0-2.5 0V13h-1.75a1.25 1.25 0 1 0 0 2.5h1.75v1.75a1.25 1.25 0 1 0 2.5 0V15.5h1.75a1.25 1.25 0 0 0 0-2.5H15zM33.75 30c.69 0 1.25.56 1.25 1.25V33h1.75a1.25 1.25 0 0 1 0 2.5H35v1.75a1.25 1.25 0 0 1-2.5 0V35.5h-1.75a1.25 1.25 0 1 1 0-2.5h1.75v-1.75c0-.69.56-1.25 1.25-1.25m-7.86-14.596a4.75 4.75 0 1 1 6.717 6.718L12.113 42.616a4.75 4.75 0 0 1-6.717-6.718zM24.53 20.3 7.164 37.666a2.25 2.25 0 0 0 3.182 3.182l17.368-17.367zm4.95 1.414 1.36-1.359a2.25 2.25 0 1 0-3.183-3.182L26.3 18.531z"/>`
} as const;

export default function WandIcon({ 
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

  const gradientId = 'wandicon_gradient';
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