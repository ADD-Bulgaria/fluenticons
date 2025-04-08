import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m25 18-5.5-1-5.5 1-1 3.5 1 3.5h7.25A3.75 3.75 0 0 0 25 21.25z"/><path d="m14 3-1 7.5 1 7.5h11V6.75A3.75 3.75 0 0 0 21.25 3z"/><path d="M14 25V11l-5.5-1L3 11v10.25A3.75 3.75 0 0 0 6.75 25z"/><path d="M14 3v8H3V6.75A3.75 3.75 0 0 1 6.75 3z"/>`,
  'filled': `<path d="M13.5 3v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3zM15 3v13.5h10V6.75A3.75 3.75 0 0 0 21.25 3zm10 15H15v7h6.25A3.75 3.75 0 0 0 25 21.25zm-11.5 7V11H3v10.25A3.75 3.75 0 0 0 6.75 25z"/>`,
  'regular': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h6.75v5h-9zm0 4.25h9v12.5H6.75a2.25 2.25 0 0 1-2.25-2.25zM15 23.5V18h8.5v3.25a2.25 2.25 0 0 1-2.25 2.25zm8.5-7H15v-12h6.25a2.25 2.25 0 0 1 2.25 2.25z"/>`
} as const;

export default function BoardIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'boardicon_gradient';
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