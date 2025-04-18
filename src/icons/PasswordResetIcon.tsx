import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 7A6.25 6.25 0 0 0 4 13.25v15.5A6.25 6.25 0 0 0 10.25 35h16.154l-3.452-3.452a3.25 3.25 0 0 1 0-4.596l3.116-3.116L25 22.768l-1.866 1.866a1.25 1.25 0 0 1-1.768-1.768L23.232 21l-1.866-1.866a1.25 1.25 0 0 1 1.768-1.768L25 19.232l1.866-1.866a1.25 1.25 0 0 1 1.768 1.768L26.768 21l1.244 1.244a3.25 3.25 0 0 1 4.005 1.3A1.25 1.25 0 0 1 33.25 22.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5c-.301 0-.578-.107-.794-.285.07.426.056.864-.043 1.285H37c2.66 0 5.098.944 7 2.514V13.25A6.25 6.25 0 0 0 37.75 7zm.116 10.366a1.25 1.25 0 0 1 1.768 0L14 19.232l1.866-1.866a1.25 1.25 0 0 1 1.768 1.768L15.768 21l1.866 1.866a1.25 1.25 0 0 1-1.768 1.768L14 22.768l-1.866 1.866a1.25 1.25 0 0 1-1.768-1.768L12.232 21l-1.866-1.866a1.25 1.25 0 0 1 0-1.768m19.768 8.768a1.25 1.25 0 0 0-1.768-1.768l-4 4a1.25 1.25 0 0 0 0 1.768l4 4a1.25 1.25 0 0 0 1.768-1.768L28.268 30.5H37a6.5 6.5 0 1 1-6.415 7.553 1.25 1.25 0 1 0-2.468.402C28.813 42.734 32.524 46 37 46a9 9 0 0 0 0-18h-8.732z"/>`,
  'regular': `<path d="M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v15.264a11 11 0 0 0-2.5-1.554V13.25a3.75 3.75 0 0 0-3.75-3.75h-27.5a3.75 3.75 0 0 0-3.75 3.75v15.5a3.75 3.75 0 0 0 3.75 3.75h13.654l2.5 2.5H10.25A6.25 6.25 0 0 1 4 28.75zM33.25 25c-.301 0-.578-.107-.794-.285a3.2 3.2 0 0 0-.44-1.171A1.25 1.25 0 0 1 33.25 22.5h4.5a1.25 1.25 0 1 1 0 2.5zm-6.482-4 1.244 1.244a3.2 3.2 0 0 0-1.06.708l-.884.884L25 22.768l-1.866 1.866a1.25 1.25 0 0 1-1.768-1.768L23.232 21l-1.866-1.866a1.25 1.25 0 0 1 1.768-1.768L25 19.232l1.866-1.866a1.25 1.25 0 0 1 1.768 1.768zm-16.402-3.634a1.25 1.25 0 0 1 1.768 0L14 19.232l1.866-1.866a1.25 1.25 0 0 1 1.768 1.768L15.768 21l1.866 1.866a1.25 1.25 0 0 1-1.768 1.768L14 22.768l-1.866 1.866a1.25 1.25 0 0 1-1.768-1.768L12.232 21l-1.866-1.866a1.25 1.25 0 0 1 0-1.768m19.768 8.768a1.25 1.25 0 0 0-1.768-1.768l-4 4a1.25 1.25 0 0 0 0 1.768l4 4a1.25 1.25 0 0 0 1.768-1.768L28.268 30.5H37a6.5 6.5 0 1 1-6.415 7.553 1.25 1.25 0 1 0-2.468.402C28.813 42.734 32.524 46 37 46a9 9 0 0 0 0-18h-8.732z"/>`
} as const;

export default function PasswordResetIcon({ 
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

  const gradientId = 'passwordreseticon_gradient';
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