import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.003 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-22a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h11v2H3a1 1 0 0 1-1-1m21.25-8c.828 0 1.571.366 2.076.946A1 1 0 0 0 25 13H3a1 1 0 1 0 0 2h14.629c.504-.61 1.267-1 2.121-1zM18 16.75V18h-1.25A1.75 1.75 0 0 0 15 19.75v6.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 28 26.25v-6.5A1.75 1.75 0 0 0 26.25 18H25v-1.25A1.75 1.75 0 0 0 23.25 15h-3.5A1.75 1.75 0 0 0 18 16.75m1.75-.25h3.5a.25.25 0 0 1 .25.25V18h-4v-1.25a.25.25 0 0 1 .25-.25"/>`,
  'regular': `<path d="M2 5.75A.75.75 0 0 1 2.75 5h22.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m0 16a.75.75 0 0 1 .75-.75H14v1.5H2.75a.75.75 0 0 1-.75-.75M23.25 14c.589 0 1.134.185 1.581.5h.419a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5h15.419c.447-.315.992-.5 1.581-.5zM18 16.75c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75V18h1.25c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 26.25 28h-9.5A1.75 1.75 0 0 1 15 26.25v-6.5c0-.966.784-1.75 1.75-1.75H18zm1.75-.25a.25.25 0 0 0-.25.25V18h4v-1.25a.25.25 0 0 0-.25-.25z"/>`
} as const;

export default function NavigationBriefcaseIcon({ 
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

  const gradientId = 'navigationbriefcaseicon_gradient';
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