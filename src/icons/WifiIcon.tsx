import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M17.784 10.708a8.4 8.4 0 0 1 1.504 2.085 1 1 0 0 1-1.78.91 6.4 6.4 0 0 0-1.138-1.58 6.128 6.128 0 0 0-9.8 1.562 1 1 0 0 1-1.784-.903 8.128 8.128 0 0 1 12.998-2.074M15.735 13.7c.46.46.838 1.024 1.102 1.624a1 1 0 0 1-1.832.803 3.4 3.4 0 0 0-.684-1.013 3.233 3.233 0 0 0-4.572 0 3.3 3.3 0 0 0-.672 1 1 1 0 1 1-1.832-.802 5.3 5.3 0 0 1 1.09-1.612 5.233 5.233 0 0 1 7.4 0m4.684-5.401c.508.508.987 1.087 1.404 1.691a1 1 0 0 1-1.646 1.136c-.35-.506-.751-.993-1.172-1.413-3.872-3.872-10.15-3.872-14.023 0-.399.399-.797.886-1.16 1.41a1 1 0 0 1-1.644-1.14c.428-.618.901-1.195 1.39-1.684 4.653-4.654 12.198-4.654 16.851 0m-7.357 8.142a1.501 1.501 0 1 1-2.123 2.123 1.501 1.501 0 0 1 2.123-2.123"/>`
} as const;

export default function WifiIcon({ 
  variant = 'color',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['color'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'wifiicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['color'] || '' }} />
    </svg>
  );
}