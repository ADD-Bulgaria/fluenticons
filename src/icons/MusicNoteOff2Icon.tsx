import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.5 9.56v6.067a3.5 3.5 0 1 0 1.496 2.702L10 18.25v-7.19l3.552 3.553a3.5 3.5 0 0 0 4.835 4.835l2.332 2.332a.75.75 0 0 0 1.061-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06zm8 3.44q-.155 0-.305.013l3.792 3.792a4 4 0 0 0 .009-.476L20 16.25V2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.45.371l4.1 4.1L18.5 7.758v5.87a3.5 3.5 0 0 0-2-.628"/>`,
  'regular': `<path d="M8.5 9.56v6.067a3.5 3.5 0 1 0 1.496 2.702L10 18.25v-7.19l3.552 3.553a3.5 3.5 0 0 0 4.835 4.835l2.332 2.332a.75.75 0 0 0 1.061-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06zm8.78 8.782a2 2 0 0 1-2.623-2.623zM6.5 16.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10-3.5q-.155 0-.305.013l3.792 3.792a4 4 0 0 0 .009-.476L20 16.25V2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.45.371L10 6.818v-.51l8.5-2.55v2.434l-7.02 2.106 1.204 1.205L18.5 7.758v5.87a3.5 3.5 0 0 0-2-.628"/>`
} as const;

export default function MusicNoteOff2Icon({ 
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

  const gradientId = 'musicnoteoff2icon_gradient';
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