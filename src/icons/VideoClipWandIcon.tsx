import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1 5.25A3.25 3.25 0 0 1 4.25 2h13.5A3.25 3.25 0 0 1 21 5.25v7.714a2.25 2.25 0 0 1-.624-1.298l-.14-1.13a1.75 1.75 0 0 0-3.473 0l-.139 1.13a2.25 2.25 0 0 1-1.958 1.958l-1.13.14a1.75 1.75 0 0 0 0 3.473l.7.086q-.117.085-.223.19L11.525 20H4.25A3.25 3.25 0 0 1 1 16.75zm8.482 2.124A1 1 0 0 0 8 8.251v5.5a1 1 0 0 0 1.482.875l5-2.75a1 1 0 0 0 0-1.752zM15 18.043a.75.75 0 0 1 .78 1.237l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 .28-.177m4.383-6.255a3.25 3.25 0 0 0 2.829 2.829l1.13.139a.75.75 0 0 1 0 1.488l-1.13.14a3.25 3.25 0 0 0-2.829 2.828l-.139 1.13a.75.75 0 0 1-1.488 0l-.14-1.13a3.25 3.25 0 0 0-2.828-2.829l-1.13-.139a.75.75 0 0 1 0-1.488l1.13-.14q.107-.013.212-.033a3.25 3.25 0 0 0 2.617-2.795l.139-1.13a.75.75 0 0 1 1.488 0zM18.36 14a4.76 4.76 0 0 1-1.585 1.5 4.76 4.76 0 0 1 1.725 1.726 4.76 4.76 0 0 1 1.726-1.726 4.76 4.76 0 0 1-1.726-1.726 5 5 0 0 1-.14.226"/>`,
  'regular': `<path d="M4.25 2A3.25 3.25 0 0 0 1 5.25v11.5A3.25 3.25 0 0 0 4.25 20h7.275l1.5-1.5H4.25a1.75 1.75 0 0 1-1.75-1.75V5.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v4.064c.396.276.674.712.737 1.222l.139 1.13c.062.503.288.954.624 1.298V5.25A3.25 3.25 0 0 0 17.75 2zM19.5 12.338a3.25 3.25 0 0 0 2.712 2.279l1.13.139a.75.75 0 0 1 0 1.488l-1.13.14a3.25 3.25 0 0 0-2.829 2.828l-.139 1.13a.75.75 0 0 1-1.488 0l-.14-1.13a3.25 3.25 0 0 0-2.828-2.829l-1.13-.139a.75.75 0 0 1 0-1.488l1.13-.14a3.25 3.25 0 0 0 2.829-2.828l.139-1.13a.75.75 0 0 1 1.488 0l.14 1.13q.035.284.116.55M16.774 15.5a4.76 4.76 0 0 1 1.726 1.726 4.76 4.76 0 0 1 1.726-1.726 4.76 4.76 0 0 1-1.726-1.726 4.76 4.76 0 0 1-1.726 1.726m-2.054 2.72a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06zM8 13.75v-5.5a1 1 0 0 1 1.482-.876l5 2.75a1 1 0 0 1 0 1.753l-5 2.75A1 1 0 0 1 8 13.75"/>`
} as const;

export default function VideoClipWandIcon({ 
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

  const gradientId = 'videoclipwandicon_gradient';
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