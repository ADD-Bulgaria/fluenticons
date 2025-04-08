import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M41.56 26.13a1.25 1.25 0 0 0 1.57.81c.65-.21 1.02-.91.81-1.57l-.001-.003C43.85 25.1 38.841 10 23.999 10 9.16 10 4.15 25.1 4.062 25.368l-.001.002c-.21.66.15 1.36.81 1.57s1.36-.15 1.57-.81C6.62 25.57 10.95 12.5 24 12.5s17.38 13.07 17.56 13.63M24 36a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/>`,
  'regular': `<path d="M41.56 26.13a1.25 1.25 0 0 0 1.57.81c.65-.21 1.02-.91.81-1.57l-.001-.003C43.85 25.1 38.841 10 23.999 10 9.16 10 4.15 25.1 4.062 25.368l-.001.002c-.21.66.15 1.36.81 1.57s1.36-.15 1.57-.81C6.62 25.57 10.95 12.5 24 12.5s17.38 13.07 17.56 13.63M17.5 27a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0m6.5-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18"/>`
} as const;

export default function EyeIcon({ 
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

  const gradientId = 'eyeicon_gradient';
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