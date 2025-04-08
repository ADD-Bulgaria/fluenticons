import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.621 10.62a3 3 0 0 1 0-4.242L6.88 3.121a3 3 0 0 1 4.242 0l3.667 3.666q-.069.106-.123.22A1.75 1.75 0 0 0 12 8.5v4.528a4 4 0 0 0-.5-.031c-.665 0-1.246.165-1.694.391a2.9 2.9 0 0 0-.753.542 2 2 0 0 0-.232.286 1.86 1.86 0 0 0-.3 1.306zM17 7.75v5.75a.5.5 0 0 0 1 0v-5a.75.75 0 0 1 1.5 0v5.497a.5.5 0 1 0 1 0V9.75a.75.75 0 0 1 1.5 0v7c0 .623-.274 1.385-.56 2.036a21 21 0 0 1-.977 1.902A2.64 2.64 0 0 1 18.158 22h-1.139a2.75 2.75 0 0 1-2.225-1.135l-1.377-1.897-1.658-1.891-1.907-1.192a.75.75 0 0 1-.352-.636.86.86 0 0 1 .15-.476c.06-.087.127-.157.185-.21.119-.109.264-.204.42-.283.318-.16.745-.284 1.245-.284.53 0 1.07.153 1.503.316L13 14.25V8.5a.75.75 0 0 1 1.5 0v5a.5.5 0 0 0 1 0V7.75a.75.75 0 0 1 1.5 0M4.251 14a.75.75 0 0 1 .75.75v.747h.746a.75.75 0 0 1 0 1.5H5v.756a.75.75 0 0 1-1.5 0v-.756h-.75a.75.75 0 0 1 0-1.5h.751v-.748a.75.75 0 0 1 .75-.75m4.75 4.25a.75.75 0 0 0-1.5 0v.747H6.75a.75.75 0 0 0 0 1.5h.751v.756a.75.75 0 1 0 1.5 0v-.756h.746a.75.75 0 0 0 0-1.5H9z"/>`,
  'regular': `<path d="M7.94 4.182 4.681 7.439a1.5 1.5 0 0 0 0 2.121l3.924 3.924a3.5 3.5 0 0 0-.577 1.544L3.62 10.621a3 3 0 0 1 0-4.243l3.26-3.257a3 3 0 0 1 4.242 0l3.446 3.445q-.113.087-.214.185l-.103-.001c-.497 0-.934.117-1.305.316l-2.884-2.884a1.5 1.5 0 0 0-2.122 0m6.825 3.64a1.8 1.8 0 0 0-.515-.072c-1.096 0-1.746.9-1.746 1.75v3.672A3 3 0 0 0 11.496 13C10.099 13 9 14.031 9 15.5c0 .242.117.469.313.61l1.718 1.229.954.832a11.3 11.3 0 0 1 1.71 1.87l.6.824A2.75 2.75 0 0 0 16.52 22h1.638c.931 0 1.824-.474 2.305-1.312.302-.526.676-1.217.977-1.902.286-.65.56-1.413.56-2.037v-6C22 9.896 21.342 9 20.25 9q-.164 0-.317.027c-.192-.682-.792-1.276-1.683-1.276q-.274 0-.514.072A1.7 1.7 0 0 0 16.25 7a1.7 1.7 0 0 0-1.485.822m1.666.748a.27.27 0 0 1 .069.178v4.501a.75.75 0 0 0 1.5 0v-3.8a.22.22 0 0 1 .058-.123.25.25 0 0 1 .192-.075c.095 0 .147.033.18.07.043.046.07.114.07.18v4.25a.75.75 0 0 0 1.5 0v-3c0-.066.026-.133.07-.18.034-.038.086-.07.18-.07s.146.032.18.07c.044.047.07.114.07.18v6c0 .28-.149.785-.433 1.433-.27.615-.615 1.254-.905 1.758a1.14 1.14 0 0 1-1.004.559H16.52c-.4 0-.776-.192-1.011-.516l-.598-.824a12.8 12.8 0 0 0-1.939-2.12l-.982-.856-.056-.044-1.383-.99c.124-.409.476-.65.946-.65.637 0 1.09.4 1.242.534l.03.027a.75.75 0 0 0 1.236-.572V9.5c0-.067.027-.135.07-.18.032-.037.082-.07.176-.07.095 0 .147.034.18.07.043.046.07.114.07.18v3.75a.75.75 0 0 0 1.5 0V8.749a.27.27 0 0 1 .07-.178c.034-.038.086-.07.18-.07s.146.032.18.07M4.25 14a.75.75 0 0 1 .75.75v.747h.746a.75.75 0 0 1 0 1.5H5v.756a.75.75 0 0 1-1.5 0v-.756h-.75a.75.75 0 0 1 0-1.5h.751v-.748a.75.75 0 0 1 .75-.75m4 3.5a.75.75 0 0 1 .75.75v.747h.746a.75.75 0 0 1 0 1.5H9v.756a.75.75 0 0 1-1.5 0v-.756h-.75a.75.75 0 0 1 0-1.5h.751v-.747a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function SanitizeIcon({ 
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

  const gradientId = 'sanitizeicon_gradient';
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