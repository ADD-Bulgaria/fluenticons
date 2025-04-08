import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 11.5a1 1 0 1 0-2 0v.086l-3.043-3.043a1 1 0 1 0-1.414 1.414L18.586 13H18.5a1 1 0 1 0 0 2H21a1 1 0 0 0 1-1zm-5.596-8.072a1 1 0 0 0-1.332-1.332l-9.5 4.5a1 1 0 1 0 .856 1.808l2.417-1.145 2.396 2.396-1.145 2.417a1 1 0 1 0 1.808.856zM12.15 7.736 10.764 6.35l2.634-1.248zM15 18.5a1 1 0 1 0-2 0v.086L3.707 9.293a1 1 0 0 0-1.414 1.414L11.586 20H11.5a1 1 0 1 0 0 2H14a1 1 0 0 0 1-1z"/>`,
  'regular': `<path d="M21.25 10.5a.75.75 0 0 0-.75.75v1.19l-4.22-4.22a.75.75 0 1 0-1.06 1.06l4.22 4.22h-1.19a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75m-5.322-7.429a.75.75 0 0 0-1-.999l-9.498 4.5a.75.75 0 1 0 .642 1.356l2.575-1.22 2.645 2.645-1.22 2.576a.75.75 0 0 0 1.356.642zm-3.954 4.843-1.887-1.888 3.586-1.699zM15 18.25a.75.75 0 0 0-1.5 0v1.19L3.28 9.22a.75.75 0 1 0-1.06 1.06L12.44 20.5h-1.19a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75z"/>`
} as const;

export default function TextDirectionRotate45RightIcon({ 
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

  const gradientId = 'textdirectionrotate45righticon_gradient';
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