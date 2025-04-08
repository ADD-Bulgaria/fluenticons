import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.619 2.211a1 1 0 0 0-1.24 0l-3.307 2.61c-.805.635-.707 1.743-.058 2.314L4.55 8.342c-.963.794-.573 2.271.51 2.594l-1.586 1.486c-.986.923-.332 2.577 1.019 2.577h3.505v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.504c1.351 0 2.005-1.655 1.018-2.578l-1.587-1.484c1.086-.32 1.478-1.8.513-2.595l-1.462-1.206c.65-.571.747-1.68-.057-2.314zM8.997 15h2v1.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25z"/>`,
  'regular': `<path d="M10.619 2.211a1 1 0 0 0-1.24 0l-3.307 2.61c-.805.635-.707 1.743-.058 2.314L4.55 8.342c-.963.794-.573 2.271.51 2.594l-1.586 1.486c-.986.923-.332 2.577 1.019 2.577h3.505v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.504c1.351 0 2.005-1.655 1.018-2.578l-1.587-1.484c1.086-.32 1.478-1.8.513-2.595l-1.462-1.206c.65-.571.747-1.68-.057-2.314zM10.999 15v1.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V15zm-1-12.003 3.308 2.61a.5.5 0 0 1-.291.893.5.5 0 0 0-.303.885l2.097 1.73a.5.5 0 0 1-.318.885h-.758a.5.5 0 0 0-.342.865l2.445 2.287a.49.49 0 0 1-.335.848H4.493a.49.49 0 0 1-.335-.848l2.441-2.287A.5.5 0 0 0 6.258 10h-.754a.5.5 0 0 1-.318-.886l2.098-1.729a.5.5 0 0 0-.302-.885.5.5 0 0 1-.29-.892z"/>`
} as const;

export default function TreeEvergreenIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'treeevergreenicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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