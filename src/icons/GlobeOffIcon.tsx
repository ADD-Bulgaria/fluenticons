import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M42.11 32.5a20 20 0 0 1-1.857 3.157L37.096 32.5zm-4.88 6.499 4.636 4.635a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l4.635 4.635A20 20 0 0 0 5.664 16h8.568l2.576 2.576A47 47 0 0 0 16.5 24c0 2.098.134 4.111.38 6h11.352l4.593 4.593c-.86 3.62-2.148 6.65-3.712 8.747a19.95 19.95 0 0 0 8.118-4.342m-3.492-9.858.858.859h8.488a20 20 0 0 0 .916-6 20 20 0 0 0-.766-5.5H33.7c.197 1.76.301 3.603.301 5.5 0 1.769-.09 3.49-.262 5.141M23.096 18.5l8.322 8.322a48.3 48.3 0 0 0-.235-8.322zm-5.294-5.294L20.596 16h10.216c-.476-2.64-1.175-4.981-2.026-6.895-.82-1.844-1.731-3.183-2.617-4.026C25.296 4.25 24.567 4 24 4s-1.296.248-2.169 1.08c-.886.842-1.798 2.18-2.617 4.025a27 27 0 0 0-1.412 4.1m-5.459-5.46 3.437 3.437c.815-2.642 1.876-4.872 3.107-6.523a19.9 19.9 0 0 0-6.544 3.087M30.718 32.5c-.471 2.437-1.135 4.603-1.931 6.395-.82 1.844-1.732 3.183-2.618 4.026C25.296 43.75 24.567 44 24 44s-1.296-.248-2.169-1.08c-.886-.842-1.798-2.18-2.617-4.025-.797-1.792-1.46-3.958-1.932-6.395zM14.36 30a49 49 0 0 1-.36-6c0-1.897.104-3.74.3-5.5H4.767A20 20 0 0 0 4 24c0 2.09.32 4.106.916 6zm-8.47 2.5c2.49 5.295 7.235 9.321 12.997 10.84-1.856-2.49-3.324-6.293-4.149-10.84zM33.35 16h8.986c-2.421-5.541-7.281-9.774-13.223-11.34 1.924 2.58 3.43 6.572 4.236 11.34"/>`,
  'regular': `<path d="M44 24c0 4.35-1.389 8.375-3.747 11.657L34.596 30h5.848a17.5 17.5 0 0 0 1.056-6c0-1.921-.31-3.77-.882-5.5h-7A39 39 0 0 1 34 24c0 1.755-.113 3.457-.325 5.078L31.396 26.8q.103-1.365.104-2.8a36 36 0 0 0-.41-5.5h-7.994l-2.5-2.5h10.008c-.453-1.905-1.058-3.602-1.769-5.024C27.158 7.622 25.305 6.5 24 6.5c-1.304 0-3.158 1.122-4.835 4.476-.385.77-.738 1.62-1.054 2.539l-1.945-1.946c.637-1.604 1.395-3.009 2.246-4.158a17.4 17.4 0 0 0-4.274 2.13l-1.795-1.794A19.9 19.9 0 0 1 24 4c11.046 0 20 8.954 20 20m-4.431-8a17.55 17.55 0 0 0-9.981-8.589c1.565 2.114 2.816 5.09 3.58 8.589zM9 10.77A19.92 19.92 0 0 0 4 24c0 11.046 8.954 20 20 20 5.073 0 9.705-1.889 13.23-5.001l4.636 4.635a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768zM14.232 16h-5.8a17.5 17.5 0 0 1 2.341-3.46zM35.46 37.227a17.5 17.5 0 0 1-5.871 3.362c1.204-1.626 2.223-3.764 2.976-6.257L34 35.768V36l.213-.02zM16.5 24c0-1.873.137-3.667.387-5.346L28.232 30H16.991a36 36 0 0 1-.491-6m12.335 13.024C27.158 40.378 25.305 41.5 24 41.5c-1.304 0-3.158-1.122-4.835-4.476-.648-1.296-1.208-2.822-1.645-4.524h12.96c-.437 1.702-.997 3.228-1.645 4.524M14 24c0 2.09.16 4.106.458 6H7.556A17.5 17.5 0 0 1 6.5 24c0-1.921.31-3.77.882-5.5h7A39 39 0 0 0 14 24m4.412 16.589A17.55 17.55 0 0 1 8.7 32.5h6.246c.772 3.282 1.977 6.077 3.467 8.089"/>`
} as const;

export default function GlobeOffIcon({ 
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

  const gradientId = 'globeofficon_gradient';
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