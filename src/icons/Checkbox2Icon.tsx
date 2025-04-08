import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h10.007c.105-1.863 1.374-2.85 2.1-3.379a1.75 1.75 0 0 1-1.66-2.883c.855-.95 2.225-1.42 3.478-1.173.277.054.557.146.825.28V6.25A3.25 3.25 0 0 0 17.75 3zm12.81 15.347c-.7.506-1.695 1.236-1.8 2.653q-.01.121-.01.25c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5h-2.057c.195-.331.535-.604.997-.938l.086-.062.045-.032c.218-.156.472-.337.716-.557.504-.457.963-1.083.963-2.001 0-.634-.168-1.184-.505-1.609a2 2 0 0 0-.245-.26 2.15 2.15 0 0 0-1.018-.495c-.901-.177-1.917.167-2.54.86a.75.75 0 1 0 1.116 1.003c.277-.308.761-.464 1.135-.391a.6.6 0 0 1 .377.215c.085.107.18.308.18.677 0 .55-.352.831-1.19 1.437M17.28 9.28l-6.754 6.746a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216 6.223-6.217a.75.75 0 1 1 1.06 1.062"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h10.007a3.9 3.9 0 0 1 .386-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v7.25q.34 0 .675.065c.277.054.557.146.825.28V6.25A3.25 3.25 0 0 0 17.75 3zm11.558 16.5a2.86 2.86 0 0 0-.549 1.5q-.009.121-.009.25c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5h-2.057c.195-.331.535-.604.997-.938l.086-.062.045-.032c.218-.156.472-.337.716-.557.504-.457.963-1.083.963-2.001 0-.634-.168-1.184-.505-1.609a2 2 0 0 0-.245-.26 2.15 2.15 0 0 0-1.018-.495 2.5 2.5 0 0 0-.482-.046 2.82 2.82 0 0 0-2.058.907.75.75 0 1 0 1.116 1.002c.23-.257.607-.409.942-.409a1 1 0 0 1 .193.018.6.6 0 0 1 .377.215c.085.107.18.308.18.677 0 .448-.234.718-.774 1.13q-.183.14-.416.307c-.394.285-.882.642-1.252 1.152M17.28 9.28a.75.75 0 1 0-1.06-1.06l-6.223 6.216L7.78 12.22a.75.75 0 0 0-1.06 1.06l2.745 2.746a.75.75 0 0 0 1.06 0z"/>`
} as const;

export default function Checkbox2Icon({ 
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

  const gradientId = 'checkbox2icon_gradient';
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