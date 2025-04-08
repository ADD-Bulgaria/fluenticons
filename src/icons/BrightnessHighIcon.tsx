import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0v2.5a1.25 1.25 0 0 0 2.5 0zm8.771 18.796c0 5.509-4.466 9.975-9.975 9.975-5.51 0-9.975-4.466-9.975-9.975 0-5.51 4.466-9.976 9.975-9.976 5.51 0 9.975 4.466 9.975 9.976m-2.5 0a7.475 7.475 0 0 0-7.475-7.476H24v14.95h.046a7.475 7.475 0 0 0 7.475-7.474m12.48-.047c0 .69-.56 1.25-1.25 1.25h-2.5a1.25 1.25 0 0 1 0-2.5h2.5c.69 0 1.25.56 1.25 1.25M25.25 40.25a1.25 1.25 0 1 0-2.5 0v2.5a1.25 1.25 0 0 0 2.5 0zM9 24c0 .69-.56 1.25-1.25 1.25h-2.5a1.25 1.25 0 0 1 0-2.5h2.5c.69 0 1.25.56 1.25 1.25m2.133-14.633a1.25 1.25 0 1 0-1.767 1.767l2.5 2.5a1.25 1.25 0 0 0 1.767-1.767zM9.367 38.634a1.25 1.25 0 0 0 1.767 0l2.5-2.5a1.25 1.25 0 1 0-1.767-1.768l-2.5 2.5a1.25 1.25 0 0 0 0 1.768m27.5-29.268a1.25 1.25 0 1 1 1.767 1.767l-2.5 2.5a1.25 1.25 0 0 1-1.767-1.767zm1.767 29.268a1.25 1.25 0 0 1-1.767 0l-2.5-2.5a1.25 1.25 0 1 1 1.767-1.768l2.5 2.5a1.25 1.25 0 0 1 0 1.768"/>`,
  'regular': `<path d="M24 4c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m.046 30.02c5.51 0 9.975-4.465 9.975-9.975s-4.466-9.975-9.975-9.975c-5.51 0-9.975 4.466-9.975 9.976 0 5.509 4.466 9.975 9.975 9.975m0-2.5a7.475 7.475 0 1 1 0-14.95 7.475 7.475 0 0 1 0 14.95m18.704-6.27a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM24 39c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25M7.75 25.25a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 1 0 0 2.5zM9.367 9.365a1.25 1.25 0 0 1 1.767 0l2.5 2.5a1.25 1.25 0 1 1-1.767 1.767l-2.5-2.5a1.25 1.25 0 0 1 0-1.767m1.767 29.268a1.25 1.25 0 0 1-1.767-1.768l2.5-2.5a1.25 1.25 0 1 1 1.767 1.768zm27.5-29.268a1.25 1.25 0 0 0-1.767 0l-2.5 2.5a1.25 1.25 0 1 0 1.767 1.767l2.5-2.5a1.25 1.25 0 0 0 0-1.767m-1.767 29.268a1.25 1.25 0 0 0 1.767-1.768l-2.5-2.5a1.25 1.25 0 1 0-1.767 1.768z"/>`
} as const;

export default function BrightnessHighIcon({ 
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

  const gradientId = 'brightnesshighicon_gradient';
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