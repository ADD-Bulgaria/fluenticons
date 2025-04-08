import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v1a2.25 2.25 0 0 1-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75v-1A7.25 7.25 0 0 1 13.25 2h.5a.75.75 0 0 1 0 1.5zm-2.75 6a3.25 3.25 0 0 1 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 9 9.5v1a3.25 3.25 0 0 1-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3a4.75 4.75 0 0 0 4.75-4.75zm3.75-.5a.75.75 0 0 0-.75.75v1a7.3 7.3 0 0 1-.253 1.904 1.9 1.9 0 0 0-1.584.041A5.7 5.7 0 0 0 12 10.75v-1a2.25 2.25 0 0 1 2.25-2.25h3a.75.75 0 0 1 0 1.5zm-1.396 9.162a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707l-1.147 1.147h5.586l-1.147-1.147a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707l1.147-1.146h-5.586z"/>`,
  'regular': `<path d="M13 3a6 6 0 0 0-6 6v1a2 2 0 0 1-2 2H2.5a.5.5 0 0 1 0-1H5a1 1 0 0 0 1-1V9a7 7 0 0 1 7-7h.5a.5.5 0 0 1 0 1zm-3 6.5A3.5 3.5 0 0 1 13.5 6h4a.5.5 0 0 0 0-1h-4A4.5 4.5 0 0 0 9 9.5v1A3.5 3.5 0 0 1 5.5 14h-3a.5.5 0 0 0 0 1h3a4.5 4.5 0 0 0 4.5-4.5zm3 .5c0-.6.4-1 1-1h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H14c-1.1 0-2 .9-2 2v1c0 .9-.2 1.7-.5 2.4.3-.2.6-.4 1-.4h.2c.2-.6.3-1.3.3-2zm-.146 8.162a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707l-1.147 1.147h5.586l-1.147-1.147a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707l1.147-1.146h-5.586z"/>`
} as const;

export default function StreamInputOutputIcon({ 
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

  const gradientId = 'streaminputoutputicon_gradient';
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