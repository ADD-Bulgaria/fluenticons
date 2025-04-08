import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h9.773a5.5 5.5 0 0 1 .866-2.5H12.25a3.75 3.75 0 0 1-3.75-3.75V16.5h31v5.612q.408.062.806.156c.865.204 1.426.75 1.694 1.407V12.25A6.25 6.25 0 0 0 35.75 6zm17.725 38.975a3.5 3.5 0 0 1-4.95-4.95l5.412-5.411a8 8 0 0 1 9.41-10.4c.358.085.462.525.203.786l-.002.002-3.523 3.523a3.5 3.5 0 0 0 4.95 4.95l3.523-3.523c.261-.262.703-.158.788.202a8 8 0 0 1-10.4 9.41z"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v11.425c-.268-.657-.83-1.203-1.694-1.407a10 10 0 0 0-.806-.156V16.5h-31v19.25a3.75 3.75 0 0 0 3.75 3.75h10.639a5.5 5.5 0 0 0-.866 2.5H12.25A6.25 6.25 0 0 1 6 35.75zm33.5 0a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75V14h31zm.346 11.964c.359.085.463.525.204.786l-.002.002-3.523 3.523a3.5 3.5 0 0 0 4.95 4.95l3.523-3.523c.261-.262.703-.158.788.202a8 8 0 0 1-10.4 9.41l-5.411 5.41a3.5 3.5 0 0 1-4.95-4.949l5.412-5.411a8 8 0 0 1 9.41-10.4"/>`
} as const;

export default function WindowWrenchIcon({ 
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

  const gradientId = 'windowwrenchicon_gradient';
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