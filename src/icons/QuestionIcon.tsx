import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 5c-5.547 0-10 4.51-10 10.25a1.5 1.5 0 0 0 3 0C17 11.11 20.167 8 24 8s7 3.11 7 7.25c0 1.836-.446 2.85-1.022 3.607-.476.626-1.023 1.083-1.732 1.676-.299.25-.626.522-.988.842-1.155 1.019-2.385 2.311-3.301 4.376-.906 2.043-1.457 4.733-1.457 8.499v.25a1.5 1.5 0 0 0 3 0v-.25c0-3.484.511-5.731 1.2-7.282.677-1.53 1.572-2.487 2.542-3.343.215-.19.453-.389.704-.597.798-.667 1.722-1.437 2.42-2.354C33.382 19.337 34 17.664 34 15.25 34 9.51 29.547 5 24 5m0 37a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"/>`,
  'regular': `<path d="M24 5.5c-5.52 0-10 4.48-10 10a1.25 1.25 0 1 0 2.5 0c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5c0 1.875-.47 2.94-1.101 3.745-.51.65-1.105 1.134-1.848 1.736-.304.247-.632.514-.99.82-1.17 1.003-2.408 2.267-3.33 4.29-.916 2.004-1.481 4.662-1.481 8.409v.25a1.25 1.25 0 1 0 2.5 0v-.25c0-3.503.529-5.783 1.254-7.372.718-1.57 1.667-2.557 2.685-3.429.232-.2.485-.405.748-.618.818-.663 1.732-1.404 2.43-2.294C33.377 19.497 34 17.875 34 15.5c0-5.52-4.48-10-10-10M24 42a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`
} as const;

export default function QuestionIcon({ 
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

  const gradientId = 'questionicon_gradient';
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