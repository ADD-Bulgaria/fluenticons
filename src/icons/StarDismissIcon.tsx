import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.701 3.908c.532-1.078 2.069-1.078 2.6 0l2.692 5.452 6.017.875c1.19.173 1.664 1.634.804 2.473l-1.06 1.033a7.5 7.5 0 0 0-10.587 8.342l-4.547 2.39c-1.064.56-2.307-.343-2.104-1.528l1.028-5.993-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.707l2.647 2.646-2.647 2.647a.5.5 0 0 0 .708.707l2.646-2.646 2.646 2.646a.5.5 0 0 0 .708-.707L21.207 20.5l2.647-2.647a.5.5 0 0 0-.708-.707L20.5 19.792z"/>`,
  'regular': `<path d="M12.701 3.908c.532-1.078 2.069-1.078 2.6 0l2.692 5.452 6.017.875c1.19.173 1.664 1.634.804 2.473l-1.06 1.033a7.4 7.4 0 0 0-1.58-.554l1.52-1.482-5.943-.864a1.45 1.45 0 0 1-1.092-.793l-2.657-5.385-2.658 5.385a1.45 1.45 0 0 1-1.092.793l-5.943.864 4.3 4.191c.342.334.498.813.417 1.284l-1.015 5.919L13 20.476v.024q.002.816.167 1.583l-4.547 2.39c-1.064.56-2.307-.343-2.104-1.528l1.028-5.993-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.707l2.647 2.646-2.647 2.647a.5.5 0 0 0 .708.707l2.646-2.646 2.646 2.646a.5.5 0 0 0 .708-.707L21.207 20.5l2.647-2.647a.5.5 0 0 0-.708-.707L20.5 19.792z"/>`
} as const;

export default function StarDismissIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'stardismissicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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