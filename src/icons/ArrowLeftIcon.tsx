import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44.25 24a1.5 1.5 0 0 1-1.5 1.5H10.915l12.387 12.18a1.5 1.5 0 1 1-2.104 2.14L6.201 25.072l-.02-.02a1.5 1.5 0 0 1 .042-2.145L21.198 8.18a1.5 1.5 0 1 1 2.104 2.14L10.915 22.5H42.75a1.5 1.5 0 0 1 1.5 1.5"/>`,
  'regular': `<path d="M44 24c0 .69-.56 1.25-1.25 1.25H10.304l12.822 12.609a1.25 1.25 0 1 1-1.752 1.782L6.386 24.903l-.027-.027a1.25 1.25 0 0 1-.352-1.008 1.25 1.25 0 0 1 .393-.785L21.374 8.359a1.25 1.25 0 1 1 1.752 1.782L10.304 22.75H42.75c.69 0 1.25.56 1.25 1.25"/>`
} as const;

export default function ArrowLeftIcon({ 
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

  const gradientId = 'arrowlefticon_gradient';
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