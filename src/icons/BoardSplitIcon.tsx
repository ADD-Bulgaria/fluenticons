import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.25 6A5.25 5.25 0 0 0 6 11.25V23h21V6zM27 25.5H6v11.25C6 39.65 8.35 42 11.25 42H27zM36.75 42H29.5V31.5H42v5.25c0 2.9-2.35 5.25-5.25 5.25M42 19.5V29H29.5v-9.5zm0-2.5H29.5V6h7.25C39.65 6 42 8.35 42 11.25z"/>`,
  'regular': `<path d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 0 1 6 36.75zM39.5 29v-9.5h-10V29zm-10 2.5v8h7.25a2.75 2.75 0 0 0 2.75-2.75V31.5zm-2.5-6H8.5v11.25a2.75 2.75 0 0 0 2.75 2.75H27zm0-2.5V8.5H11.25a2.75 2.75 0 0 0-2.75 2.75V23zm12.5-6v-5.75a2.75 2.75 0 0 0-2.75-2.75H29.5V17z"/>`
} as const;

export default function BoardSplitIcon({ 
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

  const gradientId = 'boardspliticon_gradient';
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