import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="M11 24.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clip-rule="evenodd"/><path fill-opacity=".8" fill-rule="evenodd" d="M11 24.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clip-rule="evenodd"/><path d="M27.122 15.239a3 3 0 0 1-.78 4.805l-17.279 8.64A3 3 0 0 1 5.6 28.12L3.88 26.4a3 3 0 0 1-.562-3.463l8.64-17.28a3 3 0 0 1 4.804-.779z"/><path fill-opacity=".8" d="M27.122 15.239a3 3 0 0 1-.78 4.805l-17.279 8.64A3 3 0 0 1 5.6 28.12L3.88 26.4a3 3 0 0 1-.562-3.463l8.64-17.28a3 3 0 0 1 4.804-.779z"/><path d="M20.724 5.988a1 1 0 0 1-.686-1.237l.827-2.884a1 1 0 0 1 1.923.552l-.827 2.884a1 1 0 0 1-1.237.685m7.983-2.695a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0M27 10.002a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2z"/>`,
  'filled': `<path d="M20.725 5.988a1 1 0 0 1-.686-1.237l.827-2.884a1 1 0 1 1 1.922.551l-.826 2.884a1 1 0 0 1-1.237.686m7.982-2.695a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m-7.114 19.125 4.75-2.375a3 3 0 0 0 .779-4.804l-10.36-10.36a3 3 0 0 0-4.805.78l-8.64 17.279A3 3 0 0 0 3.88 26.4l1.72 1.72a3 3 0 0 0 3.463.562l2.717-1.359a5.5 5.5 0 0 0 9.813-4.906m-1.798.899a3.5 3.5 0 0 1-6.218 3.109zM27 10.002a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M20.039 4.751a1 1 0 0 0 1.922.551l.827-2.884a1 1 0 1 0-1.922-.55zm8.668-1.458a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0M26 11.002a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1M11.956 5.659a3 3 0 0 1 4.805-.78l10.36 10.36a3 3 0 0 1-.78 4.804l-4.749 2.375a5.5 5.5 0 0 1-9.813 4.906l-2.717 1.359A3 3 0 0 1 5.6 28.12L3.88 26.4a3 3 0 0 1-.562-3.463zm1.62 20.767a3.5 3.5 0 0 0 6.218-3.109zm1.77-20.133a1 1 0 0 0-1.6.26l-8.64 17.279a1 1 0 0 0 .187 1.154l1.72 1.72a1 1 0 0 0 1.155.188l17.279-8.64a1 1 0 0 0 .26-1.601z"/>`
} as const;

export default function MegaphoneLoudIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'megaphoneloudicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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