import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.44 3.894a.7.7 0 0 1 .199.214h-.002a.7.7 0 0 1 .103.277.8.8 0 0 1-.01.288.8.8 0 0 1-.121.267l-2.36 3.304v3.26c0 .198-.08.39-.22.53a.74.74 0 0 1-.53.22.753.753 0 0 1-.75-.75v-3.26L8.389 4.94a.76.76 0 0 1-.132-.56.76.76 0 0 1 .867-.62.77.77 0 0 1 .489.305L11.5 6.712l1.89-2.646a.75.75 0 0 1 1.051-.172M3.5 3.753h2.25a2.5 2.5 0 0 1 1.768.733c.471.47.732 1.099.732 1.767a2.5 2.5 0 0 1-.732 1.768c-.473.472-1.1.732-1.768.732h-1.5v2.75c0 .198-.08.39-.22.53a.74.74 0 0 1-.53.22.753.753 0 0 1-.75-.75v-7a.755.755 0 0 1 .75-.75m.75 3.5h1.5a1 1 0 0 0-.001-2H4.25z"/>`,
  'regular': `<path d="M5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-3h1.75A2.25 2.25 0 0 0 8 6.25 2.25 2.25 0 0 0 5.75 4m0 3.5H4V5h1.75A1.25 1.25 0 0 1 7 6.25 1.25 1.25 0 0 1 5.75 7.5m8.657-2.71L12 8.16v3.34a.5.5 0 0 1-1 0V8.16L8.593 4.79a.5.5 0 0 1 .294-.78.5.5 0 0 1 .522.197L11.5 7.14l2.093-2.931a.5.5 0 1 1 .814.582"/>`
} as const;

export default function CodePyIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codepyicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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