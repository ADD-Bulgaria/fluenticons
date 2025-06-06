import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.39 1.39A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h8.75a7.47 7.47 0 0 1-1.5-4.5c0-1.544.467-2.98 1.267-4.172l.723.723a6.5 6.5 0 0 0 8.96 8.96l.77.77a.75.75 0 0 0 1.06-1.061zm18.994 21.115a4 4 0 0 1-2.575.334A4 4 0 0 1 17 21.686v.814a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.727a3 3 0 0 0 3.74 1.574zM7.182 4l9.219 9.219A7.47 7.47 0 0 1 20.5 12a7.48 7.48 0 0 1 5.5 2.4V7.75A3.75 3.75 0 0 0 22.25 4zM27 19.5a6.47 6.47 0 0 1-.944 3.375l-6.479-6.48.06-.018A3 3 0 0 1 23.227 18H22.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.814a4 4 0 0 0-5.192-1.688l-1.683-1.682A6.5 6.5 0 0 1 27 19.5"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.39 1.392A3.75 3.75 0 0 0 2.004 7.75v12.5A3.75 3.75 0 0 0 5.754 24H14.5a7.5 7.5 0 0 1-.876-1.5h-7.87a2.25 2.25 0 0 1-2.25-2.25V7.75c0-.862.485-1.61 1.197-1.989l10.289 10.29a6.5 6.5 0 0 0 8.96 8.96l.77.77a.75.75 0 0 0 1.06-1.061zm18.994 21.115a4 4 0 0 1-2.575.334A4 4 0 0 1 17 21.686v.814a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.727a3 3 0 0 0 3.74 1.574zM7.182 4l1.5 1.5H22.25a2.25 2.25 0 0 1 2.25 2.25v5.405c.554.35 1.058.769 1.5 1.247V7.75A3.75 3.75 0 0 0 22.25 4zM27 19.5a6.47 6.47 0 0 1-.944 3.375l-6.479-6.48.06-.018A3 3 0 0 1 23.227 18H22.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.814a4 4 0 0 0-5.192-1.688l-1.683-1.682A6.5 6.5 0 0 1 27 19.5"/>`
} as const;

export default function RectangleLandscapeSyncOffIcon({ 
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

  const gradientId = 'rectanglelandscapesyncofficon_gradient';
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