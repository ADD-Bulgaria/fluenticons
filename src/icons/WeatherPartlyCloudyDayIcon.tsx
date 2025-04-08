import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.996 15.998c6.337 0 9.932 4.194 10.454 9.26h.16c4.078 0 7.384 3.297 7.384 7.365s-3.306 7.365-7.384 7.365H15.38c-4.077 0-7.383-3.298-7.383-7.365s3.306-7.365 7.384-7.365h.16c.526-5.1 4.118-9.26 10.455-9.26M7.569 24.19a1.75 1.75 0 0 1-.499 2.3l-.142.09-1.299.75a1.75 1.75 0 0 1-1.892-2.94l.142-.09 1.3-.75a1.75 1.75 0 0 1 2.39.64m14.136-9.54c-3.801 1.22-6.509 4.091-7.62 7.922l-.094.34-.116.476-.412.077a9.3 9.3 0 0 0-3.342 1.43A7.883 7.883 0 0 1 21.705 14.65m-16.2-.671.132.055 1.36.634a1.75 1.75 0 0 1-1.347 3.227l-.132-.055-1.36-.634a1.75 1.75 0 0 1 1.347-3.227m19.11-5.763a1.75 1.75 0 0 1 .508 2.317l-.078.12-.86 1.23a1.75 1.75 0 0 1-2.945-1.887l.078-.121.86-1.229a1.75 1.75 0 0 1 2.438-.43m-10.291-.419.065.156.513 1.41a1.75 1.75 0 0 1-3.224 1.352l-.065-.156-.513-1.41a1.75 1.75 0 0 1 3.224-1.352"/>`,
  'regular': `<path d="M25.995 15.998c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.385 7.365H15.38c-4.077 0-7.383-3.297-7.383-7.365s3.306-7.365 7.384-7.365h.16c.526-5.099 4.118-9.26 10.455-9.26m0 2.495c-4.261 0-7.975 3.448-7.975 8.21 0 .755-.657 1.348-1.408 1.348h-1.42c-2.594 0-4.697 2.113-4.697 4.72 0 2.608 2.103 4.722 4.697 4.722h21.606c2.594 0 4.697-2.114 4.697-4.721s-2.103-4.722-4.697-4.722h-1.42c-.752 0-1.408-.592-1.408-1.346 0-4.824-3.714-8.21-7.975-8.21m-17.29 5.799a1.244 1.244 0 0 1-.559 1.57l-.115.055-2.311.961a1.243 1.243 0 0 1-1.067-2.243l.115-.055 2.311-.961a1.244 1.244 0 0 1 1.625.673m13-9.642-.062.02a11.8 11.8 0 0 0-2.57 1.19 5.5 5.5 0 0 0-6.826 7.95 9.3 9.3 0 0 0-2.127 1.086A7.883 7.883 0 0 1 21.704 14.65m-16.129.18.127.046 2.319.989c.63.266.932.995.675 1.629-.24.591-.883.89-1.48.71l-.126-.045-2.32-.989a1.26 1.26 0 0 1-.674-1.629c.24-.591.882-.89 1.479-.71m7.368-6.173.055.115.96 2.306a1.25 1.25 0 0 1-2.254 1.072l-.055-.115-.96-2.306a1.25 1.25 0 0 1 2.254-1.072m9.049-.56c.601.249.908.91.73 1.52l-.046.13-.992 2.276a1.264 1.264 0 0 1-2.38-.837l.046-.13.99-2.276a1.264 1.264 0 0 1 1.652-.683"/>`
} as const;

export default function WeatherPartlyCloudyDayIcon({ 
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

  const gradientId = 'weatherpartlycloudydayicon_gradient';
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