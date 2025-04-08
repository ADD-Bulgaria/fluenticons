import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M17.784 10.708a8.4 8.4 0 0 1 1.504 2.085 1 1 0 0 1-1.78.91 6.4 6.4 0 0 0-1.138-1.58 6.128 6.128 0 0 0-9.8 1.562 1 1 0 0 1-1.784-.903 8.128 8.128 0 0 1 12.998-2.074M15.735 13.7c.46.46.838 1.024 1.102 1.624a1 1 0 0 1-1.832.803 3.4 3.4 0 0 0-.684-1.013 3.233 3.233 0 0 0-4.572 0 3.3 3.3 0 0 0-.672 1 1 1 0 1 1-1.832-.802 5.3 5.3 0 0 1 1.09-1.612 5.233 5.233 0 0 1 7.4 0m4.684-5.401c.508.508.987 1.087 1.404 1.691a1 1 0 0 1-1.646 1.136c-.35-.506-.751-.993-1.172-1.413-3.872-3.872-10.15-3.872-14.023 0-.399.399-.797.886-1.16 1.41a1 1 0 0 1-1.644-1.14c.428-.618.901-1.195 1.39-1.684 4.653-4.654 12.198-4.654 16.851 0m-7.357 8.142a1.501 1.501 0 1 1-2.123 2.123 1.501 1.501 0 0 1 2.123-2.123"/><path d="m16.161 12.83-3.997 7.998A1.5 1.5 0 0 0 13.507 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0"/><path d="M18.005 15.495v3.002a.5.5 0 0 1-1.001 0v-3.002a.5.5 0 0 1 1 0m-.5 5.504a.5.5 0 1 1-.001-1.001.5.5 0 0 1 0 1"/>`,
  'filled': `<path d="M17.784 10.708q.179.179.347.37a2.52 2.52 0 0 0-2.306.56 6.13 6.13 0 0 0-9.255 2.047 1 1 0 0 1-1.784-.903 8.128 8.128 0 0 1 12.998-2.074m-5.829 8.295 1.218-2.437a1.501 1.501 0 1 0-1.218 2.437m2.073-4.149.906-1.812a5.234 5.234 0 0 0-6.599.658 5.3 5.3 0 0 0-1.09 1.613 1 1 0 1 0 1.832.801c.167-.381.394-.722.672-1a3.233 3.233 0 0 1 4.28-.26M20.42 8.3c.508.508.987 1.087 1.404 1.691a1 1 0 0 1-1.646 1.136c-.35-.506-.751-.993-1.172-1.413-3.872-3.872-10.15-3.872-14.023 0-.399.399-.797.886-1.16 1.41a1 1 0 0 1-1.644-1.14c.428-.618.901-1.195 1.39-1.684 4.653-4.654 12.198-4.654 16.851 0m-4.262 4.531-3.997 7.998A1.5 1.5 0 0 0 13.503 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0M18 15.496v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1"/>`,
  'regular': `<path d="M17.745 10.75q.147.149.288.306a2.54 2.54 0 0 0-1.843.309 6.563 6.563 0 0 0-10 2.12.75.75 0 1 1-1.339-.678 8.062 8.062 0 0 1 12.893-2.057M11.956 19l1.216-2.434A1.5 1.5 0 1 0 11.957 19m2.23-4.462.677-1.357a5.094 5.094 0 0 0-6.422.638 5.1 5.1 0 0 0-1.061 1.57.75.75 0 0 0 1.374.602c.185-.422.437-.8.747-1.11a3.59 3.59 0 0 1 4.684-.343m6.26-6.26c.51.51.99 1.091 1.409 1.698a.75.75 0 1 1-1.235.852 11 11 0 0 0-1.234-1.489c-4.08-4.08-10.695-4.08-14.775 0-.422.422-.84.934-1.222 1.484a.75.75 0 0 1-1.233-.855c.43-.62.905-1.2 1.394-1.69 4.666-4.665 12.23-4.665 16.897 0m-4.29 4.552-3.997 7.998A1.5 1.5 0 0 0 13.503 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0M18 15.496v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1"/>`
} as const;

export default function WifiWarningIcon({ 
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

  const gradientId = 'wifiwarningicon_gradient';
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