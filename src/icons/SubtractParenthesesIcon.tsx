import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.433 10.682a1.5 1.5 0 1 0-1.866-2.349C6.959 11.995 4 17.653 4 24c0 6.348 2.959 12.005 7.567 15.667a1.5 1.5 0 1 0 1.866-2.349C9.511 34.201 7 29.394 7 24s2.51-10.2 6.433-13.318m23-2.349a1.5 1.5 0 0 0-1.866 2.35C38.489 13.798 41 18.605 41 24s-2.51 10.201-6.433 13.318a1.5 1.5 0 1 0 1.866 2.349C41.041 36.005 44 30.347 44 24c0-6.348-2.959-12.005-7.567-15.667M15.5 22.5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3z"/>`,
  'regular': `<path d="M13.499 10a1.25 1.25 0 1 0-1.502-2C7.143 11.648 4 17.458 4 24s3.143 12.353 7.997 16a1.25 1.25 0 1 0 1.502-2C9.247 34.807 6.5 29.725 6.5 24s2.747-10.806 6.999-14m22.504-2a1.25 1.25 0 1 0-1.502 2c4.252 3.194 6.999 8.276 6.999 14s-2.747 10.806-6.999 14a1.25 1.25 0 0 0 1.502 2C40.856 36.352 44 30.542 44 24s-3.144-12.353-7.997-16M15.25 22.75a1.25 1.25 0 0 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function SubtractParenthesesIcon({ 
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

  const gradientId = 'subtractparenthesesicon_gradient';
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