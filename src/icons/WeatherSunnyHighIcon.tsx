import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0v1.5a1.25 1.25 0 0 0 2.5 0zM24 10a8 8 0 1 0 0 16 8 8 0 0 0 0-16M4.29 43.55a1.25 1.25 0 0 0 1.76.16l.01-.007.05-.04q.07-.057.22-.17c.201-.15.507-.37.912-.636a28 28 0 0 1 3.574-1.972A31.4 31.4 0 0 1 24 38c5.56 0 10.069 1.443 13.185 2.885a28 28 0 0 1 3.574 1.972 19 19 0 0 1 1.132.806l.05.04.008.007a1.25 1.25 0 0 0 1.761-.16c.68-.881-.16-1.76-.16-1.76l-.003-.003-.03-.024-.038-.031-.036-.03q-.096-.076-.275-.21a21 21 0 0 0-1.035-.724 30 30 0 0 0-3.899-2.153A33.9 33.9 0 0 0 24 35.5a33.9 33.9 0 0 0-14.234 3.115c-1.685.78-3 1.561-3.899 2.153a21 21 0 0 0-1.31.935l-.075.06-.021.018-.007.006c-.43.356-.507 1.352-.164 1.764M24 28c.69 0 1.25.56 1.25 1.25v1.5a1.25 1.25 0 1 1-2.5 0v-1.5c0-.69.56-1.25 1.25-1.25M10 17.25c0-.69.56-1.25 1.25-1.25h1.5a1.25 1.25 0 1 1 0 2.5h-1.5c-.69 0-1.25-.56-1.25-1.25M35.25 16a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 1 0 0-2.5zm-19.616-4.366a1.25 1.25 0 0 1-1.768 0l-1.5-1.5a1.25 1.25 0 1 1 1.768-1.768l1.5 1.5a1.25 1.25 0 0 1 0 1.768m-1.768 12.732a1.25 1.25 0 0 1 1.768 1.768l-1.5 1.5a1.25 1.25 0 0 1-1.768-1.768zm18.5-12.732a1.25 1.25 0 0 0 1.768 0l1.5-1.5a1.25 1.25 0 1 0-1.768-1.768l-1.5 1.5a1.25 1.25 0 0 0 0 1.768m1.768 12.732a1.25 1.25 0 0 0-1.768 1.768l1.5 1.5a1.25 1.25 0 0 0 1.768-1.768z"/>`,
  'regular': `<path d="M24 4c.69 0 1.25.56 1.25 1.25v1.5a1.25 1.25 0 1 1-2.5 0v-1.5c0-.69.56-1.25 1.25-1.25m0 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-5.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6.75 11.25a1.25 1.25 0 1 0-2.5 0v1.5a1.25 1.25 0 0 0 2.5 0zM11.25 16a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 1 0 0-2.5zM34 17.25c0-.69.56-1.25 1.25-1.25h1.5a1.25 1.25 0 1 1 0 2.5h-1.5c-.69 0-1.25-.56-1.25-1.25m-20.134-5.616a1.25 1.25 0 0 0 1.768-1.768l-1.5-1.5a1.25 1.25 0 1 0-1.768 1.768zm1.768 12.732a1.25 1.25 0 0 0-1.768 0l-1.5 1.5a1.25 1.25 0 1 0 1.768 1.768l1.5-1.5a1.25 1.25 0 0 0 0-1.768m18.5-12.732a1.25 1.25 0 0 1-1.768-1.768l1.5-1.5a1.25 1.25 0 1 1 1.768 1.768zm-1.768 12.732a1.25 1.25 0 0 1 1.768 0l1.5 1.5a1.25 1.25 0 1 1-1.768 1.768l-1.5-1.5a1.25 1.25 0 0 1 0-1.768M6.05 43.71a1.25 1.25 0 0 1-1.76-.16c-.343-.411-.265-1.407.164-1.763l.007-.006.021-.018.076-.06q.096-.078.275-.212c.238-.178.584-.427 1.034-.723.9-.592 2.214-1.373 3.899-2.153A33.9 33.9 0 0 1 24 35.5a33.9 33.9 0 0 1 14.234 3.115c1.685.78 3 1.561 3.899 2.153a21 21 0 0 1 1.31.935l.075.06.029.024.003.002s.84.88.16 1.762c-.442.53-1.23.6-1.76.159l-.01-.007-.05-.04-.22-.17c-.2-.15-.506-.37-.911-.636a28 28 0 0 0-3.574-1.972A31.4 31.4 0 0 0 24 38a31.4 31.4 0 0 0-13.184 2.885 28 28 0 0 0-3.574 1.972 19 19 0 0 0-1.132.806l-.05.04z"/>`
} as const;

export default function WeatherSunnyHighIcon({ 
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

  const gradientId = 'weathersunnyhighicon_gradient';
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