import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m18.123 4.612 2.107 4.634q.62.124 1.204.273a.75.75 0 1 1-.368 1.454 25 25 0 0 0-1.498-.328c-4.554-.86-10.58-.86-15.133 0q-.786.148-1.5.328a.75.75 0 1 1-.369-1.454q.586-.148 1.207-.274l2.106-4.633A2.75 2.75 0 0 1 8.382 3h7.237a2.75 2.75 0 0 1 2.504 1.612M3.5 16.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4.5a4.5 4.5 0 1 0 4.389 5.5h2.223a4.502 4.502 0 0 0 8.888-1 4.5 4.5 0 0 0-8.972-.5h-2.056A4.5 4.5 0 0 0 6.5 12m8 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"/>`,
  'regular': `<path d="M8.379 4.5c-.49 0-.935.287-1.138.733L6.183 7.56a.75.75 0 1 1-1.366-.62l1.058-2.328A2.75 2.75 0 0 1 8.38 3h7.242a2.75 2.75 0 0 1 2.504 1.612l1.058 2.326a.75.75 0 0 1-1.366.621L16.76 5.233a1.25 1.25 0 0 0-1.138-.733zm-1.88 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-4.5 3a4.5 4.5 0 0 1 8.974-.5h2.054a4.5 4.5 0 1 1 .084 1.5h-2.223A4.502 4.502 0 0 1 2 16.5m15.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M2.935 10.973c5.13-1.297 13.003-1.297 18.132 0a.75.75 0 1 0 .368-1.454c-5.37-1.359-13.497-1.359-18.868 0a.75.75 0 1 0 .368 1.454"/>`
} as const;

export default function IncognitoIcon({ 
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

  const gradientId = 'incognitoicon_gradient';
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